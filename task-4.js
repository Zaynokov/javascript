// Задание 4

function sum(arg1, arg2) {
    return String(arg1) + ' + ' + String(arg2) + ' = ' + String(arg1 + arg2)
}

function diff(arg1, arg2) {
    return String(arg1) + ' - ' + String(arg2) + ' = ' + String(arg1 - arg2)
}

function multiply(arg1, arg2) {
    return String(arg1) + ' * ' + String(arg2) + ' = ' + String(arg1 * arg2)
}

function div(arg1, arg2) {
    return String(arg1) + ' / ' + String(arg2) + ' = ' + String(arg1 / arg2)
}

let a = 12
let b = 4

alert(sum(a, b))
alert(diff(a, b))
alert(multiply(a, b))
alert(div(a, b))