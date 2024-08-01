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

/**
 * Nav do Home
 */
let menu_icon_box = document.querySelector(".MenuIconBoxHome");
let box = document.querySelector(".BoxHome");

menu_icon_box.onclick = function() {
    menu_icon_box.classList.toggle("active");
    box.classList.toggle("active_BoxHome");
}

document.onclick = function(e) {
    if (!menu_icon_box.contains(e.target) && !box.contains(e.target)) {
        menu_icon_box.classList.remove("active");
        box.classList.remove("active_BoxHome");
    }
}
