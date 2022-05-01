const calcDisplay = document.querySelector('#calcDisplay');


const allButtons = Array.from(document.querySelectorAll('button'));
allButtons.map(button => button.addEventListener('click', changeDisplay))

let numberOne = 0;
let operator = 0;
let numberTwo = 0;

function changeDisplay(button){
    let buttonTxt = button.target.textContent; 
    if(buttonTxt == '='){
        numberTwo = calcDisplay.textContent.slice(numberOne.toString().length + 1);
        calcDisplay.textContent = operate(+numberOne, operator, +numberTwo);
    } else {
    if(isNaN(+buttonTxt)){
        numberOne = calcDisplay.textContent;
        operator = buttonTxt;
        calcDisplay.textContent += buttonTxt;
    } else {
    calcDisplay.textContent += +buttonTxt;
    }
    }
}

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

//Calls operator given on the two numbers given
function operate(num1, operator, num2){
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*": 
            return multiply(num1, num2);
        case "/": 
            return divide(num1, num2);
        case "%":
            return mod(num1, num2);
    }
}