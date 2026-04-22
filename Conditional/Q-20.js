let marks = 55;
let category = "general";

if (marks >= 90){
    console.log("Grade: A");

    if(category === "General"){
        console.log("Full Scholarship");
    }
    else{
        console.log("Full Scholarship + 5000");
    }
    }
    else if(marks >=75){
        console.log("Grade: B");

        if(category === "general"){
            console.log("50% Scholarship");
        }
        else{
            console.log("75% Scholarship");
        }
    }
    else if( marks >= 60){
        console.log("Grade C");
        console.log("No Scholarship");
    }
    else{
        console.log("Fail");
        
    }