// Задание 6

let sum = prompt("Какую сумму положить на счет в банке?");

if (sum % 100 >= 11 && sum % 100 <= 19) {
    alert("Ваша сумма в " + sum + " рублей успешно зачислена.");
} else {
    switch (sum % 10) {
        case 1:
            alert("Ваша сумма в " + sum + " рубль успешно зачислена.");
            break;
        case 2:
        case 3:
        case 4:
            alert("Ваша сумма в " + sum + " рубля успешно зачислена.");
            break;
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            alert("Ваша сумма в " + sum + " рублей успешно зачислена.");
            break;
    }
}
