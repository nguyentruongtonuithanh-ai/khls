# 📂 Hướng Dẫn Tích Hợp & Kết Nối Google Drive (Miễn Phí 100%)
## Kho Học Liệu Số - Trường Tiểu Học Núi Thành

---

## 🎯 1. Tại Sao Nên Dùng Google Drive Cho Kho Học Liệu Số?
1. **Tiết kiệm 100% chi phí**: Không phải mua dung lượng lưu trữ đám mây đắt đỏ (AWS, Cloudflare R2 hay máy chủ riêng).
2. **Dung lượng lớn**: Mỗi tài khoản Google cá nhân có sẵn 15GB miễn phí. Nếu trường có Google Workspace for Education (tên miền `@quangnam.edu.vn`), dung lượng lưu trữ chung cực lớn.
3. **Quen thuộc & bảo mật**: Toàn bộ giáo viên đều đã quen sử dụng Google Drive để lưu giáo án và slide bài giảng.
4. **Xem trực tuyến không giới hạn**: Trình nhúng Google Drive Preview hỗ trợ xem mượt mà mọi định dạng: Word (`.docx`), PowerPoint (`.pptx`), PDF, Excel (`.xlsx`), Video (`.mp4`).

---

## 🚀 2. Cách 1: Sử Dụng Liên Kết Google Drive Trực Tiếp (Dùng Ngay)

Hệ thống Kho Học Liệu Số hiện tại đã được nâng cấp để **tự động nhận diện và xử lý mọi đường link Google Drive**.

### Các bước thực hiện dành cho Giáo viên:
1. Giáo viên tải bài giảng, kế hoạch bài dạy hoặc đề thi lên Google Drive của mình.
2. Nhấp chuột phải vào file trên Google Drive ➔ Chọn **Chia sẻ** (Share) ➔ Chọn **Chia sẻ**.
3. Tại mục **Quyền truy cập chung**, chuyển thành:  
   👉 **Bất kỳ ai có đường liên kết** (Chế độ: *Người xem*).
4. Nhấn **Sao chép đường liên kết** (Copy link).  
   *(Ví dụ link: `https://drive.google.com/file/d/1aB2c.../view?usp=sharing`)*
5. Mở website Kho Học Liệu Số ➔ Nhấn **Đóng góp học liệu**.
6. Dán link vừa sao chép vào ô:  
   👉 **"📁 Liên kết Google Drive / Trực tuyến"**.
7. Điền tiêu đề, chọn khối lớp, môn học rồi nhấn **Gửi tài liệu để duyệt**.

### Kết quả trên hệ thống:
- Khi người dùng nhấn **👁️ Xem trực tuyến**: Hệ thống tự động mở trình phát trực tuyến của Google Drive ngay trong website mà không chiếm dụng bộ nhớ của máy chủ hay trình duyệt.
- Khi người dùng nhấn **⬇️ Tải về**: Hệ thống tự động tải file gốc từ Google Drive về máy tính với tốc độ cao.

---

## ⚡ 3. Tự Động Gom File Lên Google Drive Quản Trị (nguyentruongtonuithanh@gmail.com)

Hệ thống đã tích hợp tính năng **Đóng góp học liệu trực tiếp vào Google Drive Quản trị trường**:
- **Đối với Thầy/Cô giáo**: Không cần cấu hình bất cứ thứ gì! Chỉ cần nhấn **"Đóng góp học liệu"** ➔ Chọn tệp bài giảng, giáo án từ máy tính ➔ Nhấn **"Tải lên"**.
- **Hệ thống tự động**: Chuyển toàn bộ file đóng góp từ mọi thầy cô về lưu trữ tập trung tại tài khoản Google Drive Quản trị: **`nguyentruongtonuithanh@gmail.com`**.
- File được tạo link xem trực tuyến tự động, phân loại theo môn học, khối lớp và đưa vào danh sách kiểm duyệt.

---

### 🛠️ Hướng Dẫn Dành Riêng Cho Quản Trị Viên (Làm 1 lần duy nhất trong 2 phút):
*Chỉ tài khoản Quản trị `nguyentruongtonuithanh@gmail.com` thực hiện bước này để kích hoạt luồng nhận file.*

#### Bước 1: Sao chép mã Google Apps Script bên dưới

