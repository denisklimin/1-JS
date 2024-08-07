/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

const capitalizeWords = (str) => {
  let copyStr = str.split('')
  let newStr = []
  for(let i = 0; i < copyStr.length; i++) {
    if(i === 0) {
      copyStr[i] = copyStr[i].toUpperCase()
      newStr.push(copyStr[i])
    } else if(str[i] === ' ') {
      newStr.push(copyStr[i])
      i++
      copyStr[i] = copyStr[i].toUpperCase()
      i--
    } else newStr.push(copyStr[i])
  }
  return console.log(newStr.join(''))
}

capitalizeWords('hello world from javascript')
