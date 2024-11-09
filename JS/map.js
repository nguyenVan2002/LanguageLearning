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
    window.location.href = 'Home.html'; // Điều hướng tới trang blog
  });
    // Gán sự kiện click cho các mục trong menu
  document.getElementById('blog').addEventListener('click', function() {
    window.location.href = 'Blog.html'; // Điều hướng tới trang blog
  });
  
  document.getElementById('contact').addEventListener('click', function() {
    window.location.href = 'Contact.html'; // Điều hướng tới trang contact
  });
  
  document.getElementById('login').addEventListener('click', function() {
    window.location.href = 'Login.html'; // Điều hướng tới trang login
  });    

  document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn form gửi đi

    // Lấy giá trị từ form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Xử lý thông tin phản hồi (gửi đến máy chủ, hiển thị thông báo, ...)
    console.log(`Tên: ${name}, Email: ${email}, Phản hồi: ${message}`);

    // Hiển thị thông báo thành công
    alert('Cảm ơn bạn đã gửi phản hồi! Chúng tôi sẽ xem xét nó.');
    
    // Làm sạch form
    document.getElementById('feedback-form').reset();
});


// Khởi tạo bản đồ với tọa độ 12 Nguyễn Văn Bảo, Gò Vấp, TP.HCM
var map = L.map('map').setView([10.822942, 106.687216], 15); // zoom level 15

// Thêm OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Đặt marker tại địa chỉ 12 Nguyễn Văn Bảo
var marker = L.marker([10.822942, 106.687216]).addTo(map);

// Thêm popup khi người dùng click vào marker
marker.bindPopup("<b>12 Nguyễn Văn Bảo</b><br>Phường 4, Gò Vấp, TP.HCM.").openPopup();

});