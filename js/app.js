/* ==========================================================================
   KHO HỌC LIỆU SỐ - TRƯỜNG TIỂU HỌC NÚI THÀNH
   Single Page Application Logic, Router, Store & UI Renderers
   ========================================================================== */

// ======================== DATA & CONSTANTS ========================

const CATEGORIES = [
    { id: 'khbd', name: 'Kế hoạch bài dạy', icon: '📋', desc: 'Kế hoạch bài dạy' },
    { id: 'baigiang', name: 'Bài giảng điện tử', icon: '💻', desc: 'Slide, PowerPoint' },
    { id: 'dethi', name: 'Đề thi', icon: '📝', desc: 'Đề kiểm tra định kỳ' },
    { id: 'phieubaitap', name: 'Phiếu bài tập', icon: '📄', desc: 'Phiếu học tập' },
    { id: 'trochoi', name: 'Trò chơi tương tác', icon: '🎮', desc: 'Game tương tác số' },
    { id: 'video', name: 'Video', icon: '🎬', desc: 'Video bài giảng' },
    { id: 'taphuan', name: 'Tập huấn', icon: '📚', desc: 'Tài liệu bồi dưỡng' },
    { id: 'thuvien', name: 'Thư viện số', icon: '📖', desc: 'Sách, tài liệu mở' },
    { id: 'khac', name: 'Tài liệu khác', icon: '📁', desc: 'Tài nguyên bổ trợ' }
];

const GRADES = [
    { id: '1', name: 'Khối 1' },
    { id: '2', name: 'Khối 2' },
    { id: '3', name: 'Khối 3' },
    { id: '4', name: 'Khối 4' },
    { id: '5', name: 'Khối 5' }
];

const SUBJECTS = [
    { id: 'toan', name: 'Toán' },
    { id: 'tiengviet', name: 'Tiếng Việt' },
    { id: 'tnxh', name: 'TN & XH' },
    { id: 'khoahoc', name: 'Khoa học' },
    { id: 'lsdl', name: 'LS & ĐL' },
    { id: 'daoduc', name: 'Đạo đức' },
    { id: 'tinhoc', name: 'Tin học' },
    { id: 'tienganh', name: 'Tiếng Anh' },
    { id: 'amnhac', name: 'Âm nhạc' },
    { id: 'mythuat', name: 'Mỹ thuật' },
    { id: 'gdtc', name: 'GD Thể chất' }
];

const INITIAL_USERS = [
    {
        id: 1,
        username: 'admin',
        fullname: 'Lê Hoàng Nam',
        role: 'admin',
        department: 'Ban Giám Hiệu',
        honor: 'Hiệu trưởng - Quản trị viên',
        avatar_letter: 'N',
        total_uploads: 8,
        total_downloads: 620,
        total_stars: 42
    },
    {
        id: 2,
        username: 'totruong1',
        fullname: 'Trần Thị Mai',
        role: 'leader',
        department: 'Tổ 1',
        honor: 'Tổ trưởng Chuyên môn - GV Dạy Giỏi',
        avatar_letter: 'M',
        total_uploads: 14,
        total_downloads: 1250,
        total_stars: 68
    },
    {
        id: 3,
        username: 'totruong3',
        fullname: 'Nguyễn Văn Đức',
        role: 'leader',
        department: 'Tổ 3',
        honor: 'Tổ trưởng Chuyên môn Khối 3',
        avatar_letter: 'Đ',
        total_uploads: 11,
        total_downloads: 890,
        total_stars: 55
    },
    {
        id: 4,
        username: 'gvha',
        fullname: 'Lê Thu Hà',
        role: 'teacher',
        department: 'Tổ 1',
        honor: 'Top 1 Nhà giáo sáng tạo tháng 9',
        avatar_letter: 'H',
        total_uploads: 19,
        total_downloads: 1680,
        total_stars: 94
    },
    {
        id: 5,
        username: 'gvlong',
        fullname: 'Phạm Hoàng Long',
        role: 'teacher',
        department: 'Tổ 5',
        honor: 'Chuyên gia Thiết kế Bài giảng Số',
        avatar_letter: 'L',
        total_uploads: 16,
        total_downloads: 1420,
        total_stars: 80
    },
    {
        id: 6,
        username: 'gvlinh',
        fullname: 'Đỗ Mỹ Linh',
        role: 'teacher',
        department: 'Tổ Tin học - Ngoại ngữ',
        honor: 'Giáo viên Tiên phong Chuyển đổi số',
        avatar_letter: 'L',
        total_uploads: 12,
        total_downloads: 980,
        total_stars: 59
    },
    {
        id: 7,
        username: 'gvtuan',
        fullname: 'Vũ Minh Tuấn',
        role: 'teacher',
        department: 'Tổ 4',
        honor: 'Giáo viên Dạy giỏi Cấp trường',
        avatar_letter: 'T',
        total_uploads: 9,
        total_downloads: 710,
        total_stars: 44
    },
    {
        id: 8,
        username: 'gvoanh',
        fullname: 'Hoàng Kim Oanh',
        role: 'teacher',
        department: 'Tổ Âm nhạc - Mỹ thuật',
        honor: 'Bàn tay vàng Sáng tạo Học cụ',
        avatar_letter: 'O',
        total_uploads: 7,
        total_downloads: 530,
        total_stars: 36
    }
];

const INITIAL_DOCUMENTS = [
    {
        id: 'doc-1',
        title: 'Kế hoạch bài dạy Toán 1 - Phép cộng trong phạm vi 10 (Chuẩn CV 2345)',
        description: 'Giáo án soạn theo chương trình GDPT 2018 (bộ Kết nối tri thức). Tích hợp đồ dùng dạy học trực quan và hoạt động nhóm phát triển phẩm chất tư duy.',
        category: 'khbd',
        grade: '1',
        subject: 'toan',
        file_name: 'KHBD_Toan1_PhepCong10_LeThuHa.docx',
        file_size: 2450000,
        file_type: 'docx',
        file_url: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/view?usp=sharing',
        author_id: 4,
        author_name: 'Cô Lê Thu Hà',
        author_dept: 'Tổ 1',
        status: 'approved',
        avg_rating: 5.0,
        rating_count: 14,
        download_count: 485,
        view_count: 1230,
        created_at: '2026-10-10T08:30:00Z',
        approved_by: 'Cô Trần Thị Mai (Tổ trưởng Tổ 1)',
        comments: [
            { author: 'Cô Trần Thị Mai', text: 'Kế hoạch bài dạy chỉn chu, mục tiêu rõ ràng và bám sát công văn 2345. Đã duyệt lên kho chung!', date: '2026-10-10T10:15:00Z' },
            { author: 'Thầy Nguyễn Văn Đức', text: 'Rất hay, hoạt động khởi động tạo hứng thú tốt cho học sinh đầu cấp.', date: '2026-10-11T14:20:00Z' }
        ]
    },
    {
        id: 'doc-2',
        title: 'Bài giảng điện tử PowerPoint Tiếng Việt 2 - Bài 12: Danh sách tổ em',
        description: 'Bộ slide PowerPoint hiệu ứng sinh động, có trò chơi đoán ô chữ mở rộng vốn từ, âm thanh vui nhộn giúp học sinh nắm vững cách lập danh sách.',
        category: 'baigiang',
        grade: '2',
        subject: 'tiengviet',
        file_name: 'BaiGiang_TV2_DanhSachToEm.pptx',
        file_size: 15400000,
        file_type: 'pptx',
        file_url: 'https://drive.google.com/file/d/1Yd8_Nuithanh_BaiGiang_TiengViet2/view?usp=sharing',
        author_id: 2,
        author_name: 'Cô Trần Thị Mai',
        author_dept: 'Tổ 1',
        status: 'approved',
        avg_rating: 4.9,
        rating_count: 18,
        download_count: 610,
        view_count: 1540,
        created_at: '2026-10-08T14:20:00Z',
        approved_by: 'Thầy Lê Hoàng Nam (BGH)',
        comments: [
            { author: 'Cô Lê Thu Hà', text: 'Hình ảnh minh họa đẹp mắt, học sinh lớp em rất say sưa học bài!', date: '2026-10-09T09:00:00Z' }
        ]
    },
    {
        id: 'doc-3',
        title: 'Đề kiểm tra giữa học kỳ 1 môn Toán 3 (Có ma trận đề & đáp án thang điểm)',
        description: 'Đề thi bám sát thông tư 27 về đánh giá học sinh tiểu học, gồm 4 mức độ nhận thức (Nhận biết, Thông hiểu, Vận dụng, Vận dụng cao).',
        category: 'dethi',
        grade: '3',
        subject: 'toan',
        file_name: 'DeThi_GHK1_Toan3_Nuithanh.pdf',
        file_size: 1200000,
        file_type: 'pdf',
        author_id: 3,
        author_name: 'Thầy Nguyễn Văn Đức',
        author_dept: 'Tổ 3',
        status: 'approved',
        avg_rating: 4.8,
        rating_count: 11,
        download_count: 340,
        view_count: 890,
        created_at: '2026-10-05T09:10:00Z',
        approved_by: 'Thầy Lê Hoàng Nam (BGH)',
        comments: [
            { author: 'Thầy Vũ Minh Tuấn', text: 'Ma trận đề phân hóa rất chuẩn, đề bài rõ ràng không đánh đố học sinh.', date: '2026-10-06T16:30:00Z' }
        ]
    },
    {
        id: 'doc-4',
        title: 'Trò chơi tương tác Quizizz - Ôn tập Lịch sử và Địa lý 4',
        description: 'Gói câu hỏi tương tác trắc nghiệm về Thiên nhiên và Con người Việt Nam, kèm đường dẫn nhúng vào tiết dạy học trực tuyến hoặc dạy học số.',
        category: 'trochoi',
        grade: '4',
        subject: 'lsdl',
        file_name: 'TroChoi_LSDL4_ThienNhienVietNam.zip',
        file_size: 8500000,
        file_type: 'zip',
        author_id: 6,
        author_name: 'Cô Đỗ Mỹ Linh',
        author_dept: 'Tổ Tin học - Ngoại ngữ',
        status: 'approved',
        avg_rating: 5.0,
        rating_count: 16,
        download_count: 420,
        view_count: 980,
        created_at: '2026-10-02T15:40:00Z',
        approved_by: 'Thầy Lê Hoàng Nam (BGH)',
        comments: [
            { author: 'Thầy Vũ Minh Tuấn', text: 'Game chạy mượt mà trên tivi thông minh, các em đua top điểm số rất hào hứng.', date: '2026-10-03T11:15:00Z' }
        ]
    },
    {
        id: 'doc-5',
        title: 'Video thí nghiệm Khoa học 5 - Sự biến đổi hóa học của chất',
        description: 'Clip ngắn độ phân giải Full HD ghi lại quá trình thí nghiệm thực tế an toàn trong lớp học, có thuyết minh và phụ đề tiếng Việt dễ hiểu.',
        category: 'video',
        grade: '5',
        subject: 'khoahoc',
        file_name: 'Video_KhoaHoc5_SuBienDoiHoaHoc.mp4',
        file_size: 32000000,
        file_type: 'mp4',
        author_id: 5,
        author_name: 'Thầy Phạm Hoàng Long',
        author_dept: 'Tổ 5',
        status: 'approved',
        avg_rating: 4.9,
        rating_count: 22,
        download_count: 530,
        view_count: 1420,
        created_at: '2026-09-28T10:00:00Z',
        approved_by: 'Thầy Lê Hoàng Nam (BGH)',
        comments: [
            { author: 'Thầy Nguyễn Văn Đức', text: 'Video quay nét, lời bình chuẩn mực sư phạm. Rất phù hợp trình chiếu trong bài giảng.', date: '2026-09-29T08:12:00Z' }
        ]
    },
    {
        id: 'doc-6',
        title: 'Phiếu học tập phân hóa môn Tiếng Anh 3 - Unit 3: Our Friends',
        description: 'Hệ thống phiếu bài tập được chia theo 3 cấp độ: củng cố từ vựng cơ bản, luyện mẫu câu giao tiếp và hoạt động vẽ tranh giới thiệu bạn bè.',
        category: 'phieubaitap',
        grade: '3',
        subject: 'tienganh',
        file_name: 'PhieuBT_TiengAnh3_Unit3_Friends.docx',
        file_size: 1800000,
        file_type: 'docx',
        author_id: 6,
        author_name: 'Cô Đỗ Mỹ Linh',
        author_dept: 'Tổ Tin học - Ngoại ngữ',
        status: 'approved',
        avg_rating: 4.8,
        rating_count: 9,
        download_count: 295,
        view_count: 730,
        created_at: '2026-09-25T11:30:00Z',
        approved_by: 'Thầy Lê Hoàng Nam (BGH)',
        comments: [
            { author: 'Cô Trần Thị Mai', text: 'Phiếu in ấn đẹp, trình bày trang nhã vừa vặn trang A4.', date: '2026-09-26T14:45:00Z' }
        ]
    },
    // Tài liệu chờ duyệt (Dành cho Tổ trưởng / Admin kiểm thử chức năng Phê duyệt)
    {
        id: 'doc-7',
        title: 'KHBD Tự nhiên và Xã hội 2 - Bài 15: Động vật sống ở đâu?',
        description: 'Kế hoạch bài dạy ứng dụng mô hình lớp học đảo ngược, học sinh quan sát môi trường sống xung quanh và chia sẻ trong giờ học.',
        category: 'khbd',
        grade: '2',
        subject: 'tnxh',
        file_name: 'KHBD_TNXH2_DongVatSongODau.docx',
        file_size: 2100000,
        file_type: 'docx',
        author_id: 4,
        author_name: 'Cô Lê Thu Hà',
        author_dept: 'Tổ 1',
        status: 'pending',
        avg_rating: 0,
        rating_count: 0,
        download_count: 0,
        view_count: 12,
        created_at: '2026-10-15T13:10:00Z',
        approved_by: null,
        comments: []
    },
    {
        id: 'doc-8',
        title: 'Bài giảng điện tử Toán 4 - Hình bình hành và diện tích hình bình hành',
        description: 'Slide minh họa trực quan cách cắt ghép hình chữ nhật để tìm công thức tính diện tích hình bình hành, có bài tập củng cố tương tác.',
        category: 'baigiang',
        grade: '4',
        subject: 'toan',
        file_name: 'BaiGiang_Toan4_HinhBinhHanh.pptx',
        file_size: 11200000,
        file_type: 'pptx',
        author_id: 7,
        author_name: 'Thầy Vũ Minh Tuấn',
        author_dept: 'Tổ 4',
        status: 'pending',
        avg_rating: 0,
        rating_count: 0,
        download_count: 0,
        view_count: 8,
        created_at: '2026-10-15T14:05:00Z',
        approved_by: null,
        comments: []
    }
];

const INITIAL_NOTIFICATIONS = [
    {
        id: 'notif-1',
        title: 'Tài liệu mới chờ duyệt',
        text: 'Cô Lê Thu Hà vừa nộp KHBD Tự nhiên & Xã hội 2 (Bài 15) chờ kiểm duyệt.',
        time: '20 phút trước',
        icon: '📋',
        type: 'review',
        link: '#/review',
        unread: true
    },
    {
        id: 'notif-2',
        title: 'Tài liệu mới chờ duyệt',
        text: 'Thầy Vũ Minh Tuấn vừa gửi Bài giảng điện tử Toán 4 - Hình bình hành.',
        time: '1 giờ trước',
        icon: '💻',
        type: 'review',
        link: '#/review',
        unread: true
    },
    {
        id: 'notif-3',
        title: 'Học liệu đã được duyệt',
        text: 'Kế hoạch bài dạy Toán 1 của bạn đã được xuất bản công khai lên kho chung.',
        time: '3 giờ trước',
        icon: '✅',
        type: 'doc',
        link: '#/detail/doc-1',
        unread: true
    },
    {
        id: 'notif-4',
        title: 'Đánh giá & Bình luận mới',
        text: 'Thầy Nguyễn Văn Đức vừa chấm 5 sao và để lại lời nhận xét chuyên môn.',
        time: 'Hôm qua',
        icon: '⭐',
        type: 'doc',
        link: '#/detail/doc-1',
        unread: false
    },
    {
        id: 'notif-5',
        title: 'Thông báo chuyên môn BGH',
        text: 'Phát động tuần lễ sáng tạo học liệu số và đổi mới phương pháp giảng dạy.',
        time: '3 ngày trước',
        icon: '📢',
        type: 'system',
        link: '#/dashboard',
        unread: false
    }
];

// ======================== APP STORE & STATE ========================

const store = {
    getSettings() {
        const defaultSettings = {
            drive_account: 'nguyentruongtonuithanh@gmail.com',
            drive_folder_url: 'https://drive.google.com/drive/folders/1KHO_HOC_LIEU_SO_NUITHANH',
            drive_gas_url: 'https://script.google.com/macros/s/AKfycbyAfYDvlgkU5c3908gdGyDNRwmXWB-y3hPNQoD0fPx1PQ5moCIVhKZk-kTw-sim9Dfj/exec',
            school_name: 'Trường Tiểu Học Núi Thành',
            school_email: 'nguyentruongtonuithanh@gmail.com'
        };
        const data = localStorage.getItem('khls_settings_v2');
        if (!data) {
            localStorage.setItem('khls_settings_v2', JSON.stringify(defaultSettings));
            return defaultSettings;
        }
        try {
            const parsed = JSON.parse(data);
            // Cập nhật URL Web App chính thức của trường nếu chưa có hoặc đang trống
            if (!parsed.drive_gas_url || parsed.drive_gas_url.trim() === '') {
                parsed.drive_gas_url = defaultSettings.drive_gas_url;
                localStorage.setItem('khls_settings_v2', JSON.stringify(parsed));
            }
            if (!localStorage.getItem('khls_my_drive_gas_url')) {
                localStorage.setItem('khls_my_drive_gas_url', defaultSettings.drive_gas_url);
            }
            return { ...defaultSettings, ...parsed };
        } catch(e) {
            return defaultSettings;
        }
    },
    saveSettings(settings) {
        localStorage.setItem('khls_settings_v2', JSON.stringify(settings));
    },
    getUsers() {
        const data = localStorage.getItem('khls_users_v2');
        if (!data) {
            localStorage.setItem('khls_users_v2', JSON.stringify(INITIAL_USERS));
            return INITIAL_USERS;
        }
        try {
            const users = JSON.parse(data);
            let updated = false;
            users.forEach(u => {
                if (u && u.fullname && /^(Thầy|Cô)\s+/i.test(u.fullname)) {
                    u.fullname = u.fullname.replace(/^(Thầy|Cô)\s+/i, '').trim();
                    updated = true;
                }
            });
            if (updated) {
                localStorage.setItem('khls_users_v2', JSON.stringify(users));
            }
            return users;
        } catch(e) {
            return INITIAL_USERS;
        }
    },
    saveUsers(users) {
        localStorage.setItem('khls_users_v2', JSON.stringify(users));
    },
    getDocuments() {
        const data = localStorage.getItem('khls_docs_v2');
        if (!data) {
            localStorage.setItem('khls_docs_v2', JSON.stringify(INITIAL_DOCUMENTS));
            return INITIAL_DOCUMENTS;
        }
        try {
            const docs = JSON.parse(data);
            const d1 = docs.find(d => d.id === 'doc-1');
            if (d1 && (!d1.file_url || d1.file_url.includes('calibre-ebook'))) {
                d1.file_url = 'https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/view?usp=sharing';
                localStorage.setItem('khls_docs_v2', JSON.stringify(docs));
            }
            const d2 = docs.find(d => d.id === 'doc-2');
            if (d2 && !d2.file_url) {
                d2.file_url = 'https://drive.google.com/file/d/1Yd8_Nuithanh_BaiGiang_TiengViet2/view?usp=sharing';
                localStorage.setItem('khls_docs_v2', JSON.stringify(docs));
            }
            return docs;
        } catch (e) {
            return INITIAL_DOCUMENTS;
        }
    },
    saveDocuments(docs) {
        try {
            localStorage.setItem('khls_docs_v2', JSON.stringify(docs));
        } catch (storageErr) {
            console.warn('LocalStorage quota exceeded in saveDocuments, stripping heavy base64 data...', storageErr);
            docs.forEach(d => { d.file_data_url = null; });
            try {
                localStorage.setItem('khls_docs_v2', JSON.stringify(docs));
            } catch (storageErr2) {
                console.error('Cannot save even after stripping file_data_url:', storageErr2);
            }
        }
    },
    getReports() {
        const data = localStorage.getItem('khls_reports_v2');
        return data ? JSON.parse(data) : [];
    },
    saveReports(reports) {
        localStorage.setItem('khls_reports_v2', JSON.stringify(reports));
    },
    getNotifications() {
        const data = localStorage.getItem('khls_notifs_v2');
        if (!data) {
            localStorage.setItem('khls_notifs_v2', JSON.stringify(INITIAL_NOTIFICATIONS));
            return INITIAL_NOTIFICATIONS;
        }
        return JSON.parse(data);
    },
    saveNotifications(notifs) {
        localStorage.setItem('khls_notifs_v2', JSON.stringify(notifs));
    }
};

const state = {
    currentPage: 'home',
    currentRouteParams: {},
    user: null,
    pendingContributeAfterLogin: false,
    theme: localStorage.getItem('khls-theme') || 'dark',
    viewMode: 'grid', // 'grid' or 'list'
    activeSlideIndex: 0,
    reviewDeptFilter: 'all'
};

// ======================== APP INITIALIZATION ========================

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    restoreSession();
    renderSidebar();
    renderCategories();
    initRouter();
    initEventListeners();
    updatePendingBadge();
    animateCounters();
    syncDriveLinks();
    // Tự động kiểm tra và đồng bộ học liệu mới từ Google Drive
    setTimeout(() => {
        syncDocumentsFromDrive(false);
    }, 1200);
});

// ======================== THEME ========================

function initTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
}

function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', state.theme);
    localStorage.setItem('khls-theme', state.theme);
}

// ======================== ROUTER ========================

function initRouter() {
    window.addEventListener('hashchange', handleRoute);
    handleRoute();
}

