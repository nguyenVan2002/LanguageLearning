// Lắng nghe sự kiện DOMContentLoaded để đảm bảo DOM đã sẵn sàng
document.addEventListener('DOMContentLoaded', function() {
    // Lấy phần tử logo bằng ID
    const logo = document.getElementById('logo');
  
    // Thêm sự kiện click vào logo
    logo.addEventListener('click', function() {
        // Chuyển hướng đến trang Home.html
        window.location.href = 'Home.html';
    });
  
    // Gán sự kiện click cho các mục trong menu
    document.getElementById('home').addEventListener('click', function() {
        window.location.href = 'Home.html'; // Điều hướng tới trang Home
    });
  
    document.getElementById('blog').addEventListener('click', function() {
        window.location.href = 'Blog.html'; // Điều hướng tới trang blog
    });
  
    document.getElementById('contact').addEventListener('click', function() {
        window.location.href = 'Contact.html'; // Điều hướng tới trang contact
    });
  
    document.getElementById('login').addEventListener('click', function() {
        window.location.href = 'login.html'; // Điều hướng tới trang login
    });
    const navLinks = document.querySelectorAll('.nav-menu a');

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

    // Lấy phần tử nút Travel và Food bằng ID
    const AIChatButton = document.getElementById('AIChatButton');
    const vocabularyButton = document.getElementById('vocabularyButton');
    const listenButton = document.getElementById('listenButton');
    const readingButton = document.getElementById('readingButton');
    const grammarButton = document.getElementById('grammarButton');

    // Thêm sự kiện click vào nút Travel
    AIChatButton.addEventListener('click', function() {
        // Điều hướng đến trang Travel.html
        window.location.href = 'Trang3.html';
    });
    // Thêm sự kiện click vào nút Food
    vocabularyButton.addEventListener('click', function() {
        // Điều hướng đến trang Food.html
        window.location.href = 'Trang3.html';
    });
    listenButton.addEventListener('click', function() {
        // Điều hướng đến trang Food.html
        window.location.href = 'Trang3.html';
    });
    readingButton.addEventListener('click', function() {
        // Điều hướng đến trang Food.html
        window.location.href = 'Trang3.html';
    });
    grammarButton.addEventListener('click', function() {
        // Điều hướng đến trang Food.html
        window.location.href = 'Trang3.html';
    });

});