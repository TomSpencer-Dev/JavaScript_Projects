function my_Dictionary() { //naming a function
    var Vehicle = {  //naming a variable and library
        Make:"GMC", //Defining key value pair in library
        Make:"Terrain", //Defining key value pair in library
        Color: "Black", //Defining key value pair in library
        Age:"New", //Defining key value pair in library
        Sound:"Vroom!" //Defining key value pair in library
    };
    delete Vehicle.Color; //Deleting key value pair Vehicle and Color from library
    document.getElementById("Dictionary").innerHTML = Vehicle.Color; //Displaying deleted key value pair from library in HTML document as undefined
}