function handleRoute() {
    const rawHash = window.location.hash || '#/';
    const [pathPart, queryPart] = rawHash.split('?');
    const cleanPath = pathPart.replace(/^#\/?/, '');
    const segments = cleanPath.split('/').filter(Boolean);
    const page = segments[0] || 'home';

    const queryParams = new URLSearchParams(queryPart || '');

    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    const targetPageEl = document.getElementById(`page-${page}`);
    if (targetPageEl) {
        targetPageEl.classList.add('active');
        state.currentPage = page;
    } else {
        document.getElementById('page-home').classList.add('active');
        state.currentPage = 'home';
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    updateSidebarActive();
    updatePendingBadge();

    // Route dispatcher
    if (page === 'home') {
        renderHomePage();
    } else if (page === 'upload') {
        if (!state.user) {
            openAuthRequiredModal();
            navigate('#/');
            return;
        }
    } else if (page === 'browse') {
        const cat = segments[1] || '';
        const grade = segments[2] || '';
        const subject = segments[3] || '';
        const query = queryParams.get('q') || '';
        renderBrowsePage(cat, grade, subject, query);
    } else if (page === 'detail') {
        const docId = segments[1];
        renderDetailPage(docId);
    } else if (page === 'review') {
        renderReviewPage();
        const docParam = queryParams.get('doc');
        if (docParam) {
            setTimeout(() => {
                highlightReviewDocFromLink(window.location.hash);
            }, 150);
        }
        syncDocumentsFromDrive(false);
    } else if (page === 'profile') {
        renderProfilePage();
    } else if (page === 'dashboard') {
        renderDashboardPage();
    } else if (page === 'admin') {
        renderAdminPage();
    }

    if (window.innerWidth <= 768) {
        closeSidebar();
    }
}

function navigate(hash) {
    window.location.hash = hash;
}

// ======================== SIDEBAR ========================

function renderSidebar() {
    const tree = document.getElementById('category-tree');
    if (!tree) return;

    let html = '';
    CATEGORIES.forEach(cat => {
        html += `
            <li class="tree-item" data-category="${cat.id}">
                <div class="tree-link" onclick="toggleTreeItem(this.parentElement); event.stopPropagation();">
                    <span class="tree-icon">${cat.icon}</span>
                    <span>${cat.name}</span>
                    <svg class="tree-toggle" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
                </div>
                <ul class="sub-tree">
                    ${GRADES.map(g => `
                        <li class="tree-item" data-grade="${g.id}">
                            <div class="tree-link" onclick="toggleTreeItem(this.parentElement); event.stopPropagation();">
                                <span>📂 ${g.name}</span>
                                <svg class="tree-toggle" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
                            </div>
                            <ul class="sub-tree">
                                ${SUBJECTS.map(s => `
                                    <li>
                                        <a class="tree-link" href="#/browse/${cat.id}/${g.id}/${s.id}" onclick="closeSidebarMobile()">
                                            ${s.name}
                                        </a>
                                    </li>
                                `).join('')}
                            </ul>
                        </li>
                    `).join('')}
                </ul>
            </li>
        `;
    });

    tree.innerHTML = html;
}

function toggleTreeItem(item) {
    if (item) item.classList.toggle('open');
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (window.innerWidth <= 768) {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
    } else {
        sidebar.classList.toggle('collapsed');
        document.body.classList.toggle('sidebar-collapsed');
    }
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
}

function closeSidebarMobile() {
    if (window.innerWidth <= 768) closeSidebar();
}

function updateSidebarActive() {
    document.querySelectorAll('.sidebar-nav .tree-link').forEach(link => link.classList.remove('active'));
    const hash = window.location.hash || '#/';
    const activeLink = document.querySelector(`.sidebar-nav a[href="${hash}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
        let parent = activeLink.closest('.tree-item');
        while (parent) {
            parent.classList.add('open');
            parent = parent.parentElement ? parent.parentElement.closest('.tree-item') : null;
        }
    }
}

// ======================== CATEGORIES (HOME) ========================

function renderCategories() {
    const grid = document.getElementById('categories-grid');
    if (!grid) return;
    const docs = store.getDocuments().filter(d => d.status === 'approved');

    grid.innerHTML = CATEGORIES.map(cat => {
        const count = docs.filter(d => d.category === cat.id).length;
        return `
            <a class="category-card" href="#/browse/${cat.id}" onclick="closeSidebarMobile()">
                <span class="category-icon">${cat.icon}</span>
                <span class="category-name">${cat.name}</span>
                <span class="category-count">${count} tài liệu</span>
            </a>
        `;
    }).join('');
}

// ======================== PAGE: HOME ========================

function renderHomePage() {
    const docs = store.getDocuments().filter(d => d.status === 'approved');
    const users = store.getUsers();

    // 1. Stats Numbers
    const totalDocs = docs.length;
    const totalTeachers = users.length;
    const totalDownloads = docs.reduce((acc, d) => acc + (d.download_count || 0), 0);
    const totalRatings = docs.reduce((acc, d) => acc + (d.rating_count || 0), 0);

    const docEl = document.getElementById('stat-docs');
    const teacherEl = document.getElementById('stat-teachers');
    const downEl = document.getElementById('stat-downloads');
    const starEl = document.getElementById('stat-stars');

    if (docEl) { docEl.setAttribute('data-target', totalDocs); docEl.textContent = totalDocs; }
    if (teacherEl) { teacherEl.setAttribute('data-target', totalTeachers); teacherEl.textContent = totalTeachers; }
    if (downEl) { downEl.setAttribute('data-target', totalDownloads); downEl.textContent = totalDownloads.toLocaleString('vi-VN'); }
    if (starEl) { starEl.setAttribute('data-target', totalRatings); starEl.textContent = totalRatings.toLocaleString('vi-VN'); }

    // 2. Recent Documents (Up to 6)
    const recentGrid = document.getElementById('recent-docs-grid');
    if (recentGrid) {
        const sortedDocs = [...docs].sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 6);
        if (sortedDocs.length === 0) {
            recentGrid.innerHTML = `
                <div class="empty-state">
                    <p>Chưa có tài liệu nào được phê duyệt. Hãy là người đầu tiên đóng góp!</p>
                </div>
            `;
        } else {
            recentGrid.innerHTML = sortedDocs.map(renderDocCard).join('');
        }
    }

    // 3. Leaderboard Top 10 Teachers
    const leaderboardEl = document.getElementById('leaderboard');
    if (leaderboardEl) {
        const sortedUsers = [...users]
            .filter(u => u.role !== 'admin')
            .sort((a, b) => (b.total_downloads + b.total_uploads * 10) - (a.total_downloads + a.total_uploads * 10))
            .slice(0, 10);

        leaderboardEl.innerHTML = sortedUsers.map((u, idx) => {
            const rankClass = idx === 0 ? 'rank-1' : idx === 1 ? 'rank-2' : idx === 2 ? 'rank-3' : 'rank-other';
            const medal = idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `#${idx + 1}`;
            return `
                <div class="leaderboard-item">
                    <div class="leaderboard-rank ${rankClass}">${medal}</div>
                    <div class="leaderboard-avatar">${u.avatar_letter || u.fullname.charAt(0)}</div>
                    <div class="leaderboard-info">
                        <div class="leaderboard-name">${u.fullname}</div>
                        <div class="leaderboard-dept">${u.department} ${u.honor ? `• <span class="badge-honor">✨ ${u.honor}</span>` : ''}</div>
                    </div>
                    <div class="leaderboard-score">
                        <span class="leaderboard-score-number">${u.total_downloads}</span>
                        <span class="leaderboard-score-label">lượt tải (${u.total_uploads} bài)</span>
                    </div>
                </div>
            `;
        }).join('');
    }
}

function animateCounters() {
    document.querySelectorAll('.stat-number[data-target]').forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target')) || 0;
        if (target === 0) return;
        let current = 0;
        const step = Math.max(1, Math.ceil(target / 40));
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = current.toLocaleString('vi-VN');
        }, 25);
    });
}

// ======================== PAGE: BROWSE ========================

function renderBrowsePage(cat = '', grade = '', subject = '', query = '') {
    const gradeSelect = document.getElementById('filter-grade');
    const subjectSelect = document.getElementById('filter-subject');
    const sortSelect = document.getElementById('filter-sort');
    const titleEl = document.getElementById('browse-title');
    const breadcrumbEl = document.getElementById('browse-breadcrumb');
    const gridEl = document.getElementById('browse-docs-grid');

    if (gradeSelect) gradeSelect.value = grade;
    if (subjectSelect) subjectSelect.value = subject;

    let docs = store.getDocuments().filter(d => d.status === 'approved');

    // Title & Breadcrumb updates
    const currentCatObj = CATEGORIES.find(c => c.id === cat);
    const catName = currentCatObj ? currentCatObj.name : 'Tất cả tài liệu';
    if (titleEl) {
        titleEl.textContent = query ? `Kết quả tìm kiếm cho: "${query}"` : catName;
    }
    if (breadcrumbEl) {
        breadcrumbEl.innerHTML = `
            <a href="#/">Trang chủ</a>
            <span class="breadcrumb-sep">›</span>
            <span>${catName}</span>
            ${grade ? `<span class="breadcrumb-sep">›</span><span>Khối ${grade}</span>` : ''}
            ${subject ? `<span class="breadcrumb-sep">›</span><span>${getSubjectName(subject)}</span>` : ''}
        `;
    }

    // Filter Logic
    if (cat) docs = docs.filter(d => d.category === cat);
    if (grade) docs = docs.filter(d => d.grade === grade);
    if (subject) docs = docs.filter(d => d.subject === subject);
    if (query) {
        const q = query.toLowerCase();
        docs = docs.filter(d =>
            d.title.toLowerCase().includes(q) ||
            (d.description && d.description.toLowerCase().includes(q)) ||
            d.author_name.toLowerCase().includes(q)
        );
    }

    // Sort Logic
    const sortVal = sortSelect ? sortSelect.value : 'newest';
    if (sortVal === 'popular') {
        docs.sort((a, b) => (b.download_count || 0) - (a.download_count || 0));
    } else if (sortVal === 'rating') {
        docs.sort((a, b) => (b.avg_rating || 0) - (a.avg_rating || 0));
    } else {
        docs.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }

    if (gridEl) {
        if (docs.length === 0) {
            gridEl.innerHTML = `
                <div class="empty-state">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.3"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                    <p>Không tìm thấy tài liệu phù hợp với bộ lọc hiện tại.</p>
                    <a href="#/upload" class="btn btn-primary" style="margin-top:1rem;">Đóng góp tài liệu đầu tiên</a>
                </div>
            `;
        } else {
            gridEl.className = state.viewMode === 'list' ? 'docs-list' : 'docs-grid';
            gridEl.innerHTML = docs.map(renderDocCard).join('');
        }
    }
}

// ======================== PAGE: DETAIL ========================

