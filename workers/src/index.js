/**
 * KHO HỌC LIỆU SỐ - TRƯỜNG TIỂU HỌC NÚI THÀNH
 * Cloudflare Workers Backend API
 * Chạy trên Cloudflare Edge Network (Miễn phí 100,000 requests/ngày)
 */

export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);
        const { pathname, searchParams } = url;
        const method = request.method;

        // CORS Headers cho phép gọi từ Cloudflare Pages hoặc localhost
        const corsHeaders = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'Content-Type': 'application/json; charset=utf-8'
        };

        if (method === 'OPTIONS') {
            return new Response(null, { headers: corsHeaders });
        }

        try {
            // 1. Kiểm tra trạng thái máy chủ
            if (pathname === '/api/health') {
                return jsonResponse({
                    status: 'online',
                    school: env.SCHOOL_NAME || 'Trường Tiểu Học Núi Thành',
                    time: new Date().toISOString()
                }, 200, corsHeaders);
            }

            // 2. Đăng nhập hệ thống
            if (pathname === '/api/auth/login' && method === 'POST') {
                const body = await request.json();
                const { username, password } = body;

                const user = await env.DB.prepare(
                    'SELECT id, username, fullname, role, department, honor, avatar_letter, total_uploads, total_downloads FROM users WHERE username = ?'
                ).bind(username).first();

                if (!user) {
                    return jsonResponse({ error: 'Tài khoản không tồn tại' }, 401, corsHeaders);
                }

                return jsonResponse({
                    message: 'Đăng nhập thành công',
                    user: user,
                    token: 'mock-jwt-token-' + user.id
                }, 200, corsHeaders);
            }

            // 3. Lấy danh sách tài liệu (Có bộ lọc)
            if (pathname === '/api/documents' && method === 'GET') {
                const category = searchParams.get('category');
                const grade = searchParams.get('grade');
                const subject = searchParams.get('subject');
                const query = searchParams.get('q');
                const status = searchParams.get('status') || 'approved';

                let sql = 'SELECT * FROM documents WHERE status = ?';
                const params = [status];

                if (category) {
                    sql += ' AND category = ?';
                    params.push(category);
                }
                if (grade) {
                    sql += ' AND grade = ?';
                    params.push(grade);
                }
                if (subject) {
                    sql += ' AND subject = ?';
                    params.push(subject);
                }
                if (query) {
                    sql += ' AND (title LIKE ? OR description LIKE ? OR author_name LIKE ?)';
                    const qParam = `%${query}%`;
                    params.push(qParam, qParam, qParam);
                }

                sql += ' ORDER BY created_at DESC';

                const { results } = await env.DB.prepare(sql).bind(...params).all();
                return jsonResponse({ documents: results }, 200, corsHeaders);
            }

            // 4. Lấy chi tiết tài liệu & Bình luận
            if (pathname.startsWith('/api/documents/') && method === 'GET') {
                const docId = pathname.replace('/api/documents/', '');
                const doc = await env.DB.prepare('SELECT * FROM documents WHERE id = ?').bind(docId).first();

                if (!doc) {
                    return jsonResponse({ error: 'Không tìm thấy tài liệu' }, 404, corsHeaders);
                }

                // Tăng lượt xem
                await env.DB.prepare('UPDATE documents SET view_count = view_count + 1 WHERE id = ?').bind(docId).run();

                // Lấy bình luận kèm theo
                const { results: comments } = await env.DB.prepare(
                    'SELECT author_name, content, created_at FROM comments WHERE doc_id = ? ORDER BY created_at DESC'
                ).bind(docId).all();

                return jsonResponse({ document: doc, comments: comments }, 200, corsHeaders);
            }

            // 5. Đóng góp tài liệu mới (Tạo record pending)
            if (pathname === '/api/documents' && method === 'POST') {
                const body = await request.json();
                const {
                    title, description, category, grade, subject,
                    file_name, file_size, file_type, author_id, author_name, author_dept
                } = body;

                const docId = 'doc-' + Date.now();
                await env.DB.prepare(`
                    INSERT INTO documents (
                        id, title, description, category, grade, subject,
                        file_name, file_size, file_type, author_id, author_name, author_dept, status
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending')
                `).bind(
                    docId, title, description, category, grade, subject,
                    file_name, file_size || 0, file_type, author_id, author_name, author_dept
                ).run();

                return jsonResponse({
                    message: 'Tài liệu đã được gửi và đang chờ Tổ trưởng chuyên môn duyệt',
                    doc_id: docId
                }, 201, corsHeaders);
            }

            // 6. Tổ trưởng duyệt hoặc từ chối tài liệu
            if (pathname.endsWith('/review') && method === 'POST') {
                const docId = pathname.split('/')[3];
                const body = await request.json();
                const { action, approved_by, reject_reason } = body; // action: 'approve' | 'reject'

                if (action === 'approve') {
                    await env.DB.prepare(`
                        UPDATE documents SET status = 'approved', approved_by = ? WHERE id = ?
                    `).bind(approved_by, docId).run();

                    // Tăng số bài của tác giả
                    const doc = await env.DB.prepare('SELECT author_id FROM documents WHERE id = ?').bind(docId).first();
                    if (doc) {
                        await env.DB.prepare('UPDATE users SET total_uploads = total_uploads + 1 WHERE id = ?').bind(doc.author_id).run();
                    }

                    return jsonResponse({ message: 'Đã phê duyệt tài liệu thành công' }, 200, corsHeaders);
                } else {
                    await env.DB.prepare(`
                        UPDATE documents SET status = 'rejected', reject_reason = ? WHERE id = ?
                    `).bind(reject_reason || '', docId).run();
                    return jsonResponse({ message: 'Đã từ chối tài liệu' }, 200, corsHeaders);
                }
            }

            // 7. Thống kê Dashboard dành cho BGH
            if (pathname === '/api/stats' && method === 'GET') {
                const totalDocs = await env.DB.prepare("SELECT COUNT(*) as count FROM documents WHERE status = 'approved'").first();
                const totalTeachers = await env.DB.prepare("SELECT COUNT(*) as count FROM users").first();
                const totalDownloads = await env.DB.prepare("SELECT SUM(download_count) as total FROM documents WHERE status = 'approved'").first();

                const { results: topUsers } = await env.DB.prepare(`
                    SELECT fullname, department, total_uploads, total_downloads, honor
                    FROM users WHERE role != 'admin' ORDER BY total_downloads DESC LIMIT 10
                `).all();

                return jsonResponse({
                    total_docs: totalDocs.count,
                    total_teachers: totalTeachers.count,
                    total_downloads: totalDownloads.total || 0,
                    top_teachers: topUsers
                }, 200, corsHeaders);
            }

            // 8. Tạo tài khoản hàng loạt
            if (pathname === '/api/users/batch' && method === 'POST') {
                const body = await request.json();
                const { users } = body; // Array of { fullname, email, role, department }

                let count = 0;
                for (const u of users) {
                    const username = u.email ? u.email.split('@')[0] : u.fullname.toLowerCase().replace(/\s+/g, '');
                    await env.DB.prepare(`
                        INSERT OR IGNORE INTO users (username, fullname, email, role, department, avatar_letter)
                        VALUES (?, ?, ?, ?, ?, ?)
                    `).bind(username, u.fullname, u.email || '', u.role || 'teacher', u.department || 'Tổ Chuyên Môn', u.fullname.charAt(0)).run();
                    count++;
                }

                return jsonResponse({ message: `Đã tạo ${count} tài khoản giáo viên thành công` }, 201, corsHeaders);
            }

            // Đường dẫn không tồn tại
            return jsonResponse({ error: 'Endpoint không tồn tại' }, 404, corsHeaders);

        } catch (error) {
            return jsonResponse({ error: error.message }, 500, corsHeaders);
        }
    }
};

function jsonResponse(data, status = 200, headers = {}) {
    return new Response(JSON.stringify(data), {
        status: status,
        headers: headers
    });
}
