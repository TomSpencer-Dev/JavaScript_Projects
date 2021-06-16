function Yoga_Function() {                                 //Defining a function and naming it
    var Ahimsa = "Non-violence";                     //Defining a variable and giving it a string value
    var result = Ahimsa.fontcolor("blue");           //Using the fontcolor method on asana variable
    document.getElementById("asana").innerHTML = result;//Putting the value of result in HTML element with "Asana" id
}

function myFunction() {      //Defining a function and naming it
    var sentence = "Non-Violence can be practised"; //Defining a cariable and giving it a string
    sentence += " both towards others and self;";  //using += operator to concatenate the string
    sentence += " both mentally and physically.";  //using a += operator to concatenate the string
    document.getElementById("Concatenate").innerHTML = sentence; //Putting the value of sentence in HTML element with "Concatenate" id
}

function Multiply(p1, p2) {  //defining a function and naming it
    return p1 * p2; //The function returns the product of p1 and p2
}

document.getElementById("demo").innerHTML = Multiply(4, 7);