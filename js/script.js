function toggleForms() {
  var loginForm = document.getElementById('formlogin');
  var logonForm = document.getElementById('formlogon');

  if (loginForm.style.display === 'none') {
    logonForm.classList.add('fadeOutRight');
    setTimeout(function() {
      logonForm.style.display = 'none';
      logonForm.classList.remove('fadeOutRight');
      loginForm.style.display = 'flex';
      loginForm.classList.add('fadeInLeft');
    }, 500);
  } else {
    loginForm.classList.add('fadeOutLeft');
    setTimeout(function() {
      loginForm.style.display = 'none';
      loginForm.classList.remove('fadeOutLeft');
      logonForm.style.display = 'flex';
      logonForm.classList.add('fadeInRight');
    }, 500);
  }
}




/**
 * Nav do Home
 */
let menuIconNavHome = document.querySelector(".menu-icon-nav-home");
let nav = document.querySelector("nav");

menuIconNavHome.onclick = function() {
    menuIconNavHome.classList.toggle("active");
    nav.classList.toggle("active-nav");
}

document.onclick = function(e) {
    if (!menuIconNavHome.contains(e.target) && !nav.contains(e.target)) {
        menuIconNavHome.classList.remove("active");
        nav.classList.remove("active-nav");
    }
}