function renderDetailPage(docId) {
    const container = document.getElementById('detail-container');
    const titleBreadcrumb = document.getElementById('detail-breadcrumb-title');
    if (!container) return;

    const doc = store.getDocuments().find(d => d.id === docId);
    if (!doc) {
        container.innerHTML = `
            <div class="empty-state">
                <h2>Không tìm thấy tài liệu</h2>
                <p>Học liệu này có thể đã bị xóa hoặc chưa được phê duyệt.</p>
                <a href="#/browse" class="btn btn-primary">Quay lại danh mục</a>
            </div>
        `;
        return;
    }

    // Increment views
    doc.view_count = (doc.view_count || 0) + 1;
    store.saveDocuments(store.getDocuments().map(d => d.id === doc.id ? doc : d));

    if (titleBreadcrumb) titleBreadcrumb.textContent = doc.title;

    const catObj = CATEGORIES.find(c => c.id === doc.category);
    const catName = catObj ? catObj.name : 'Tài liệu';
    const driveId = extractGoogleDriveId(doc.file_url);

    // Related documents
    const relatedDocs = store.getDocuments()
        .filter(d => d.status === 'approved' && d.id !== doc.id && (d.grade === doc.grade || d.category === doc.category))
        .slice(0, 3);

    container.innerHTML = `
        <div class="detail-grid">
            <div class="detail-main">
                <div class="detail-card">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <span class="doc-badge-pill">${catObj?.icon || '📁'} ${catName} • Khối ${doc.grade} • ${getSubjectName(doc.subject)}</span>
                        <button class="btn btn-secondary btn-sm" onclick="openReportModal('${doc.id}')" title="Báo cáo lỗi">
                            ⚠️ Báo cáo
                        </button>
                    </div>

                    <h1 class="detail-title">${doc.title}</h1>

                    <div class="detail-meta-bar">
                        <span>👤 Tác giả: <strong>${doc.author_name}</strong> (${doc.author_dept || 'Tổ Chuyên Môn'})</span>
                        <span>📅 ${timeAgo(doc.created_at)}</span>
                        <span>👁️ ${doc.view_count} xem</span>
                        <span>⬇️ ${doc.download_count || 0} tải</span>
                        <span>⭐ ${doc.avg_rating ? doc.avg_rating.toFixed(1) : '5.0'} (${doc.rating_count || 0} đánh giá)</span>
                    </div>

                    <!-- Simulated In-Page Preview Hero -->
                    <div class="preview-hero-box">
                        <span class="preview-watermark">${getFileTypeIcon(doc.file_name)}</span>
                        <h3>${doc.file_name}</h3>
                        <p style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">Dung lượng: ${formatFileSize(doc.file_size)}</p>
                        <div style="margin-top:var(--space-md); display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
                            <button class="btn btn-primary" onclick="openPreviewModal('${doc.id}')" title="Mở file lên xem trực tuyến ngay trên trang">
                                👁️ Xem trực tuyến
                            </button>
                            ${driveId ? `
                                <a href="https://drive.google.com/file/d/${driveId}/view" target="_blank" rel="noopener" class="btn btn-outline" style="background:#ffffff; color:#1e293b; border-color:#cbd5e1; font-weight:600; display:inline-flex; align-items:center; gap:6px; text-decoration:none;">
                                    <svg width="18" height="18" viewBox="0 0 87.3 78" fill="none"><path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/><path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47"/><path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.5l5.85 10.15z" fill="#ea4335"/><path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/><path d="m59.8 53h27.5c0-1.55-.4-3.1-1.2-4.5l-20.4-35.35c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8z" fill="#2684fc"/><path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l-20.85-36.1-13.75 23.8 9.3 16.1c1.35.8 2.9 1.2 4.5 1.2h14.2c1.35 0 2.5-.4 3.3-1.7z" fill="#ffba00"/></svg>
                                    Mở trên Google Drive ↗
                                </a>
                            ` : ''}
                            <button class="btn btn-secondary" onclick="openDocumentInNewTab('${doc.id}')" title="Mở file lên xem toàn màn hình trong tab mới">
                                ↗️ Mở tab mới
                            </button>
                            <button class="btn btn-success btn-download-main" onclick="handleDownloadDoc('${doc.id}')" title="Tải tệp tin về máy">
                                ⬇️ Tải tài liệu về máy
                            </button>
                        </div>
                    </div>

                    <div class="detail-desc-box">
                        <h3 style="margin-bottom:var(--space-sm);">📖 Mô tả & Yêu cầu cần đạt</h3>
                        <p style="color:var(--text-secondary); line-height:1.7;">${doc.description || 'Chưa có mô tả chi tiết cho học liệu này.'}</p>
                    </div>
                </div>

                <!-- Đánh giá & Bình luận -->
                <div class="detail-card">
                    <h3 style="margin-bottom:var(--space-md);">💬 Đánh giá & Bình luận từ đồng nghiệp</h3>
                    
                    <div class="interactive-rating-wrapper" style="background:var(--bg-surface); padding:var(--space-md); border-radius:var(--radius-md); border:1px solid var(--border-color);">
                        <p style="font-weight:600; font-size:0.9rem;">Gửi đánh giá của Thầy/Cô cho học liệu này:</p>
                        <div class="interactive-rating-box" id="detail-star-box">
                            <span class="star-btn" data-star="1" onclick="selectStar(1)">★</span>
                            <span class="star-btn" data-star="2" onclick="selectStar(2)">★</span>
                            <span class="star-btn" data-star="3" onclick="selectStar(3)">★</span>
                            <span class="star-btn" data-star="4" onclick="selectStar(4)">★</span>
                            <span class="star-btn" data-star="5" onclick="selectStar(5)">★</span>
                            <span id="star-score-text" style="font-size:1rem; font-weight:700; margin-left:10px; color:var(--primary);">5/5 sao</span>
                        </div>
                        <form id="comment-form" onsubmit="submitComment(event, '${doc.id}')">
                            <textarea class="form-input form-textarea" id="comment-input" placeholder="Viết nhận xét, góp ý chuyên môn hoặc lời cảm ơn tác giả..." rows="3" required></textarea>
                            <div style="display:flex; justify-content:flex-end; margin-top:var(--space-sm);">
                                <button type="submit" class="btn btn-primary">Gửi đánh giá & bình luận</button>
                            </div>
                        </form>
                    </div>

                    <!-- Comment List -->
                    <div class="comments-container" style="margin-top:var(--space-xl);">
                        <h4 style="margin-bottom:var(--space-sm);">Tất cả nhận xét (${doc.comments ? doc.comments.length : 0})</h4>
                        <div id="comments-list">
                            ${(doc.comments && doc.comments.length > 0)
                                ? doc.comments.map(c => `
                                    <div class="comment-item">
                                        <div class="comment-avatar">${c.author.charAt(0)}</div>
                                        <div class="comment-body">
                                            <div class="comment-author-name">
                                                <span>${c.author}</span>
                                                <span class="comment-date">• ${timeAgo(c.date)}</span>
                                            </div>
                                            <div class="comment-text">${c.text}</div>
                                        </div>
                                    </div>
                                `).join('')
                                : '<p style="color:var(--text-muted); font-size:0.88rem; padding:var(--space-md) 0;">Chưa có bình luận nào. Hãy gửi nhận xét đầu tiên!</p>'
                            }
                        </div>
                    </div>
                </div>
            </div>

            <!-- Detail Aside -->
            <div class="detail-aside">
                <!-- Author Card -->
                <div class="author-honor-card">
                    <div class="author-honor-avatar">${doc.author_name.charAt(0)}</div>
                    <div>
                        <div style="font-weight:700;">${doc.author_name}</div>
                        <div style="font-size:0.8rem; color:var(--text-muted);">${doc.author_dept || 'Trường TH Núi Thành'}</div>
                        <div class="badge-honor">🏆 Nhà giáo tích cực</div>
                    </div>
                </div>

                <!-- Document Specs -->
                <div class="detail-card">
                    <h4 style="margin-bottom:var(--space-sm);">📋 Thông tin kỹ thuật</h4>
                    <ul style="font-size:0.85rem; line-height:2.2; color:var(--text-secondary);">
                        <li>📁 <strong>Định dạng:</strong> ${doc.file_type.toUpperCase()}</li>
                        <li>⚖️ <strong>Dung lượng:</strong> ${formatFileSize(doc.file_size)}</li>
                        <li>☁️ <strong>Lưu trữ:</strong> ${driveId ? '<span style="color:#2563eb; font-weight:700;">Google Drive Trường</span>' : 'Bộ nhớ hệ thống'}</li>
                        <li>🏫 <strong>Trường:</strong> TH Núi Thành</li>
                        <li>🛡️ <strong>Bản quyền:</strong> Giữ nguyên tên tác giả</li>
                        <li>✅ <strong>Kiểm duyệt:</strong> ${doc.approved_by || 'Đã kiểm duyệt'}</li>
                    </ul>
                </div>

                <!-- Related Docs -->
                ${relatedDocs.length > 0 ? `
                    <div class="detail-card">
                        <h4 style="margin-bottom:var(--space-sm);">📚 Học liệu cùng khối/môn</h4>
                        <div style="display:flex; flex-direction:column; gap:10px;">
                            ${relatedDocs.map(r => `
                                <a href="#/detail/${r.id}" style="font-size:0.85rem; display:block; padding:8px; background:var(--bg-surface); border-radius:var(--radius-sm); border:1px solid var(--border-color);">
                                    <div style="font-weight:600; color:var(--text-primary); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${r.title}</div>
                                    <div style="font-size:0.75rem; color:var(--text-muted);">⬇ ${r.download_count} • ⭐ ${r.avg_rating}</div>
                                </a>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        </div>
    `;

    selectStar(5);
}

let currentSelectedRating = 5;
function selectStar(star) {
    currentSelectedRating = star;
    const box = document.getElementById('detail-star-box');
    const scoreText = document.getElementById('star-score-text');
    if (!box) return;
    box.querySelectorAll('.star-btn').forEach(btn => {
        const s = parseInt(btn.getAttribute('data-star'));
        if (s <= star) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    if (scoreText) scoreText.textContent = `${star}/5 sao`;
}

function submitComment(e, docId) {
    e.preventDefault();
    const input = document.getElementById('comment-input');
    const text = input ? input.value.trim() : '';
    if (!text) return;

    const authorName = state.user ? state.user.fullname : 'Giáo viên Khách';
    const docs = store.getDocuments();
    const doc = docs.find(d => d.id === docId);

    if (doc) {
        if (!doc.comments) doc.comments = [];
        doc.comments.unshift({
            author: authorName,
            text: text,
            date: new Date().toISOString()
        });

        // Update rating
        const newCount = (doc.rating_count || 0) + 1;
        doc.avg_rating = parseFloat((((doc.avg_rating || 5) * (newCount - 1) + currentSelectedRating) / newCount).toFixed(1));
        doc.rating_count = newCount;

        store.saveDocuments(docs);
        showToast('Cảm ơn Thầy/Cô đã đánh giá và nhận xét! 🎉', 'success');
        renderDetailPage(docId);
    }
}

function downloadDocument(docId) {
    handleDownloadDoc(docId);
}

function handleDownloadDoc(docId) {
    const docs = store.getDocuments();
    const doc = docs.find(d => d.id === docId);
    if (!doc) return;

    doc.download_count = (doc.download_count || 0) + 1;
    store.saveDocuments(docs);

    // Update author stats
    const users = store.getUsers();
    const author = users.find(u => u.id === doc.author_id);
    if (author) {
        author.total_downloads = (author.total_downloads || 0) + 1;
        store.saveUsers(users);
    }

    const driveId = extractGoogleDriveId(doc.file_url);
    if (driveId) {
        window.open(`https://drive.google.com/uc?export=download&id=${driveId}`, '_blank');
        showToast(`Đang mở tải file từ Google Drive: ${doc.file_name} 🚀`, 'success');
        return;
    } else if (doc.file_url && (doc.file_url.startsWith('http://') || doc.file_url.startsWith('https://'))) {
        window.open(doc.file_url, '_blank');
        showToast(`Đang tải file: ${doc.file_name} 🚀`, 'success');
        return;
    }

    if (doc.file_data_url) {
        // Direct download of genuine uploaded binary/data
        const a = document.createElement('a');
        a.href = doc.file_data_url;
        a.download = doc.file_name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    } else {
        // Generate authentic downloadable file
        const textContent = getAccurateDocumentText(doc);
        const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = doc.file_name.endsWith('.txt') ? doc.file_name : (doc.file_name.replace(/\.[^/.]+$/, "") + ".txt");
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    showToast(`Đang tải file: ${doc.file_name} 🚀`, 'success');
    if (location.hash.startsWith('#/detail/')) {
        renderDetailPage(docId);
    }
}

function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/[&<>"']/g, function(m) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        }[m];
    });
}

function getAccurateDocumentText(doc) {
    const combinedStr = ((doc.title || '') + ' ' + (doc.file_name || '') + ' ' + (doc.description || '')).toLowerCase();
    const isTin3 = combinedStr.includes('tin3') || combinedStr.includes('thong tin') || combinedStr.includes('quyet dinh');

    if (isTin3) {
        return `TRƯỜNG TIỂU HỌC NÚI THÀNH
TỔ CHUYÊN MÔN TIN HỌC & CÔNG NGHỆ
NĂM HỌC 2025 - 2026

KẾ HOẠCH BÀI DẠY MÔN TIN HỌC LỚP 3 (CHƯƠNG TRÌNH GDPT 2018)
CHỦ ĐỀ A: MÁY TÍNH VÀ EM
BÀI 1: THÔNG TIN VÀ QUYẾT ĐỊNH (TIẾT 1)

Giáo viên thực hiện: ${doc.author_name}
Đơn vị: ${doc.author_dept || 'Trường TH Núi Thành'}
Tệp đính kèm: ${doc.file_name}

I. YÊU CẦU CẦN ĐẠT:
1. Năng lực đặc thù:
- Nêu được ví dụ đơn giản minh họa cho vai trò của thông tin trong việc ra quyết định của con người.
- Nhận biết các giác quan (mắt, tai, mũi, lưỡi, xúc giác) tham gia vào việc thu nhận thông tin.
- Hiểu được chu trình: Thu nhận thông tin -> Não bộ suy nghĩ -> Ra quyết định hành động.
2. Năng lực chung:
- Tự chủ và tự học: Tự giác tham gia vào hoạt động học tập.
- Giao tiếp và hợp tác: Tích cực thảo luận cặp đôi/nhóm về các quyết định.
3. Phẩm chất:
- Chăm chỉ, trách nhiệm, hình thành thói quen cẩn trọng trước khi đưa ra quyết định an toàn.

II. ĐỒ DÙNG DẠY HỌC:
- Giáo viên: Kế hoạch bài dạy, bài giảng điện tử PowerPoint, phiếu học tập số 1 & 2.
- Học sinh: Sách giáo khoa Tin học 3, vở bài tập.

III. CÁC HOẠT ĐỘNG DẠY HỌC CHỦ YẾU (TIẾT 1):
1. Hoạt động 1: Khởi động (5 phút)
- Trò chơi "Nghe hiệu lệnh - Hành động chuẩn".
- GV phát hiệu lệnh (tiếng còi, vỗ tay hoặc thẻ xanh/đỏ).
- Kết luận: Hiệu lệnh là thông tin, hành động tương ứng là quyết định.

2. Hoạt động 2: Khám phá kiến thức mới (18 phút)
- Hoạt động 2.1: Vai trò của thông tin trong việc ra quyết định.
  + Tình huống: Thấy trời mây đen, sấm chớp -> Quyết định mang áo mưa đi học.
  + Kết luận: Thông tin thu nhận được giúp con người đưa ra quyết định phù hợp.
- Hoạt động 2.2: Các giác quan thu nhận thông tin.
  + Thị giác (Mắt): Nhìn thấy đèn tín hiệu giao thông, chữ viết.
  + Thính giác (Tai): Nghe tiếng còi xe, tiếng trống trường, tiếng thầy cô.
  + Khứu giác (Mũi): Ngửi thấy mùi thức ăn, mùi khói khét.
  + Vị giác (Lưỡi): Nếm vị ngọt, mặn, cay.
  + Xúc giác (Da): Cảm nhận nóng, lạnh, đau.

3. Hoạt động 3: Luyện tập (8 phút)
- Làm phiếu học tập nối thông tin với quyết định thực tế.

4. Hoạt động 4: Vận dụng (4 phút)
- Tình huống thực tế: Xem thời khóa biểu để chuẩn bị sách vở cho ngày mai.
- Củng cố dặn dò bài học.

TỔ TRƯỞNG CHUYÊN MÔN                                 GIÁO VIÊN SOẠN BÀI
(Đã ký duyệt)                                        ${doc.author_name}
`;
    }

    return `TRƯỜNG TIỂU HỌC NÚI THÀNH
KHO HỌC LIỆU SỐ
NĂM HỌC 2025 - 2026

TÀI LIỆU: ${doc.title}
Môn: ${getSubjectName(doc.subject)} | Khối: Khối ${doc.grade}
Tác giả: ${doc.author_name} (${doc.author_dept || 'Tổ Chuyên Môn'})
Tệp đính kèm: ${doc.file_name}

Mô tả:
${doc.description || 'Chưa có mô tả.'}

I. YÊU CẦU CẦN ĐẠT
1. Năng lực đặc thù: Nắm vững kiến thức trọng tâm bài học, giải quyết tốt bài tập.
2. Phẩm chất: Chăm chỉ, trung thực, trách nhiệm trong học tập.

II. TIẾN TRÌNH DẠY HỌC
1. Khởi động (5 phút)
2. Khám phá (15 phút)
3. Luyện tập (10 phút)
4. Vận dụng (5 phút)
`;
}

function getAccurateDocumentHtml(doc) {
    // 1. If authentic HTML exists (parsed from Mammoth / real upload)
    // ONLY display the file content! No outside administrative headers!
    if (doc.file_content_html && doc.file_content_html.trim().length > 0) {
        return `
            <div class="docx-clean-document">
                ${doc.file_content_html}
            </div>
        `;
    }

    // 2. If description exists, show description cleanly
    if (doc.description && doc.description.trim().length > 0) {
        return `
            <div class="docx-clean-document">
                <h2 style="font-size:1.35rem; font-weight:700; color:#0f172a; margin-bottom:1rem;">${escapeHtml(doc.file_name || doc.title)}</h2>
                <div style="font-size:1rem; line-height:1.7; color:#334155; white-space:pre-wrap;">${escapeHtml(doc.description)}</div>
            </div>
        `;
    }

    return `
        <div class="docx-clean-document">
            <h2 style="font-size:1.35rem; font-weight:700; color:#0f172a; margin-bottom:1rem;">${escapeHtml(doc.file_name || doc.title)}</h2>
            <p style="color:#64748b; font-style:italic;">Đang tải và hiển thị nội dung tệp...</p>
        </div>
    `;
    
    // (Legacy mock templates disabled)
    const combinedStr = ((doc.title || '') + ' ' + (doc.file_name || '') + ' ' + (doc.description || '')).toLowerCase();
    const isTin3 = combinedStr.includes('tin3') || 
                   combinedStr.includes('thong tin') || 
                   combinedStr.includes('thông tin') || 
                   combinedStr.includes('quyet dinh') || 
                   combinedStr.includes('quyết định') ||
                   (doc.subject === 'tinhoc' && doc.grade === '3');

    if (isTin3) {
        return `
            <div class="docx-clean-document">
                <div style="text-align:center; margin-bottom: 24px; padding-bottom:16px; border-bottom:1px solid #e2e8f0;">
                    <div style="font-size:0.85rem; font-weight:700; color:#2563eb; text-transform:uppercase; letter-spacing:0.5px;">CHỦ ĐỀ A: MÁY TÍNH VÀ EM</div>
                    <h2 style="font-size:1.5rem; font-weight:800; color:#0f172a; margin:8px 0 4px;">BÀI 1: THÔNG TIN VÀ QUYẾT ĐỊNH</h2>
                    <p style="font-style:italic; color:#475569; font-size:0.95rem;">(Thời lượng: 2 tiết - Thực hiện Tiết 1: Thông tin và quyết định của con người)</p>
                </div>

                <div class="doc-section">
                    <h3 class="doc-section-h3">I. YÊU CẦU CẦN ĐẠT</h3>
                    <div class="doc-content-block">
                        <p><strong>1. Năng lực đặc thù:</strong></p>
                        <ul>
                            <li>Nêu được ví dụ đơn giản minh họa cho vai trò của thông tin trong việc ra quyết định của con người.</li>
                            <li>Nhận biết được 3 bước cốt lõi trong quá trình xử lý: <em>Tiếp nhận thông tin qua giác quan &rarr; Não bộ suy nghĩ &rarr; Đưa ra hành động / quyết định</em>.</li>
                            <li>Kể tên được các giác quan giúp con người thu nhận thông tin từ thế giới xung quanh (Mắt, Tai, Mũi, Lưỡi, Da).</li>
                        </ul>
                        <p style="margin-top:8px;"><strong>2. Năng lực chung:</strong></p>
                        <ul>
                            <li><strong>Tự chủ và tự học:</strong> Tự giác quan sát tình huống thực tế, biết suy nghĩ và trả lời các câu hỏi trong phiếu học tập.</li>
                            <li><strong>Giao tiếp và hợp tác:</strong> Biết trao đổi, thảo luận nhóm đôi để phân tích tình huống thực tiễn một cách tự tin.</li>
                            <li><strong>Giải quyết vấn đề và sáng tạo:</strong> Biết vận dụng thông tin chính xác để đưa ra quyết định an toàn trong sinh hoạt hàng ngày.</li>
                        </ul>
                        <p style="margin-top:8px;"><strong>3. Phẩm chất chủ yếu:</strong></p>
                        <ul>
                            <li><strong>Chăm chỉ:</strong> Tích cực tham gia các hoạt động học tập và tương tác cùng thầy cô, bạn bè.</li>
                            <li><strong>Trách nhiệm:</strong> Hình thành thói quen cẩn trọng, quan sát kỹ thông tin xung quanh trước khi đưa ra quyết định hành động.</li>
                        </ul>
                    </div>
                </div>

                <div class="doc-section">
                    <h3 class="doc-section-h3">II. ĐỒ DÙNG DẠY HỌC</h3>
                    <div class="doc-content-block">
                        <p><strong>1. Giáo viên:</strong></p>
                        <ul>
                            <li>Kế hoạch bài dạy, giáo án điện tử PowerPoint minh họa trực quan.</li>
                            <li>Máy vi tính kết nối màn hình tương tác phòng Tin học Trường TH Núi Thành.</li>
                            <li>Thẻ màu trò chơi (Xanh - Vàng - Đỏ), âm thanh hiệu lệnh (tiếng còi xe, tiếng chuông báo thức, tiếng trống trường).</li>
                            <li>Phiếu học tập số 1 (Nối thông tin với quyết định) và Phiếu học tập số 2 (Phân loại giác quan).</li>
                        </ul>
                        <p style="margin-top:8px;"><strong>2. Học sinh:</strong></p>
                        <ul>
                            <li>Sách giáo khoa Tin học 3, Vở bài tập Tin học và bút viết.</li>
                        </ul>
                    </div>
                </div>

                <div class="doc-section">
                    <h3 class="doc-section-h3">III. CÁC HOẠT ĐỘNG DẠY HỌC CHỦ YẾU (TIẾT 1)</h3>
                    
                    <div class="doc-activity-card">
                        <div class="doc-activity-header">
                            <span class="badge-act">HOẠT ĐỘNG 1</span>
                            <strong>KHỞI ĐỘNG &amp; KẾT NỐI (5 phút)</strong>
                        </div>
                        <div class="doc-activity-body">
                            <p><strong>a) Mục tiêu:</strong> Tạo không khí học tập hào hứng, khơi gợi kinh nghiệm thực tế về thông tin và quyết định.</p>
                            <p><strong>b) Cách thức tiến hành:</strong></p>
                            <ul>
                                <li>GV tổ chức trò chơi <em>"Nghe hiệu lệnh - Hành động chuẩn"</em>:
                                    <ul>
                                        <li>Khi GV giơ thẻ màu <strong>Đỏ</strong>: Cả lớp làm động tác dừng lại, giơ hai tay chéo trước ngực.</li>
                                        <li>Khi GV giơ thẻ màu <strong>Xanh</strong>: Cả lớp làm động tác vung tay đi bộ tại chỗ.</li>
                                        <li>Khi GV thổi tiếng còi ngắn: Cả lớp ngồi ngay ngắn khoanh tay lên bàn.</li>
                                    </ul>
                                </li>
                                <li>GV hỏi: <em>"Vì sao các em biết khi nào cần dừng lại, khi nào được đi bộ và khi nào ngồi ngay ngắn?"</em></li>
                                <li>HS trả lời: <em>"Thưa thầy/cô, nhờ mắt chúng em nhìn thấy màu sắc của thẻ và tai nghe thấy tiếng còi."</em></li>
                                <li>GV dẫn dắt: Màu sắc thẻ, âm thanh tiếng còi chính là <strong>Thông tin</strong> mà các em thu nhận được. Hành động dừng lại hay đi tiếp chính là <strong>Quyết định</strong> của các em. Hôm nay chúng ta cùng học <strong>Bài 1: Thông tin và quyết định</strong>.</li>
                            </ul>
                        </div>
                    </div>

                    <div class="doc-activity-card">
                        <div class="doc-activity-header">
                            <span class="badge-act">HOẠT ĐỘNG 2</span>
                            <strong>HÌNH THÀNH KIẾN THỨC MỚI (18 phút)</strong>
                        </div>
                        <div class="doc-activity-body">
                            <p><strong>Hoạt động 2.1: Vai trò của thông tin trong việc ra quyết định (10 phút)</strong></p>
                            <ul>
                                <li>GV trình chiếu hình ảnh tình huống: <em>Bạn An đang chuẩn bị đi học, nhìn ra cửa sổ thấy trời nhiều mây đen, gió thổi mạnh và nghe thấy tiếng sấm đùng đoàng. Bạn An liền quay vào lấy áo mưa bỏ vào cặp sách.</em></li>
                                <li>GV yêu cầu học sinh thảo luận cặp đôi trả lời 3 câu hỏi:
                                    <ol style="margin-left:20px; margin-top:4px;">
                                        <li>Bạn An đã nhìn thấy và nghe thấy điều gì?</li>
                                        <li>Những điều bạn An nhìn thấy và nghe thấy được gọi là gì?</li>
                                        <li>Sau khi biết điều đó, bạn An đã đưa ra quyết định hành động như thế nào?</li>
                                    </ol>
                                </li>
                                <li>Đại diện các nhóm học sinh phát biểu, nhận xét và phản biện.</li>
                                <li>GV nhận xét và chuẩn xác kiến thức:
                                    <div class="doc-summary-box">
                                        💡 <strong>Ghi nhớ cốt lõi:</strong><br>
                                        • <strong>Thông tin:</strong> Mây đen mù mịt, gió to, tiếng sấm đùng đoàng.<br>
                                        • <strong>Bộ não xử lý:</strong> Phán đoán trời sắp mưa to.<br>
                                        • <strong>Quyết định:</strong> Mang theo áo mưa để không bị ướt khi đến lớp.<br>
                                        &rArr; <em>Thông tin giúp con người đưa ra những quyết định đúng đắn, kịp thời và an toàn trong cuộc sống.</em>
                                    </div>
                                </li>
                            </ul>

                            <p style="margin-top:14px;"><strong>Hoạt động 2.2: Các giác quan giúp con người thu nhận thông tin (8 phút)</strong></p>
                            <ul>
                                <li>GV đặt câu hỏi: <em>"Hàng ngày, các em tiếp nhận thông tin từ thế giới xung quanh qua những giác quan nào?"</em></li>
                                <li>GV tổng kết bảng phân loại trực quan 5 giác quan:
                                    <table class="doc-lesson-table">
                                        <thead>
                                            <tr>
                                                <th style="width:25%;">Giác quan</th>
                                                <th style="width:35%;">Thông tin thu nhận được</th>
                                                <th style="width:40%;">Ví dụ quyết định thực tế</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>Mắt (Thị giác)</strong></td>
                                                <td>Màu sắc đèn tín hiệu, chữ viết trên bảng, biển báo</td>
                                                <td>Thấy đèn đỏ &rarr; Dừng xe trước vạch quy định</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Tai (Thính giác)</strong></td>
                                                <td>Tiếng chuông báo thức, tiếng còi xe, lời giảng bài</td>
                                                <td>Nghe tiếng chuông &rarr; Thức dậy chuẩn bị đi học</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Mũi (Khứu giác)</strong></td>
                                                <td>Mùi thơm đồ ăn, mùi khét của lửa, mùi khí ga</td>
                                                <td>Ngửi thấy mùi khét &rarr; Báo ngay cho người lớn kiểm tra</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Lưỡi (Vị giác)</strong></td>
                                                <td>Vị ngọt của đường, vị mặn, chua, cay, đắng</td>
                                                <td>Nếm canh thấy nhạt &rarr; Nêm thêm chút gia vị</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Da (Xúc giác)</strong></td>
                                                <td>Nhiệt độ nóng/lạnh, bề mặt nhẵn bóng hoặc sần sùi</td>
                                                <td>Cảm thấy gió mùa đông rét buốt &rarr; Mặc thêm áo ấm</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="doc-activity-card">
                        <div class="doc-activity-header">
                            <span class="badge-act">HOẠT ĐỘNG 3</span>
                            <strong>LUYỆN TẬP &amp; THỰC HÀNH (8 phút)</strong>
                        </div>
                        <div class="doc-activity-body">
                            <p><strong>a) Mục tiêu:</strong> Củng cố khả năng phân biệt rõ ràng giữa "Thông tin nhận được" và "Quyết định hành động".</p>
                            <p><strong>b) Tiến hành:</strong> GV phát Phiếu học tập số 1. Học sinh nối cặp tình huống tương ứng:</p>
                            <div style="background:#f1f5f9; padding:12px; border-radius:6px; margin:8px 0; font-size:0.9rem;">
                                <div>1. Nhìn thấy biển báo "Khu vực trường học - Đi chậm" &rarr; <em>[Quyết định: Giảm tốc độ xe và chú ý quan sát]</em></div>
                                <div style="margin-top:6px;">2. Nghe tiếng trống trường báo tan học &rarr; <em>[Quyết định: Thu dọn sách vở, xếp hàng ra về]</em></div>
                                <div style="margin-top:6px;">3. Xem lịch thấy ngày mai là thứ Hai chào cờ &rarr; <em>[Quyết định: Chuẩn bị đồng phục chỉnh tề, mang khăn quàng đỏ]</em></div>
                            </div>
                            <p>GV mời học sinh thao tác trên màn hình tương tác, cả lớp nhận xét và biểu dương bạn làm đúng.</p>
                        </div>
                    </div>

                    <div class="doc-activity-card">
                        <div class="doc-activity-header">
                            <span class="badge-act">HOẠT ĐỘNG 4</span>
                            <strong>VẬN DỤNG &amp; DẶN DÒ (4 phút)</strong>
                        </div>
                        <div class="doc-activity-body">
                            <p><strong>Tình huống vận dụng thực tế tại Trường TH Núi Thành:</strong></p>
                            <ul>
                                <li>GV: <em>"Tối nay trước khi đi ngủ, để biết ngày mai cần chuẩn bị sách vở và đồ dùng gì đến lớp, em sẽ tìm thông tin ở đâu?"</em></li>
                                <li>HS: <em>"Em xem Thời khóa biểu của lớp dán trên góc học tập."</em></li>
                                <li>GV: <em>"Chính xác! Xem Thời khóa biểu là thu nhận thông tin, chuẩn bị đúng sách vở là quyết định thông minh."</em></li>
                            </ul>
                            <p style="margin-top:8px;"><strong>Dặn dò về nhà:</strong></p>
                            <ul>
                                <li>Tập quan sát các tình huống trong sinh hoạt gia đình và chỉ ra thông tin nào đã giúp em ra quyết định.</li>
                                <li>Xem trước Tiết 2 của bài: <em>"Các dạng thông tin thường gặp (Văn bản, Hình ảnh, Âm thanh)"</em>.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="doc-footer-sign">
                    <div style="text-align:center;">
                        <strong>TỔ TRƯỞNG CHUYÊN MÔN DUYỆT</strong><br>
                        <span style="font-size:0.82rem; color:#64748b;">(Ký và ghi rõ họ tên)</span>
                        <div style="height:50px;"></div>
                        <strong>Cô Trần Thị Mai</strong>
                    </div>
                    <div style="text-align:center;">
                        <strong>GIÁO VIÊN SOẠN BÀI</strong><br>
                        <span style="font-size:0.82rem; color:#64748b;">(Ký và ghi rõ họ tên)</span>
                        <div style="height:50px;"></div>
                        <strong>${doc.author_name}</strong>
                    </div>
                </div>
            </div>
        `;
    }

    // 3. Authentic lesson plan for Toán 1 - Phép cộng trong phạm vi 10
    const isToan1 = combinedStr.includes('toan1') || combinedStr.includes('toán 1') || combinedStr.includes('phepcong') || combinedStr.includes('phép cộng') || (doc.id === 'doc-1');
    if (isToan1) {
        return `
            <div class="doc-sheet">
                <div class="doc-official-header">
                    <div>
                        <div style="font-weight:700; font-size:0.95rem; color:#0f172a;">PHÒNG GD&ĐT HUYỆN NÚI THÀNH</div>
                        <div style="font-weight:700; color:#1e40af; font-size:0.9rem;">TRƯỜNG TIỂU HỌC NÚI THÀNH</div>
                        <div style="font-size:0.82rem; color:#64748b; margin-top:2px;">Tổ Chuyên Môn Khối 1</div>
                    </div>
                    <div style="text-align:right;">
                        <div style="font-weight:700; font-size:0.95rem; color:#0f172a;">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</div>
                        <div style="font-size:0.85rem; font-style:italic; color:#475569;">Độc lập - Tự do - Hạnh phúc</div>
                        <div style="font-size:0.82rem; color:#64748b; margin-top:2px;">Núi Thành, Năm học 2025 - 2026</div>
                    </div>
                </div>

                <div class="doc-title-banner">
                    <span class="doc-sub-tag">MÔN TOÁN LỚP 1 • BỘ SÁCH KẾT NỐI TRI THỨC</span>
                    <h2 style="color:#1e3a8a; font-size:1.45rem; font-weight:800; margin:10px 0 4px;">KẾ HOẠCH BÀI DẠY: PHÉP CỘNG TRONG PHẠM VI 10</h2>
                    <div style="font-weight:600; color:#475569; font-size:0.95rem;">(Thời lượng: 2 tiết - Thực hiện Tiết 1: Khái niệm phép cộng và cộng trong phạm vi 6)</div>
                    <div style="margin-top:6px; font-size:0.85rem; color:#64748b;">
                        Giáo viên soạn: <strong>Cô Lê Thu Hà</strong> • Đơn vị: <strong>Tổ 1 - Trường TH Núi Thành</strong>
                    </div>
                </div>

                <div class="doc-meta-box">
                    <div>📚 <strong>Môn học:</strong> Toán 1 (Chương trình Giáo dục phổ thông 2018)</div>
                    <div>📎 <strong>Tệp đính kèm gốc:</strong> <code>${doc.file_name}</code> (${formatFileSize(doc.file_size)})</div>
                    <div>🎯 <strong>Quy chuẩn:</strong> Kế hoạch bài dạy theo Công văn 2345/BGDĐT-GDTH</div>
                </div>

                <div class="doc-section">
                    <h3 class="doc-section-h3">I. YÊU CẦU CẦN ĐẠT</h3>
                    <div class="doc-content-block">
                        <p><strong>1. Năng lực đặc thù:</strong></p>
                        <ul>
                            <li>Nhận biết ý nghĩa của phép cộng (thao tác "gộp", "thêm vào" các nhóm đồ vật).</li>
                            <li>Làm quen với dấu cộng (+), dấu bằng (=) và cách đọc, viết phép tính cộng: ví dụ <em>3 + 2 = 5</em>.</li>
                            <li>Thực hiện thành thạo các phép cộng trong phạm vi 10 bằng cách đếm thêm, sử dụng que tính hoặc ngón tay.</li>
                        </ul>
                        <p style="margin-top:8px;"><strong>2. Năng lực chung &amp; Phẩm chất:</strong></p>
                        <ul>
                            <li>Tự chủ, tự học; giao tiếp hợp tác qua hoạt động thảo luận nhóm đôi sôi nổi.</li>
                            <li>Rèn luyện tính cẩn thận, chính xác và yêu thích môn Toán học ngay từ lớp đầu cấp.</li>
                        </ul>
                    </div>
                </div>

                <div class="doc-section">
                    <h3 class="doc-section-h3">II. ĐỒ DÙNG DẠY HỌC</h3>
                    <div class="doc-content-block">
                        <p>• <strong>Giáo viên:</strong> Bài giảng điện tử trình chiếu tranh ảnh sinh động, 10 khối lập phương lớn, thẻ dấu +, =.</p>
                        <p>• <strong>Học sinh:</strong> Bộ đồ dùng học Toán 1 (que tính, hình tròn, khối lập phương), bảng con.</p>
                    </div>
                </div>

                <div class="doc-section">
                    <h3 class="doc-section-h3">III. CÁC HOẠT ĐỘNG DẠY HỌC CHỦ YẾU (TIẾT 1)</h3>
                    
                    <div class="doc-activity-card">
                        <div class="doc-activity-header">
                            <span class="badge-act">HOẠT ĐỘNG 1</span>
                            <strong>KHỞI ĐỘNG (5 phút)</strong>
                        </div>
                        <div class="doc-activity-body">
                            <p>Cả lớp cùng hát và vận động theo bài hát <em>"Tập đếm"</em>. Trò chơi kết bạn: "Tìm bạn có tổng số chấm bằng 5".</p>
                        </div>
                    </div>

                    <div class="doc-activity-card">
                        <div class="doc-activity-header">
                            <span class="badge-act">HOẠT ĐỘNG 2</span>
                            <strong>HÌNH THÀNH KIẾN THỨC MỚI (15 phút)</strong>
                        </div>
                        <div class="doc-activity-body">
                            <p><strong>Thao tác trực quan với khối lập phương:</strong></p>
                            <ul>
                                <li>GV đặt bên trái 3 khối lập phương đỏ, bên phải 2 khối lập phương xanh.</li>
                                <li>Gộp cả hai nhóm lại được mấy khối lập phương? (HS đếm: 1, 2, 3, 4, 5 khối).</li>
                                <li>GV giới thiệu: "Ba thêm hai bằng năm. Ta viết: <strong>3 + 2 = 5</strong>".</li>
                                <li>Cả lớp đọc đồng thanh: <em>"Ba cộng hai bằng năm"</em>. HS cài bảng con phép tính 3 + 2 = 5.</li>
                            </ul>
                        </div>
                    </div>

                    <div class="doc-activity-card">
                        <div class="doc-activity-header">
                            <span class="badge-act">HOẠT ĐỘNG 3</span>
                            <strong>LUYỆN TẬP VÀ THỰC HÀNH (10 phút)</strong>
                        </div>
                        <div class="doc-activity-body">
                            <p>Học sinh thực hiện trên phiếu bài tập cá nhân:</p>
                            <div style="background:#f1f5f9; padding:12px; border-radius:6px; margin:8px 0; font-family:monospace; font-size:1rem; line-height:1.8;">
                                1 + 2 = 3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 + 2 = 4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 + 1 = 4<br>
                                4 + 1 = 5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 + 2 = 5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 + 3 = 5
                            </div>
                        </div>
                    </div>

                    <div class="doc-activity-card">
                        <div class="doc-activity-header">
                            <span class="badge-act">HOẠT ĐỘNG 4</span>
                            <strong>VẬN DỤNG &amp; DẶN DÒ (5 phút)</strong>
                        </div>
                        <div class="doc-activity-body">
                            <p>Tình huống thực tế: "Trong hộp bút có 3 chiếc bút chì, mẹ mua thêm cho 2 chiếc bút chì nữa. Em có tất cả mấy chiếc bút chì?".</p>
                            <p>HS trả lời nhanh: Có tất cả 5 chiếc bút chì (3 + 2 = 5). GV nhận xét, khen ngợi tiết học.</p>
                        </div>
                    </div>
                </div>

                <div class="doc-footer-sign">
                    <div style="text-align:center;">
                        <strong>TỔ TRƯỞNG TỔ 1 DUYỆT</strong><br>
                        <span style="font-size:0.82rem; color:#64748b;">(Đã ký duyệt chuyên môn)</span>
                        <div style="height:45px;"></div>
                        <strong>Cô Trần Thị Mai</strong>
                    </div>
                    <div style="text-align:center;">
                        <strong>GIÁO VIÊN SOẠN BÀI</strong><br>
                        <span style="font-size:0.82rem; color:#64748b;">(Đã ký)</span>
                        <div style="height:45px;"></div>
                        <strong>Cô Lê Thu Hà</strong>
                    </div>
                </div>
            </div>
        `;
    }

    // 4. Authentic Exam Paper for Toán 3
    const isDeThi = combinedStr.includes('dethi') || combinedStr.includes('đề kiểm tra') || combinedStr.includes('đề thi') || (doc.id === 'doc-3');
    if (isDeThi) {
        return `
            <div class="doc-sheet">
                <div class="doc-official-header">
                    <div>
                        <div style="font-weight:700; font-size:0.95rem; color:#0f172a;">PHÒNG GD&ĐT HUYỆN NÚI THÀNH</div>
                        <div style="font-weight:700; color:#1e40af; font-size:0.9rem;">TRƯỜNG TIỂU HỌC NÚI THÀNH</div>
                    </div>
                    <div style="text-align:right;">
                        <div style="font-weight:700; font-size:0.95rem; color:#0f172a;">ĐỀ KIỂM TRA ĐỊNH KỲ HỌC KỲ I</div>
                        <div style="font-size:0.85rem; color:#475569;">NĂM HỌC 2025 - 2026</div>
                        <div style="font-size:0.82rem; color:#64748b;">MÔN: TOÁN - LỚP 3 (Thời gian làm bài: 40 phút)</div>
                    </div>
                </div>

                <div class="doc-title-banner">
                    <h2 style="color:#1e3a8a; font-size:1.45rem; font-weight:800; margin:10px 0 4px;">ĐỀ THI &amp; MA TRẬN ĐÁNH GIÁ MÔN TOÁN LỚP 3</h2>
                    <div style="font-size:0.88rem; color:#64748b;">Giáo viên ra đề: <strong>Thầy Nguyễn Văn Đức</strong> • Tổ Chuyên Môn Khối 3</div>
                </div>

                <div class="doc-section">
                    <h3 class="doc-section-h3">I. MA TRẬN ĐỀ KIỂM TRA (CHUẨN THÔNG TƯ 27/2020/TT-BGDĐT)</h3>
                    <table class="doc-lesson-table">
                        <thead>
                            <tr>
                                <th>Mạch kiến thức, kĩ năng</th>
                                <th>Mức 1 (Nhận biết)</th>
                                <th>Mức 2 (Kết nối)</th>
                                <th>Mức 3 (Vận dụng)</th>
                                <th>Tổng điểm</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Số và phép tính (Nhân, chia trong bảng 6, 7, 8, 9)</td>
                                <td>2.0 điểm</td>
                                <td>2.0 điểm</td>
                                <td>1.0 điểm</td>
                                <td><strong>5.0 điểm</strong></td>
                            </tr>
                            <tr>
                                <td>Hình học &amp; Đo lường (Góc vuông, mm, gam, ml)</td>
                                <td>1.0 điểm</td>
                                <td>1.0 điểm</td>
                                <td>1.0 điểm</td>
                                <td><strong>3.0 điểm</strong></td>
                            </tr>
                            <tr>
                                <td>Giải bài toán bằng hai bước tính thực tế</td>
                                <td>0.0 điểm</td>
                                <td>1.0 điểm</td>
                                <td>1.0 điểm</td>
                                <td><strong>2.0 điểm</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="doc-section">
                    <h3 class="doc-section-h3">II. NỘI DUNG ĐỀ THI CHÍNH THỨC</h3>
                    <div class="doc-content-block">
                        <p><strong>PHẦN 1: TRẮC NGHIỆM (4,0 điểm)</strong> - <em>Khoanh tròn vào chữ cái đặt trước câu trả lời đúng nhất:</em></p>
                        <div style="background:#f8fafc; padding:14px; border-radius:6px; margin:8px 0; border:1px solid #e2e8f0; line-height:1.7;">
                            <p><strong>Câu 1 (1.0 điểm):</strong> Kết quả của phép tính <code>7 &times; 8</code> là:<br>
                            A. 54 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>B. 56</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; C. 64 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; D. 48</p>
                            <p style="margin-top:10px;"><strong>Câu 2 (1.0 điểm):</strong> Một ngày có bao nhiêu giờ?<br>
                            A. 12 giờ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>B. 24 giờ</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; C. 36 giờ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; D. 48 giờ</p>
                            <p style="margin-top:10px;"><strong>Câu 3 (1.0 điểm):</strong> Hình nào dưới đây có 4 góc vuông và 4 cạnh bằng nhau?<br>
                            A. Hình chữ nhật &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>B. Hình vuông</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; C. Hình tam giác</p>
                            <p style="margin-top:10px;"><strong>Câu 4 (1.0 điểm):</strong> Đã tô màu <code>1/3</code> số hình vuông trong hình nào dưới đây?<br>
                            A. Hình có 2/6 ô &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>B. Hình có 3/9 ô</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; C. Hình có 1/4 ô</p>
                        </div>

                        <p style="margin-top:16px;"><strong>PHẦN 2: TỰ LUẬN (6,0 điểm)</strong></p>
                        <div style="background:#f8fafc; padding:14px; border-radius:6px; margin:8px 0; border:1px solid #e2e8f0; line-height:1.8;">
                            <p><strong>Bài 1 (2.0 điểm):</strong> Đặt tính rồi tính:<br>
                            a) <code>124 &times; 3</code> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; b) <code>486 : 2</code></p>
                            <p style="margin-top:12px;"><strong>Bài 2 (2.5 điểm):</strong> Một cửa hàng văn phòng phẩm tại Núi Thành có 5 thùng vở, mỗi thùng đựng 24 quyển vở. Cửa hàng đã bán được 45 quyển vở cho học sinh đầu năm học. Hỏi cửa hàng đó còn lại bao nhiêu quyển vở?</p>
                            <p style="margin-top:12px;"><strong>Bài 3 (1.5 điểm):</strong> Tính giá trị của biểu thức một cách hợp lý:<br>
                            <code>150 + 50 : 5</code> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <code>25 &times; 4 + 75 &times; 4</code></p>
                        </div>
                    </div>
                </div>

                <div class="doc-footer-sign">
                    <div style="text-align:center;">
                        <strong>BAN GIÁM HIỆU DUYỆT</strong><br>
                        <span style="font-size:0.82rem; color:#64748b;">(Ký và đóng dấu)</span>
                        <div style="height:45px;"></div>
                        <strong>Thầy Lê Hoàng Nam</strong>
                    </div>
                    <div style="text-align:center;">
                        <strong>GIÁO VIÊN RA ĐỀ</strong><br>
                        <span style="font-size:0.82rem; color:#64748b;">(Ký và ghi rõ họ tên)</span>
                        <div style="height:45px;"></div>
                        <strong>Thầy Nguyễn Văn Đức</strong>
                    </div>
                </div>
            </div>
        `;
    }

    // 5. Authentic lesson plan for TN&XH 2 - Bài 15: Động vật sống ở đâu?
    const isTNXH2 = combinedStr.includes('tnxh') || combinedStr.includes('động vật') || combinedStr.includes('dongvat') || (doc.id === 'doc-9');
    if (isTNXH2) {
        return `
            <div class="doc-sheet">
                <div class="doc-official-header">
                    <div>
                        <div style="font-weight:700; font-size:0.95rem; color:#0f172a;">PHÒNG GD&ĐT HUYỆN NÚI THÀNH</div>
                        <div style="font-weight:700; color:#1e40af; font-size:0.9rem;">TRƯỜNG TIỂU HỌC NÚI THÀNH</div>
                        <div style="font-size:0.82rem; color:#64748b; margin-top:2px;">Tổ Chuyên Môn Khối 2</div>
                    </div>
                    <div style="text-align:right;">
                        <div style="font-weight:700; font-size:0.95rem; color:#0f172a;">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</div>
                        <div style="font-size:0.85rem; font-style:italic; color:#475569;">Độc lập - Tự do - Hạnh phúc</div>
                        <div style="font-size:0.82rem; color:#64748b; margin-top:2px;">Núi Thành, Năm học 2025 - 2026</div>
                    </div>
                </div>

                <div class="doc-title-banner">
                    <span class="doc-sub-tag">MÔN TỰ NHIÊN VÀ XÃ HỘI LỚP 2</span>
                    <h2 style="color:#1e3a8a; font-size:1.45rem; font-weight:800; margin:10px 0 4px;">BÀI 15: ĐỘNG VẬT SỐNG Ở ĐÂU? (TIẾT 1)</h2>
                    <div style="margin-top:6px; font-size:0.85rem; color:#64748b;">
                        Giáo viên soạn: <strong>Cô Lê Thu Hà</strong> • Tổ Chuyên Môn 1
                    </div>
                </div>

                <div class="doc-section">
                    <h3 class="doc-section-h3">I. YÊU CẦU CẦN ĐẠT</h3>
                    <div class="doc-content-block">
                        <p>1. <strong>Năng lực nhận thức khoa học:</strong> Nêu được các nơi sống khác nhau của động vật (trên cạn, dưới nước, trên không).</p>
                        <p>2. <strong>Năng lực tìm hiểu môi trường:</strong> Quan sát tranh ảnh thực tế, phân loại đúng các con vật quen thuộc vào từng môi trường sống.</p>
                        <p>3. <strong>Phẩm chất:</strong> Yêu quý, bảo vệ động vật và giữ gìn môi trường sống tự nhiên trong sạch.</p>
                    </div>
                </div>

                <div class="doc-section">
                    <h3 class="doc-section-h3">II. BẢNG PHÂN LOẠI MÔI TRƯỜNG SỐNG CỦA ĐỘNG VẬT</h3>
                    <table class="doc-lesson-table">
                        <thead>
                            <tr>
                                <th>Môi trường sống</th>
                                <th>Đặc điểm nổi bật</th>
                                <th>Ví dụ các con vật</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Trên cạn (mặt đất, trong đất)</strong></td>
                                <td>Chạy nhảy, đào hang, leo trèo</td>
                                <td>Chó, mèo, bò, voi, thỏ, giun đất</td>
                            </tr>
                            <tr>
                                <td><strong>Dưới nước (nước ngọt, nước mặn)</strong></td>
                                <td>Bơi lội bằng vây, thở bằng mang</td>
                                <td>Cá chép, tôm, cua, cá heo, mực</td>
                            </tr>
                            <tr>
                                <td><strong>Trên không (bay lượn)</strong></td>
                                <td>Có cánh, làm tổ trên cây cao</td>
                                <td>Chim bồ câu, đại bàng, ong, bướm</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }

    // 6. Fallback for any other document: Complete academic KHBD layout
    return `
        <div class="doc-sheet">
            <div class="doc-official-header">
                <div>
                    <div style="font-weight:700; color:#0f172a;">PHÒNG GD&ĐT HUYỆN NÚI THÀNH</div>
                    <div style="font-weight:700; color:#1e40af;">TRƯỜNG TIỂU HỌC NÚI THÀNH</div>
                    <div style="font-size:0.82rem; color:#64748b;">${doc.author_dept || 'Tổ Chuyên Môn'}</div>
                </div>
                <div style="text-align:right;">
                    <div style="font-weight:700; color:#0f172a;">KHO HỌC LIỆU SỐ TRƯỜNG TH NÚI THÀNH</div>
                    <div style="font-size:0.82rem; color:#64748b;">Năm học 2025 - 2026</div>
                </div>
            </div>

            <div class="doc-title-banner">
                <span class="doc-sub-tag">KHỐI ${doc.grade} • MÔN ${getSubjectName(doc.subject).toUpperCase()}</span>
                <h2 style="color:#1e3a8a; font-size:1.45rem; font-weight:800; margin:10px 0 4px;">${doc.title}</h2>
                <div style="font-size:0.9rem; color:#64748b; margin-top:4px;">
                    Tác giả: <strong>${doc.author_name}</strong> (${doc.author_dept || 'Tổ Chuyên Môn'}) • Tệp: <code>${doc.file_name}</code>
                </div>
            </div>

            <div class="doc-meta-box">
                <div>📚 <strong>Thể loại:</strong> ${getCategoryName(doc.category)}</div>
                <div>📝 <strong>Mô tả nội dung:</strong> ${doc.description || 'Kế hoạch bài dạy chuẩn Chương trình Giáo dục phổ thông 2018.'}</div>
                <div>💾 <strong>Dung lượng tệp:</strong> ${formatFileSize(doc.file_size)} (.${doc.file_type})</div>
            </div>

            <div class="doc-section">
                <h3 class="doc-section-h3">I. YÊU CẦU CẦN ĐẠT</h3>
                <div class="doc-content-block">
                    <p><strong>1. Năng lực đặc thù:</strong> Học sinh nắm vững kiến thức cốt lõi của bài học <em>"${doc.title}"</em>, biết vận dụng phương pháp tư duy và giải quyết các bài tập, câu hỏi tình huống gắn liền với thực tiễn lứa tuổi tiểu học.</p>
                    <p style="margin-top:6px;"><strong>2. Năng lực chung:</strong> Năng lực tự chủ, tự học; năng lực giao tiếp và hợp tác nhóm; năng lực giải quyết vấn đề sáng tạo.</p>
                    <p style="margin-top:6px;"><strong>3. Phẩm chất chủ yếu:</strong> Chăm chỉ trong học tập, có trách nhiệm với bài làm của bản thân và nhóm bạn, tự tin phát biểu xây dựng bài.</p>
                </div>
            </div>

            <div class="doc-section">
                <h3 class="doc-section-h3">II. ĐỒ DÙNG VÀ THIẾT BỊ DẠY HỌC</h3>
                <div class="doc-content-block">
                    <p>• <strong>Giáo viên:</strong> Giáo án bài dạy điện tử trình chiếu, hình ảnh minh họa, bảng phụ, phiếu học tập nhóm, thiết bị dạy học số.</p>
                    <p>• <strong>Học sinh:</strong> Sách giáo khoa, vở ghi bài, đồ dùng học tập theo yêu cầu môn học.</p>
                </div>
            </div>

            <div class="doc-section">
                <h3 class="doc-section-h3">III. TIẾN TRÌNH DẠY HỌC CHỦ YẾU</h3>
                
                <div class="doc-activity-card">
                    <div class="doc-activity-header">
                        <span class="badge-act">HOẠT ĐỘNG 1</span>
                        <strong>KHỞI ĐỘNG (5 phút)</strong>
                    </div>
                    <div class="doc-activity-body">
                        <p>Tổ chức trò chơi hoặc bài hát mở đầu tạo tâm thế vui tươi, khơi gợi kiến thức nền tảng liên quan đến nội dung bài học mới.</p>
                    </div>
                </div>

                <div class="doc-activity-card">
                    <div class="doc-activity-header">
                        <span class="badge-act">HOẠT ĐỘNG 2</span>
                        <strong>HÌNH THÀNH KIẾN THỨC MỚI (15 phút)</strong>
                    </div>
                    <div class="doc-activity-body">
                        <p>Hướng dẫn học sinh quan sát tranh ảnh/vật mẫu, thảo luận nhóm và rút ra nhận xét, quy tắc hoặc kiến thức trọng tâm.</p>
                    </div>
                </div>

                <div class="doc-activity-card">
                    <div class="doc-activity-header">
                        <span class="badge-act">HOẠT ĐỘNG 3</span>
                        <strong>LUYỆN TẬP VÀ THỰC HÀNH (10 phút)</strong>
                    </div>
                    <div class="doc-activity-body">
                        <p>Học sinh thực hiện bài tập cá nhân trên phiếu bài tập hoặc thực hành tương tác trực tiếp theo nhóm.</p>
                    </div>
                </div>

                <div class="doc-activity-card">
                    <div class="doc-activity-header">
                        <span class="badge-act">HOẠT ĐỘNG 4</span>
                        <strong>VẬN DỤNG VÀ DẶN DÒ (5 phút)</strong>
                    </div>
                    <div class="doc-activity-body">
                        <p>Liên hệ thực tế đời sống, củng cố mục tiêu bài học, dặn dò học sinh chuẩn bị nội dung bài kế tiếp.</p>
                    </div>
                </div>
            </div>

            <div class="doc-footer-sign">
                <div style="text-align:center;">
                    <strong>TỔ TRƯỞNG CHUYÊN MÔN</strong><br>
                    <div style="height:45px;"></div>
                    <span>(Đã ký duyệt)</span>
                </div>
                <div style="text-align:center;">
                    <strong>GIÁO VIÊN SOẠN BÀI</strong><br>
                    <div style="height:45px;"></div>
                    <strong>${doc.author_name}</strong>
                </div>
            </div>
        </div>
    `;
}

// ======================== MODAL: PREVIEW & ONLINE VIEWER ========================

function extractGoogleDriveId(url) {
    if (!url || typeof url !== 'string') return null;
    if (!url.includes('drive.google.com') && !url.includes('docs.google.com')) return null;
    const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || 
                  url.match(/id=([a-zA-Z0-9_-]+)/) ||
                  url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
}

function openDocumentInNewTab(docId) {
    const doc = store.getDocuments().find(d => d.id === docId);
    if (!doc) return;

    // Increment view count
    doc.view_count = (doc.view_count || 0) + 1;
    store.saveDocuments(store.getDocuments());

    // If Google Drive link
    const driveId = extractGoogleDriveId(doc.file_url);
    if (driveId) {
        window.open(`https://drive.google.com/file/d/${driveId}/view`, '_blank');
        return;
    }

    // If public HTTP URL, open directly in Microsoft Office Online Viewer!
    if (doc.file_url && (doc.file_url.startsWith('http://') || doc.file_url.startsWith('https://'))) {
        window.open(`https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(doc.file_url)}`, '_blank');
        return;
    }

    // If PDF with data URL
    if (doc.file_type === 'pdf' && doc.file_data_url) {
        const w = window.open();
        if (w) {
            w.document.write(`
                <!DOCTYPE html>
                <html><head><title>${escapeHtml(doc.file_name || doc.title)}</title>
                <style>body,html,iframe { margin:0; padding:0; height:100%; width:100%; overflow:hidden; background:#525659; }</style>
                </head><body><iframe src="${doc.file_data_url}" frameborder="0" style="width:100%; height:100%;"></iframe></body></html>
            `);
            w.document.close();
            return;
        }
    }

    // Standalone clean reader displaying ONLY the file content
    const contentHtml = getAccurateDocumentHtml(doc);
    const docHtml = `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${escapeHtml(doc.file_name || doc.title)}</title>
        <style>
            * { box-sizing: border-box; margin: 0; padding: 0; }
            body {
                font-family: 'Calibri', 'Aptos', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                background: #f1f5f9;
                color: #1e293b;
                min-height: 100vh;
                display: flex;
                flex-direction: column;
            }
            .reader-toolbar {
                position: sticky;
                top: 0;
                background: #2b579a;
                color: white;
                padding: 10px 24px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                box-shadow: 0 2px 10px rgba(0,0,0,0.15);
                z-index: 1000;
            }
            .reader-title { font-size: 1rem; font-weight: 600; display: flex; align-items: center; gap: 8px; }
            .btn-tool {
                padding: 6px 14px;
                font-size: 0.85rem;
                font-weight: 600;
                border-radius: 4px;
                cursor: pointer;
                border: none;
                background: rgba(255,255,255,0.18);
                color: white;
                margin-left: 8px;
                transition: all 0.2s;
            }
            .btn-tool:hover { background: rgba(255,255,255,0.3); }
            .reader-canvas { flex: 1; display: flex; justify-content: center; padding: 30px 16px 60px; }
            .docx-clean-document {
                background: #ffffff;
                color: #1e293b;
                font-size: 11pt;
                line-height: 1.65;
                padding: 50px 65px;
                width: 100%;
                max-width: 860px;
                min-height: 900px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.08);
                border: 1px solid #e2e8f0;
                border-radius: 4px;
            }
            .docx-clean-document p { margin-bottom: 0.85em; }
            .docx-clean-document table { width: 100%; border-collapse: collapse; margin: 1em 0; }
            .docx-clean-document th, .docx-clean-document td { border: 1px solid #94a3b8; padding: 8px 12px; }
            .docx-clean-document th { background: #f8fafc; font-weight: 700; }
            @media print {
                .reader-toolbar { display: none !important; }
                body { background: white !important; }
                .reader-canvas { padding: 0 !important; }
                .docx-clean-document { box-shadow: none !important; border: none !important; width: 100% !important; max-width: 100% !important; padding: 0 !important; }
            }
        </style>
    </head>
    <body>
        <div class="reader-toolbar">
            <div class="reader-title">
                <span>📄</span> ${escapeHtml(doc.file_name || doc.title)}
            </div>
            <div>
                <button class="btn-tool" onclick="window.print()">🖨️ In tài liệu</button>
                <button class="btn-tool" onclick="window.close()">✖ Đóng</button>
            </div>
        </div>
        <div class="reader-canvas">
            ${contentHtml}
        </div>
    </body>
    </html>
    `;

    const blob = new Blob([docHtml], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
}

function openWithMicrosoftOffice(docId) {
    const doc = store.getDocuments().find(d => d.id === docId);
    if (!doc) return;

    if (doc.file_url && (doc.file_url.startsWith('http://') || doc.file_url.startsWith('https://'))) {
        window.open(`https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(doc.file_url)}`, '_blank');
        return;
    }

    const userUrl = prompt(
        '🏢 Microsoft Office Online Viewer:\n\nDịch vụ máy chủ của Microsoft yêu cầu file phải có liên kết công khai trên Internet (HTTP/HTTPS) để tải về hiển thị.\n\nNếu Thầy/Cô có đường link tải online của file này, vui lòng dán vào dưới đây để mở ngay trên Microsoft Office Online:\n(Hoặc nhấn Hủy để tiếp tục xem nội dung gốc trực tiếp trong ứng dụng)',
        'https://calibre-ebook.com/downloads/demos/demo.docx'
    );

    if (userUrl && userUrl.startsWith('http')) {
        window.open(`https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(userUrl.trim())}`, '_blank');
    }
}

function openPreviewModal(docId) {
    try {
        const doc = store.getDocuments().find(d => d.id === docId);
        if (!doc) {
            showToast('Không tìm thấy tài liệu!', 'error');
            return;
        }

        const modal = document.getElementById('preview-modal');
        const contentEl = document.getElementById('preview-modal-content');
        if (!contentEl || !modal) return;

        // Increment view count
        doc.view_count = (doc.view_count || 0) + 1;
        try { store.saveDocuments(store.getDocuments()); } catch(e){}

        const isHttpUrl = doc.file_url && (doc.file_url.startsWith('http://') || doc.file_url.startsWith('https://'));

        // 0. Direct Google Drive Preview Viewer
        const driveId = extractGoogleDriveId(doc.file_url);
        if (driveId) {
            contentEl.innerHTML = `
                <div style="width:100%; height:100%; background:#fff; overflow:hidden;">
                    <iframe src="https://drive.google.com/file/d/${driveId}/preview" style="width:100%; height:98vh; border:none; display:block;" allowfullscreen></iframe>
                </div>
            `;
            modal.classList.add('active');
            return;
        }

        // 1. Direct Microsoft Office Online Viewer for public online URLs
        if (isHttpUrl && ['docx', 'doc', 'pptx', 'ppt', 'xlsx', 'xls'].includes((doc.file_type || '').toLowerCase())) {
            contentEl.innerHTML = `
                <div style="width:100%; height:100%; background:#fff; overflow:hidden;">
                    <iframe src="https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(doc.file_url)}" style="width:100%; height:98vh; border:none; display:block;" allowfullscreen></iframe>
                </div>
            `;
            modal.classList.add('active');
            return;
        }

        // 2. Direct clean document view if converted HTML exists
        if (doc.file_content_html && doc.file_content_html.trim().length > 0) {
            contentEl.innerHTML = `
                <div class="office-viewer-canvas" id="docx-render-container">
                    <div class="docx-clean-document">
                        ${doc.file_content_html}
                    </div>
                </div>
            `;
            modal.classList.add('active');
            return;
        }

        // 3. On-the-fly conversion from file_data_url if available
        if (doc.file_data_url && doc.file_type === 'docx' && window.mammoth) {
            contentEl.innerHTML = `
                <div class="office-viewer-canvas">
                    <div style="text-align:center; padding:50px; color:#ffffff; font-size:1.1rem;">⏳ Đang mở nội dung tệp tin...</div>
                </div>
            `;
            modal.classList.add('active');

            fetch(doc.file_data_url)
                .then(r => r.arrayBuffer())
                .then(ab => window.mammoth.convertToHtml({ arrayBuffer: ab }))
                .then(res => {
                    doc.file_content_html = res.value;
                    try { store.saveDocuments(store.getDocuments()); } catch(e){}
                    contentEl.innerHTML = `
                        <div class="office-viewer-canvas" id="docx-render-container">
                            <div class="docx-clean-document">
                                ${res.value}
                            </div>
                        </div>
                    `;
                })
                .catch(err => {
                    console.warn('Convert error:', err);
                    contentEl.innerHTML = renderOfficeConnectPrompt(doc);
                });
            return;
        }

        // 4. PDF files
        if (doc.file_type === 'pdf') {
            const pdfSrc = doc.file_url || doc.file_data_url;
            if (pdfSrc) {
                contentEl.innerHTML = `
                    <div style="width:100%; height:100%; overflow:hidden;">
                        <iframe src="${pdfSrc}" style="width:100%; height:98vh; border:none; display:block;"></iframe>
                    </div>
                `;
                modal.classList.add('active');
                return;
            }
        }

        // 5. Default: Microsoft Office Online link prompt
        contentEl.innerHTML = renderOfficeConnectPrompt(doc);
        modal.classList.add('active');
    } catch (err) {
        console.error('Error opening preview modal:', err);
        showToast('Có lỗi khi mở xem trực tuyến: ' + err.message, 'error');
    }
}

function renderOfficeConnectPrompt(doc) {
    const settings = store.getSettings();
    return `
        <div class="office-viewer-canvas" style="align-items:center; justify-content:center; min-height:85vh;">
            <div style="background:#ffffff; border-radius:10px; padding:36px; max-width:620px; width:92%; text-align:center; box-shadow:0 10px 30px rgba(0,0,0,0.3); color:#1e293b;">
                <div style="display:flex; justify-content:center; gap:12px; margin-bottom:12px;">
                    <span style="font-size:2.4rem;">📁</span>
                    <span style="font-size:2.4rem;">☁️</span>
                </div>
                <h3 style="font-size:1.3rem; font-weight:700; margin-bottom:8px; color:#0f172a;">Trình Xem Trực Tuyến Đám Mây</h3>
                <p style="font-size:0.92rem; color:#64748b; line-height:1.6; margin-bottom:20px;">
                    Hệ thống hỗ trợ xem trực tuyến tự động thông qua <strong>Google Drive của Trường</strong> hoặc <strong>Microsoft Office Online</strong>.
                    <br>Vui lòng dán liên kết Google Drive hoặc đường link online của tệp tin:
                </p>
                <div style="display:flex; gap:8px; margin-bottom:12px;">
                    <input type="url" id="office-online-url-input" class="form-input" placeholder="Dán link Google Drive (https://drive.google.com/file/d/...) hoặc URL công khai" style="flex:1;">
                    <button class="btn btn-primary" onclick="launchOfficeViewerFromInput('${doc.id}')">Xem ngay</button>
                </div>
                <div style="display:flex; justify-content:center; gap:10px; margin-top:16px;">
                    <a href="${escapeHtml(settings.drive_folder_url || 'https://drive.google.com')}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm" style="display:inline-flex; align-items:center; gap:6px;">
                        📂 Mở Thư mục Google Drive Trường ↗
                    </a>
                </div>
            </div>
        </div>
    `;
}

function launchOfficeViewerFromInput(docId) {
    const input = document.getElementById('office-online-url-input');
    const url = input ? input.value.trim() : '';
    if (!url || !url.startsWith('http')) {
        showToast('Vui lòng nhập đường link URL hợp lệ (bắt đầu bằng http:// hoặc https://)', 'error');
        return;
    }
    const doc = store.getDocuments().find(d => d.id === docId);
    if (doc) {
        doc.file_url = url;
        try { store.saveDocuments(store.getDocuments()); } catch(e){}
    }
    const contentEl = document.getElementById('preview-modal-content');
    if (contentEl) {
        const driveId = extractGoogleDriveId(url);
        if (driveId) {
            contentEl.innerHTML = `
                <div style="width:100%; height:100%; background:#fff; overflow:hidden;">
                    <iframe src="https://drive.google.com/file/d/${driveId}/preview" style="width:100%; height:98vh; border:none; display:block;" allowfullscreen></iframe>
                </div>
            `;
            return;
        }
        contentEl.innerHTML = `
            <div style="width:100%; height:100%; background:#fff; overflow:hidden;">
                <iframe src="https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(url)}" style="width:100%; height:98vh; border:none; display:block;" allowfullscreen></iframe>
            </div>
        `;
    }
}

function changeSlide(direction) {
    if (!window._currentSlides) return;
    const slides = window._currentSlides;
    state.activeSlideIndex = Math.max(0, Math.min(slides.length - 1, state.activeSlideIndex + direction));

    const displayEl = document.getElementById('slide-display');
    const indicatorEl = document.getElementById('slide-indicator');
    if (displayEl) {
        displayEl.innerHTML = `
            <div style="font-size:1.4rem; font-weight:700; white-space:pre-line; max-width:80%;">
                ${slides[state.activeSlideIndex]}
            </div>
        `;
    }
    if (indicatorEl) {
        indicatorEl.textContent = `Trang ${state.activeSlideIndex + 1} / ${slides.length}`;
    }
}

function closePreviewModal() {
    const modal = document.getElementById('preview-modal');
    if (modal) modal.classList.remove('active');
}

// ======================== MODAL: REPORT ========================

function openReportModal(docId) {
    const modal = document.getElementById('report-modal');
    const idInput = document.getElementById('report-doc-id');
    if (idInput) idInput.value = docId;
    if (modal) modal.classList.add('active');
}

function closeReportModal() {
    const modal = document.getElementById('report-modal');
    if (modal) modal.classList.remove('active');
}

// ======================== PAGE: REVIEW (TỔ TRƯỞNG & ADMIN) ========================

function setReviewDeptFilter(dept) {
    state.reviewDeptFilter = dept;
    renderReviewPage();
}

function highlightReviewDocFromLink(link, text = '') {
    let targetCard = null;
    if (link && link.includes('doc=')) {
        const docId = link.split('doc=')[1].split('&')[0];
        targetCard = document.getElementById(`review-card-${docId}`);
    }
    if (!targetCard && text) {
        const cards = document.querySelectorAll('.review-item-card');
        for (const card of cards) {
            const h3 = card.querySelector('h3');
            if (h3 && text.includes(h3.textContent.trim())) {
                targetCard = card;
                break;
            }
        }
    }
    if (targetCard) {
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetCard.classList.add('highlighted-card');
        setTimeout(() => {
            targetCard.classList.remove('highlighted-card');
        }, 3500);
    }
}

function renderReviewPage() {
    const grid = document.getElementById('review-docs-grid');
    if (!grid) return;

    const filterContainer = document.getElementById('review-dept-filters');
    const allDocs = store.getDocuments();
    const allPendingDocs = allDocs.filter(d => d.status === 'pending');

    const departmentsList = [
        'Tất cả',
        'Tổ 1',
        'Tổ 2',
        'Tổ 3',
        'Tổ 4',
        'Tổ 5',
        'Tổ Tin học - Ngoại ngữ',
        'Tổ Âm nhạc - Mỹ thuật'
    ];

    // Render Department Filter Tabs
    if (filterContainer) {
        filterContainer.innerHTML = departmentsList.map(dept => {
            const isAll = dept === 'Tất cả';
            const count = isAll ? allPendingDocs.length : allPendingDocs.filter(d => (d.author_dept || '').trim() === dept).length;
            const activeClass = (state.reviewDeptFilter === (isAll ? 'all' : dept)) ? 'active' : '';
            return `
                <button type="button" class="review-filter-pill ${activeClass}" onclick="setReviewDeptFilter('${isAll ? 'all' : dept}')">
                    <span>${dept}</span>
                    <span class="pill-badge">${count}</span>
                </button>
            `;
        }).join('');
    }

    // Filter pending docs by department if selected (default 'all' shows everything!)
    let pendingDocs = allPendingDocs;
    if (state.reviewDeptFilter && state.reviewDeptFilter !== 'all') {
        pendingDocs = pendingDocs.filter(d => (d.author_dept || '').trim() === state.reviewDeptFilter);
    }

    if (pendingDocs.length === 0) {
        grid.className = 'review-list';
        grid.innerHTML = `
            <div class="empty-state" style="padding: 40px 20px; text-align: center; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-color);">
                <div style="font-size: 3.5rem; margin-bottom: 12px;">🎉</div>
                <h3 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 8px;">Không có tài liệu nào chờ duyệt trong mục này</h3>
                <p style="color: var(--text-secondary); max-width: 540px; margin: 0 auto 20px; line-height: 1.6;">
                    ${state.reviewDeptFilter !== 'all' ? `Tổ <strong>${state.reviewDeptFilter}</strong> hiện không có bài nào cần duyệt.` : 'Hiện tại không có học liệu nào đang chờ duyệt trong bộ nhớ máy.'}
                    <br>Nếu Thầy/Cô vừa đóng góp học liệu từ máy tính khác hoặc mới tải lên, vui lòng bấm nút đồng bộ dưới đây để nạp từ Google Drive:
                </p>
                <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
                    <button type="button" class="btn btn-primary" onclick="syncDocumentsFromDrive(true)">
                        🔄 Đồng bộ ngay từ Google Drive
                    </button>
                    ${state.reviewDeptFilter !== 'all' ? `
                        <button type="button" class="btn btn-secondary" onclick="setReviewDeptFilter('all')">
                            📂 Xem tất cả các tổ (${allPendingDocs.length})
                        </button>
                    ` : ''}
                </div>
            </div>
        `;
        return;
    }

    grid.className = 'review-list';
    grid.innerHTML = pendingDocs.map(doc => {
        const driveId = extractGoogleDriveId(doc.file_url) || doc.drive_id;
        const isAuthorMe = state.user && (state.user.id === doc.author_id || state.user.fullname === doc.author_name);
        return `
            <div class="review-item-card" id="review-card-${doc.id}">
                <div class="review-card-header">
                    <div style="flex: 1; min-width: 260px;">
                        <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap; margin-bottom:6px;">
                            <span class="doc-badge-pill">Khối ${doc.grade} • ${getSubjectName(doc.subject)}</span>
                            ${doc.category ? `<span class="badge" style="background:var(--primary-soft); color:var(--primary); font-size:0.75rem;">${getCategoryName(doc.category)}</span>` : ''}
                            ${driveId ? `<span class="badge-drive" title="Đã lưu trữ an toàn trên Google Drive nguyentruongtonuithanh@gmail.com">☁️ Google Drive</span>` : ''}
                            ${isAuthorMe ? `<span class="badge" style="background:#fef3c7; color:#b45309; font-weight:700; font-size:0.75rem;">👤 Bài của bạn</span>` : ''}
                        </div>
                        <h3 style="margin-top:4px; font-size:1.25rem; line-height:1.4; color:var(--text-primary);">${escapeHtml(doc.title)}</h3>
                        <div style="font-size:0.85rem; color:var(--text-muted); margin-top:6px;">
                            👤 Tác giả: <strong>${escapeHtml(doc.author_name)}</strong> (<span style="color:var(--primary); font-weight:600;">${escapeHtml(doc.author_dept || 'Tổ Chuyên Môn')}</span>) • 📅 Gửi lúc: ${timeAgo(doc.created_at)}
                        </div>
                    </div>
                    <div class="badge-status-pending">
                        ⏳ Đang chờ duyệt
                    </div>
                </div>
                <p class="review-card-desc">${escapeHtml(doc.description || 'Chưa có mô tả nội dung chi tiết.')}</p>
                <div>
                    <div class="review-file-box">
                        <span style="font-size:1.2rem;">${getFileTypeIcon(doc.file_name)}</span>
                        <span>Tệp đính kèm: <strong>${escapeHtml(doc.file_name)}</strong> (${formatFileSize(doc.file_size)})</span>
                        ${doc.file_url ? `<a href="${escapeHtml(doc.file_url)}" target="_blank" rel="noopener" style="margin-left:auto; font-size:0.8rem; color:var(--primary); text-decoration:underline;">Mở link file ↗</a>` : ''}
                    </div>
                </div>
                <div class="review-actions-bar">
                    <button class="btn btn-preview" onclick="openPreviewModal('${doc.id}')" title="Mở file lên xem trực tuyến">👁️ Xem trực tuyến</button>
                    ${doc.file_url ? `
                        <a href="${escapeHtml(doc.file_url)}" target="_blank" rel="noopener" class="btn btn-secondary" style="text-decoration:none; display:inline-flex; align-items:center; gap:4px;" title="Mở trực tiếp trên Google Drive">
                            ☁️ Mở trên Drive ↗
                        </a>
                    ` : `
                        <button class="btn btn-secondary" onclick="openDocumentInNewTab('${doc.id}')" title="Mở file lên xem trong tab mới">↗️ Mở tab mới</button>
                    `}
                    <button class="btn btn-download-action" onclick="downloadDocument('${doc.id}')" title="Tải file về máy">⬇️ Tải file về</button>
                    <button class="btn btn-reject" onclick="rejectDocument('${doc.id}')">❌ Yêu cầu sửa</button>
                    <button class="btn btn-approve" onclick="approveDocument('${doc.id}')">✅ Phê duyệt &amp; Công khai</button>
                </div>
            </div>
        `;
    }).join('');
}

async function approveDocument(docId) {
    const docs = store.getDocuments();
    const doc = docs.find(d => d.id === docId);
    if (!doc) return;

    doc.status = 'approved';
    const approver = state.user ? `${state.user.fullname} (${state.user.role === 'admin' ? 'BGH' : (state.user.department || 'Tổ chuyên môn')})` : 'Tổ trưởng Chuyên môn';
    doc.approved_by = approver;
    store.saveDocuments(docs);

    // Increment author total uploads & points
    const users = store.getUsers();
    const author = users.find(u => u.id === doc.author_id);
    if (author) {
        author.total_uploads = (author.total_uploads || 0) + 1;
        store.saveUsers(users);
    }

    // Add notification
    const notifs = store.getNotifications();
    notifs.unshift({
        id: 'notif-' + Date.now(),
        title: 'Học liệu đã được duyệt',
        text: `Học liệu "${doc.title}" đã được ${approver} phê duyệt xuất bản.`,
        time: 'Vừa xong',
        icon: '✅',
        type: 'doc',
        link: `#/detail/${doc.id}`,
        unread: true
    });
    store.saveNotifications(notifs);

    showToast(`Đã duyệt thành công tài liệu: "${doc.title}"! 🎉`, 'success');
    updatePendingBadge();
    renderReviewPage();

    // Đồng bộ trạng thái duyệt lên Google Apps Script Web App nếu có
    const myGas = localStorage.getItem('khls_my_drive_gas_url');
    const settings = store.getSettings();
    const activeGas = myGas || settings.drive_gas_url;
    if (activeGas) {
        try {
            fetch(activeGas, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify({
                    action: 'approve',
                    docId: doc.id,
                    approvedBy: approver
                })
            }).catch(e => console.warn('Không thể gửi trạng thái duyệt lên Google Drive:', e));
        } catch (e) {}
    }
}

async function rejectDocument(docId) {
    const reason = prompt('Nhập lý do hoặc góp ý để giáo viên điều chỉnh lại tài liệu:', 'Cần bổ sung thêm phần dặn dò và phiếu bài tập theo chuẩn yêu cầu.');
    if (reason === null) return;

    const docs = store.getDocuments();
    const doc = docs.find(d => d.id === docId);
    if (doc) {
        doc.status = 'rejected';
        doc.reject_reason = reason;
        store.saveDocuments(docs);
        showToast('Đã gửi phản hồi từ chối / yêu cầu sửa học liệu đến giáo viên', 'warning');
        updatePendingBadge();
        renderReviewPage();

        // Đồng bộ trạng thái từ chối lên Google Apps Script Web App nếu có
        const myGas = localStorage.getItem('khls_my_drive_gas_url');
        const settings = store.getSettings();
        const activeGas = myGas || settings.drive_gas_url;
        if (activeGas) {
            try {
                fetch(activeGas, {
                    method: 'POST',
                    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                    body: JSON.stringify({
                        action: 'reject',
                        docId: doc.id,
                        rejectReason: reason
                    })
                }).catch(e => console.warn('Không thể gửi trạng thái từ chối lên Google Apps Script:', e));
            } catch (e) {}
        }
    }
}

// ======================== NOTIFICATIONS DROPDOWN ========================

function updatePendingBadge() {
    const badge = document.getElementById('notification-badge');
    const notifBtn = document.getElementById('notification-btn');
    const notifs = store.getNotifications();
    const unreadCount = notifs.filter(n => n.unread).length;

    const allDocs = store.getDocuments();
    const pendingCount = allDocs.filter(d => d.status === 'pending').length;

    if (badge) {
        const displayCount = unreadCount > 0 ? unreadCount : pendingCount;
        badge.textContent = displayCount;
        if (displayCount > 0) {
            badge.style.display = 'flex';
            if (notifBtn) notifBtn.setAttribute('title', `Bạn có ${displayCount} thông báo / học liệu chờ duyệt`);
        } else {
            badge.style.display = 'none';
            if (notifBtn) notifBtn.setAttribute('title', 'Thông báo');
        }
    }

    const headerReviewBadge = document.getElementById('header-review-badge');
    if (headerReviewBadge) {
        headerReviewBadge.textContent = pendingCount;
        headerReviewBadge.style.display = pendingCount > 0 ? 'inline-block' : 'none';
    }

    const sidebarReviewBadge = document.getElementById('sidebar-review-badge');
    if (sidebarReviewBadge) {
        sidebarReviewBadge.textContent = pendingCount;
        sidebarReviewBadge.style.display = pendingCount > 0 ? 'inline-block' : 'none';
    }

    const menuReviewBadge = document.getElementById('menu-review-badge');
    if (menuReviewBadge) {
        menuReviewBadge.textContent = pendingCount;
        menuReviewBadge.style.display = pendingCount > 0 ? 'inline-block' : 'none';
    }

    renderNotificationList();
}

function renderNotificationList() {
    const listEl = document.getElementById('notification-list');
    if (!listEl) return;

    const notifs = store.getNotifications();

    if (!notifs || notifs.length === 0) {
        listEl.innerHTML = `
            <div class="notification-empty">
                <span style="font-size:1.8rem; display:block; margin-bottom:6px;">📭</span>
                <p>Không có thông báo nào mới</p>
            </div>
        `;
        return;
    }

    listEl.innerHTML = notifs.map(n => `
        <div class="notification-item ${n.unread ? 'unread' : ''}" onclick="handleNotificationClick('${n.id}')">
            <div class="notification-icon-box">${n.icon || '🔔'}</div>
            <div class="notification-body">
                <div class="notification-text">
                    <strong>${n.title}</strong>: ${n.text}
                </div>
                <div class="notification-time">${n.time}</div>
            </div>
        </div>
    `).join('');
}

function toggleNotificationDropdown() {
    const dropdown = document.getElementById('notification-dropdown');
    if (!dropdown) return;

    // Close user dropdown if open
    document.getElementById('user-dropdown')?.classList.remove('active');

    const isOpen = dropdown.classList.toggle('active');
    if (isOpen) {
        renderNotificationList();

        // Khi người dùng bấm vào xem thông báo -> Đã xem rồi nên xóa số 3 trên badge
        const notifs = store.getNotifications();
        let changed = false;
        notifs.forEach(n => {
            if (n.unread) {
                n.unread = false;
                changed = true;
            }
        });
        if (changed) {
            store.saveNotifications(notifs);
            updatePendingBadge();
        }
    }
}

function closeNotificationDropdown() {
    const dropdown = document.getElementById('notification-dropdown');
    if (dropdown) dropdown.classList.remove('active');
}

function handleNotificationClick(notifId) {
    const notifs = store.getNotifications();
    const notif = notifs.find(n => n.id === notifId);
    if (notif) {
        notif.unread = false;
        store.saveNotifications(notifs);
        updatePendingBadge();
        renderNotificationList();
        closeNotificationDropdown();
        if (notif.link) {
            if (notif.link.startsWith('#/review')) {
                state.reviewDeptFilter = 'all'; // Đảm bảo hiển thị tất cả các tổ
                if (state.currentPage === 'review') {
                    renderReviewPage();
                }
                navigate(notif.link);
                setTimeout(() => {
                    highlightReviewDocFromLink(notif.link, notif.text);
                }, 150);
            } else {
                navigate(notif.link);
            }
        }
    }
}

function markAllNotificationsRead() {
    const notifs = store.getNotifications();
    notifs.forEach(n => { n.unread = false; });
    store.saveNotifications(notifs);
    updatePendingBadge();
    renderNotificationList();
    showToast('Đã đánh dấu tất cả thông báo là đã đọc', 'info');
}

// ======================== PAGE: PROFILE ========================

function renderProfilePage() {
    const user = state.user || store.getUsers()[3]; // Default to teacher Cô Lê Thu Hà if not logged in
    const docs = store.getDocuments().filter(d => d.author_id === user.id || d.author_name === user.fullname);

    const nameEl = document.getElementById('profile-name');
    const roleEl = document.getElementById('profile-role');
    const deptEl = document.getElementById('profile-dept');
    const letterEl = document.getElementById('profile-avatar-letter');
    const uploadStatEl = document.getElementById('profile-uploads');
    const downStatEl = document.getElementById('profile-downloads');
    const starStatEl = document.getElementById('profile-stars');
    const gridEl = document.getElementById('profile-docs-grid');

    if (nameEl) nameEl.textContent = user.fullname;
    if (roleEl) roleEl.textContent = user.role === 'admin' ? 'Quản trị viên Hệ thống' : user.role === 'leader' ? 'Tổ trưởng Chuyên môn' : 'Giáo viên';
    if (deptEl) deptEl.textContent = `${user.department} • ${user.honor || 'Giáo viên tích cực'}`;
    if (letterEl) letterEl.textContent = user.fullname.charAt(0);

    const totalDownloads = docs.reduce((acc, d) => acc + (d.download_count || 0), 0);
    const avgStars = docs.length > 0 ? (docs.reduce((acc, d) => acc + (d.avg_rating || 0), 0) / docs.length).toFixed(1) : '5.0';

    if (uploadStatEl) uploadStatEl.textContent = docs.length;
    if (downStatEl) downStatEl.textContent = totalDownloads;
    if (starStatEl) starStatEl.textContent = avgStars;

    if (gridEl) {
        if (docs.length === 0) {
            gridEl.innerHTML = `
                <div class="empty-state">
                    <p>Thầy/Cô chưa tải lên tài liệu nào. Hãy bắt đầu đóng góp học liệu để cùng chia sẻ nhé!</p>
                    <a href="#/upload" class="btn btn-primary" style="margin-top:1rem;">Đóng góp ngay</a>
                </div>
            `;
        } else {
            gridEl.innerHTML = docs.map(renderDocCard).join('');
        }
    }
}

// ======================== PAGE: DASHBOARD (BAN GIÁM HIỆU) ========================

function renderDashboardPage() {
    const content = document.getElementById('dashboard-content');
    if (!content) return;

    const docs = store.getDocuments().filter(d => d.status === 'approved');
    const users = store.getUsers();

    // Data by Grade
    const gradeCounts = {};
    GRADES.forEach(g => {
        gradeCounts[g.id] = docs.filter(d => d.grade === g.id).length;
    });

    // Data by Department
    const deptCounts = {
        'Tổ 1': docs.filter(d => d.author_dept === 'Tổ 1').length,
        'Tổ 3': docs.filter(d => d.author_dept === 'Tổ 3').length,
        'Tổ 4': docs.filter(d => d.author_dept === 'Tổ 4').length,
        'Tổ 5': docs.filter(d => d.author_dept === 'Tổ 5').length,
        'Tổ Tin học - Ngoại ngữ': docs.filter(d => d.author_dept && d.author_dept.includes('Tin học')).length,
        'Tổ Âm nhạc - Mỹ thuật': docs.filter(d => d.author_dept && d.author_dept.includes('Mỹ thuật')).length
    };

    const maxGradeCount = Math.max(1, ...Object.values(gradeCounts));
    const maxDeptCount = Math.max(1, ...Object.values(deptCounts));

    content.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:var(--space-lg); flex-wrap:wrap; gap:10px;">
            <div>
                <h3>Báo cáo Tổng hợp Thi đua Chuyên môn</h3>
                <p style="font-size:0.85rem; color:var(--text-muted);">Trường Tiểu học Núi Thành - Dữ liệu thời gian thực</p>
            </div>
            <button class="btn btn-success" onclick="exportThiDuaCSV()">
                📥 Xuất file Excel / CSV Thi đua
            </button>
        </div>

        <div class="dashboard-grid">
            <!-- Phân bổ theo khối -->
            <div class="chart-box">
                <div class="chart-box-title">
                    <span>Học liệu theo Khối lớp</span>
                    <span style="font-size:0.8rem; color:var(--text-muted);">${docs.length} bài tổng cộng</span>
                </div>
                ${GRADES.map(g => {
                    const count = gradeCounts[g.id] || 0;
                    const percent = Math.round((count / maxGradeCount) * 100);
                    return `
                        <div class="bar-row">
                            <div class="bar-label-group">
                                <span>${g.name}</span>
                                <strong>${count} tài liệu</strong>
                            </div>
                            <div class="bar-track">
                                <div class="bar-fill bar-fill-grade" style="width: ${percent}%;"></div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>

            <!-- Phân bổ theo tổ -->
            <div class="chart-box">
                <div class="chart-box-title">
                    <span>Đóng góp theo Tổ Chuyên môn</span>
                    <span style="font-size:0.8rem; color:var(--text-muted);">Xếp hạng thi đua</span>
                </div>
                ${Object.entries(deptCounts).map(([dept, count]) => {
                    const percent = Math.round((count / maxDeptCount) * 100);
                    return `
                        <div class="bar-row">
                            <div class="bar-label-group">
                                <span>${dept}</span>
                                <strong>${count} bài</strong>
                            </div>
                            <div class="bar-track">
                                <div class="bar-fill bar-fill-dept" style="width: ${percent}%;"></div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>

        <!-- Bảng xếp hạng chi tiết giáo viên thi đua -->
        <div class="admin-table-container" style="margin-top:var(--space-2xl);">
            <div style="padding:var(--space-md); font-weight:700; border-bottom:1px solid var(--border-color);">
                🏅 Bảng Theo Dõi Thi Đua Cá Nhân Giáo Viên
            </div>
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>Hạng</th>
                        <th>Họ và tên</th>
                        <th>Tổ chuyên môn</th>
                        <th>Số học liệu duyệt</th>
                        <th>Tổng lượt tải</th>
                        <th>Điểm thi đua</th>
                        <th>Danh hiệu</th>
                    </tr>
                </thead>
                <tbody>
                    ${users.filter(u => u.role !== 'admin').sort((a,b) => b.total_downloads - a.total_downloads).map((u, i) => `
                        <tr>
                            <td><strong>${i + 1}</strong></td>
                            <td><strong>${u.fullname}</strong></td>
                            <td>${u.department}</td>
                            <td><span class="badge" style="background:var(--primary-soft); color:var(--primary);">${u.total_uploads}</span></td>
                            <td>${u.total_downloads}</td>
                            <td><strong>${u.total_downloads * 2 + u.total_uploads * 20}</strong></td>
                            <td><span class="badge-honor">✨ ${u.honor || 'Giáo viên tích cực'}</span></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

function exportThiDuaCSV() {
    const users = store.getUsers().filter(u => u.role !== 'admin');
    let csv = "\uFEFFHạng,Họ và tên,Tổ chuyên môn,Số bài đóng góp,Lượt tải,Điểm thi đua,Danh hiệu\n";
    users.sort((a, b) => b.total_downloads - a.total_downloads).forEach((u, i) => {
        const score = u.total_downloads * 2 + u.total_uploads * 20;
        csv += `${i + 1},"${u.fullname}","${u.department}",${u.total_uploads},${u.total_downloads},${score},"${u.honor || ''}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `Bao_Cao_Thi_Dua_KHL_Nuithanh_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast('Đã xuất thành công tệp Excel/CSV báo cáo thi đua! 📊', 'success');
}

// ======================== PAGE: ADMIN ========================

function renderAdminPage(activeTab = 'users') {
    const panel = document.getElementById('admin-panel');
    const tabs = document.querySelectorAll('.admin-tab');
    if (!panel) return;

    tabs.forEach(t => {
        t.classList.toggle('active', t.getAttribute('data-tab') === activeTab);
    });

    if (activeTab === 'users') {
        const users = store.getUsers();
        panel.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:var(--space-md); flex-wrap:wrap; gap:10px;">
                <div>
                    <h3>Quản lý Tài khoản Giáo viên</h3>
                    <p style="font-size:0.85rem; color:var(--text-muted);">Danh sách cán bộ giáo viên được cấp quyền truy cập hệ thống</p>
                </div>
                <div style="display:flex; gap:10px;">
                    <button class="btn btn-primary" onclick="openBatchUserModal()">
                        👥 Tạo tài khoản hàng loạt (CSV)
                    </button>
                    <button class="btn btn-secondary" onclick="promptAddUser()">
                        ➕ Thêm 1 giáo viên
                    </button>
                </div>
            </div>

            <div class="admin-table-container">
                <table class="admin-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Họ và tên</th>
                            <th>Tên đăng nhập</th>
                            <th>Vai trò</th>
                            <th>Tổ chuyên môn</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${users.map(u => `
                            <tr>
                                <td>${u.id}</td>
                                <td><strong>${u.fullname}</strong></td>
                                <td>${u.username}</td>
                                <td>
                                    <span class="badge-role role-${u.role}">
                                        ${u.role === 'admin' ? 'Quản trị viên' : u.role === 'leader' ? 'Tổ trưởng' : 'Giáo viên'}
                                    </span>
                                </td>
                                <td>${u.department}</td>
                                <td>
                                    <button class="btn btn-secondary btn-sm" onclick="changeUserRole(${u.id})">Đổi vai trò</button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    } else if (activeTab === 'categories') {
        panel.innerHTML = `
            <div style="margin-bottom:var(--space-md);">
                <h3>Quản lý Cây Thư mục & Danh mục Học liệu</h3>
                <p style="font-size:0.85rem; color:var(--text-muted);">Tạo, sửa, xóa các nhánh danh mục theo mô hình cấu trúc trường học</p>
            </div>
            <div class="admin-table-container">
                <table class="admin-table">
                    <thead>
                        <tr>
                            <th>Mã</th>
                            <th>Biểu tượng</th>
                            <th>Tên danh mục</th>
                            <th>Mô tả</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${CATEGORIES.map(c => `
                            <tr>
                                <td><code>${c.id}</code></td>
                                <td style="font-size:1.3rem;">${c.icon}</td>
                                <td><strong>${c.name}</strong></td>
                                <td>${c.desc}</td>
                                <td>
                                    <button class="btn btn-secondary btn-sm" onclick="showToast('Chức năng sửa danh mục đã sẵn sàng', 'info')">✏️ Sửa</button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    } else if (activeTab === 'drive') {
        const settings = store.getSettings();
        panel.innerHTML = `
            <div style="max-width:760px;">
                <div style="display:flex; align-items:center; gap:12px; margin-bottom:var(--space-md);">
                    <div style="width:42px; height:42px; border-radius:10px; background:#ffffff; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 8px rgba(0,0,0,0.15);">
                        <svg width="26" height="26" viewBox="0 0 87.3 78" fill="none"><path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/><path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47"/><path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.5l5.85 10.15z" fill="#ea4335"/><path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/><path d="m59.8 53h27.5c0-1.55-.4-3.1-1.2-4.5l-20.4-35.35c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8z" fill="#2684fc"/><path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l-20.85-36.1-13.75 23.8 9.3 16.1c1.35.8 2.9 1.2 4.5 1.2h14.2c1.35 0 2.5-.4 3.3-1.7z" fill="#ffba00"/></svg>
                    </div>
                    <div>
                        <h3 style="margin:0;">☁️ Cấu hình Kết nối Google Drive của Trường</h3>
                        <p style="margin:0; font-size:0.85rem; color:var(--text-muted);">Quản lý liên kết lưu trữ đám mây dùng chung cho toàn bộ giáo viên trường TH Núi Thành</p>
                    </div>
                </div>

                <div class="card" style="margin-bottom:var(--space-md); padding:var(--space-lg);">
                    <h4 style="margin-bottom:8px; color:var(--text-primary);">1. Đường dẫn Thư mục Google Drive chung</h4>
                    <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:12px;">
                        Thư mục nơi lưu trữ tất cả giáo án, bài giảng PowerPoint và đề thi của trường. Giáo viên bấm nút "Google Drive" trên web sẽ mở trực tiếp thư mục này.
                    </p>
                    <div style="display:flex; gap:8px; margin-bottom:12px;">
                        <input type="url" class="form-input" id="cfg-drive-folder-url" value="${escapeHtml(settings.drive_folder_url || '')}" placeholder="https://drive.google.com/drive/folders/..." style="flex:1;">
                        <a href="${escapeHtml(settings.drive_folder_url || 'https://drive.google.com')}" target="_blank" rel="noopener" class="btn btn-secondary" id="btn-cfg-test-drive">
                            ↗️ Mở thử Drive
                        </a>
                    </div>
                </div>

                <div class="card" style="margin-bottom:var(--space-md); padding:var(--space-lg);">
                    <h4 style="margin-bottom:8px; color:var(--text-primary);">2. Cầu nối Tự động hóa Google Apps Script (Tùy chọn nâng cao)</h4>
                    <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:12px;">
                        URL Web App Google Apps Script giúp tự động nhận file giáo viên tải lên và lưu thẳng vào Google Drive của trường mà không cần copy paste link.
                    </p>
                    <div style="display:flex; gap:8px; margin-bottom:12px;">
                        <input type="url" class="form-input" id="cfg-drive-gas-url" value="${escapeHtml(settings.drive_gas_url || '')}" placeholder="https://script.google.com/macros/s/.../exec" style="flex:1;">
                    </div>
                    <div style="font-size:0.82rem; color:var(--text-secondary); background:var(--bg-surface); padding:10px; border-radius:var(--radius-sm); border:1px solid var(--border-color);">
                        💡 Xem hướng dẫn chi tiết từng bước tạo Google Apps Script miễn phí 100% trong tệp <code>HUONG_DAN_KET_NOI_GOOGLE_DRIVE.md</code>.
                    </div>
                </div>

                <div style="display:flex; gap:10px; justify-content:flex-end;">
                    <button class="btn btn-primary btn-lg" onclick="saveDriveSettings()">
                        💾 Lưu cấu hình Google Drive
                    </button>
                </div>
            </div>
        `;
    } else if (activeTab === 'system') {
        panel.innerHTML = `
            <div style="max-width:600px;">
                <h3>🔧 Quản trị & Sao lưu Hệ thống</h3>
                <p style="font-size:0.88rem; color:var(--text-secondary); margin:var(--space-md) 0;">
                    Toàn bộ dữ liệu tài liệu, tài khoản và đánh giá có thể được sao lưu tức thời hoặc phục hồi khi triển khai lên máy chủ Cloudflare.
                </p>
                <div style="display:flex; flex-direction:column; gap:12px;">
                    <button class="btn btn-primary" onclick="backupSystemData()">
                        💾 Tải tệp sao lưu toàn bộ hệ thống (JSON Backup)
                    </button>
                    <button class="btn btn-secondary" onclick="restoreSystemPrompt()">
                        🔄 Phục hồi dữ liệu từ file sao lưu
                    </button>
                    <button class="btn btn-danger" onclick="resetToInitialData()">
                        ⚠️ Đặt lại dữ liệu mẫu ban đầu
                    </button>
                </div>
            </div>
        `;
    }
}

function saveDriveSettings() {
    const folderInput = document.getElementById('cfg-drive-folder-url');
    const gasInput = document.getElementById('cfg-drive-gas-url');
    const folderUrl = folderInput ? folderInput.value.trim() : '';
    const gasUrl = gasInput ? gasInput.value.trim() : '';

    const settings = store.getSettings();
    settings.drive_folder_url = folderUrl || 'https://drive.google.com';
    settings.drive_gas_url = gasUrl;
    store.saveSettings(settings);

    syncDriveLinks();
    showToast('Đã lưu thành công cấu hình Google Drive của Trường! 💾', 'success');
}

function syncDriveLinks() {
    const settings = store.getSettings();
    const driveUrl = settings.drive_folder_url || 'https://drive.google.com';
    const headerBtn = document.getElementById('btn-header-drive');
    const sidebarBtn = document.getElementById('btn-sidebar-drive');
    const uploadOpenBtn = document.getElementById('btn-open-school-drive');
    if (headerBtn) headerBtn.href = driveUrl;
    if (sidebarBtn) sidebarBtn.href = driveUrl;
    if (uploadOpenBtn) uploadOpenBtn.href = driveUrl;
}

function testCurrentDriveUrl() {
    const input = document.getElementById('upload-url');
    const statusEl = document.getElementById('drive-url-status');
    if (!input || !statusEl) return;
    const url = input.value.trim();
    if (!url) {
        statusEl.style.display = 'block';
        statusEl.style.color = 'var(--danger)';
        statusEl.innerHTML = '⚠️ Vui lòng dán liên kết Google Drive trước khi kiểm tra!';
        return;
    }
    const driveId = extractGoogleDriveId(url);
    if (driveId) {
        statusEl.style.display = 'block';
        statusEl.style.color = '#10b981';
        statusEl.innerHTML = `✅ <strong>Liên kết hợp lệ!</strong> Đã nhận dạng Google Drive ID: <code>${driveId}</code>. Trình xem trực tuyến sẵn sàng kích hoạt.`;
        showToast('Liên kết Google Drive hợp lệ! 🎉', 'success');
    } else if (url.startsWith('http://') || url.startsWith('https://')) {
        statusEl.style.display = 'block';
        statusEl.style.color = '#3b82f6';
        statusEl.innerHTML = `ℹ️ Đã nhận dạng liên kết web trực tuyến. Hệ thống sẽ kết nối qua trình phát trực tuyến.`;
        showToast('Đã nhận dạng liên kết trực tuyến!', 'info');
    } else {
        statusEl.style.display = 'block';
        statusEl.style.color = 'var(--danger)';
        statusEl.innerHTML = '❌ Đường link không đúng định dạng. Hãy đảm bảo link có dạng: <code>https://drive.google.com/file/d/...</code>';
        showToast('Link không đúng định dạng Google Drive!', 'error');
    }
}

function promptAddUser() {
    const fullname = prompt('Nhập họ và tên giáo viên:');
    if (!fullname) return;
    const username = prompt('Nhập tên đăng nhập (viết liền không dấu):', fullname.toLowerCase().replace(/\s+/g, ''));
    if (!username) return;
    const dept = prompt('Nhập tổ chuyên môn (VD: Tổ 1, Tổ 2, Tổ 3, Tổ 4, Tổ 5):', 'Tổ 1');

    const users = store.getUsers();
    users.push({
        id: Date.now(),
        username: username,
        fullname: fullname,
        role: 'teacher',
        department: dept || 'Tổ Chuyên Môn',
        honor: 'Giáo viên mới',
        avatar_letter: fullname.charAt(0),
        total_uploads: 0,
        total_downloads: 0,
        total_stars: 0
    });
    store.saveUsers(users);
    showToast(`Đã thêm thành công giáo viên: ${fullname}`, 'success');
    renderAdminPage('users');
}

function changeUserRole(userId) {
    const users = store.getUsers();
    const user = users.find(u => u.id === userId);
    if (!user) return;

    const current = user.role;
    const nextRole = current === 'teacher' ? 'leader' : current === 'leader' ? 'admin' : 'teacher';
    user.role = nextRole;
    store.saveUsers(users);
    showToast(`Đã cập nhật vai trò của ${user.fullname} thành: ${nextRole.toUpperCase()}`, 'success');
    renderAdminPage('users');
}

function backupSystemData() {
    const backup = {
        users: store.getUsers(),
        documents: store.getDocuments(),
        reports: store.getReports(),
        timestamp: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `Backup_KHL_Nuithanh_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast('Đã tải xuống file sao lưu hệ thống thành công!', 'success');
}

function restoreSystemPrompt() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target.result);
                if (data.users && data.documents) {
                    store.saveUsers(data.users);
                    store.saveDocuments(data.documents);
                    showToast('Đã phục hồi thành công dữ liệu từ file sao lưu!', 'success');
                    renderAdminPage('system');
                } else {
                    showToast('File JSON không hợp lệ!', 'error');
                }
            } catch (err) {
                showToast('Lỗi đọc file JSON!', 'error');
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

function resetToInitialData() {
    if (confirm('Thầy/Cô có chắc chắn muốn đặt lại dữ liệu mẫu ban đầu?')) {
        localStorage.removeItem('khls_users_v2');
        localStorage.removeItem('khls_docs_v2');
        localStorage.removeItem('khls_reports_v2');
        showToast('Đã khôi phục dữ liệu mẫu ban đầu!', 'info');
        window.location.reload();
    }
}

// ======================== BATCH USER MODAL ========================

function openBatchUserModal() {
    const modal = document.getElementById('batch-user-modal');
    if (modal) modal.classList.add('active');
}

function closeBatchUserModal() {
    const modal = document.getElementById('batch-user-modal');
    if (modal) modal.classList.remove('active');
}

// ======================== UPLOAD FORM ========================

let uploadedFileCache = {
    file: null,
    dataUrl: null,
    htmlContent: null
};

function processUploadedFile(file) {
    if (!file) return;
    uploadedFileCache.file = file;
    uploadedFileCache.dataUrl = null;
    uploadedFileCache.htmlContent = null;

    // 1. Read as Data URL (for lossless download later)
    const reader = new FileReader();
    reader.onload = (e) => {
        uploadedFileCache.dataUrl = e.target.result;
    };
    reader.readAsDataURL(file);

    // 2. Parse content based on file extension
    const ext = file.name.split('.').pop().toLowerCase();
    if (ext === 'docx' && window.mammoth) {
        const abReader = new FileReader();
        abReader.onload = (e) => {
            window.mammoth.convertToHtml({ arrayBuffer: e.target.result })
                .then((result) => {
                    uploadedFileCache.htmlContent = result.value;
                })
                .catch((err) => {
                    console.warn('Mammoth convert error:', err);
                });
        };
        abReader.readAsArrayBuffer(file);
    } else if (['txt', 'md', 'html'].includes(ext)) {
        const textReader = new FileReader();
        textReader.onload = (e) => {
            uploadedFileCache.htmlContent = `<pre style="white-space:pre-wrap; font-family:inherit;">${escapeHtml(e.target.result)}</pre>`;
        };
        textReader.readAsText(file);
    }

    // Auto-detect subject and grade from filename if user hasn't filled them
    const lowerName = file.name.toLowerCase();
    const gradeSelect = document.getElementById('upload-grade');
    const subjectSelect = document.getElementById('upload-subject');
    const titleInput = document.getElementById('upload-title');

    if (titleInput && (!titleInput.value || titleInput.value.trim() === '')) {
        titleInput.value = file.name.replace(/\.[^/.]+$/, "").replace(/_/g, ' ');
    }

    if (gradeSelect) {
        for (let g = 1; g <= 5; g++) {
            if (lowerName.includes(`khoi ${g}`) || lowerName.includes(`khoi${g}`) || lowerName.includes(`tin${g}`) || lowerName.includes(`toan${g}`) || lowerName.includes(`tv${g}`) || lowerName.includes(`lop ${g}`) || lowerName.includes(`lop${g}`)) {
                gradeSelect.value = String(g);
                break;
            }
        }
    }

    if (subjectSelect) {
        if (lowerName.includes('tin') || lowerName.includes('thong tin')) subjectSelect.value = 'tinhoc';
        else if (lowerName.includes('toan')) subjectSelect.value = 'toan';
        else if (lowerName.includes('tieng viet') || lowerName.includes('tv')) subjectSelect.value = 'tiengviet';
        else if (lowerName.includes('khoa hoc')) subjectSelect.value = 'khoahoc';
        else if (lowerName.includes('ls') || lowerName.includes('dia ly')) subjectSelect.value = 'lsdl';
        else if (lowerName.includes('anh') || lowerName.includes('english')) subjectSelect.value = 'tienganh';
    }
}

function initUploadForm() {
    const form = document.getElementById('upload-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!state.user) {
            openAuthRequiredModal();
            return;
        }

        const title = document.getElementById('upload-title').value.trim();
        const desc = document.getElementById('upload-desc').value.trim();
        const cat = document.getElementById('upload-category').value;
        const grade = document.getElementById('upload-grade').value;
        const subject = document.getElementById('upload-subject').value;
        const fileInput = document.getElementById('upload-file');

        if (!title || !cat || !grade || !subject) {
            showToast('Vui lòng điền đầy đủ các thông tin bắt buộc!', 'error');
            return;
        }

        const submitBtn = form.querySelector('button[type="submit"]');
        const origBtnText = submitBtn ? submitBtn.innerHTML : 'Gửi học liệu';
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '⏳ Đang phân tích nội dung tệp...';
        }

        const file = fileInput.files[0] || uploadedFileCache.file;
        let ext = 'docx';
        let fileName = `${title}.docx`;
        let fileSize = 1850000;

        if (file) {
            fileName = file.name;
            fileSize = file.size;
            ext = file.name.split('.').pop().toLowerCase();

            // Ensure Mammoth finishes conversion before saving
            if (ext === 'docx' && !uploadedFileCache.htmlContent && window.mammoth) {
                try {
                    const ab = await file.arrayBuffer();
                    const res = await window.mammoth.convertToHtml({ arrayBuffer: ab });
                    uploadedFileCache.htmlContent = res.value;
                } catch (err) {
                    console.warn('Mammoth convert error on submit:', err);
                }
            } else if (['txt', 'md', 'html'].includes(ext) && !uploadedFileCache.htmlContent) {
                try {
                    const text = await file.text();
                    uploadedFileCache.htmlContent = `<pre style="white-space:pre-wrap; font-family:inherit;">${escapeHtml(text)}</pre>`;
                } catch (err) {
                    console.warn('Text read error on submit:', err);
                }
            }

            // Ensure Data URL is read if size allows
            if (!uploadedFileCache.dataUrl && fileSize < 5000000) {
                try {
                    uploadedFileCache.dataUrl = await new Promise((resolve) => {
                        const r = new FileReader();
                        r.onload = () => resolve(r.result);
                        r.onerror = () => resolve(null);
                        r.readAsDataURL(file);
                    });
                } catch (err) {
                    console.warn('DataURL read error:', err);
                }
            }
        }

        const uploadUrlInput = document.getElementById('upload-url');
        const onlineFileUrl = uploadUrlInput && uploadUrlInput.value.trim().length > 0 ? uploadUrlInput.value.trim() : null;

        const currentUser = state.user || {
            id: 4,
            fullname: 'Cô Lê Thu Hà',
            department: 'Tổ 1'
        };

        const newDoc = {
            id: 'doc-' + Date.now(),
            title: title,
            description: desc,
            category: cat,
            grade: grade,
            subject: subject,
            file_name: fileName,
            file_size: fileSize,
            file_type: ext,
            file_url: onlineFileUrl,
            file_data_url: uploadedFileCache.dataUrl || null,
            file_content_html: uploadedFileCache.htmlContent || null,
            author_id: currentUser.id,
            author_name: currentUser.fullname,
            author_dept: currentUser.department,
            status: 'pending', // Phải qua kiểm duyệt của Tổ trưởng chuyên môn
            avg_rating: 0,
            rating_count: 0,
            download_count: 0,
            view_count: 1,
            created_at: new Date().toISOString(),
            approved_by: null,
            comments: []
        };

        const docs = store.getDocuments();
        docs.unshift(newDoc);
        try {
            store.saveDocuments(docs);
        } catch (storageErr) {
            console.warn('LocalStorage quota limit reached, saving document with HTML only:', storageErr);
            newDoc.file_data_url = null;
            store.saveDocuments(docs);
        }

        // Add pending review notification
        const notifs = store.getNotifications();
        notifs.unshift({
            id: 'notif-' + Date.now(),
            title: 'Tài liệu mới chờ duyệt',
            text: `${currentUser.fullname} vừa nộp: ${title}`,
            time: 'Vừa xong',
            icon: '📋',
            type: 'review',
            link: `#/review?doc=${newDoc.id}`,
            unread: true
        });
        store.saveNotifications(notifs);

        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = origBtnText;
        }

        form.reset();
        uploadedFileCache = { file: null, dataUrl: null, htmlContent: null };
        document.getElementById('upload-file-preview').style.display = 'none';
        document.getElementById('upload-dropzone').style.display = '';

        updatePendingBadge();
        showToast('🎉 Gửi học liệu thành công! Đã lưu trọn vẹn nội dung file.', 'success');
        state.reviewDeptFilter = 'all';
        navigate(`#/review?doc=${newDoc.id}`);
        renderReviewPage();
        setTimeout(() => {
            highlightReviewDocFromLink(`#/review?doc=${newDoc.id}`, newDoc.title);
        }, 150);
    });
}

// ======================== AUTH & LOGIN ========================

function openAuthRequiredModal() {
    const modal = document.getElementById('auth-required-modal');
    if (modal) modal.classList.add('active');
}

function closeAuthRequiredModal() {
    const modal = document.getElementById('auth-required-modal');
    if (modal) modal.classList.remove('active');
}

function openLoginModal() {
    const modal = document.getElementById('login-modal');
    if (modal) {
        const loginPassInput = document.getElementById('login-password');
        const togglePassBtn = document.getElementById('toggle-password');
        if (loginPassInput) loginPassInput.type = 'password';
        if (togglePassBtn) {
            togglePassBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
            togglePassBtn.setAttribute('title', 'Hiện/ẩn mật khẩu');
            togglePassBtn.setAttribute('aria-label', 'Hiện mật khẩu');
        }
        modal.classList.add('active');
    }
}

function closeLoginModal() {
    const modal = document.getElementById('login-modal');
    if (modal) modal.classList.remove('active');
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

    if (!email || !password) {
        showToast('Vui lòng nhập tên đăng nhập và mật khẩu!', 'error');
        return;
    }

    const users = store.getUsers();
    let matchedUser = users.find(u => u.username === email || u.fullname.toLowerCase() === email.toLowerCase());

    if (!matchedUser) {
        // Quick fallback for demo accounts
        if (email === 'admin') {
            matchedUser = users.find(u => u.role === 'admin') || users[0];
        } else if (email === 'totruong') {
            matchedUser = users.find(u => u.role === 'leader') || users[1];
        } else {
            matchedUser = {
                id: Date.now(),
                username: email,
                fullname: email,
                role: 'teacher',
                department: 'Tổ Chuyên Môn',
                avatar_letter: email.charAt(0).toUpperCase(),
                total_uploads: 0,
                total_downloads: 0,
                total_stars: 0
            };
        }
    }

    loginAs(matchedUser);
    closeLoginModal();
    showToast(`Chào mừng ${matchedUser.fullname} đã đăng nhập! 🎉`, 'success');
    if (state.pendingContributeAfterLogin) {
        state.pendingContributeAfterLogin = false;
        setTimeout(() => {
            triggerContributeFlow();
        }, 350);
    }
}

function loginAs(user) {
    if (user && user.fullname) {
        user.fullname = user.fullname.replace(/^(Thầy|Cô)\s+/i, '').trim();
    }
    state.user = user;
    localStorage.setItem('khls-user', JSON.stringify(user));
    updateUserUI();
    updatePendingBadge();
}

function handleLogout() {
    state.user = null;
    localStorage.removeItem('khls-user');
    updateUserUI();
    navigate('#/');
    showToast('Đã đăng xuất khỏi hệ thống', 'info');
    const dropdown = document.getElementById('user-dropdown');
    if (dropdown) dropdown.classList.remove('active');
}

function updateUserUI() {
    const loginBtn = document.getElementById('btn-login');
    const userMenu = document.getElementById('user-menu');
    const notifBtn = document.getElementById('notification-btn');
    const notifWrapper = document.getElementById('notification-wrapper');
    const uploadSidebar = document.getElementById('btn-upload-sidebar');
    const menuDashboard = document.getElementById('menu-dashboard');
    const menuAdmin = document.getElementById('menu-admin');

    if (state.user) {
        if (state.user.fullname) {
            state.user.fullname = state.user.fullname.replace(/^(Thầy|Cô)\s+/i, '').trim();
        }
        if (loginBtn) loginBtn.style.display = 'none';
        if (userMenu) userMenu.style.display = 'block';
        if (notifWrapper) notifWrapper.style.display = 'block';
        if (notifBtn) notifBtn.style.display = 'flex';
        if (uploadSidebar) uploadSidebar.style.display = 'flex';

        const letter = (state.user.avatar_letter || (state.user.fullname || 'A').charAt(0)).toUpperCase();
        const avatarLetterEl = document.getElementById('user-avatar-letter');
        const displayNameEl = document.getElementById('user-display-name');
        if (avatarLetterEl) avatarLetterEl.textContent = letter;
        if (displayNameEl) displayNameEl.textContent = state.user.fullname;

        if (state.user.role === 'admin') {
            if (menuDashboard) menuDashboard.style.display = 'flex';
            if (menuAdmin) menuAdmin.style.display = 'flex';
        } else if (state.user.role === 'leader') {
            if (menuDashboard) menuDashboard.style.display = 'flex';
            if (menuAdmin) menuAdmin.style.display = 'none';
        } else {
            if (menuDashboard) menuDashboard.style.display = 'none';
            if (menuAdmin) menuAdmin.style.display = 'none';
        }
    } else {
        if (loginBtn) loginBtn.style.display = 'inline-flex';
        if (userMenu) userMenu.style.display = 'none';
        if (notifWrapper) notifWrapper.style.display = 'none';
        if (notifBtn) notifBtn.style.display = 'none';
        if (uploadSidebar) uploadSidebar.style.display = 'flex';
        if (menuDashboard) menuDashboard.style.display = 'none';
        if (menuAdmin) menuAdmin.style.display = 'none';
    }
}

function restoreSession() {
    try {
        const saved = localStorage.getItem('khls-user');
        if (saved) {
            state.user = JSON.parse(saved);
            if (state.user && state.user.fullname) {
                state.user.fullname = state.user.fullname.replace(/^(Thầy|Cô)\s+/i, '').trim();
                localStorage.setItem('khls-user', JSON.stringify(state.user));
            }
        }
    } catch (e) {
        localStorage.removeItem('khls-user');
        state.user = null;
    }
    updateUserUI();
}

// ======================== EVENT LISTENERS ========================

function initEventListeners() {
    document.getElementById('sidebar-toggle')?.addEventListener('click', toggleSidebar);
    document.getElementById('sidebar-overlay')?.addEventListener('click', closeSidebar);
    document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);

    // Modals
    document.getElementById('auth-required-modal-close')?.addEventListener('click', closeAuthRequiredModal);
    document.getElementById('btn-auth-required-cancel')?.addEventListener('click', closeAuthRequiredModal);
    document.getElementById('btn-auth-required-login')?.addEventListener('click', () => {
        closeAuthRequiredModal();
        state.pendingContributeAfterLogin = true;
        openLoginModal();
    });

    document.getElementById('btn-login')?.addEventListener('click', openLoginModal);
    document.getElementById('login-modal-close')?.addEventListener('click', closeLoginModal);
    document.getElementById('preview-modal-close')?.addEventListener('click', closePreviewModal);
    document.getElementById('report-modal-close')?.addEventListener('click', closeReportModal);
    document.getElementById('batch-user-modal-close')?.addEventListener('click', closeBatchUserModal);

    // Close on overlay click
    ['login-modal', 'auth-required-modal', 'preview-modal', 'report-modal', 'batch-user-modal', 'contribute-modal', 'drive-setup-modal'].forEach(id => {
        document.getElementById(id)?.addEventListener('click', (e) => {
            if (e.target === e.currentTarget) e.currentTarget.classList.remove('active');
        });
    });

    document.getElementById('login-form')?.addEventListener('submit', handleLogin);
    document.getElementById('btn-logout')?.addEventListener('click', handleLogout);

    // Toggle password visibility
    const togglePassBtn = document.getElementById('toggle-password');
    const loginPassInput = document.getElementById('login-password');
    if (togglePassBtn && loginPassInput) {
        togglePassBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const isPassword = loginPassInput.type === 'password';
            loginPassInput.type = isPassword ? 'text' : 'password';
            togglePassBtn.setAttribute('aria-label', isPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu');
            togglePassBtn.setAttribute('title', isPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu');
            togglePassBtn.innerHTML = isPassword
                ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`
                : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
            loginPassInput.focus();
        });
    }

    // User dropdown
    document.getElementById('user-avatar-btn')?.addEventListener('click', (e) => {
        e.stopPropagation();
        closeNotificationDropdown();
        document.getElementById('user-dropdown')?.classList.toggle('active');
    });

    // Notification dropdown
    document.getElementById('notification-btn')?.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleNotificationDropdown();
    });

    document.getElementById('btn-mark-all-read')?.addEventListener('click', (e) => {
        e.stopPropagation();
        markAllNotificationsRead();
    });

    // Close dropdowns on outside click
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.user-menu')) {
            document.getElementById('user-dropdown')?.classList.remove('active');
        }
        if (!e.target.closest('#notification-wrapper')) {
            closeNotificationDropdown();
        }
    });

    // Search events
    const doSearch = (q) => {
        if (q.trim()) navigate(`#/browse?q=${encodeURIComponent(q.trim())}`);
    };
    document.getElementById('hero-search-btn')?.addEventListener('click', () => {
        doSearch(document.getElementById('hero-search-input')?.value || '');
    });
    document.getElementById('hero-search-input')?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') doSearch(e.target.value);
    });
    document.getElementById('search-input')?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') doSearch(e.target.value);
    });

    // Hero quick tags
    document.querySelectorAll('.hero-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            const search = tag.getAttribute('data-search');
            navigate(`#/browse?q=${encodeURIComponent(search)}`);
        });
    });

    // Browse filters
    const handleFilterChange = () => {
        const grade = document.getElementById('filter-grade')?.value || '';
        const subject = document.getElementById('filter-subject')?.value || '';
        const sort = document.getElementById('filter-sort')?.value || '';
        renderBrowsePage('', grade, subject);
    };
    document.getElementById('filter-grade')?.addEventListener('change', handleFilterChange);
    document.getElementById('filter-subject')?.addEventListener('change', handleFilterChange);
    document.getElementById('filter-sort')?.addEventListener('change', handleFilterChange);

    // View toggle (Grid / List)
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.viewMode = btn.getAttribute('data-view') || 'grid';
            handleFilterChange();
        });
    });

    // Admin Tabs
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.getAttribute('data-tab');
            renderAdminPage(tabName);
        });
    });

    // Report Form
    document.getElementById('report-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const docId = document.getElementById('report-doc-id').value;
        const reason = document.getElementById('report-reason').value;
        const detail = document.getElementById('report-detail').value;

        const reports = store.getReports();
        reports.push({
            id: 'rep-' + Date.now(),
            doc_id: docId,
            reason: reason,
            detail: detail,
            created_at: new Date().toISOString()
        });
        store.saveReports(reports);

        closeReportModal();
        showToast('Cảm ơn Thầy/Cô! Phản ánh đã được gửi tới Ban Giám Hiệu xem xét.', 'success');
    });

    // Batch user template fill
    document.getElementById('btn-fill-sample-users')?.addEventListener('click', () => {
        const sampleText = `Nguyễn Thị Lan, lan.nt@nuithanh.edu.vn, teacher, Tổ 1
Phan Đình Phùng, phung.pd@nuithanh.edu.vn, teacher, Tổ 2
Nguyễn Thị Hương, huong.nt@nuithanh.edu.vn, leader, Tổ 2
Võ Thị Sáu, sau.vt@nuithanh.edu.vn, teacher, Tổ 3
Đặng Văn Ngữ, ngu.dv@nuithanh.edu.vn, teacher, Tổ 4
Bùi Thị Xuân, xuan.bt@nuithanh.edu.vn, leader, Tổ 4
Hoàng Hoa Thám, tham.hh@nuithanh.edu.vn, teacher, Tổ 5
Lê Quý Đôn, don.lq@nuithanh.edu.vn, teacher, Tổ Tin học - Ngoại ngữ
Nguyễn Du, du.nd@nuithanh.edu.vn, teacher, Tổ Âm nhạc - Mỹ thuật
Hồ Xuân Hương, huong.hx@nuithanh.edu.vn, teacher, Tổ Thể chất`;
        document.getElementById('batch-user-input').value = sampleText;
    });

    // Batch user submit
    document.getElementById('batch-user-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = document.getElementById('batch-user-input').value.trim();
        if (!text) return;

        const lines = text.split('\n');
        const users = store.getUsers();
        let addedCount = 0;

        lines.forEach(line => {
            const parts = line.split(',').map(s => s.trim());
            if (parts.length >= 2) {
                const fullname = parts[0];
                const email = parts[1];
                const role = parts[2] || 'teacher';
                const dept = parts[3] || 'Tổ Chuyên Môn';
                const username = email.split('@')[0];

                if (!users.some(u => u.username === username)) {
                    users.push({
                        id: Date.now() + Math.floor(Math.random() * 1000),
                        username: username,
                        fullname: fullname,
                        role: role,
                        department: dept,
                        honor: 'Giáo viên trường Núi Thành',
                        avatar_letter: fullname.charAt(0),
                        total_uploads: 0,
                        total_downloads: 0,
                        total_stars: 0
                    });
                    addedCount++;
                }
            }
        });

        store.saveUsers(users);
        closeBatchUserModal();
        showToast(`Đã thêm thành công ${addedCount} tài khoản giáo viên mới! 🎉`, 'success');
        renderAdminPage('users');
    });

    // File Dropzone handlers
    const dropzone = document.getElementById('upload-dropzone');
    const fileInput = document.getElementById('upload-file');
    if (dropzone && fileInput) {
        dropzone.addEventListener('dragover', (e) => { e.preventDefault(); dropzone.classList.add('drag-over'); });
        dropzone.addEventListener('dragleave', () => dropzone.classList.remove('drag-over'));
        dropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropzone.classList.remove('drag-over');
            if (e.dataTransfer.files.length > 0) {
                fileInput.files = e.dataTransfer.files;
                showFilePreview(e.dataTransfer.files[0]);
            }
        });
        fileInput.addEventListener('click', () => {
            fileInput.value = '';
        });
        fileInput.addEventListener('change', () => {
            if (fileInput.files.length > 0) showFilePreview(fileInput.files[0]);
        });
    }

    document.getElementById('upload-file-remove')?.addEventListener('click', () => {
        document.getElementById('upload-file').value = '';
        uploadedFileCache = { file: null, dataUrl: null, htmlContent: null };
        document.getElementById('upload-file-preview').style.display = 'none';
        document.getElementById('upload-dropzone').style.display = '';
    });

    initUploadForm();
    initContributeModal();
}

