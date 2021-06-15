function Yoga_Function() {                                 //Defining a function and naming it
    var Ahimsa = "Non-violence";                     //Defining a variable and giving it a string value
    var result = Ahimsa.fontcolor("blue");           //Using the fontcolor method on asana variable
    document.getElementById("asana").innerHTML = result;//Putting the value of result in HTML element with "Asana" id
}

function myFunction() {      //Degining a function and naming it
    var sentence = "Non-Violence can be practised"; //Defining a cariable and giving it a string
    sentence += " both towards others and self;";  //using += operator to concatenate the string
    sentence += " both mentally and physically.";  //using a += operator to concatenate the string
    document.getElementById("Concatenate").innerHTML = sentence; //Putting the value of sentence in HTML element with "Concatenate" id
}