document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "1234") {
        alert("تم تسجيل الدخول بنجاح!");
    } else {
        alert("اسم المستخدم أو كلمة المرور غير صحيحة.");
    }
});