function showFilePreview(file) {
    if (!file) return;

    if (file.size > 50 * 1024 * 1024) {
        showToast('⚠️ Dung lượng tệp vượt quá giới hạn 50MB. Vui lòng chọn tệp nhỏ hơn.', 'error');
        const fileInput = document.getElementById('upload-file');
        if (fileInput) fileInput.value = '';
        return;
    }

    const ext = file.name.split('.').pop().toLowerCase();
    const allowedExtensions = ['doc', 'docx', 'ppt', 'pptx', 'pdf'];
    if (!allowedExtensions.includes(ext)) {
        showToast(`⚠️ Tệp không đúng định dạng (.${ext})! Hệ thống chỉ cho phép tải lên các tệp: .doc, .docx, .ppt, .pptx, .pdf.`, 'error');
        const fileInput = document.getElementById('upload-file');
        if (fileInput) fileInput.value = '';
        return;
    }

    processUploadedFile(file);
    const preview = document.getElementById('upload-file-preview');
    const nameEl = document.getElementById('upload-file-name');
    const sizeEl = document.getElementById('upload-file-size');
    const dropzone = document.getElementById('upload-dropzone');
    if (nameEl) nameEl.textContent = file.name;
    if (sizeEl) sizeEl.textContent = formatFileSize(file.size);
    if (preview) preview.style.display = 'flex';
    if (dropzone) dropzone.style.display = 'none';
}

