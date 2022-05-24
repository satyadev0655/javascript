//Sync - Async DepotName

console.log('a');
console.log('b');
console.log('c');
//a b c

console.log('x');
setTimeout(function(){
    console.log('y');
}, 1000);
console.log('z');
