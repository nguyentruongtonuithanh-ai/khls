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
// GOOGLE APPS SCRIPT: ĐỒNG BỘ DỮ LIỆU & LƯU HỌC LIỆU VÀO GOOGLE DRIVE
// Tài khoản Quản trị: nguyentruongtonuithanh@gmail.com
// Trường Tiểu Học Núi Thành
// ============================================================

var DEFAULT_FOLDER_ID = "";
var DB_FILE_NAME = "khls_nuithanh_database.json";

function getFolder(folderId) {
  if (folderId && folderId.trim() !== "" && folderId !== "root") {
    try {
      return DriveApp.getFolderById(folderId.trim());
    } catch (e) {
      return DriveApp.getRootFolder();
    }
  }
  return DriveApp.getRootFolder();
}

var APP_ROOT_FOLDER_NAME = "Kho Học Liệu Số - TH Núi Thành";
var CATEGORY_FOLDER_MAP = {
  khbd: "Kế hoạch bài dạy",
  bgdt: "Bài giảng điện tử",
  dethi: "Đề thi",
  phieubt: "Phiếu bài tập",
  trochoi: "Trò chơi tương tác",
  video: "Video",
  chuyenmon: "Sinh hoạt chuyên môn",
  sangtao: "Sản phẩm sáng tạo",
  tuhoc: "Tài liệu tự học",
  gvcn: "Công tác chủ nhiệm"
};
var SUBJECT_FOLDER_MAP = {
  toan: "Toán",
  tiengviet: "Tiếng Việt",
  tienganh: "Tiếng Anh",
  tnxh: "TN & XH",
  khoahoc: "Khoa học",
  lsdl: "LS & ĐL",
  tinhoc: "Tin học",
  congnghe: "Công nghệ",
  daoduc: "Đạo đức",
  hdtn: "HĐTN",
  amnhac: "Âm nhạc",
  mythuat: "Mỹ thuật",
  gdtc: "GDTC"
};

