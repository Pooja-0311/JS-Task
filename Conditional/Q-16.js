let age = 20;
let isweekend = true;
let price = 0

if (age < 3){
    price = 0;
}
else{
    if (age >= 3 && age <= 12){
        price = 200;
    }
    else if (age >= 13 && age <= 59){
        price = 500;
    }
    else{
        price = 300;
    }
    if (isweekend){
        price = price + 100;
    }
}
console.log("Ticket Price:" + price);
