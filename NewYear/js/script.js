const background = document.querySelector('.background');
const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
];
let currentImageIndex = 0;

function changeBackground() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    background.style.backgroundImage = `url('${images[currentImageIndex]}')`;
}

setInterval(changeBackground, 3000); // Меняем фон каждые 3 секунды