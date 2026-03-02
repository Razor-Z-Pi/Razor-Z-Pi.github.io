// Создание анимированных сердечек в фоне
function createHearts() {
    const container = document.getElementById('heart-container');
    const heartSymbols = ['❤️', '💖', '💗', '💓', '💕', '💞', '💝', '💘'];

    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart-particle';
        heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (Math.random() * 30 + 15) + 'px';
        heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        container.appendChild(heart);

        // Удаляем сердечко после анимации
        setTimeout(() => {
            heart.remove();
        }, 8000);
    }, 300);
}

// Функция для показа сюрприза
function showSurprise() {
    const modal = document.getElementById('surpriseModal');
    modal.style.display = 'flex';

    // Создаем дополнительные сердечки при открытии
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart-particle';
            heart.innerHTML = '💖';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.fontSize = (Math.random() * 40 + 20) + 'px';
            heart.style.animationDuration = '3s';
            heart.style.opacity = '1';
            heart.style.color = '#ff69b4';
            document.getElementById('heart-container').appendChild(heart);

            setTimeout(() => heart.remove(), 3000);
        }, i * 100);
    }
}

// Функция для закрытия модального окна
function closeModal(event) {
    const modal = document.getElementById('surpriseModal');
    if (event && event.target === modal || !event) {
        modal.style.display = 'none';
    }
}

// Закрытие по ESC
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Добавляем случайные сердечки на страницу
function addRandomHearts() {
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = ['❤️', '💖', '💗', '💓', '💕'][Math.floor(Math.random() * 5)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.fontSize = (Math.random() * 30 + 15) + 'px';
        document.body.appendChild(heart);
    }
}

// Анимация появления карточек при скролле
function checkVisibility() {
    const cards = document.querySelectorAll('.support-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible) {
            card.style.animationPlayState = 'running';
        }
    });
}

// Запускаем все функции при загрузке
window.addEventListener('load', () => {
    createHearts();
    addRandomHearts();
    checkVisibility();
});

// Проверяем видимость при скролле
window.addEventListener('scroll', checkVisibility);

// Дополнительная анимация для заголовка
const heroTitle = document.querySelector('.hero h1');
const messages = [
    'Моя любимая 💖',
    'Ты лучше всех ✨',
    'Я горжусь тобой 🌟',
    'Ты всё сможешь 💪',
    'Ты прекрасна 🌺'
];
let messageIndex = 0;

setInterval(() => {
    messageIndex = (messageIndex + 1) % messages.length;
    heroTitle.style.opacity = '0';
    setTimeout(() => {
        heroTitle.textContent = messages[messageIndex];
        heroTitle.style.opacity = '1';
    }, 500);
}, 4000);

// Интерактивность для карточек
const cards = document.querySelectorAll('.support-card');
cards.forEach(card => {
    card.addEventListener('click', function () {
        this.style.transform = 'scale(1.05)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
});