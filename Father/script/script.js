// Функция для создания конфетти
function createConfetti() {
    const colors = ['#e74c3c', '#2a4b8d', '#f1c40f', '#2ecc71', '#9b59b6'];

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';

        // Случайная позиция
        confetti.style.left = Math.random() * 100 + 'vw';

        // Случайный цвет
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        // Случайный размер
        const size = Math.random() * 10 + 5;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';

        // Случайная форма
        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
        }

        // Случайная длительность
        const duration = Math.random() * 3 + 2;
        confetti.style.animationDuration = duration + 's';

        document.body.appendChild(confetti);

        // Удаление после анимации
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, (duration + 1) * 1000);
    }
}

// Создание звёзд на фоне
function createStars() {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'decoration';

    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }

    document.body.appendChild(starsContainer);
}

// Запуск анимации при загрузке
window.addEventListener('load', function () {
    createStars();
    setTimeout(createConfetti, 1000);

    // Анимация появления карточек с задержкой
    const cards = document.querySelectorAll('.photo-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = (index * 0.2) + 's';
    });
});

// Создание конфетти при клике
document.addEventListener('click', function () {
    createConfetti();
});

// Плавное появление элементов при скролле
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

// Наблюдаем за всеми карточками
document.querySelectorAll('.photo-card').forEach(card => {
    observer.observe(card);
});