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



<html>
  <head> </head>
  <body >
    <input type="text" 
    onchange="onchngDemo()"
    onkeydown="keyDwn()">
   
   <button
      onclick="onclkDemo()"
      onmouseover="onMsOver()"
      onmouseout="onMsOut()"
    >
      Click
    </button>

    <script>
      function onclkDemo() {
        console.log('onclick event');
      }

      function onchngDemo() {
        console.log('onchange event');
      }

      function onMsOver() {
        console.log('onmouseover event');
      }

      function onMsOut() {
        console.log('onmouseout event');
      }

      function keyDwn(){
        console.log('onkeydown event');
      }
    </script>
  </body>
</html>
