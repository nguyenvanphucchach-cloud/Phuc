<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<title>Chatbot Học Tập 🌸</title>
<style>
body{margin:0;font-family:sans-serif;background:#fce7f3;display:flex;flex-direction:column;align-items:center}
#chat-box{width:90%;max-width:700px;height:70vh;overflow-y:auto;background:#fff;padding:20px;border-radius:12px;margin-top:20px}
.user{background:#f9a8d4;color:white;padding:10px;border-radius:10px;margin:10px 0;text-align:right}
.bot{background:#fce7f3;color:#831843;padding:10px;border-radius:10px;margin:10px 0;text-align:left}
#input-area{display:flex;width:90%;max-width:700px;margin-top:10px}
textarea{flex:1;padding:12px;border-radius:10px;border:1px solid #f9a8d4}
button{margin-left:10px;padding:12px 20px;border:none;border-radius:10px;background:#ec4899;color:white;cursor:pointer}
</style>
</head>
<body>

<h2>💬 Chatbot Học Tập 🌷</h2>
<div id="chat-box"></div>
<div id="input-area">
<textarea id="input" rows="2" placeholder="Nhập câu hỏi..."></textarea>
<button onclick="sendMessage()">Gửi</button>
</div>

<script>
let selectedMode="giải bài tập";
function sendMessage(){
  const input=document.getElementById("input");
  const chatBox=document.getElementById("chat-box");
  const msg=input.value.trim();
  if(!msg) return;
  chatBox.innerHTML+=`<div class="user">${msg}</div>`;
  input.value="";
  const botDiv=document.createElement("div");
  botDiv.className="bot";
  botDiv.textContent="Đang nghĩ...";
  chatBox.appendChild(botDiv);
  chatBox.scrollTop=chatBox.scrollHeight;

  fetch("/api/chat",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({prompt: msg, mode: selectedMode})
  }).then(r=>r.json()).then(d=>{
    botDiv.textContent=d.reply;
    chatBox.scrollTop=chatBox.scrollHeight;
  }).catch(()=>botDiv.textContent="Lỗi server 😭");
}
</script>

</body>
</html>
