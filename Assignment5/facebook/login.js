function validation() {
    var user = document.getElementById('user').value
    console.log("vijay");
    var password = document.getElementById('password').value
    console.log("Vijay1")
    if (localStorage.getItem('user') === user || localStorage.getItem('password') === password) {
        window.location.href = "user.html";
    } else {
        document.getElementsByClassName('display-error').innerHTML = 'invalid credentials';
    }
}