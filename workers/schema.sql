-- ============================================================
-- KHO HỌC LIỆU SỐ - TRƯỜNG TIỂU HỌC NÚI THÀNH
-- Cloudflare D1 Database Schema (SQLite)
-- 100% Miễn phí, dung lượng lưu trữ tới 5GB
-- ============================================================

-- Bảng Người dùng / Giáo viên
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    fullname TEXT NOT NULL,
    email TEXT,
    password_hash TEXT,
    role TEXT CHECK(role IN ('teacher', 'leader', 'admin')) DEFAULT 'teacher',
    department TEXT NOT NULL,
    honor TEXT,
    avatar_letter TEXT,
    total_uploads INTEGER DEFAULT 0,
    total_downloads INTEGER DEFAULT 0,
    total_stars INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Bảng Danh mục học liệu & Cây thư mục (Violet.vn style)
CREATE TABLE IF NOT EXISTS categories (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    parent_id TEXT,
    icon TEXT,
    description TEXT,
    sort_order INTEGER DEFAULT 0
);

-- Bảng Tài liệu / Học liệu số
CREATE TABLE IF NOT EXISTS documents (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    category TEXT NOT NULL,
    grade TEXT NOT NULL,
    subject TEXT NOT NULL,
    file_name TEXT NOT NULL,
    file_size INTEGER DEFAULT 0,
    file_type TEXT NOT NULL,
    file_url TEXT,
    author_id INTEGER NOT NULL,
    author_name TEXT NOT NULL,
    author_dept TEXT NOT NULL,
    status TEXT CHECK(status IN ('pending', 'approved', 'rejected')) DEFAULT 'pending',
    approved_by TEXT,
    reject_reason TEXT,
    avg_rating REAL DEFAULT 5.0,
    rating_count INTEGER DEFAULT 0,
    download_count INTEGER DEFAULT 0,
    view_count INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(author_id) REFERENCES users(id)
);

-- Bảng Bình luận & Góp ý chuyên môn
CREATE TABLE IF NOT EXISTS comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    doc_id TEXT NOT NULL,
    author_name TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(doc_id) REFERENCES documents(id) ON DELETE CASCADE
);

-- Bảng Đánh giá sao (1-5 sao)
CREATE TABLE IF NOT EXISTS ratings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    doc_id TEXT NOT NULL,
    user_id INTEGER,
    score INTEGER CHECK(score >= 1 AND score <= 5) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(doc_id) REFERENCES documents(id) ON DELETE CASCADE
);

