<html>
  <head>
    <meta charset="UTF-8" />

    <!-- <link rel="stylesheet" type="text/css" href="styles.css"> -->
  </head>
  <body>
    <h1>Hello there!</h1>
    <p id="t1" class="t1c">Static</p>

    <script>
      let peElement = document.getElementById('t1');
      peElement.innerHTML = 'Dynamic';

      let peElement1 = document.getElementsByClassName('t1c');
      console.log(peElement1);
      peElement1[0].innerHTML = 'Dyna 1';
    </script>
  </body>
</html>

