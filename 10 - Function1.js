function add(a,b){
    console.log(a+b);
}

add(2,3); //5

function add1(a,b){
    return a+b;
}

let res1 = add1(2,6);
console.log(res1); //8


//Anony fun
let res2 = function(a,b){
    return a+b;
}

console.log(res2(1,5)); //6

let res3 = (a,b) => {
    return a+b;
}
console.log(res3(1,3)); //


let res4 = (a,b) => a+b;
console.log(res4(2,3)); //5

