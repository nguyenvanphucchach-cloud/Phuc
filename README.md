To3ChatGPT - Hướng dẫn deploy lên Vercel
=============================

Các file có trong gói:
 - index.html        (giao diện front-end)
 - api/chat.js       (serverless function để gọi OpenAI, giữ API key an toàn)
 - README.md         (hướng dẫn này)

Hướng dẫn nhanh:
1) Tạo repo GitHub mới (ví dụ: to3chatgpt).
2) Upload toàn bộ file trong gói vào root của repo:
   - index.html
   - api/chat.js

3) Vào https://vercel.com → Login bằng GitHub → New Project → Import từ repository bạn vừa tạo.
4) Trong Vercel dashboard → chọn Project → Settings → Environment Variables:
   - Key: OPENAI_API_KEY
   - Value: (dán API key của bạn từ https://platform.openai.com)
   - Environment: Production (hoặc cả Preview nếu muốn)
   → Save.

5) Deploy (Vercel sẽ tự build). Sau khi deploy xong, mở trang <your-project>.vercel.app là To3ChatGPT hoạt động.

Lưu ý bảo mật:
 - KHÔNG đặt API key trực tiếp trong index.html.
 - Nếu key bị lộ, hãy revoke trên https://platform.openai.com.

Muốn mình hướng dẫn từng bước (có ảnh chụp màn hình cho điện thoại Samsung A04) không? Trả lời 'có' hoặc 'không'.
