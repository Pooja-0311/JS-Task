let a = 60;
let b = 80;
let c = 60;

if (a + b + c === 180){
   if (a === b && b === c){
    console.log("Equilateral");
   } 
   else if (a === b || b === c || a === c){
    console.log("Isosceles");
   }
   else {
    console.log("Scalene");
   }
}
else{
    console.log("Not a valid triangle");
}
