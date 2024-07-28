// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a, b, c) {
    console.log(Math.max(a,b,c));
}

const num1 = +prompt('First');
const num2 = +prompt('Second');
const num3 = +prompt('Trird');

findLargest(num1, num2, num3);