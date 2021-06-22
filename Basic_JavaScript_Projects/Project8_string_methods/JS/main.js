function myFunction1() {  //naming the function to cacatenate multiple strings
    var part_1 = "You are "; //naming and assigning string values to variables
    var part_2 = "going to ";
    var part_3 = "be rich! ";
    var whole_sentence = part_1.concat(part_2, part_3); //naming and defining variable to concatenate the other variables
    document.getElementById("Fortune").innerHTML = whole_sentence; //linking variable whole_sentence to html document
}

function slice() { //naming slice funviont
    var sentence = "All you have to do is work hard, save and make smart choices.";
    var section = sentence.slice(22,31); //using .slice to choose characters from string named sentence
    document.getElementById("slice").innerHTML = section; //displaying the variable section in the html document
}

function myFunction2() { 
    var str = "Alarm bells are going ringy dingy dingy!";
    var res = str.toUpperCase();
    document.getElementById("uppercase").innerHTML = res;
}

function myFunction3() {
    var str = "Today is the day for yoga";
    var n = str.search("yoga");
    document.getElementById("demo").innerHTML = n;
}

function myFunction4() {
    var T = 567;
    document.getElementById("numbers_to_string").innerHTML = T.toString();
}

function myFunction5() { //naming function
    var W = 53565.23156498; //naming variable and assigning a number to the variable
    document.getElementById("prec").innerHTML = W.toPrecision(7); //converting number to a string value and displaying 7 characters of the number in the html document
}

function myFunction6() {
    var num = 65161615.22553;
    var n = num.toFixed(2);
    document.getElementById("round").innerHTML = n;
}

function myFunction7() {
    var num = 65;
    var n = num.valueOf();
    document.getElementById("primitive").innerHTML = n;
}

