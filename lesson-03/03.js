// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a, b, c) {
    return Math.max(a,b,c);
}

const num1 = +prompt('First');
const num2 = +prompt('Second');
const num3 = +prompt('Trird');

const max = findLargest(num1, num2, num3);
console.log(max);
alert(max);