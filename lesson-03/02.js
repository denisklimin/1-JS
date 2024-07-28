// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(a) {
    let c;
    if(a % 2 == 0) {
        c = true;
        // alert('Четное');
        console.log(c);
    } else {
        c = false;
        // alert('Нечетное');
        console.log(c);
    }

    return c;
}

// const num = +prompt('Type number');
isEven(16);
