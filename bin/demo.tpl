<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>theme-color demo</title>
  {{style}}
   <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
      color: #fff;
    }

    .header {
      font-size: 50px;
      left: 0;
      position: absolute;
      right: 0;
      text-align: center;
      top: 40px;
      z-index: 1;
    }

    .main {
      display: table;
      height: 100%;
      position: absolute;
      width: 100%;
    }
    .box {
      display: table-cell;
      text-align: center;
      vertical-align: middle;
      width: 25%;
      font-size: 20px;
    }
  </style>
</head>
<body>
  <header class="header">Theme Color</header>
  <main class="main">
    <div class="box {{lightPrimary}}">.{{lightPrimary}}</div>
    <div class="box {{primary}}">.{{primary}}</div>
    <div class="box {{darkPrimary}}">.{{darkPrimary}}</div>
    <div class="box {{accent}}">.{{accent}}</div>
  </main>
</body>
</html>