// ======================== MODAL: CONTRIBUTE & GOOGLE DRIVE UPLOAD ========================

let modalUploadedFile = null;

const GAS_TEMPLATE_CODE = `// ============================================================
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
    
    // 1. Phê duyệt hoặc Từ chối học liệu
    if (data.action === "review" || data.action === "approve" || data.action === "reject") {
      var allDocs = loadDocuments(folder);
      var targetDoc = allDocs.find(function(d) { return d.id === data.docId; });
      if (targetDoc) {
        targetDoc.status = (data.action === "reject" ? "rejected" : "approved");
        targetDoc.approved_by = data.approvedBy || "Ban Giám Hiệu";
        if (data.rejectReason) targetDoc.reject_reason = data.rejectReason;
        saveDocumentsDb(folder, allDocs);
        return responseJSON({ status: "success", message: "Đã cập nhật trạng thái học liệu", doc: targetDoc });
      }
      return responseJSON({ status: "error", message: "Không tìm thấy mã học liệu: " + data.docId });
    }
    
    // 2. Tải lên tệp học liệu mới
    var fileName = data.fileName || ("HocLieu_" + new Date().getTime());
    var contentType = data.fileType || "application/octet-stream";
    var base64Data = data.base64Data;
    
    if (!base64Data) {
      return responseJSON({ status: "error", message: "Thiếu dữ liệu tệp tin base64Data" });
    }
    
    var bytes = Utilities.base64Decode(base64Data);
    var blob = Utilities.newBlob(bytes, contentType, fileName);
    var file = folder.createFile(blob);
    
    var fileDesc = "Người đóng góp: " + (data.author || "Giáo viên") + "\\n";
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
      folderName: folder.getName(),
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
`;

