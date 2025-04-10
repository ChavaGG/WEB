function sendMessage() {
  const input = document.getElementById("chat-input");
  const chatBox = document.getElementById("chat-box");
  if (input.value.trim() !== "") {
    const msg = document.createElement("div");
    msg.className = "message";
    msg.textContent = `Tú: ${input.value}`;
    chatBox.appendChild(msg);
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}
