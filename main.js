//Keyclick Function

let keys = document.querySelectorAll('.keys');
let allValues = '';

keys.forEach(key => {
    key.addEventListener('click', function(e) {
        let init = e.target.innerHTML;
        allValues += parseInt(init);
        key.classList.add('transition');
        document.querySelector('.screen').innerHTML = allValues;
        return allValues;
    })
});

keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
});

function removeTransition(e) {
    e.target.classList.remove('transition');
};

//Operation Function

let operators = document.querySelectorAll('.operator');
let currentOperation;
let operation = '';
operators.forEach(operator => {
    operator.addEventListener('click', function(e) {
        operation += e.target.innerHTML;
        length = allValues.length;
        allValues += ' ' + operation + ' ';
        document.querySelector('.screen').innerHTML = allValues;
        return operation;
    })
});

//Calculations

let calculate = document.querySelector('.calculate');
FullAray = allValues.split(' ');
calculate.addEventListener('click', function(e) {
    values = allValues.split(' ');
    console.log(values);
    let firstValue = parseInt(values[0]);
    let secondValue = parseInt(values[2]);
    allValues = '';
    if(operation === '+') {
        let result = (firstValue + secondValue);
        allValues = result;
    };
    if(operation === 'x') {
        let result = firstValue * secondValue;
        allValues = result;
    };
    if(operation === '/') {
        let result = firstValue / secondValue;
        allValues = result;
    };
    if(operation === '-') {
        let result = firstValue - secondValue;
        allValues = result;
    };
    if(operation === '^') {
        let result = Math.pow(firstValue, secondValue);
        allValues = result;
    };
    operation = '';
    let screen = document.querySelector('.screen');
    screen.innerHTML = allValues;
});

//Clear Function 

let clear = document.querySelector('.clear');
clear.addEventListener('click',  clearFunction);
function clearFunction() {
    allValues = '';
    operation = '';
    document.querySelector('.screen').innerHTML = allValues;
}

// backspace function

let backspace = document.querySelector('.delete');
backspace.addEventListener('click', deleteFunction);
function deleteFunction() {
    if(allValues[allValues.length - 1] === '+' || allValues[allValues.length - 1] === '-' || allValues[allValues.length - 1] === '/' || allValues[allValues.length - 1] === 'x' | allValues[allValues.length - 1] === '^') {
        operation = '';
    }
    allValues = allValues.split('');
    console.log(allValues);
    console.log(typeof(allValues));
    ar = allValues.length;
    allValues.length = ar - 1;
    console.log(allValues);
    console.log(typeof(allValues));
    allValues = allValues.join('');
    document.querySelector('.screen').innerHTML = allValues;
}