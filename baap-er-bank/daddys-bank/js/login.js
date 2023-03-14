
document.getElementById('login-btn').addEventListener("click", function () {
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value
    
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;

    if (email === 'mostafanayeem11@gmail.com' && password === 'nopass') {
        // console.log('valid user');
        window.location.href = 'bank.html'
    } else {
        alert('ওই ব্যাটা! পাসওয়ার্ড ভুল দিছস কেন?')
    }

    userEmail.value = '';
    userPassword.value = '';
})