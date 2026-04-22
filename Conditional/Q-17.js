let pin = 1234;
let withdrawal = 5000;
let balance = 10000;

if(pin === 1234){
    if(withdrawal % 100 === 0){
    if(withdrawal <= balance){
        console.log("You collect your cash");
    }
    else{
        console.log("Insufficient balance");
        
    }
}
else{
    console.log("Not multiple of 100");
}
    
}
else{
    console.log("Incorrect pin");
    
}

