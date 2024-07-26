/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 70 // тестовое значение, можно изменять
let grade = Math.floor(Math.random() * 100);
// your code

console.log(grade);

if(grade >= 0 && grade < 50) {
    grade = 'F';
} else if(grade >=50 && grade < 70) {
    grade = 'D';
} else if(grade >=70 && grade < 80) {
    grade = 'C';
} else if(grade >= 80 && grade < 90) {
    grade = 'B';
} else if(grade >= 90 && grade <= 100) {
    grade = 'A';
}

console.log(grade);
