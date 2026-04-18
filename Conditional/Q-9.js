let marks = 50;

if (marks >= 90 && marks <= 100) {
    console.log("+A");
}
else if (marks >= 75 && marks <= 89) {
    console.log("A");
}
else if (marks >= 60 && marks <= 74) {
    console.log("B");
}
else if (marks >= 45 && marks <= 59) {
    console.log("C");
}
else if (marks < 45) {
    console.log("Fail");
}
else {
    console.log("Invalid marks");
}
