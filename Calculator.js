const calcDisplay = document.querySelector('#calcDisplay');


const allButtons = Array.from(document.querySelectorAll('button'));
allButtons.map(button => button.addEventListener('click', changeDisplay))

function changeDisplay(button){
    calcDisplay.textContent += button.target.textContent;
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