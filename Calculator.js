const calcDisplay = document.querySelector('#calcDisplay');

const allButtons = Array.from(document.querySelectorAll('button'));
allButtons.map(button => button.addEventListener('click', changeDisplay));

const decimal = document.querySelector('#dot');

let numberOne = 0;
let operator = 0;
let numberTwo = 0;

console.log(decimal.getAttribute('class'));


function changeDisplay(button){
    let buttonTxt = button.target.textContent; 
    switch (buttonTxt){
        case 'AC':
            calcDisplay.textContent = '';
            decimal.setAttribute('class', 'on');
            clearNumbers();
            break;
        case '=':
            calculateDisplay()
            clearNumbers();
            break;
        case 'Del':
            calcDisplay.textContent = calcDisplay.textContent.slice(0, calcDisplay.textContent.length-1);
            break;
        case '%':
        case '/':
        case '*':
        case '-':
        case '+':
            if(operator != 0){
                calculateDisplay()
            }
            decimal.setAttribute('class', 'on');
            numberOne = calcDisplay.textContent;
            operator = buttonTxt;
            calcDisplay.textContent += buttonTxt;
            break;
        case '.':
            if(decimal.classList == 'on') {
                calcDisplay.textContent += buttonTxt;
                decimal.removeAttribute('class')
                console.log(decimal.classList);
            }
            break;
        default:
            calcDisplay.textContent += +buttonTxt;

    }
    
}

//Sets numberTwo to number after last operator presses by user
//and sets calcDisplay to result of displays operation
function calculateDisplay(){
    numberTwo = calcDisplay.textContent.slice(numberOne.toString().length + 1);
    calcDisplay.textContent = operate(+numberOne, operator, +numberTwo);
}

//Sets var storing all numbers to 0
function clearNumbers(){
    numberOne = 0;
    operator = 0;
    numberTwo = 0;
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
    return Math.floor(num1 / num2 *100000)/100000;
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