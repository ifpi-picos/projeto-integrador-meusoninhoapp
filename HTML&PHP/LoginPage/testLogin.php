<?php
  
  session_start();

  if(isset($_POST["submitL"]) && !empty($_POST['email']) && !empty($_POST['senha']))
  {
    include_once("config.php");
  
    $email = $_POST["email"];
    $senha = $_POST["senha"];
  
    $result = mysqli_query($DBconexao, "SELECT * FROM usuarios WHERE email = '$email' AND senha = '$senha'");
  
    if(mysqli_num_rows($result) > 0)
    {
      $_SESSION["email"] = $email;
      $_SESSION["senha"] = $senha;
      header("Location: ../HomePage/Home.php");
    }
    else
    {
      unset($_SESSION["email"]);
      unset($_SESSION["senha"]);
      $_SESSION["ErroLogin"] = true;
      header("Location: login.php");
    }
  }

?>