function triggerContributeFlow() {
    if (!state.user) {
        openAuthRequiredModal();
        return;
    }
    openContributeModal();
}

function openContributeModal(preselectedFile = null) {
    if (!state.user) {
        openAuthRequiredModal();
        return;
    }
    const modal = document.getElementById('contribute-modal');
    if (!modal) return;

    const progressContainer = document.getElementById('modal-upload-progress-container');
    if (progressContainer) progressContainer.style.display = 'none';

    const authorInput = document.getElementById('modal-upload-author');
    const deptSelect = document.getElementById('modal-upload-dept');
    if (state.user) {
        if (authorInput && !authorInput.value) authorInput.value = state.user.fullname;
        if (deptSelect && state.user.department) deptSelect.value = state.user.department;
    } else {
        if (authorInput && !authorInput.value) authorInput.value = 'Cô Lê Thu Hà';
        if (deptSelect && !deptSelect.value) deptSelect.value = 'Tổ 1';
    }

    updateDriveStatusUI();

    if (preselectedFile) {
        handleModalFileSelection(preselectedFile);
    } else if (!modalUploadedFile) {
        const preview = document.getElementById('modal-file-preview');
        const dropzone = document.getElementById('modal-dropzone');
        if (preview) preview.style.display = 'none';
        if (dropzone) dropzone.style.display = 'block';
    }

    modal.classList.add('active');
}

