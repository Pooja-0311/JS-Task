let units = 50;
let bill = 0;

if(units <= 100){
    bill = units * 1.5;
}
else if(units <= 300){
    bill = units * 2.5;
}
else if(units <= 500){
    bill = units * 4.0;
}
else {
    bill = units * 5.0;
}
console.log("Total bill: " + bill);

