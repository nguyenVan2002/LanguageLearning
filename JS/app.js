document.getElementById("send-btn").addEventListener("click", function () {
    const messageInput = document.getElementById("chat-input");
    const userMessage = messageInput.value.trim();

    if (userMessage) {
        // Gửi yêu cầu POST tới backend
        fetch('http://127.0.0.1:5000/send_message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: userMessage })
        })
        .then(response => response.json())
        .then(data => {
            // Hiển thị tin nhắn của người dùng và phản hồi từ hệ thống
            addMessageToChat("You", userMessage);
            addMessageToChat("Bot", data.response);
            messageInput.value = "";  // Xóa nội dung trong ô nhập liệu
        })
        .catch(error => console.error("Lỗi:", error));
    }
});

function addMessageToChat(sender, message) {
    const chatBox = document.getElementById("chatbox-messages");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;  // Cuộn xuống tin nhắn mới nhất
}
