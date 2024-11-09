window.onload = function() {
    // Lấy phần tử chứa các tin nhắn trong khung chat
    var chatboxMessages = document.getElementById("chatbox-messages");

    // Tạo một phần tử mới cho tin nhắn
    var message = document.createElement("div");
    message.classList.add("chat-message");
    chatboxMessages.appendChild(message); // Thêm khung tin nhắn trước

    // Nội dung tin nhắn
    var fullMessage = "Hi! How are you today?";
    var index = 0;

    // Hàm để hiện từng ký tự
    function typeMessage() {
        if (index < fullMessage.length) {
            message.innerHTML += fullMessage.charAt(index); // Thêm từng ký tự
            index++;
            setTimeout(typeMessage, 20); // Thời gian giữa mỗi ký tự 
        }
    }

    // Gọi hàm để bắt đầu hiệu ứng gõ chữ
    typeMessage();

};

document.getElementById("send-btn").addEventListener("click", function() {
    // Lấy thông tin người dùng đã nhập
    var userInput = document.getElementById("chat-input").value;

    // Kiểm tra nếu người dùng đã nhập thông tin
    if (userInput.trim() !== "") {
        // Tạo phần tử tin nhắn mới
        var messageDiv = document.createElement("div");
        messageDiv.className = "message";
        messageDiv.textContent = userInput; // Nội dung tin nhắn là thông tin đã nhập

        // Thêm tin nhắn vào chat box
        document.getElementById("chatBox").appendChild(messageDiv);

        // Xóa nội dung ô nhập sau khi gửi
        document.getElementById("chat-input").value = "";
        
        // Cuộn xuống cuối chat box
        var chatBox = document.getElementById("chatBox");
        chatBox.scrollTop = chatBox.scrollHeight; // Cuộn đến cuối chat box
    }
    const toggleMenuButton = document.getElementById("toggleMenu");
    const hiddenMenu = document.getElementById("hiddenMenu");
  
    toggleMenuButton.addEventListener("click", function(event) {
        event.stopPropagation(); // Ngăn chặn sự kiện lan ra ngoài
        hiddenMenu.style.display = hiddenMenu.style.display === "block" ? "none" : "block";
    });
  
    document.addEventListener("click", function() {
        hiddenMenu.style.display = "none"; // Ẩn menu khi nhấn ra ngoài
    });
  
    hiddenMenu.addEventListener("click", function(event) {
        event.stopPropagation(); // Ngăn chặn sự kiện ẩn menu khi nhấn vào bên trong menu
    });

const navLinks = document.querySelectorAll('.nav-menu a');

    // Kiểm tra Local Storage để xác định tab nào được chọn
    const activeTab = localStorage.getItem('activeTab');
    if (activeTab) {
        navLinks.forEach(nav => {
            if (nav.id === activeTab) {
                nav.classList.add('active'); // Thêm class active cho tab đã lưu
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Xóa class active từ tất cả các liên kết
            navLinks.forEach(nav => nav.classList.remove('active'));
            // Thêm class active vào liên kết đang được nhấp
            this.classList.add('active');
            // Lưu tab đang được nhấp vào Local Storage
            localStorage.setItem('activeTab', this.id);
        });
    });

});

