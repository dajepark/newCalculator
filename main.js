//Keyclick or Keypress Animation

let keys = document.querySelectorAll('.keys');
let allValues = '';

keys.forEach(key => {
    key.addEventListener('click', function(e) {
        let init = e.target.innerHTML;
        allValues += parseInt(init);
        console.log(allValues);
        console.log(typeof(allValues));
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
        console.log(length);
        allValues += ' ' + operation + ' ';
        document.querySelector('.screen').innerHTML = allValues;
        console.log(allValues);
        console.log(operation);
        console.log(typeof(operation));
        return operation;
    })
});

//Calculations

let calculate = document.querySelector('.calculate');
calculate.addEventListener('click', function(e) {
    let values = allValues.split(' ');
    let firstValue = parseInt(values[0]);
    let secondValue = parseInt(values[2]);
    allValues = '';
    if(operation === '+') {
        let result = (firstValue + secondValue);
        console.log(result);
        allValues = result;
        console.log(allValues);
    };
    if(operation === 'x') {
        let result = firstValue * secondValue;
        console.log(result);
        allValues = result;
        console.log(allValues);
    }
    if(operation === '/') {
        let result = firstValue / secondValue;
        console.log(result);
        allValues = result;
        console.log(allValues);
    }
    if(operation === '-') {
        let result = firstValue - secondValue;
        console.log(result);
        allValues = result;
        console.log(allValues);
    }
    if(operation === '^') {
        let result = Math.pow(firstValue, secondValue);
        console.log(result);
        allValues = result;
        console.log(allValues);
    }
    operation = '';
    let screen = document.querySelector('.screen');
    screen.innerHTML = allValues;
});
