//create an object to keep track of values
const Calculator = {
    //this displays 0 on the screen
    Display_Value: '0',
    //this will hold the first operand for any expressions, we set it to null for now
    First_Operand: null,
    //this checks whether or not the second operand has been input
    Wiat_Second_Operand: false,
    //this will hold the operator, we set it to null for now
    operator: null,
};

// this modifies values each time a button is clicked
function Input_Digit(digit) {
    const { Display_Value, Wait_Sedcon_Operand } = Calculator;
    