let operator = '';
let beforeValue = '';
let currentValue = '';

document.addEventListener('DOMContentLoaded', function () {
    let number = document.querySelectorAll('.number');
    let clear = document.querySelector('.clear');
    let equal = document.querySelector('.equal');
    let operators = document.querySelectorAll('.operator');
    let before = document.querySelector('.before');
    let after = document.querySelector('.after');
    let decimal = document.querySelector('.decimal');
    let backspace = document.querySelector('.backspace');

    number.forEach((number) => number.addEventListener('click', function(e) {
        pressNumber(e.target.textContent);
        after.textContent = currentValue;
    }))
    operators.forEach((op) => op.addEventListener('click', function(e) {
        pressOperator(e.target.textContent);
        before.textContent = beforeValue + ' ' + operator;
        after.textContent = currentValue;
    }))

    clear.addEventListener('click', function () {
        beforeValue = '';
        currentValue = '';
        operator = '';
        before.textContent = beforeValue;
        after.textContent = currentValue;
    })

    equal.addEventListener('click', function() {
        if(currentValue != '' && beforeValue != '') {
            calculate();
            before.textContent = '';
            after.textContent = beforeValue;
        }
    })
    decimal.addEventListener('click', function() {
        before.textContent = beforeValue;
        addDecimal();
        after.textContent = currentValue;
    })
    
    backspace.addEventListener('click', function() {
        if(!currentValue == ''){
            currentValue = currentValue.slice(0, -1);
            after.textContent = currentValue;
        }
    })

})
function pressNumber(num) {
    if(currentValue.length <= 9) {
        currentValue += num;
    }
}

function pressOperator(op) {
    operator = op;
    beforeValue = currentValue;
    currentValue = '';
}

function calculate() {
    beforeValue = Number(beforeValue);
    currentValue = Number(currentValue);

    if(operator === '+') {
        beforeValue += currentValue;
    }
    else if(operator === '-') {
        beforeValue -= currentValue;
    }
    else if(operator === 'x') {
        beforeValue *= currentValue;
    }
    else {
        beforeValue /= currentValue;
    }
    beforeValue = round(beforeValue);
    beforeValue = beforeValue.toString();
    currentValue = currentValue.toString();
    console.log(beforeValue);
}

function round(num) {
    return Math.round(num * 1000) / 1000;
}

function addDecimal() {
    if(!currentValue.includes('.')) {
        currentValue += '.';
    }
}