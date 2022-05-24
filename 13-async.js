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

//Promoise
let result = '0';

const doSomething = (callback) => {
  setTimeout(() => {
     retult = 10;
  }, 2000);
  callback(result);
};

doSomething((result) => {
  console.log(result);
});

//Output 0

const doSomething = new Promise((resolve, reject) => 
{ 
    let success = true
    if (success) { 
        setTimeout(() => {
         resolve(10)
  }, 2000);
        } 
    else { 
        reject('this error occurred') 
    } 
} )


doSomething.then(
    result => { 
        console.log(result) 
    }).catch(error => { 
        console.log(error) 
    })
    
//Output : 10    

