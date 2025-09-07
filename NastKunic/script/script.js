// Функция для перехода между экранами
function showScreen(nextIndex) {
    // Найти все экраны
    const screens = document.querySelectorAll('.screen');
    // Скрыть текущий активный экран
    document.querySelector('.screen.active').classList.remove('active');
    // Показать следующий экран
    screens[nextIndex].classList.add('active');
}

// Добавляем немного интерактивности - случайное движение котиков при движении мыши
document.addEventListener('mousemove', function (e) {
    const cats = document.querySelectorAll('.cat-emoji');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    cats.forEach((cat, index) => {
        const moveX = (mouseX - 0.5) * 20;
        const moveY = (mouseY - 0.5) * 20;
        cat.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveX}deg)`;
    });
});