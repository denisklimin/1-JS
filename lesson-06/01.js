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

let slideIndex = 0

// const slider = document.querySelector('.list')
const prevButton = document.querySelector('#prev-button')
const nextButton = document.querySelector('#next-button')
const slides = document.querySelectorAll('#web-tech-image')
console.log(slides)

// WEB_TECH_IMAGES.forEach((image, index) => {
//     if (slides[index]) {
//         slides[index].src = image
//     }
// });

// for(let i = 0; i < WEB_TECH_IMAGES.length; i++)
//     slides[i].src = WEB_TECH_IMAGES[i]

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + WEB_TECH_IMAGES.length) % WEB_TECH_IMAGES.length
    updateSlider();
}

function showNextSlide() {
    slideIndex = (slideIndex + 1) % WEB_TECH_IMAGES.length
    updateSlider();
}

function updateSlider() {
    slides.forEach((slide, i) => {
        if (i === slideIndex) {
        slide.style.display = 'block'
        } else {
        slide.style.display = 'none'
        }
    });
}

prevButton.addEventListener('click', showPreviousSlide)
nextButton.addEventListener('click', showNextSlide)

updateSlider()