```javascript
// ============================================================
// GOOGLE APPS SCRIPT: TỰ ĐỘNG LƯU HỌC LIỆU VÀO GOOGLE DRIVE QUẢN TRỊ
// Tài khoản Quản trị: nguyentruongtonuithanh@gmail.com
// Trường Tiểu Học Núi Thành
// ============================================================

// Tùy chọn: Nhập ID Thư mục Google Drive muốn gom file (hoặc để trống để lưu vào Drive gốc)
var DEFAULT_FOLDER_ID = "";

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return responseJSON({ status: "error", message: "Không nhận được dữ liệu tải lên" });
    }
    
    var data = JSON.parse(e.postData.contents);
    var folder;
    var targetFolderId = data.folderId || DEFAULT_FOLDER_ID;
    
    if (targetFolderId && targetFolderId.trim() !== "" && targetFolderId !== "root") {
      try {
        folder = DriveApp.getFolderById(targetFolderId.trim());
      } catch (fErr) {
        folder = DriveApp.getRootFolder();
      }
    } else {
      folder = DriveApp.getRootFolder();
    }
    
    var fileName = data.fileName || ("HocLieu_" + new Date().getTime());
    var contentType = data.fileType || "application/octet-stream";
    var base64Data = data.base64Data;
    
    if (!base64Data) {
      return responseJSON({ status: "error", message: "Thiếu dữ liệu tệp tin base64Data" });
    }
    
    var bytes = Utilities.base64Decode(base64Data);
    var blob = Utilities.newBlob(bytes, contentType, fileName);
    var file = folder.createFile(blob);
    
    var fileDesc = "Người đóng góp: " + (data.author || "Giáo viên") + "\n";
    if (data.description) fileDesc += "Mô tả: " + data.description;
    file.setDescription(fileDesc);
    
    // Cấp quyền xem công khai (Ai có link đều xem và tải được trên Kho học liệu)
    try {
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    } catch(shareErr) {}
    
    var fileId = file.getId();
    var viewUrl = "https://drive.google.com/file/d/" + fileId + "/view?usp=sharing";
    var previewUrl = "https://drive.google.com/file/d/" + fileId + "/preview";
    var downloadUrl = "https://drive.google.com/uc?export=download&id=" + fileId;
    
    return responseJSON({
      status: "success",
      fileId: fileId,
      fileUrl: viewUrl,
      previewUrl: previewUrl,
      downloadUrl: downloadUrl,
      fileName: fileName,
      folderName: folder.getName(),
      createdAt: new Date().toISOString()
    });
    
  } catch (err) {
    return responseJSON({ status: "error", message: err.toString() });
  }
}

function doGet(e) {
  return responseJSON({
    status: "success",
    message: "Google Apps Script Drive Uploader (nguyentruongtonuithanh@gmail.com) đang hoạt động bình thường!",
    admin: "nguyentruongtonuithanh@gmail.com",
    time: new Date().toISOString()
  });
}

function responseJSON(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
```

#### Bước 2: Triển Khai Trên Tài Khoản `nguyentruongtonuithanh@gmail.com`
1. Đăng nhập tài khoản Google **`nguyentruongtonuithanh@gmail.com`**.
2. Truy cập [script.google.com](https://script.google.com).
3. Bấm **Dự án mới (New Project)**.
4. Xóa hết mã cũ và dán toàn bộ đoạn mã trên vào file `Code.gs`.
5. Đặt tên dự án (góc trên trái): `Kho Hoc Lieu So - Drive Uploader`.
6. Nhấn nút **Triển khai (Deploy)** ở góc trên bên phải ➔ Chọn **Quản lý triển khai mới (New deployment)**.
7. Bấm vào biểu tượng bánh răng ⚙️ ➔ Chọn **Ứng dụng web (Web app)**.
8. Điền cấu hình:
   - **Mô tả**: `Drive Uploader Núi Thành`
   - **Thực thi dưới dạng (Execute as)**: `Tôi (nguyentruongtonuithanh@gmail.com)`
   - **Ai có quyền truy cập (Who has access)**: `Bất kỳ ai (Anyone)` *(Bắt buộc chọn Bất kỳ ai để giáo viên nộp file qua web được)*
9. Nhấn **Triển khai** ➔ Google sẽ yêu cầu cấp quyền: Bấm **Ủy quyền truy cập (Authorize access)** ➔ Chọn tài khoản `nguyentruongtonuithanh@gmail.com` ➔ Bấm **Advanced (Nâng cao)** ➔ Bấm **Go to Kho Hoc Lieu So (unsafe)** ➔ Bấm **Allow (Cho phép)**.
10. Google sẽ hiện **URL Ứng dụng web** (đường dẫn có dạng kết thúc bằng `/exec`). Hãy sao chép URL này.

#### Bước 3: Dán Vào Cấu Hình Quản Trị Trên Website
1. Mở website Kho Học Liệu Số.
2. Bấm nút **"Đóng góp học liệu"** ➔ bấm nút **"⚙️ Cấu hình Drive Quản trị"**.
3. Dán URL Web App vừa sao chép vào ô **"URL Web App Google Apps Script của nguyentruongtonuithanh@gmail.com"**.
4. *(Tùy chọn)*: Nếu Quản trị viên đã tạo 1 thư mục riêng trên Drive (ví dụ: `Học liệu giáo viên nộp 2026`), hãy dán Folder ID của thư mục đó vào ô ID Thư mục. Nếu để trống, file sẽ tự động lưu vào Drive gốc của `nguyentruongtonuithanh@gmail.com`.
5. Bấm **🧪 Kiểm tra** ➔ Bấm **💾 Lưu cấu hình Quản trị**.

---

### 🎉 Cơ Chế Hoạt Động Hoàn Hảo:
- **Tất cả thầy cô**: Chỉ việc vào web, bấm nút **"Đóng góp học liệu"** và chọn bài giảng, giáo án.
- **Tất cả file**: Lập tức bay thẳng vào Google Drive của **`nguyentruongtonuithanh@gmail.com`**.
- **Không tốn phí**: Không giới hạn số lượng giáo viên, không tốn tiền lưu trữ, link xem trực tiếp tự động tạo cho toàn trường sử dụng!

