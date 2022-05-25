//Ex1
function getBusDetails(busCode){
    
    let resObj= {k1: "v1", k2: "v2", k3 : "v3"};
    return resObj;
}


let res = getBusDetails(1001);
console.log(res["k1"]); //v1



function f1(){
    console.log("f1");
}

function f2(callback){
    callback();
}

f2(f1); //f1

let f3 = (callback) => {
    callback();
}

f3(()=>{
   console.log("f3");  //f3
})

let f1 = (callback) => {
    callback();
}

f3(()=>{
   console.log("f3");  //f3
})




let res = 0;
const doSomething = (callback) => {
  res  = 10;
  callback(res);
};

doSomething((result) => {
  console.log(result);
});


function getBusDetails(busCode){
    
    let resObj= {k1: "v1", k2: "v2", k3 : "v3"};
    //https://apsrtcmobile.amnex.com/Transistservice.asmx/GetBusTrackerDetails_pilot_webportal?ServiceNo=3359&UserId=0&Flag=0&vehicleregno=&depotid=127
    
    return resObj;
}


let res = getBusDetails(3359);
console.log(res["k1"]); //v1
