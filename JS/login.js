document.addEventListener('DOMContentLoaded', function() {
    // Kiểm tra phần tử logo có tồn tại hay không
    const logo = document.getElementById('logo');
    if (logo) {
        // Thêm sự kiện click vào logo
        logo.addEventListener('click', function() {
            // Chuyển hướng đến trang Home.html
            window.location.href = 'Home.html';
        });
    }

    // Kiểm tra phần tử tạo tài khoản có tồn tại hay không
    const createAccountLink = document.getElementById("createAccountLink");
    if (createAccountLink) {
        createAccountLink.addEventListener("click", function(event) {
            event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
            window.location.href = "register.html"; // Chuyển hướng tới trang Create Account
        });
    }

    // Kiểm tra form đăng nhập có tồn tại hay không
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (!username || !password) {
                alert('Please enter both username and password.');
                return;
            }

            // Gửi yêu cầu đăng nhập tới server
            fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            })
            .then(response => {
                if (!response.ok) {
                    // Xử lý khi server trả về lỗi (ví dụ 401)
                    throw new Error('Invalid credentials or server error');
                }
                return response.json();
            })
            .then(data => {
                if (data.message === "Login successful!") {
                    alert('Login successful!');
                    // Chuyển hướng tới trang Home sau khi đăng nhập thành công
                    window.location.href = 'Home.html';
                } else {
                    alert('Invalid credentials');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Failed to log in. Please check your credentials and try again.');
            });
        });
    }
});
