const URL_API = location.hostname === "localhost" || location.hostname === "127.0.0.1" ? 
"http://localhost:3000" : "https://meusoninhoapp-backend.onrender.com"


function register(){
const nameInput = document.querySelector("#name-register")
const emailInput = document.querySelector("#email-register")
const passwordInput = document.querySelector("#password-register")

  const user = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value
  }

  fetch(`${URL_API}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      alert("Usuário cadastrado com sucesso!")
    })
    .catch(error => {
      console.log(error)
      alert("Erro ao cadastrar usuário!")
    })
}


function login() {
  const emailInput = document.querySelector("#email-login");
  const passwordInput = document.querySelector("#password-login");

  const user = {
    email: emailInput.value,
    password: passwordInput.value
  };

  fetch(`${URL_API}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => response.json())
    .then(json => {
      console.log(json); 
      const token = json.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(json.data.user));
      alert("Login successful!");

      window.location.href = "index.html";
    })
    .catch(error => {
      console.log(error);
      alert("Login failed!");
    });
}

/* Troca dos formulários */

function toggleForms() {
  var loginForm = document.getElementById('formlogin');
  var registerForm = document.getElementById('formregister');

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
