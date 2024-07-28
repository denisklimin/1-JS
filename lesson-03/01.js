// Напишите функцию calculateAverage, которая принимает 2 числа и возвращает их среднее арифметическое

function calculateAverage(a, b) {
    let c = 0;
    c = (a + b) / 2;
    return c;
}

let first = +prompt('First number');
let second = +prompt('Second number');

const total = calculateAverage(first, second);
console.log(total);
alert(total);
