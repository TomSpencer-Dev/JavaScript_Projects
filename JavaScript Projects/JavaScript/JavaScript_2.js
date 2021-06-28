function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["lname"].value;
    if (x == "") {
        alert("First Name must be filled out");
        return false;
    }
    if (y == "") {
        alert("Last Name must be filled out")
    }
}