-- Bảng Báo cáo lỗi / Vi phạm
CREATE TABLE IF NOT EXISTS reports (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    doc_id TEXT NOT NULL,
    reason TEXT NOT NULL,
    detail TEXT,
    status TEXT DEFAULT 'pending',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- DỮ LIỆU KHỞI TẠO BAN ĐẦU (SEED DATA)
-- ============================================================

INSERT OR IGNORE INTO users (id, username, fullname, email, role, department, honor, avatar_letter, total_uploads, total_downloads, total_stars) VALUES
(1, 'admin', 'Lê Hoàng Nam', 'admin@nuithanh.edu.vn', 'admin123', 'admin', 'Ban Giám Hiệu', 'Hiệu trưởng - Quản trị viên', 'N', 8, 620, 42),
(2, 'totruong1', 'Trần Thị Mai', 'mai.tt@nuithanh.edu.vn', '123456', 'leader', 'Tổ 1', 'Tổ trưởng Chuyên môn - GV Dạy Giỏi', 'M', 14, 1250, 68),
(3, 'totruong3', 'Nguyễn Văn Đức', 'duc.nv@nuithanh.edu.vn', '123456', 'leader', 'Tổ 3', 'Tổ trưởng Chuyên môn Khối 3', 'Đ', 11, 890, 55),
(4, 'gvha', 'Lê Thu Hà', 'ha.lt@nuithanh.edu.vn', '123456', 'teacher', 'Tổ 1', 'Top 1 Nhà giáo sáng tạo tháng 9', 'H', 19, 1680, 94),
(5, 'gvlong', 'Phạm Hoàng Long', 'long.ph@nuithanh.edu.vn', '123456', 'teacher', 'Tổ 5', 'Chuyên gia Thiết kế Bài giảng Số', 'L', 16, 1420, 80),
(6, 'gvlinh', 'Đỗ Mỹ Linh', 'linh.dm@nuithanh.edu.vn', '123456', 'teacher', 'Tổ Tin học - Ngoại ngữ', 'Giáo viên Tiên phong Chuyển đổi số', 'L', 12, 980, 59),
(7, 'gvtuan', 'Vũ Minh Tuấn', 'tuan.vm@nuithanh.edu.vn', '123456', 'teacher', 'Tổ 4', 'Giáo viên Dạy giỏi Cấp trường', 'T', 9, 710, 44),
(8, 'gvoanh', 'Hoàng Kim Oanh', 'oanh.hk@nuithanh.edu.vn', '123456', 'teacher', 'Tổ Âm nhạc - Mỹ thuật', 'Bàn tay vàng Sáng tạo Học cụ', 'O', 7, 530, 36);

INSERT OR IGNORE INTO categories (id, name, parent_id, icon, description, sort_order) VALUES
('khbd', 'Kế hoạch bài dạy', NULL, '📋', 'Kế hoạch bài dạy chuẩn CV 2345', 1),
('baigiang', 'Bài giảng điện tử', NULL, '💻', 'Slide PowerPoint & bài giảng số', 2),
('dethi', 'Đề thi', NULL, '📝', 'Đề kiểm tra định kỳ có ma trận', 3),
('phieubaitap', 'Phiếu bài tập', NULL, '📄', 'Phiếu học tập phân hóa năng lực', 4),
('trochoi', 'Trò chơi tương tác', NULL, '🎮', 'Game học tập, Quizizz, Wordwall', 5),
('video', 'Video', NULL, '🎬', 'Video bài giảng thực hành', 6),
('taphuan', 'Tập huấn', NULL, '📚', 'Tài liệu bồi dưỡng GDPT 2018', 7),
('thuvien', 'Thư viện số', NULL, '📖', 'Sách giáo khoa, sách giáo viên điện tử', 8),
('khac', 'Tài liệu khác', NULL, '📁', 'Tài nguyên bổ trợ đa dạng', 9);

INSERT OR IGNORE INTO documents (id, title, description, category, grade, subject, file_name, file_size, file_type, author_id, author_name, author_dept, status, approved_by, avg_rating, rating_count, download_count, view_count, created_at) VALUES
('doc-1', 'Kế hoạch bài dạy Toán 1 - Phép cộng trong phạm vi 10 (Chuẩn CV 2345)', 'Giáo án soạn theo chương trình GDPT 2018 (bộ Kết nối tri thức). Tích hợp đồ dùng dạy học trực quan và hoạt động nhóm phát triển phẩm chất tư duy.', 'khbd', '1', 'toan', 'KHBD_Toan1_PhepCong10_LeThuHa.docx', 2450000, 'docx', 4, 'Cô Lê Thu Hà', 'Tổ 1', 'approved', 'Cô Trần Thị Mai (Tổ trưởng Tổ 1)', 5.0, 14, 485, 1230, '2026-10-10 08:30:00'),
('doc-2', 'Bài giảng điện tử PowerPoint Tiếng Việt 2 - Bài 12: Danh sách tổ em', 'Bộ slide PowerPoint hiệu ứng sinh động, có trò chơi đoán ô chữ mở rộng vốn từ, âm thanh vui nhộn giúp học sinh nắm vững cách lập danh sách.', 'baigiang', '2', 'tiengviet', 'BaiGiang_TV2_DanhSachToEm.pptx', 15400000, 'pptx', 2, 'Cô Trần Thị Mai', 'Tổ 1', 'approved', 'Thầy Lê Hoàng Nam (BGH)', 4.9, 18, 610, 1540, '2026-10-08 14:20:00'),
('doc-3', 'Đề kiểm tra giữa học kỳ 1 môn Toán 3 (Có ma trận đề & đáp án thang điểm)', 'Đề thi bám sát thông tư 27 về đánh giá học sinh tiểu học, gồm 4 mức độ nhận thức (Nhận biết, Thông hiểu, Vận dụng, Vận dụng cao).', 'dethi', '3', 'toan', 'DeThi_GHK1_Toan3_Nuithanh.pdf', 1200000, 'pdf', 3, 'Thầy Nguyễn Văn Đức', 'Tổ 3', 'approved', 'Thầy Lê Hoàng Nam (BGH)', 4.8, 11, 340, 890, '2026-10-05 09:10:00'),
('doc-4', 'Trò chơi tương tác Quizizz - Ôn tập Lịch sử và Địa lý 4', 'Gói câu hỏi tương tác trắc nghiệm về Thiên nhiên và Con người Việt Nam, kèm đường dẫn nhúng vào tiết dạy học trực tuyến hoặc dạy học số.', 'trochoi', '4', 'lsdl', 'TroChoi_LSDL4_ThienNhienVietNam.zip', 8500000, 'zip', 6, 'Cô Đỗ Mỹ Linh', 'Tổ Tin học - Ngoại ngữ', 'approved', 'Thầy Lê Hoàng Nam (BGH)', 5.0, 16, 420, 980, '2026-10-02 15:40:00'),
('doc-5', 'Video thí nghiệm Khoa học 5 - Sự biến đổi hóa học của chất', 'Clip ngắn độ phân giải Full HD ghi lại quá trình thí nghiệm thực tế an toàn trong lớp học, có thuyết minh và phụ đề tiếng Việt dễ hiểu.', 'video', '5', 'khoahoc', 'Video_KhoaHoc5_SuBienDoiHoaHoc.mp4', 32000000, 'mp4', 5, 'Thầy Phạm Hoàng Long', 'Tổ 5', 'approved', 'Thầy Lê Hoàng Nam (BGH)', 4.9, 22, 530, 1420, '2026-09-28 10:00:00');
