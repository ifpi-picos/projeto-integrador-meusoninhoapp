function toggleForms() {
  var loginForm = document.getElementById('loginForm');
  var registerForm = document.getElementById('registerForm');

  if (loginForm.style.display === 'none') {
    registerForm.classList.add('fadeOutRight');
    setTimeout(function() {
      registerForm.style.display = 'none';
      registerForm.classList.remove('fadeOutRight');
      loginForm.style.display = 'flex';
      loginForm.classList.add('fadeInLeft');
    }, 500);
  } else {
    loginForm.classList.add('fadeOutLeft');
    setTimeout(function() {
      loginForm.style.display = 'none';
      loginForm.classList.remove('fadeOutLeft');
      registerForm.style.display = 'flex';
      registerForm.classList.add('fadeInRight');
    }, 500);
  }
}
