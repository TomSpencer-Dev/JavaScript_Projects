function Vote_Function() {  //Assigning function name
    var Age, Can_Vote; //Naming variables
    Age = document.getElementById("Age").value; //Assigning value to HTML document input
    Can_Vote = (Age < 18) ? "You are too young":"You are old enough"; //Assigning ternary operator options
    document.getElementById("Station").innerHTML = Can_Vote + " to vote."; //Link ternary operator function to html document button
}

function Vehicle (Make, Model, Year, Color) { //Naming function and creating constructor
    this.Vehicle_Make = Make; //using keywords to assing name to 
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "viper", 2020, "red"); //Using the keyword "new" to assign values to Jack.Vehicle
var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    "manufactured in " + Erik.Vehicle_Year;
}

function Coffee (Size, Sweetner, Whitener, Flavor) {
    this.Coffee_Size= Size;
    this.Coffee_Sweetner= Sweetner;
    this.Coffee_Whitener= Whitener;
    this.Coffee_Flavor= Flavor;
}
var Tom = new Coffee("Large", "Black", "2 cream", "Hazlenut");
var Cindy = new Coffee("Medium", "2 sugars", "2 cream", "bold");
function myFunction2() {
    document.getElementById("New_and_This").innerHTML =
    "Tom drinks a " + Tom.Coffee_Size + " " + Tom.Coffee_Sweetner + 
    " coffee with " + Tom.Coffee_Whitener + " and " + Tom.Coffee_Flavor + 
    " flavor added.";
}

function Outfit (Top, Bottom, Head, Feet) {
    this.Outfit_Top= Top;
    this.Outfit_Bottom= Bottom;
    this.Outfit_Head= Head;
    this.Outfit_Feet= Feet;
}
var Derek = new Outfit("t-shirt", "Jeans", "Baseball Cap", "Work Boots");
function myFunction3() {
    document.getElementById("Challenge_9").innerHTML =
    "Derek is wearing a " + Derek.Outfit_Top + " today.";
}

function myFunction4() {
    document.getElementById("Multiplication").innerHTML = Times();//link to button in HTML document
    function Times() {
        var Multiplicand = 9;
        function Multiplier() {Multiplicand *= 4;}//adding a nested function
        Multiplier();
        return Multiplicand; //returns the result of the nested fuction
    } 
}
