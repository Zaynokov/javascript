// Задание 5

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return String(arg1) + ' + ' + String(arg2) + ' = ' + String(arg1 + arg2);
            break;
        case '-':
            return String(arg1) + ' - ' + String(arg2) + ' = ' + String(arg1 - arg2);
            break;
        case '*':
            return String(arg1) + ' * ' + String(arg2) + ' = ' + String(arg1 * arg2);
            break;
        case '/':
            return String(arg1) + ' / ' + String(arg2) + ' = ' + String(arg1 / arg2);
            break;
    }
}

alert(mathOperation(12, 4, '+'))
alert(mathOperation(12, 4, '-'))
alert(mathOperation(12, 4, '*'))
alert(mathOperation(12, 4, '/'))