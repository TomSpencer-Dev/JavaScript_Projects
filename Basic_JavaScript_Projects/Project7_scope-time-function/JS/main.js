var T = 10; //Naming and assigning a value to a global variable
document.write(T)//Write variable in document. 

function Add_number_1() { //Naming function with local variable
    var V = 56; //Assigning locaal variable a value
    document.write(V); //Writing local variable in document. 
}
Add_number_1();

function Add_number_2() { //Create function with local variable
    var X = 15;
    console.log(10 + X);
}
function Add_number_3() {//Attempt to access local variable but cannot. Debug in console.
    console.log(X + 100);
}
Add_number_2();
Add_number_3();

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("WorkTime").innerHTML = "Get back to work!";
    }
}

function myFunction1() {
if (new Date().getHours() < 1000) {
    document.getElementById("Time").innerHTML = "Check back later.";
}
}

function salary_Function () {
    Salary = document.getElementById("salary").value
    if(Salary >= 2000) {
        Answer = "That's great!";
    }
    else {
        Answer= "That's fair";
    }
    document.getElementById("What_is_your_salary?").innerHTML = Answer;
}

//Write out time function with if, else if and else. 
function Time_function() {  //Naming function
    var Time= new Date().getHours(); //Assigning string and value to variable
    var Reply; //Assigning string to variable
    if (Time < 12 == Time > 8) { //If statement. If it is between 4-12 display a message
        Reply = "Time for class!";//Display message on Paragraph with ID Scheduler. 
    }
    else if (Time > 12 == Time < 18) {
        Reply = "Time for admin and selfcare";
    }
    else {
        Reply ="Chill and enjoy!";
    }
    document.getElementById("Scheduler").innerHTML = Reply;
}
