<?php

  session_start();

  if(isset($_POST["submit"]))
  {
    //print_r($_POST["nome"]);
    //print_r($_POST["email"]);
    //print_r($_POST["senha"]);

    include_once("config.php");

    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $senha = $_POST["senha"];

    $result = mysqli_query($DBconexao, "INSERT INTO usuarios(nome,email,senha) VALUES ('$nome','$email','$senha')");

    if($result) {
      $_SESSION["CadastroCriado"] = true;
    }
  }

?>



<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <link rel="stylesheet" href="../../CSSstyle.css">
</head>

<body class="BodyLogin">
  <main class="ContainerLogin">

    <div class="InsideLogin">

      <div class="FormLogin" id="loginForm">
        <h1 class="TitleLogin">Bem Vindo!</h1>
        <form class="InsideFormLogin" action="testLogin.php" method="POST">
          <input type="text" name="email" placeholder="Email" class="InputLogin" required>
          <input type="password" name="senha" placeholder="Senha" class="InputLogin" required>
          <button class="ButtonLogin" type="submit" name="submitL">Entrar</button>
        </form>
        <button type="button" class="ToggleButton" onclick="toggleForms()">Cadastre-se</button>
        <?php if (isset($_SESSION["ErroLogin"])): ?> 
          <div class="ContainerErroLogin"><p>ERRO: Email ou senha inválidos.</p></div>
        <?php 
          endif; 
          unset($_SESSION["ErroLogin"]);
        ?>
        <?php if (isset($_SESSION["ErroLogin"])): ?> 
          <div class="ContainerErroLogin"><p>ERRO: Email ou senha inválidos.</p></div>
        <?php 
          endif; 
          unset($_SESSION["ErroLogin"]);
        ?>
                <?php if (isset($_SESSION["CadastroCriado"])): ?> 
          <div class="ContainerCadastroLogin"><p>Cadastro criado com sucesso.</p></div>
        <?php 
          endif; 
          unset($_SESSION["CadastroCriado"]);
        ?>
      </div>

      <div class="FormLogin" id="registerForm" style="display: none;">
        <h1 class="TitleLogin">Cadastrar-se</h1>
        <form action="login.php" method="POST">
          <input type="text" name="nome" placeholder="Usuário" class="InputCadastro" required>
          <input type="email" name="email" placeholder="Email" class="InputCadastro" required>
          <input type="password" name="senha" placeholder="Senha" class="InputCadastro" required>
          <button class="ButtonCadastro" type="submit" name="submit">Cadastrar</button>
        </form>
        <button type="button" class="ToggleButton" onclick="toggleForms()">Voltar para Entrar</button>
      </div>

    </div>

    <div class="DireitaLogin">
      <div class="ContentDireitaLogin">
        <img src="../../Assets/Logo.png" alt="Logo" class="LogoLogin">
        <h1>Meu Soninho</h1>
        <p>Um sono de qualidade para um<br>dia de produtividade!</p>
      </div>
    </div>

  </main>
  <script src="../../JavaScript/script.js"></script>
</body>
</html>
