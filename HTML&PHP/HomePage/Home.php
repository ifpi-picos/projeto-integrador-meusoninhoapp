<?php

  session_start();
  //print_r($_SESSION)

  if(!isset($_SESSION["email"]) || !isset($_SESSION["senha"]))
  {
    header("Location: login.php");
  }
  $logado = $_SESSION["email"];
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Hello World!</h1>
</body>
</html>