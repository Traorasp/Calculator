console.log(operate(5,"add",3));

//Returns the sum of two numbers 
function add(num1, num2){
    return num1 + num2;
}

//Returns the value of one number being subtracted by another
function subtract(num1, num2){
    return num1 - num2;
}


//Returns the value of two numbers being multiplied
function multiply(num1, num2){
    return num1 * num2;
}

//Returns the value of on number being divided by another
function divide(num1, num2){
    return num1 / num2;
}

//Returns the value of one value being modded by another
function mod(num1, num2){
    return num1 % num2;
}

function operate(num1, operator, num2){
    switch (operator) {
        case "add":
            return add(num1, num2);
        case "subtract":
            return subtract(num1, num2);
        case "multiply": 
            return multiply(num1, num2);
        case "divide": 
            return divide(num1, num2);
        case "mod":
            return mod(num1, num2);
    }
}