function sanitizeFolderName(name) {
  return String(name || "")
    .replace(/[\\/:*?"<>|]/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

function getOrCreateSubFolder(parentFolder, folderName) {
  var cleanName = sanitizeFolderName(folderName);
  if (!cleanName) return parentFolder;
  var existing = parentFolder.getFoldersByName(cleanName);
  if (existing.hasNext()) {
    return existing.next();
  }
  return parentFolder.createFolder(cleanName);
}

// Chỉ tự động tạo cây thư mục (Danh mục -> Khối lớp -> Môn học) khi có học liệu thực sự được lưu
function resolveTargetDocFolder(rootFolder, data) {
  var current = rootFolder;
  var segments = [];
  try {
    if (rootFolder.getId() === DriveApp.getRootFolder().getId()) {
      current = getOrCreateSubFolder(current, APP_ROOT_FOLDER_NAME);
      segments.push(current.getName());
    }
  } catch (e) {}

  var catName = sanitizeFolderName(data.categoryName || CATEGORY_FOLDER_MAP[data.category] || data.category || "Học liệu số");
  if (catName) {
    current = getOrCreateSubFolder(current, catName);
    segments.push(catName);
  }

  var gradeName = "";
  if (data.gradeName) {
    gradeName = sanitizeFolderName(data.gradeName);
  } else if (data.grade && String(data.grade) !== "all") {
    gradeName = sanitizeFolderName("Khối " + data.grade);
  }
  if (gradeName) {
    current = getOrCreateSubFolder(current, gradeName);
    segments.push(gradeName);
  }

  var subjectName = "";
  if (data.subject && String(data.subject) !== "all") {
    subjectName = sanitizeFolderName(data.subjectName || SUBJECT_FOLDER_MAP[data.subject] || data.subject);
  }
  if (subjectName) {
    current = getOrCreateSubFolder(current, subjectName);
    segments.push(subjectName);
  }

  return {
    folder: current,
    path: segments.join(" / ")
  };
}

function getDatabaseFile(folder) {
  var files = folder.getFilesByName(DB_FILE_NAME);
  if (files.hasNext()) {
    return files.next();
  }
  var file = folder.createFile(DB_FILE_NAME, "[]", "application/json");
  try { file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW); } catch(e){}
  return file;
}

function loadDocuments(folder) {
  var file = getDatabaseFile(folder);
  try {
    var content = file.getBlob().getDataAsString("UTF-8");
    return JSON.parse(content) || [];
  } catch(e) {
    return [];
  }
}

function saveDocumentsDb(folder, docs) {
  var file = getDatabaseFile(folder);
  file.setContent(JSON.stringify(docs));
}

function doGet(e) {
  try {
    var folderId = (e && e.parameter && e.parameter.folderId) || DEFAULT_FOLDER_ID;
    var folder = getFolder(folderId);
    var docs = loadDocuments(folder);
    return responseJSON({
      status: "success",
      documents: docs,
      time: new Date().toISOString()
    });
  } catch (err) {
    return responseJSON({ status: "error", message: err.toString() });
  }
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return responseJSON({ status: "error", message: "Không nhận được dữ liệu" });
    }
    
    var data = JSON.parse(e.postData.contents);
    var folder = getFolder(data.folderId || DEFAULT_FOLDER_ID);
    
    // 1. Phê duyệt, Từ chối hoặc Đặt lại trạng thái chờ duyệt học liệu
    if (data.action === "review" || data.action === "approve" || data.action === "reject" || data.action === "pending" || data.action === "reset") {
      var allDocs = loadDocuments(folder);
      var targetDoc = allDocs.find(function(d) {
        return String(d.id) === String(data.docId) ||
               (data.driveId && String(d.drive_id) === String(data.driveId));
      });
      if (targetDoc) {
        if (data.action === "pending" || data.action === "reset") {
          targetDoc.status = "pending";
          targetDoc.approved_by = null;
        } else {
          targetDoc.status = (data.action === "reject" ? "rejected" : "approved");
          targetDoc.approved_by = data.approvedBy || "Ban Giám Hiệu";
          if (data.rejectReason) targetDoc.reject_reason = data.rejectReason;
        }
        saveDocumentsDb(folder, allDocs);
        return responseJSON({ status: "success", message: "Đã cập nhật trạng thái học liệu", doc: targetDoc });
      }
      return responseJSON({ status: "error", message: "Không tìm thấy mã học liệu: " + data.docId });
    }
    
    // 1b. Xóa học liệu khỏi cơ sở dữ liệu trên Drive
    if (data.action === "delete") {
      var allDocs = loadDocuments(folder);
      var newDocs = allDocs.filter(function(d) {
        var matchId = data.docId && String(d.id) === String(data.docId);
        var matchDrive = data.driveId && String(d.drive_id) === String(data.driveId);
        return !matchId && !matchDrive;
      });
      saveDocumentsDb(folder, newDocs);
      return responseJSON({ status: "success", message: "Đã xóa học liệu trên Drive", deletedDocId: data.docId });
    }

    // 1c. Đồng bộ cấu trúc danh mục website (KHÔNG tạo thư mục trống trên Drive)
    if (data.action === "sync_structure" || data.docId === "__khls_structure__") {
      var allDocs = loadDocuments(folder);
      var structIdx = allDocs.findIndex(function(d) { return d.id === "__khls_structure__"; });
      var structDoc = {
        id: "__khls_structure__",
        title: "__KHLSSYSTEM_STRUCTURE__",
        description: data.description || "",
        updated_at: new Date().toISOString()
      };
      if (structIdx >= 0) {
        allDocs[structIdx] = structDoc;
      } else {
        allDocs.push(structDoc);
      }
      saveDocumentsDb(folder, allDocs);
      return responseJSON({ status: "success", message: "Đã đồng bộ cấu trúc danh mục", structure: structDoc });
    }

    // 1d. Di chuyển học liệu sang thư mục mới khi quản trị viên chỉnh sửa Danh mục/Khối/Môn
    if (data.action === "move") {
      var allDocs = loadDocuments(folder);
      var targetDoc = allDocs.find(function(d) {
        return (data.docId && String(d.id) === String(data.docId)) ||
               (data.driveId && String(d.drive_id) === String(data.driveId));
      });
      var moveTarget = resolveTargetDocFolder(folder, data);
      var movedDriveId = data.driveId || (targetDoc ? targetDoc.drive_id : "");
      if (movedDriveId) {
        try {
          var driveFile = DriveApp.getFileById(movedDriveId);
          driveFile.moveTo(moveTarget.folder);
        } catch (moveErr) {}
      }
      if (targetDoc) {
        if (data.title) targetDoc.title = data.title;
        if (data.description !== undefined) targetDoc.description = data.description;
        if (data.category) targetDoc.category = data.category;
        if (data.grade !== undefined) targetDoc.grade = String(data.grade);
        if (data.subject !== undefined) targetDoc.subject = data.subject;
        if (data.week !== undefined) targetDoc.week = Number(data.week) || 1;
        targetDoc.folder_path = moveTarget.path;
        saveDocumentsDb(folder, allDocs);
      }
      return responseJSON({
        status: "success",
        message: "Đã cập nhật vị trí học liệu trên Drive",
        folderPath: moveTarget.path,
        doc: targetDoc || null
      });
    }
    
    // 2. Tải lên tệp học liệu mới (Chỉ tạo thư mục Danh mục -> Khối -> Môn khi có tệp được đăng)
    var fileName = data.fileName || ("HocLieu_" + new Date().getTime());
    var contentType = data.fileType || "application/octet-stream";
    var base64Data = data.base64Data;
    
    if (!base64Data) {
      return responseJSON({ status: "error", message: "Thiếu dữ liệu tệp tin base64Data" });
    }
    
    var targetInfo = resolveTargetDocFolder(folder, data);
    var bytes = Utilities.base64Decode(base64Data);
    var blob = Utilities.newBlob(bytes, contentType, fileName);
    var file = targetInfo.folder.createFile(blob);
    
    var fileDesc = "Người đóng góp: " + (data.author || "Giáo viên") + "\n";
    fileDesc += "Thư mục: " + targetInfo.path + "\n";
    if (data.description) fileDesc += "Mô tả: " + data.description;
    file.setDescription(fileDesc);
    
    try {
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    } catch(shareErr) {}
    
    var fileId = file.getId();
    var viewUrl = "https://drive.google.com/file/d/" + fileId + "/view?usp=sharing";
    var previewUrl = "https://drive.google.com/file/d/" + fileId + "/preview";
    var downloadUrl = "https://drive.google.com/uc?export=download&id=" + fileId;
    
    // Lưu vào cơ sở dữ liệu chung trên Google Drive để mọi máy tính cùng thấy
    var ext = fileName.split(".").pop().toLowerCase();
    var newDocRecord = {
      id: data.docId || ("doc-" + new Date().getTime()),
      title: data.title || fileName,
      description: data.description || "",
      category: data.category || "khbd",
      grade: String(data.grade || "1"),
      subject: data.subject || "toan",
      week: Number(data.week) || 1,
      folder_path: targetInfo.path,
      file_name: fileName,
      file_size: file.getSize(),
      file_type: ext,
      file_url: viewUrl,
      preview_url: previewUrl,
      download_url: downloadUrl,
      drive_id: fileId,
      author_id: data.authorId || 1,
      author_name: data.author || "Giáo viên",
      author_dept: data.department || "Tổ Chuyên Môn",
      status: "pending",
      avg_rating: 5.0,
      rating_count: 1,
      download_count: 0,
      view_count: 1,
      created_at: new Date().toISOString(),
      approved_by: null,
      comments: []
    };
    
    var currentDocs = loadDocuments(folder);
    currentDocs.unshift(newDocRecord);
    saveDocumentsDb(folder, currentDocs);
    
    return responseJSON({
      status: "success",
      fileId: fileId,
      fileUrl: viewUrl,
      previewUrl: previewUrl,
      downloadUrl: downloadUrl,
      fileName: fileName,
      doc: newDocRecord,
      folderName: targetInfo.folder.getName(),
      folderPath: targetInfo.path,
      createdAt: new Date().toISOString()
    });
    
  } catch (err) {
    return responseJSON({ status: "error", message: err.toString() });
  }
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

#### Bước 3: Đã Được Tích Hợp Sẵn Cho Toàn Trường
Đường link Web App chính thức của Trường Tiểu Học Núi Thành đã được tích hợp sẵn vào hệ thống:
```
https://script.google.com/macros/s/AKfycbyAfYDvlgkU5c3908gdGyDNRwmXWB-y3hPNQoD0fPx1PQ5moCIVhKZk-kTw-sim9Dfj/exec
```
Mọi máy tính của giáo viên (Máy A, Máy B, v.v.) khi truy cập website đều sẽ tự động kết nối vào Google Drive `nguyentruongtonuithanh@gmail.com` để tải bài lên và duyệt bài dùng chung mà không cần phải cài đặt thủ công.

---

### 🎉 Cơ Chế Hoạt Động Hoàn Hảo:
- **Tất cả thầy cô**: Chỉ việc vào web, bấm nút **"Đóng góp học liệu"** và chọn bài giảng, giáo án.
- **Tất cả file**: Lập tức bay thẳng vào Google Drive của **`nguyentruongtonuithanh@gmail.com`**.
- **Không tốn phí**: Không giới hạn số lượng giáo viên, không tốn tiền lưu trữ, link xem trực tiếp tự động tạo cho toàn trường sử dụng!


