<?php require('server/data.php'); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon super site de CV</title>
    <link rel="stylesheet" href="assets/style.css">
</head>
<body class="" id="main">
  <button id="theme">UX</button>
  <?php include 'layouts/header.php'; ?>
  <h1><?= $data["about"]["title"] ?></h1>
  <h2><?= $data["about"]["name"] ?></h2>
  <img src=<?= 'assets/images/' .$data["about"]["avatar"] ?> alt="">
  <?php include 'layouts/footer.php'; ?>
  <script src="assets/data/data.js"></script>
  <script src="assets/main.js"></script>
</body>
</html>