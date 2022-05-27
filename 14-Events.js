<html>
  <head> </head>
  <body>
    <h1 id="one" onclick="hello()">Hello</h1>
    <h1 onmouseenter="hello()">Hello</h1>

    <script>
      function hello() {
        document.getElementById('one').innerHTML = "<h1>Hello World</h1>";
        alert('Hello');
      }
    </script>
  </body>
</html>
