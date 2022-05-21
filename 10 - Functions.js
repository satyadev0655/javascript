function getData(color) {
  // console.log(typeof color);
  if (typeof color != 'undefined') {
    console.log('hello1');
  } else {
    console.log('hello2');
  }
}
getData('test');


//Primitive types

//---------------------------------------
function hello(name) {
  console.log(name);
}
hello('Alex');

//---------------------------------------
function sum(a, b) {
  return a + b;
}

res1 = sum(1, 2);
console.log(res1); //3

//---------------------------------------
//Anonymous function
sumFun1 = function (a, b) {
  return a + b;
};

console.log(sumFun1(3, 4)); //7

//---------------------------------------
//Arrow Function
hello = (name) => {
  console.log(name);
};

hello('Benn'); //Benn

//remove {}
hello1 = (name) => console.log(name);
hello1('Kevin');

hello3 = (p1, p2) => {
  console.log(p1);
};

hello3('a', 'b');

hello4 = (p1) => console.log(p1);

hello5 = (p1) => {
  console.log(p1);
};

hello4('A');

hello6 = (p1) => {
  console.log('hello 6');
};

consoel.log(hello6());

