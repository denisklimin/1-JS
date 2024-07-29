/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

const str = 'hello'
const arr = str.split('')

function doubleEachCharacter(array) {
    let newArr = []
    let strNew;
    for(let i = 0; i < array.length; i++) {
        newArr.push(array[i] + array[i]);

    }
    strNew = newArr.join('')
    return strNew
}

console.log(doubleEachCharacter(arr))