const calcDisplay = document.querySelector('#calcDisplay');

const allButtons = Array.from(document.querySelectorAll('button'));
allButtons.map(button => button.addEventListener('click', changeDisplay))

let numberOne = 0;
let operator = 0;
let numberTwo = 0;

function changeDisplay(button){
    let buttonTxt = button.target.textContent; 
    if(buttonTxt == 'AC') {
        calcDisplay.textContent = '';
        numberOne = 0;
        operator = 0;
        numberTwo = 0;
    }
    else if(buttonTxt == '='){
        numberTwo = calcDisplay.textContent.slice(numberOne.toString().length + 1);
        calcDisplay.textContent = operate(+numberOne, operator, +numberTwo);
        numberOne = 0;
        operator = 0;
        numberTwo = 0;
    } else {
    if(isNaN(+buttonTxt)){
        if(operator != 0){
            numberTwo = calcDisplay.textContent.slice(numberOne.toString().length + 1);
            calcDisplay.textContent = operate(+numberOne, operator, +numberTwo);
        }
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
    if(num2 == 0){return ':) Nice Try'};
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