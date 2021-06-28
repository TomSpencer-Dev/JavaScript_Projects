function Animal_Function() {
    var Animal_Output;
    var Animals = document.getElementById("Animal_Input").value;
    var Animal_String = " is a great animal!";
    switch(Animals) {
        case "Tiger":
            Animal_Output = "Tiger" + Animal_String;
        break;
        case "Lion":
            Animal_Output = "Lion" + Animal_String;
        break;
        case "Bear":
            Animal_Output = "Bear" + Animal_String;
        break;
        case "Dog":
            Animal_Output = "Dog" + Animal_String;
        break;
        case "Cat":
            Animal_Output = "Cat" + Animal_String;
        break;
        case "Cow":
            Animal_Output = "Cow" + Animal_String;
            break;
        default:
            Animal_Output = "Please enter an animal exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Animal_Output;
}

function myFunction() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("ID_Name");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("Hello World",10,50);

var d = document.getElementById("myCanvas");
var dtx = d.getContext("2d");

var frd = dtx.createLinearGradient(0,0,170,0);
frd.addColorStop(0, "black");
frd.addColorStop(1, "white");

dtx.fillStyle = frd;
dtx.fillRect(20,20,150,100);