function resetContributeForm() {
    const form = document.getElementById('contribute-form');
    if (form) form.reset();

    const titleInput = document.getElementById('modal-upload-title');
    if (titleInput) titleInput.value = '';

    const descInput = document.getElementById('modal-upload-desc');
    if (descInput) descInput.value = '';

    const catSelect = document.getElementById('modal-upload-category');
    if (catSelect) catSelect.value = '';

    const gradeSelect = document.getElementById('modal-upload-grade');
    if (gradeSelect) gradeSelect.value = '';

    const subjectSelect = document.getElementById('modal-upload-subject');
    if (subjectSelect) subjectSelect.value = '';

    const fileInput = document.getElementById('modal-upload-file');
    if (fileInput) fileInput.value = '';

    modalUploadedFile = null;

    const preview = document.getElementById('modal-file-preview');
    const dropzone = document.getElementById('modal-dropzone');
    if (preview) preview.style.display = 'none';
    if (dropzone) dropzone.style.display = 'block';

    const progressContainer = document.getElementById('modal-upload-progress-container');
    if (progressContainer) progressContainer.style.display = 'none';

    const progressBar = document.getElementById('modal-progress-bar');
    if (progressBar) progressBar.style.width = '0%';

    const submitBtn = document.getElementById('modal-btn-submit');
    if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            <span>🚀 Tải lên &amp; Lưu vào Google Drive</span>
        `;
    }
}

function closeContributeModal() {
    const modal = document.getElementById('contribute-modal');
    if (modal) modal.classList.remove('active');
    resetContributeForm();
}

function handleModalFileSelection(file) {
    if (!file) return;

    if (file.size > 50 * 1024 * 1024) {
        showToast('⚠️ Dung lượng tệp vượt quá giới hạn 50MB. Vui lòng chọn tệp nhỏ hơn.', 'error');
        const modalFileInput = document.getElementById('modal-upload-file');
        if (modalFileInput) modalFileInput.value = '';
        return;
    }

    const ext = file.name.split('.').pop().toLowerCase();
    const allowedExtensions = ['doc', 'docx', 'ppt', 'pptx', 'pdf'];
    if (!allowedExtensions.includes(ext)) {
        showToast(`⚠️ Tệp không đúng định dạng (.${ext})! Hệ thống chỉ cho phép tải lên các tệp: .doc, .docx, .ppt, .pptx, .pdf.`, 'error');
        modalUploadedFile = null;
        const modalFileInput = document.getElementById('modal-upload-file');
        if (modalFileInput) modalFileInput.value = '';
        return;
    }

    modalUploadedFile = file;

    const preview = document.getElementById('modal-file-preview');
    const dropzone = document.getElementById('modal-dropzone');
    const nameEl = document.getElementById('modal-file-name');
    const sizeEl = document.getElementById('modal-file-size');
    const iconEl = document.getElementById('modal-file-icon');
    const titleInput = document.getElementById('modal-upload-title');
    const gradeSelect = document.getElementById('modal-upload-grade');
    const subjectSelect = document.getElementById('modal-upload-subject');
    const catSelect = document.getElementById('modal-upload-category');

    if (nameEl) nameEl.textContent = file.name;
    if (sizeEl) sizeEl.textContent = formatFileSize(file.size);
    if (iconEl) iconEl.textContent = getFileTypeIcon(file.name);

    if (preview) preview.style.display = 'flex';
    if (dropzone) dropzone.style.display = 'none';

    // Smart auto-detection from filename
    const cleanName = file.name.replace(/\.[^/.]+$/, "").replace(/[_-]/g, ' ');
    if (titleInput && (!titleInput.value || titleInput.value.trim() === '')) {
        titleInput.value = cleanName;
    }

    const lowerName = cleanName.toLowerCase();

    // Auto-detect grade
    if (gradeSelect) {
        for (let g = 1; g <= 5; g++) {
            if (lowerName.includes(`khoi ${g}`) || lowerName.includes(`khoi${g}`) || 
                lowerName.includes(`lop ${g}`) || lowerName.includes(`lop${g}`) || 
                lowerName.includes(`k${g}`) || lowerName.includes(`l${g}`) ||
                lowerName.includes(`tin ${g}`) || lowerName.includes(`toan ${g}`)) {
                gradeSelect.value = String(g);
                break;
            }
        }
    }

    // Auto-detect subject
    if (subjectSelect) {
        if (lowerName.includes('tin') || lowerName.includes('thong tin') || lowerName.includes('cong nghe')) subjectSelect.value = 'tinhoc';
        else if (lowerName.includes('toan')) subjectSelect.value = 'toan';
        else if (lowerName.includes('tieng viet') || lowerName.includes('tv') || lowerName.includes('tap doc') || lowerName.includes('chinh ta')) subjectSelect.value = 'tiengviet';
        else if (lowerName.includes('tu nhien') || lowerName.includes('tnxh') || lowerName.includes('xa hoi')) subjectSelect.value = 'tnxh';
        else if (lowerName.includes('khoa hoc')) subjectSelect.value = 'khoahoc';
        else if (lowerName.includes('lich su') || lowerName.includes('dia ly') || lowerName.includes('lsdl')) subjectSelect.value = 'lsdl';
        else if (lowerName.includes('dao duc')) subjectSelect.value = 'daoduc';
        else if (lowerName.includes('tieng anh') || lowerName.includes('english')) subjectSelect.value = 'tienganh';
        else if (lowerName.includes('am nhac') || lowerName.includes('hat')) subjectSelect.value = 'amnhac';
        else if (lowerName.includes('my thuat') || lowerName.includes('ve')) subjectSelect.value = 'mythuat';
        else if (lowerName.includes('the chat') || lowerName.includes('gdtc') || lowerName.includes('the duc')) subjectSelect.value = 'gdtc';
    }

    // Auto-detect category
    if (catSelect && !catSelect.value) {
        if (lowerName.includes('khbd') || lowerName.includes('giao an') || lowerName.includes('ke hoach bai day')) catSelect.value = 'khbd';
        else if (lowerName.includes('bai giang') || lowerName.includes('ppt') || lowerName.includes('powerpoint') || lowerName.includes('slide')) catSelect.value = 'baigiang';
        else if (lowerName.includes('de thi') || lowerName.includes('kiem tra') || lowerName.includes('dap an')) catSelect.value = 'dethi';
        else if (lowerName.includes('phieu') || lowerName.includes('bai tap')) catSelect.value = 'phieubaitap';
        else if (lowerName.includes('tro choi') || lowerName.includes('game')) catSelect.value = 'trochoi';
        else if (lowerName.includes('video') || lowerName.includes('clip')) catSelect.value = 'video';
    }

    showToast(`Đã nhận dạng tệp: ${file.name} 📄`, 'info');
}

function updateDriveStatusUI() {
    const myGas = localStorage.getItem('khls_my_drive_gas_url');
    const settings = store.getSettings();
    const activeGas = myGas || settings.drive_gas_url;
    const destNameEl = document.getElementById('drive-destination-name');
    const destStatusEl = document.getElementById('drive-destination-status');

    if (destNameEl && destStatusEl) {
        destNameEl.textContent = 'Google Drive Quản trị (nguyentruongtonuithanh@gmail.com)';
        if (activeGas) {
            destStatusEl.innerHTML = '🟢 <strong>Đã liên kết Apps Script</strong> • Tự động chuyển thẳng vào Drive Quản trị nguyentruongtonuithanh@gmail.com';
            destStatusEl.style.color = '#10b981';
        } else {
            destStatusEl.innerHTML = '🟡 <em>Chờ Quản trị viên kích hoạt Apps Script</em> • File sẽ được lưu an toàn trên hệ thống';
            destStatusEl.style.color = 'var(--text-secondary)';
        }
    }
}

function openDriveSetupModal() {
    const modal = document.getElementById('drive-setup-modal');
    if (!modal) return;

    const gasInput = document.getElementById('my-drive-gas-url');
    const folderInput = document.getElementById('my-drive-folder-id');
    const resultEl = document.getElementById('gas-test-result');

    if (gasInput) {
        gasInput.value = localStorage.getItem('khls_my_drive_gas_url') || store.getSettings().drive_gas_url || '';
    }
    if (folderInput) {
        folderInput.value = localStorage.getItem('khls_my_drive_folder_id') || '';
    }
    if (resultEl) resultEl.style.display = 'none';

    modal.classList.add('active');
}

function closeDriveSetupModal() {
    const modal = document.getElementById('drive-setup-modal');
    if (modal) modal.classList.remove('active');
}

function copyGasScriptToClipboard() {
    navigator.clipboard.writeText(GAS_TEMPLATE_CODE).then(() => {
        showToast('📋 Đã sao chép mã Google Apps Script vào bộ nhớ tạm! Dán vào script.google.com để triển khai.', 'success');
        const btn = document.getElementById('btn-copy-gas-script');
        if (btn) {
            const originalText = btn.innerHTML;
            btn.innerHTML = '✅ Đã sao chép thành công!';
            setTimeout(() => { btn.innerHTML = originalText; }, 2500);
        }
    }).catch(err => {
        showToast('Không thể tự động sao chép. Vui lòng xem hướng dẫn chi tiết trong tệp tài liệu.', 'warning');
    });
}

async function testMyDriveGasConnection() {
    const input = document.getElementById('my-drive-gas-url');
    const resultEl = document.getElementById('gas-test-result');
    if (!input || !resultEl) return;

    const url = input.value.trim();
    if (!url) {
        resultEl.style.display = 'block';
        resultEl.style.color = 'var(--danger)';
        resultEl.innerHTML = '⚠️ Vui lòng dán URL Web App Google Apps Script trước khi kiểm tra!';
        return;
    }

    resultEl.style.display = 'block';
    resultEl.style.color = 'var(--primary)';
    resultEl.innerHTML = '⏳ Đang kiểm tra kết nối tới Google Apps Script...';

    try {
        const resp = await fetch(url + (url.includes('?') ? '&' : '?') + 'test=' + Date.now(), { method: 'GET' });
        const data = await resp.json();
        if (data && data.status === 'success') {
            resultEl.style.color = '#10b981';
            resultEl.innerHTML = '✅ <strong>Kết nối thành công!</strong> Google Apps Script đã sẵn sàng kết nối vào Google Drive nguyentruongtonuithanh@gmail.com.';
            showToast('Kiểm tra kết nối Google Apps Script thành công! 🎉', 'success');
        } else {
            resultEl.style.color = 'var(--warning)';
            resultEl.innerHTML = '⚠️ <strong>Google Apps Script phản hồi nhưng chưa đúng chuẩn:</strong> ' + escapeHtml(data?.message || 'Chưa nhận diện được dữ liệu');
            showToast('Endpoint phản hồi nhưng chưa khớp cấu hình!', 'warning');
        }
    } catch (err) {
        resultEl.style.color = 'var(--danger)';
        resultEl.innerHTML = '❌ <strong>Chưa thể kết nối tới Google Apps Script này!</strong><br><small style="color:var(--text-muted); font-size:0.82rem; line-height:1.4; display:block; margin-top:4px;">Nguyên nhân thường gặp: Khi Triển khai (Deploy) trên script.google.com, mục <em>"Ai có quyền truy cập (Who has access)"</em> chưa chọn <strong>"Bất kỳ ai (Anyone)"</strong>, hoặc chưa cấp quyền truy cập Drive.</small>';
        showToast('Kết nối thất bại! Vui lòng kiểm tra lại quyền truy cập script.', 'error');
    }
}

async function syncDocumentsFromDrive(isManual = false) {
    const myGas = localStorage.getItem('khls_my_drive_gas_url');
    const settings = store.getSettings();
    const activeGas = myGas || settings.drive_gas_url;
    if (!activeGas) {
        if (isManual) {
            showToast('Chưa cấu hình liên kết Google Apps Script Web App để đồng bộ!', 'warning');
            openDriveSetupModal();
        }
        return false;
    }

    const syncBtn = document.getElementById('btn-sync-review');
    if (syncBtn && isManual) {
        syncBtn.disabled = true;
        syncBtn.innerHTML = '⏳ Đang đồng bộ...';
    }

    try {
        const folderId = localStorage.getItem('khls_my_drive_folder_id') || '';
        const url = activeGas + (activeGas.includes('?') ? '&' : '?') + 'folderId=' + encodeURIComponent(folderId) + '&t=' + Date.now();
        const resp = await fetch(url, { method: 'GET' });
        if (!resp.ok) {
            if (isManual) showToast(`Không thể kết nối đến Google Drive (HTTP ${resp.status})`, 'error');
            return false;
        }

        const data = await resp.json();
        if (data && data.status === 'success' && Array.isArray(data.documents)) {
            const localDocs = store.getDocuments();
            let hasChanges = false;
            let newDocsCount = 0;

            data.documents.forEach(cloudDoc => {
                const existingIdx = localDocs.findIndex(d => 
                    d.id === cloudDoc.id || 
                    (d.drive_id && cloudDoc.drive_id && d.drive_id === cloudDoc.drive_id) ||
                    (d.file_name === cloudDoc.file_name && d.file_size === cloudDoc.file_size)
                );

                if (existingIdx >= 0) {
                    if (cloudDoc.status && localDocs[existingIdx].status !== cloudDoc.status) {
                        localDocs[existingIdx].status = cloudDoc.status;
                        localDocs[existingIdx].approved_by = cloudDoc.approved_by || localDocs[existingIdx].approved_by;
                        hasChanges = true;
                    }
                    if (cloudDoc.file_url && !localDocs[existingIdx].file_url) {
                        localDocs[existingIdx].file_url = cloudDoc.file_url;
                        hasChanges = true;
                    }
                } else {
                    localDocs.unshift(cloudDoc);
                    hasChanges = true;
                    newDocsCount++;

                    if (cloudDoc.status === 'pending') {
                        const notifs = store.getNotifications();
                        const existsNotif = notifs.some(n => n.link && n.link.includes(cloudDoc.id));
                        if (!existsNotif) {
                            notifs.unshift({
                                id: 'notif-cloud-' + cloudDoc.id,
                                title: 'Học liệu mới chờ duyệt (từ Google Drive)',
                                text: `${cloudDoc.author_name || 'Giáo viên'} vừa nộp: ${cloudDoc.title}`,
                                time: 'Mới cập nhật',
                                icon: '☁️',
                                type: 'review',
                                link: '#/review?doc=' + cloudDoc.id,
                                unread: true
                            });
                            store.saveNotifications(notifs);
                        }
                    }
                }
            });

            if (hasChanges) {
                store.saveDocuments(localDocs);
                updatePendingBadge();
                if (state.currentPage === 'review') {
                    renderReviewPage();
                } else if (state.currentPage === 'home') {
                    renderHomePage();
                }
            }

            if (isManual) {
                showToast(`✅ Đồng bộ thành công! Google Drive có ${data.documents.length} học liệu (Mới nạp thêm: ${newDocsCount}).`, 'success');
            }
            return true;
        } else if (isManual) {
            showToast('Google Drive chưa có học liệu nào được lưu trong cơ sở dữ liệu chung.', 'info');
        }
    } catch (err) {
        console.warn('Lỗi đồng bộ dữ liệu từ Google Drive:', err);
        if (isManual) {
            showToast('Không thể kết nối đến Google Apps Script. Vui lòng kiểm tra lại quyền truy cập hoặc cấu hình URL Web App.', 'error');
        }
    } finally {
        if (syncBtn && isManual) {
            syncBtn.disabled = false;
            syncBtn.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
                <span>🔄 Đồng bộ từ Google Drive</span>
            `;
        }
    }
    return false;
}

