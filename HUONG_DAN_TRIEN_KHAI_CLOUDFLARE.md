# 🚀 Hướng Dẫn Sử Dụng & Triển Khai Miễn Phí Trên Cloudflare
## Kho Học Liệu Số - Trường Tiểu Học Núi Thành

---

## 💻 1. Chạy Thử Ngay Trên Máy Tính (Không Cần Cài Đặt Gì)

Toàn bộ hệ thống được xây dựng bằng kiến trúc **Single Page Application (SPA)** hiện đại:
- Bạn chỉ cần nhấp đúp chuột vào file [index.html](file:///d:/APP/giaovien/khls.truongtieuhocnuithanh/index.html) để mở trực tiếp trong Chrome, Cốc Cốc, Edge hoặc Firefox.
- **Dữ liệu mẫu đã được nạp sẵn**: Có sẵn các bài giảng điện tử PowerPoint, KHBD Toán - Tiếng Việt chuẩn công văn 2345, đề thi kèm ma trận, video bài giảng và game tương tác.
- **Tài khoản trải nghiệm có sẵn**:
  - 👑 **Quản trị viên (BGH)**: Tài khoản `admin` / Mật khẩu `admin` (Xem được toàn bộ Dashboard BGH, thống kê thi đua, quản lý tài khoản & cây thư mục).
  - 📋 **Tổ trưởng Chuyên môn**: Tài khoản `totruong1` / Mật khẩu `123456` (Có quyền kiểm duyệt học liệu trước khi công khai lên kho chung).
  - 👨‍🏫 **Giáo viên**: Tài khoản `gvha` / Mật khẩu `123456` (Đóng góp tài liệu, xem hồ sơ, xem thứ hạng trên Bảng xếp hạng).

---

## 🌐 2. Triển Khai Frontend Lên Cloudflare Pages (Miễn Phí 100%)

Cloudflare Pages miễn phí lưu trữ và băng thông không giới hạn, tốc độ tải cực nhanh tại Việt Nam.

### Cách 1: Tải trực tiếp (Direct Upload - Không cần biết lập trình)
1. Truy cập [dash.cloudflare.com](https://dash.cloudflare.com) và đăng nhập (hoặc đăng ký tài khoản miễn phí).
2. Ở thanh bên trái, chọn **Workers & Pages** ➔ Nhấn nút **Create Application** ➔ Chọn tab **Pages** ➔ Chọn **Upload assets**.
3. Đặt tên dự án: `khls-nuithanh`.
4. Kéo thả toàn bộ thư mục `khls.truongtieuhocnuithanh` (chứa `index.html`, `css`, `js`, `assets`) vào ô tải lên.
5. Nhấn **Deploy site**.
6. Chỉ sau 30 giây, bạn sẽ nhận được đường dẫn website chính thức:  
   👉 `https://khls-nuithanh.pages.dev` (chia sẻ được ngay cho toàn bộ giáo viên trong trường).

### Cách 2: Kết nối GitHub (Tự động cập nhật mỗi khi sửa code)
1. Đưa mã nguồn lên kho lưu trữ GitHub của trường.
2. Tại Cloudflare Pages ➔ Chọn **Connect to Git** ➔ Chọn repo `khls.truongtieuhocnuithanh`.
3. Nhấn **Save and Deploy**.

---

## 🗄️ 3. Triển Khai Backend Workers & Database D1 (Miễn Phí 100%)

Nếu bạn muốn chuyển từ bộ nhớ trình duyệt (`localStorage`) sang Database đám mây dùng chung cho tất cả máy tính và điện thoại:

1. **Tạo Database D1**:
   - Trong Cloudflare Dashboard ➔ Chọn **Workers & Pages** ➔ **D1 SQL Database** ➔ Nhấn **Create Database**.
   - Đặt tên database: `khls_nuithanh_db`.
   - Vào tab **Console** của database, dán nội dung từ file [workers/schema.sql](file:///d:/APP/giaovien/khls.truongtieuhocnuithanh/workers/schema.sql) và nhấn **Execute** để tạo bảng và nạp dữ liệu ban đầu.

2. **Deploy Worker API**:
   - Sử dụng Wrangler CLI hoặc copy file [workers/src/index.js](file:///d:/APP/giaovien/khls.truongtieuhocnuithanh/workers/src/index.js) vào Cloudflare Worker mới.
   - Gắn kết (Bind) Database D1 với tên biến `DB`.

---

## 🌟 4. Các Tính Năng Đã Hoàn Thiện Chuẩn Theo Mô Tả

| Nhóm chức năng | Trạng thái | Chi tiết thực hiện |
|---|---|---|
| **Cây thư mục (Giống Violet.vn)** | ✅ Hoàn thành | Phân loại theo 9 mục chính (KHBD, Bài giảng điện tử, Đề thi, Phiếu bài tập, Trò chơi, Video, Tập huấn, Thư viện số, Khác) ➔ Khối 1 đến Khối 5 ➔ Từng môn học. |
| **Quy trình Kiểm duyệt 3 bước** | ✅ Hoàn thành | Giáo viên đăng tải ➔ Trạng thái Chờ duyệt ➔ Tổ trưởng chuyên môn vào xem trước nội dung & nhấn **Phê duyệt** hoặc **Từ chối có lý do**. |
| **Xem trước tài liệu (Preview)** | ✅ Hoàn thành | Nhấn "Xem trước trực tuyến" để xem trực tiếp slide PowerPoint nhiều trang, trích đoạn văn bản Word/PDF hoặc video mà không bắt buộc tải về máy. |
| **Tương tác & Vinh danh** | ✅ Hoàn thành | Đánh giá sao (1-5 sao), bình luận trao đổi chuyên môn, gắn huy hiệu vinh danh giáo viên, nút báo cáo tài liệu vi phạm. |
| **Gamification (Thi đua)** | ✅ Hoàn thành | Bảng xếp hạng Top 10 Nhà giáo sáng tạo, hồ sơ cá nhân thể hiện số lượt tải và điểm sao đồng nghiệp bình chọn. |
| **Dashboard Ban Giám Hiệu** | ✅ Hoàn thành | Biểu đồ trực quan tỷ lệ đóng góp theo Khối lớp, theo Tổ chuyên môn và nút xuất file Excel/CSV báo cáo thi đua tự động. |
| **Quản trị Admin** | ✅ Hoàn thành | Tạo tài khoản giáo viên hàng loạt (nhập CSV), đổi vai trò (GV ➔ Tổ trưởng ➔ Admin), sao lưu và phục hồi dữ liệu hệ thống. |
