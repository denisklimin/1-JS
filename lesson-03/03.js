// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a, b, c) {
    const num1 = +prompt('First');
    const num2 = +prompt('Second');
    const num3 = +prompt('Trird');

    if (a > b > c){
        console.log(a);
    } else if (a < b < c ) {
        console.log(c);
    } else if (a < b > c) {
        console.log(b);
    }
}
