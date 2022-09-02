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