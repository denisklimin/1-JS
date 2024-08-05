/*
В этом задании вам предстоит разработать интерактивный слайдер, который позволит пользователю переключаться между созданными нейросетью изображениями веб-технологий.
Изучите файл index.html. В этом задании надо будет работать с секцией "Урок 6". Разметка уже написано - нужно добавить только js-код.

Задание:
- Добавьте функциональность кнопкам "prev" и "next", чтобы при их нажатии изображение в теге `<img>` менялось на предыдущее или следующее
- Обеспечьте циклическое переключение изображений: после последнего изображения следует первое, и наоборот.

Адреса изображений находятся в массиве WEB_TECH_IMAGE
Первоначально отображается первое изображение из WEB_TECH_IMAGE

🧙‍♂️ Совет: обратите внимание на управление индексом текущего изображения — это ключ к успешному переключению изображений.
*/

const WEB_TECH_IMAGES = [
    'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/32f74d50-68d0-46aa-b035-7b3a5300d2c1_js-magic-logo.jpg',
    'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/c8a1f4a6-1337-4899-bdfd-a8c9c7bb806a_css-magic-logo.jpg',
    'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/784380b9-6937-42a6-bdfe-869835820234_html-magic-logo.jpg',
]

// const list = document.querySelector('.list')
//     console.log(list)

let slideIndex = 0

const slider = document.querySelector('.list')
const prevButton = document.querySelector('#prev')
const nextButton = document.querySelector('#next')



const slides = document.querySelectorAll('.item')
console.log(slides)
// Первое решение цикла
// for(let i = 0; i < WEB_TECH_IMAGES.length; i++)
//     items[i].src = WEB_TECH_IMAGES[i]
// items.style.display = none;


// Второе решение цикла
WEB_TECH_IMAGES.forEach((image, index) => {
    if (slides[index]) {
        slides[index].src = image;
    }
});

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + WEB_TECH_IMAGES.length) % WEB_TECH_IMAGES.length;
    updateSlider();
}

function showNextSlide() {
    slideIndex = (slideIndex + 1) % WEB_TECH_IMAGES.length;
    updateSlider();
}

function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
        slide.style.display = 'block';
        } else {
        slide.style.display = 'none';
        }
    });
}

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

updateSlider()



// const nextButton = document.querySelector('#next')
// colorButton.addEventListener('click', function() {
//     console.log('Click next')
//     let i = 0;
//     if (i) {
//         items[i].style.display = block;
//     }
// })



// const title = document.getElementById('course-title')
// console.log(title)

// const colorButton = document.querySelector('#color-button')
// console.log(colorButton)

// const list = document.querySelector('.list')
// console.log(list)

// const items = list.querySelectorAll('.item')
// console.log(items)

// const domItem = document.querySelector('#dom')
// console.log(domItem)
// domItem.innerHTML = '<a href="https://developer.mozilla.org/ru/docs/Web/API/Document_Object_Model/Introduction">Взаимодействие с DOM ⬅</a>'
// domItem.classList.add('current')

// const title = document.getElementById('course-title')
// title.textContent = 'Обновленное содержание курса 📘'
// title.classList.remove('title')

// const colorButton = document.querySelector('#color-button')
// colorButton.setAttribute('title', 'Сгенерировать случайные цвета')
// colorButton.style.padding ='5px 10px'
// colorButton.style.color = 'gray'
// colorButton.style.backgroundColor = 'lightblue'

// // и посмотрим на его значение в консоли
// console.log(colorButton.getAttribute('title'))

//document.addEventListener('DOMContentLoaded', () => console.log('HTML разобран и DOM дерево построено.'))
//window.addEventListener('load', () => console.log('Вся страница полностью загружена.'))

// const colorButton = document.querySelector('#color-button')
// colorButton.addEventListener('click', function() {
//     console.log('Click!')
//     const items = document.querySelectorAll('.item')
//     console.log(items)
//     for (let item of items) {
//         item.style.color = getRandomColor()
//     }
// })

// const getRandomColor = () => {
//     // Генерация случайного цвета
//     const red = Math.floor(Math.random() * 256)
//     const green = Math.floor(Math.random() * 256)
//     const blue = Math.floor(Math.random() * 256)
//     return `rgb(${red}, ${green}, ${blue})`
// }

