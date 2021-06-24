function Call_Loop() {
    var Digit ="";
    var X = 1;
    while (X < 16) { //While X is less than 16 the loop will count in incrmental steps by 1
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function stringLength() {
    var str = "Hello World!";
    var n = str.length;
    document.getElementById("length").innerHTML = n;
}

    var Instruments = ["guitar", "drums", "piano", "saxaphone", "bass guitar"];
    var Content = "";
    var X;
    function for_Loop() {
        for (X = 0; X < Instruments.length; X++) { //For loop that will list indexesfrom the array
            Content += Instruments [X] + "<br>";
        }
        document.getElementById("List_of_Instruments").innerHTML = Content;
    }

function array_Function() {
    var Fun_Activities = [];
    Fun_Activities[0] = "hiking";
    Fun_Activities[1] = "yoga";
    Fun_Activities[2] = "comedy";
    Fun_Activities[3] = "watching movies";
    Fun_Activities[4] = "listening to music";
    document.getElementById("Array").innerHTML = "I enjoy " + Fun_Activities[4] + ".";
}

function constant_function() {
    const Vehicle = {type:"car", brand:"Honda", color:"Blue"};
    Vehicle.color = "black";
    Vehicle.brand = "Toyota";
    document.getElementById("Constant").innerHTML = "Sally drives a " + Vehicle.color + " " + Vehicle.brand + ".";
}

var H = 82;
document.write(H);
{
    let H = 33; //create object H using let. H will = 33 in this circumstance inside the curly brackets
    document.write("<br>" + H);
}
document.write("<br>" + H);

function myFunction() {
    return Math.PI;
}
document.getElementById("demo").innerHTML = myFunction();

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
}
document.getElementById("Car_Object").innerHTML = car.description();

let text = "";
for (let i = 0; i < 10; i++) {
    if (i=== 3) {break;}
    text += "The number is " + i + "<br>";
}
document.getElementById("demo2").innerHTML = text;

for (let i = 0; i < 10; i++) {
    if (i ===3) {continue; }
    text += "The number is " + i + "<br>";
}
document.getElementById("demo3").innerHTML = text;