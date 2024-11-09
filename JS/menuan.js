navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn hành vi mặc định của liên kết
        // Xóa lớp active khỏi tất cả các liên kết
        navLinks.forEach(nav => nav.classList.remove('active'));
        // Thêm lớp active vào liên kết được nhấp
        this.classList.add('active');
        // Lưu ID của tab đang chọn
        localStorage.setItem('activeTab', this.id);
        // Điều hướng đến URL của liên kết được nhấp
        window.location.href = this.getAttribute('href');
    });
});