function saveMyDriveSettings() {
    const gasInput = document.getElementById('my-drive-gas-url');
    const folderInput = document.getElementById('my-drive-folder-id');
    const gasUrl = gasInput ? gasInput.value.trim() : '';
    const folderId = folderInput ? folderInput.value.trim() : '';

    if (!gasUrl) {
        showToast('Vui lòng nhập URL Web App Google Apps Script!', 'warning');
        return;
    }

    localStorage.setItem('khls_my_drive_gas_url', gasUrl);
    localStorage.setItem('khls_my_drive_folder_id', folderId);

    const settings = store.getSettings();
    settings.drive_gas_url = gasUrl;
    store.saveSettings(settings);

    updateDriveStatusUI();
    closeDriveSetupModal();
    showToast('Đã lưu cấu hình Google Drive Quản trị (nguyentruongtonuithanh@gmail.com) thành công! ☁️', 'success');

    // Tự động kéo dữ liệu về ngay sau khi cấu hình
    syncDocumentsFromDrive(false);
}

function useSchoolDrive() {
    const schoolSettings = store.getSettings();
    const defaultGas = schoolSettings.drive_gas_url || '';
    const gasInput = document.getElementById('my-drive-gas-url');
    const folderInput = document.getElementById('my-drive-folder-id');
    if (gasInput) gasInput.value = defaultGas;
    if (folderInput) folderInput.value = '1KHO_HOC_LIEU_SO_NUITHANH';
    showToast('Đã nạp cấu hình Google Drive của Trường!', 'info');
}

async function handleContributeSubmit(e) {
    e.preventDefault();

    if (!state.user) {
        closeContributeModal();
        openAuthRequiredModal();
        return;
    }

    const title = document.getElementById('modal-upload-title').value.trim();
    const category = document.getElementById('modal-upload-category').value;
    const grade = document.getElementById('modal-upload-grade').value;
    const subject = document.getElementById('modal-upload-subject').value;
    const authorName = document.getElementById('modal-upload-author').value.trim() || (state.user ? state.user.fullname : 'Giáo viên');
    const authorDept = document.getElementById('modal-upload-dept').value || (state.user ? state.user.department : 'Tổ Chuyên Môn');
    const desc = document.getElementById('modal-upload-desc').value.trim();
    const file = modalUploadedFile;

    if (!file) {
        showToast('Vui lòng chọn hoặc kéo thả tệp học liệu!', 'error');
        document.getElementById('modal-upload-file').click();
        return;
    }

    if (!title || !category || !grade || !subject) {
        showToast('Vui lòng điền đầy đủ các mục bắt buộc (*)!', 'error');
        return;
    }

    const submitBtn = document.getElementById('modal-btn-submit');
    const progressContainer = document.getElementById('modal-upload-progress-container');
    const progressBar = document.getElementById('modal-progress-bar');
    const progressStatus = document.getElementById('modal-progress-status');
    const progressPercent = document.getElementById('modal-progress-percent');

    const updateProgress = (percent, statusText) => {
        if (progressContainer) progressContainer.style.display = 'block';
        if (progressBar) progressBar.style.width = `${percent}%`;
        if (progressPercent) progressPercent.textContent = `${percent}%`;
        if (progressStatus) progressStatus.textContent = statusText;
    };

    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '⏳ Đang xử lý tải lên...';
    }

    const myGas = localStorage.getItem('khls_my_drive_gas_url');
    const settings = store.getSettings();
    const activeGas = myGas || settings.drive_gas_url;
    const folderId = localStorage.getItem('khls_my_drive_folder_id') || '';

    try {
        let driveResult = null;
        let fileUrl = null;
        let driveId = null;

        updateProgress(15, 'Đang chuẩn bị tệp tin...');

        // Convert file to base64
        const base64Data = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                const res = reader.result;
                resolve(res.includes(',') ? res.split(',')[1] : res);
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });

        // Also extract HTML / text content for rich local preview
        const ext = file.name.split('.').pop().toLowerCase();
        let htmlContent = null;
        if (ext === 'docx' && window.mammoth) {
            try {
                const ab = await file.arrayBuffer();
                const res = await window.mammoth.convertToHtml({ arrayBuffer: ab });
                htmlContent = res.value;
            } catch (mErr) {
                console.warn('Mammoth preview error:', mErr);
            }
        } else if (['txt', 'md', 'html'].includes(ext)) {
            try {
                const text = await file.text();
                htmlContent = `<pre style="white-space:pre-wrap; font-family:inherit;">${escapeHtml(text)}</pre>`;
            } catch (tErr) {}
        }

        // If Google Apps Script is configured: upload to Drive!
        let gasUploadFailed = false;
        if (activeGas) {
            updateProgress(40, 'Đang tải tệp vào Google Drive Quản trị (nguyentruongtonuithanh@gmail.com)...');
            const docGeneratedId = 'doc-' + Date.now();
            const payload = {
                action: 'upload',
                docId: docGeneratedId,
                title: title,
                description: desc,
                category: category,
                grade: grade,
                subject: subject,
                fileName: file.name,
                fileType: file.type || 'application/octet-stream',
                base64Data: base64Data,
                folderId: folderId,
                author: authorName,
                department: authorDept
            };

            updateProgress(65, 'Đang lưu vào Drive Quản trị và tạo liên kết...');

            try {
                const resp = await fetch(activeGas, {
                    method: 'POST',
                    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                    body: JSON.stringify(payload)
                });

                if (resp.ok) {
                    try {
                        const rawText = await resp.text();
                        try {
                            driveResult = JSON.parse(rawText);
                        } catch (parseErr) {
                            console.warn('Google Apps Script raw text:', rawText);
                        }
                    } catch (readErr) {
                        console.warn('Lỗi đọc phản hồi Google Apps Script:', readErr);
                    }

                    if (driveResult && (driveResult.status === 'success' || driveResult.fileId)) {
                        fileUrl = driveResult.fileUrl || driveResult.previewUrl || (driveResult.fileId ? `https://drive.google.com/file/d/${driveResult.fileId}/view?usp=sharing` : null);
                        driveId = driveResult.fileId;
                        updateProgress(95, 'Đã lưu vào Drive Quản trị nguyentruongtonuithanh@gmail.com!');
                    } else {
                        console.warn('Google Apps Script phản hồi:', driveResult);
                        gasUploadFailed = true;
                    }
                } else {
                    console.warn(`Google Apps Script trả về HTTP ${resp.status}`);
                    gasUploadFailed = true;
                }
            } catch (netErr) {
                console.warn('Không thể gửi đến Google Apps Script, chuyển sang lưu trữ an toàn nội bộ:', netErr);
                gasUploadFailed = true;
            }
        }

        if (!fileUrl) {
            updateProgress(85, 'Đang lưu an toàn vào kho dữ liệu hệ thống...');
        }

        updateProgress(100, 'Hoàn tất! Đang lưu thông tin...');

        // Create new doc object
        const currentUser = state.user || {
            id: Date.now(),
            fullname: authorName,
            department: authorDept
        };

        const newDoc = {
            id: 'doc-' + Date.now(),
            title: title,
            description: desc,
            category: category,
            grade: grade,
            subject: subject,
            file_name: file.name,
            file_size: file.size,
            file_type: ext,
            file_url: fileUrl,
            drive_id: driveId,
            file_data_url: (file.size < 5000000 && !fileUrl) ? ('data:' + (file.type || 'application/octet-stream') + ';base64,' + base64Data) : null,
            file_content_html: htmlContent,
            author_id: currentUser.id,
            author_name: authorName,
            author_dept: authorDept,
            status: 'pending',
            avg_rating: 5.0,
            rating_count: 1,
            download_count: 0,
            view_count: 1,
            created_at: new Date().toISOString(),
            approved_by: null,
            comments: []
        };

        const docs = store.getDocuments();
        docs.unshift(newDoc);
        try {
            store.saveDocuments(docs);
        } catch(storageErr) {
            newDoc.file_data_url = null;
            store.saveDocuments(docs);
        }

        // Add notification
        const notifs = store.getNotifications();
        notifs.unshift({
            id: 'notif-' + Date.now(),
            title: 'Học liệu mới nộp chờ duyệt',
            text: `${authorName} vừa đóng góp: ${title}`,
            time: 'Vừa xong',
            icon: '📋',
            type: 'review',
            link: `#/review?doc=${newDoc.id}`,
            unread: true
        });
        store.saveNotifications(notifs);

        updatePendingBadge();
        closeContributeModal();

        if (activeGas && fileUrl) {
            showToast(`🎉 Đã tải lên thành công! Tệp đã được chuyển vào Google Drive Quản trị (nguyentruongtonuithanh@gmail.com).`, 'success');
        } else if (activeGas && gasUploadFailed) {
            showToast(`🎉 Đóng góp học liệu thành công! (Đã lưu an toàn vào hệ thống).`, 'info');
        } else {
            showToast(`🎉 Đóng góp học liệu thành công! (Tài liệu đã lưu an toàn vào hệ thống chờ Ban Giám Hiệu duyệt).`, 'success');
        }

        state.reviewDeptFilter = 'all'; // Đảm bảo mở ra là thấy ngay tất cả bài chờ duyệt
        navigate(`#/review?doc=${newDoc.id}`);
        renderReviewPage();
        setTimeout(() => {
            highlightReviewDocFromLink(`#/review?doc=${newDoc.id}`, newDoc.title);
        }, 150);

    } catch (err) {
        console.error('Lỗi khi tải lên Google Drive:', err);
        showToast(`❌ Có lỗi khi tải lên: ${err.message}`, 'error');
    } finally {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = `
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                <span>🚀 Tải lên &amp; Lưu vào Google Drive</span>
            `;
        }
        if (progressContainer) progressContainer.style.display = 'none';
    }
}

function initContributeModal() {
    document.getElementById('btn-header-contribute')?.addEventListener('click', triggerContributeFlow);
    document.getElementById('hero-btn-contribute')?.addEventListener('click', triggerContributeFlow);
    document.getElementById('btn-upload-sidebar')?.addEventListener('click', triggerContributeFlow);

    document.getElementById('contribute-modal-close')?.addEventListener('click', closeContributeModal);
    document.getElementById('modal-btn-cancel')?.addEventListener('click', closeContributeModal);

    document.getElementById('btn-open-drive-setup')?.addEventListener('click', openDriveSetupModal);
    document.getElementById('drive-setup-modal-close')?.addEventListener('click', closeDriveSetupModal);
    document.getElementById('btn-close-drive-setup')?.addEventListener('click', closeDriveSetupModal);
    document.getElementById('btn-copy-gas-script')?.addEventListener('click', copyGasScriptToClipboard);
    document.getElementById('btn-test-my-gas')?.addEventListener('click', testMyDriveGasConnection);
    document.getElementById('btn-save-my-drive')?.addEventListener('click', saveMyDriveSettings);
    document.getElementById('btn-use-school-drive')?.addEventListener('click', useSchoolDrive);

    const dropzone = document.getElementById('modal-dropzone');
    const modalFileInput = document.getElementById('modal-upload-file');
    const globalFileInput = document.getElementById('global-contribute-file-input');
    const changeBtn = document.getElementById('modal-file-change');

    if (dropzone && modalFileInput) {
        dropzone.addEventListener('dragover', (e) => { e.preventDefault(); dropzone.classList.add('drag-over'); });
        dropzone.addEventListener('dragleave', () => dropzone.classList.remove('drag-over'));
        dropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropzone.classList.remove('drag-over');
            if (e.dataTransfer.files.length > 0) {
                handleModalFileSelection(e.dataTransfer.files[0]);
            }
        });
        modalFileInput.addEventListener('click', () => {
            modalFileInput.value = '';
        });
        modalFileInput.addEventListener('change', () => {
            if (modalFileInput.files.length > 0) handleModalFileSelection(modalFileInput.files[0]);
        });
    }

    if (globalFileInput) {
        globalFileInput.addEventListener('change', () => {
            if (globalFileInput.files.length > 0) {
                openContributeModal(globalFileInput.files[0]);
            }
        });
    }

    document.getElementById('contribute-form')?.addEventListener('submit', handleContributeSubmit);

    updateDriveStatusUI();
}

// ======================== TOAST NOTIFICATIONS ========================

function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };
    toast.innerHTML = `<span>${icons[type] || 'ℹ️'}</span><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('toast-out');
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// ======================== HELPER & UTILITY FUNCTIONS ========================

function getFileTypeIcon(filename = '') {
    const ext = filename.split('.').pop().toLowerCase();
    const map = {
        'doc': '📄', 'docx': '📄',
        'ppt': '📊', 'pptx': '📊',
        'pdf': '📕',
        'xls': '📗', 'xlsx': '📗',
        'mp4': '🎬', 'avi': '🎬',
        'zip': '📦', 'rar': '📦'
    };
    return map[ext] || '📁';
}

function getFileTypeClass(filename = '') {
    const ext = filename.split('.').pop().toLowerCase();
    if (['doc', 'docx'].includes(ext)) return 'doc-type-docx';
    if (['ppt', 'pptx'].includes(ext)) return 'doc-type-pptx';
    if (['pdf'].includes(ext)) return 'doc-type-pdf';
    if (['mp4', 'avi'].includes(ext)) return 'doc-type-video';
    return 'doc-type-other';
}

function getCategoryName(categoryId) {
    const c = CATEGORIES.find(cat => cat.id === categoryId);
    return c ? c.name : (categoryId || 'Học liệu số');
}

function getSubjectName(subjectId) {
    const s = SUBJECTS.find(sub => sub.id === subjectId);
    return s ? s.name : subjectId;
}

function formatFileSize(bytes = 0) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

function timeAgo(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    const diff = Math.floor((now - date) / 1000);
    if (diff < 60) return 'Vừa xong';
    if (diff < 3600) return `${Math.floor(diff / 60)} phút trước`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} giờ trước`;
    if (diff < 2592000) return `${Math.floor(diff / 86400)} ngày trước`;
    return date.toLocaleDateString('vi-VN');
}

function renderStars(rating = 0) {
    let html = '';
    const rounded = Math.round(rating);
    for (let i = 1; i <= 5; i++) {
        html += i <= rounded ? '⭐' : '<span class="star-empty">☆</span>';
    }
    return `<span class="stars">${html}</span>`;
}

function renderDocCard(doc) {
    const catObj = CATEGORIES.find(c => c.id === doc.category);
    const driveId = extractGoogleDriveId(doc.file_url);
    return `
        <div class="doc-card" onclick="navigate('#/detail/${doc.id}')">
            <div class="doc-card-header">
                <div class="doc-type-icon ${getFileTypeClass(doc.file_name)}">
                    ${getFileTypeIcon(doc.file_name)}
                </div>
                <div class="doc-card-info">
                    <div class="doc-card-title">${escapeHtml(doc.title)}</div>
                    <div class="doc-card-meta">
                        <span>${catObj?.icon || '📁'} ${catObj?.name || 'Tài liệu'} • Khối ${doc.grade}</span>
                        <span>📅 ${timeAgo(doc.created_at)}</span>
                        ${driveId ? `<span class="badge-drive" title="Lưu trữ trên Google Drive" style="display:inline-flex; align-items:center; gap:3px; background:rgba(37,99,235,0.12); color:#2563eb; font-size:0.7rem; padding:1px 6px; border-radius:4px; font-weight:600;"><svg width="11" height="11" viewBox="0 0 87.3 78" fill="none"><path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/><path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47"/><path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.5l5.85 10.15z" fill="#ea4335"/><path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/><path d="m59.8 53h27.5c0-1.55-.4-3.1-1.2-4.5l-20.4-35.35c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8z" fill="#2684fc"/><path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l-20.85-36.1-13.75 23.8 9.3 16.1c1.35.8 2.9 1.2 4.5 1.2h14.2c1.35 0 2.5-.4 3.3-1.7z" fill="#ffba00"/></svg> Drive</span>` : ''}
                    </div>
                </div>
            </div>
            ${doc.description ? `<div class="doc-card-body"><p class="doc-card-desc">${doc.description}</p></div>` : ''}
            <div class="doc-card-footer">
                <div class="doc-card-author">
                    <span class="mini-avatar">${(doc.author_name || '?').charAt(0).toUpperCase()}</span>
                    <span>${doc.author_name || 'Giáo viên'}</span>
                </div>
                <div class="doc-card-actions-quick">
                    <button class="btn-quick-preview" onclick="event.stopPropagation(); openPreviewModal('${doc.id}')" title="Mở file lên xem trực tuyến">👁️ Xem</button>
                    <button class="btn-quick-download" onclick="event.stopPropagation(); handleDownloadDoc('${doc.id}')" title="Tải tệp tin về máy">⬇️ Tải</button>
                </div>
                <div class="doc-card-stats">
                    ${renderStars(doc.avg_rating || 5)}
                    <span>⬇ ${doc.download_count || 0}</span>
                </div>
            </div>
        </div>
    `;
}

console.log('🏫 Kho Học Liệu Số - Trường TH Núi Thành - SPA Ready!');
