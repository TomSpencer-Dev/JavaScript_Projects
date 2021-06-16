function addition_function() {//Naming function
    var addition = 2 + 2; //Naming and Defining variable to add two variables
    document.getElementById("Math").innerHTML = addition; 
}

function subtraction_function() {//Naming function
    var subtraction = 9 - 7; //Naming and Defining variable to subtract two numerals
    document.getElementById("Math2").innerHTML = subtraction;
}

function multiplication_function() {//Naming function
    var simple_math = 5 * 5; //Naming and Defining variable  to multiply two numerals
    document.getElementById("Math3").innerHTML = simple_math;
}

function division_function() {//Naming function
    var simple_math2 = 16/4; //Naming and Defining variable to do divide two numerals
    document.getElementById("Math4").innerHTML = simple_math2;
}

function multiple_equations() {//Naming function
    var multiple_math = (1+2) *10 /2 -5;  //Naming and Defining variable to do multiple equations
    document.getElementById("Math5").innerHTML = multiple_math;
}

function modulus_operator() {//Naming function
    var simple_math3 = 25 % 6;  //Naming and Defining variable 
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_math3;
}

function negation_operator() {//Naming function
    var x = 25;  //Naming and Defining variable 
    document.getElementById("Math7").innerHTML = -x;
}

var y = 25;  //Naming and Defining variable 
y++; 
document.write(y +" "); //using document.write to display variable
document.write("&nbsp;");
var z = 36;  //Naming and Defining variable 
z--;
document.write(z); //using document.write to display variable

window.alert(Math.random() * 100); //executing a random number in an alert window

function math_method() { //Naming function
document.getElementById("round").innerHTML = Math.round(5.5);
}
