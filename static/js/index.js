const myTimeout = setTimeout(load, 5000);
document.getElementById("main").style.display="none"

// JavaScript function to hide the div element
function load() {
    var div = document.getElementById('intro');
    div.style.opacity = 0;
    setTimeout(function() {
      div.style.display = 'none';
    }, 500); // 500 milliseconds = 0.5 seconds transition time
    document.getElementById("main").style.display="block"
  }
  
function togglePassword(){
    var passwordInput = document.getElementById('password');
  var showPasswordCheckbox = document.getElementById('showPassword');
  if (showPasswordCheckbox.checked) {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
}
var showPasswordCheckbox = document.getElementById('showPassword');
showPasswordCheckbox.addEventListener('change', togglePassword);
