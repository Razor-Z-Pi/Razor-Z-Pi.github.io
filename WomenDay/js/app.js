const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    // Скрываем все слайды
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    // Показываем текущий слайд
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Переход к следующему слайду
    showSlide(currentSlide);
}

// Автоматическое переключение слайдов
setInterval(nextSlide, 5000);

// Показываем первый слайд при загрузке страницы
showSlide(currentSlide);