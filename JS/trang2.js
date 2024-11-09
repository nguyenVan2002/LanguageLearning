// Lắng nghe sự kiện DOMContentLoaded để đảm bảo DOM đã sẵn sàng
document.addEventListener('DOMContentLoaded', function() {
    
  // PHẦN 1: Điều hướng logo và các mục trong menu
  const logo = document.getElementById('logo');
  logo.addEventListener('click', function() {
      window.location.href = 'Home.html'; // Chuyển hướng đến trang Home
  });

  document.getElementById('home').addEventListener('click', function() {
      window.location.href = 'Home.html';
  });

  document.getElementById('blog').addEventListener('click', function() {
      window.location.href = 'Blog.html';
  });

  document.getElementById('contact').addEventListener('click', function() {
      window.location.href = 'Contact.html';
  });

  document.getElementById('login').addEventListener('click', function() {
      window.location.href = 'Login.html';
  });

  // PHẦN 2: Điều hướng nút người dùng
  document.getElementById("alex-button").addEventListener("click", function() {
      window.location.href = "Trang3.html";
  });

  document.getElementById("elena-button").addEventListener("click", function() {
      window.location.href = "Trang4.html";
  });

  document.getElementById("sam-button").addEventListener("click", function() {
      window.location.href = "Trang5.html";
  });

  document.getElementById("mia-button").addEventListener("click", function() {
      window.location.href = "Trang6.html";
  });

  // PHẦN 3: Menu ẩn cho người dùng
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

  // PHẦN 4: Lưu trạng thái tab đang hoạt động trong Local Storage
  const navLinks = document.querySelectorAll('.nav-menu a');
  const activeTab = localStorage.getItem('activeTab');

  // Kiểm tra và thiết lập tab đang hoạt động từ Local Storage
  if (activeTab) {
      navLinks.forEach(nav => {
          if (nav.id === activeTab) {
              nav.classList.add('active'); // Thêm class active cho tab đã lưu
          }
      });
  }

  // Lắng nghe sự kiện click trên từng liên kết điều hướng
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
