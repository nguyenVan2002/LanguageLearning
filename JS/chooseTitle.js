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
    const travelButton = document.getElementById('travelButton');
    const foodButton = document.getElementById('foodButton');
    const EducationButton = document.getElementById('educationButton');
    const FamilyButton = document.getElementById('familyButton');
    const FitnessButton = document.getElementById('fitnessButton');
    const SportButton = document.getElementById('sportButton');
    const FashionButton = document.getElementById('fashionButton');
    const GameButton = document.getElementById('gameButton');
    const HobbiesButton = document.getElementById('hobbiesButton');
    const FriendshipButton = document.getElementById('friendshipButton');
    const MovieButton = document.getElementById('movieButton');
    const MusicButton = document.getElementById('musicButton');

    // Thêm sự kiện click vào nút Travel
    travelButton.addEventListener('click', function() {
        // Điều hướng đến trang Travel.html
        window.location.href = 'choosePractice.html';
    });
    // Thêm sự kiện click vào nút Food
    foodButton.addEventListener('click', function() {
        // Điều hướng đến trang Food.html
        window.location.href = 'choosePractice.html';
    });
    EducationButton.addEventListener('click', function() {
        // Điều hướng đến trang Food.html
        window.location.href = 'choosePractice.html';
    });
    FamilyButton.addEventListener('click', function() {
        // Điều hướng đến trang Food.html
        window.location.href = 'choosePractice.html';
    });
    FitnessButton.addEventListener('click', function() {
        // Điều hướng đến trang Food.html
        window.location.href = 'choosePractice.html';
    });
    SportButton.addEventListener('click', function() {
        // Điều hướng đến trang Food.html
        window.location.href = 'choosePractice.html';
    });
    FashionButton.addEventListener('click', function() {
        // Điều hướng đến trang Food.html
        window.location.href = 'choosePractice.html';
    });
    GameButton.addEventListener('click', function() {
        // Điều hướng đến trang Food.html
        window.location.href = 'choosePractice.html';
    });
    HobbiesButton.addEventListener('click', function() {
        // Điều hướng đến trang Food.html
        window.location.href = 'choosePractice.html';
    });
    FriendshipButton.addEventListener('click', function() {
        // Điều hướng đến trang Food.html
        window.location.href = 'choosePractice.html';
    });
    MovieButton.addEventListener('click', function() {
        // Điều hướng đến trang Food.html
        window.location.href = 'choosePractice.html';
    });
    MusicButton.addEventListener('click', function() {
        // Điều hướng đến trang Food.html
        window.location.href = 'choosePractice.html';
    });
});
    