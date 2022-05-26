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


<html>
  <head>
    <meta charset="UTF-8" />

    <!-- <link rel="stylesheet" type="text/css" href="styles.css"> -->
  </head>
  <body id="bdy">

  <!-- <svg height="100" width="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg> -->

   <h1 id="p2">Hello</h1>
   <script>

document.getElementById("p2").style.color = "blue";
setTimeout(()=>{
  document.getElementById("p2").style.color = "red";
},1000)
document.getElementById("p2").style.color = "blue";
setTimeout(()=>{
  document.getElementById("p2").style.color = "red";
},1000)
</script>
  </body>
</html>




<html>
  <head>
    <meta charset="UTF-8" />

    <!-- <link rel="stylesheet" type="text/css" href="styles.css"> -->
  </head>
  <body id="bdy">
    <h1>Hello there!</h1>
    <p id="add" class="add">Add</p>
    <p id="t1" class="t1c">T1</p>
    <p id="t2" class="t2c">T2</p>

    <script>
      let peElement = document.getElementById('t1');
      peElement.innerHTML = 'Dynamic';

      let peElement1 = document.getElementsByClassName('t1c');
      console.log(peElement1);
      peElement1[0].innerHTML = 'Dyna 1';

      //Write into the HTML output stream
      document.write('Hello');

      let bdy = document.getElementById('bdy');
      let t2Ele = document.getElementById('t2');
      bdy.removeChild(t2Ele);

      setTimeout(()=>{
        let bdy = document.getElementById('bdy');
      let addEle = document.getElementById('add');
      bdy.removeChild(t2Ele);
      },2000);
    </script>
  </body>
</html>

