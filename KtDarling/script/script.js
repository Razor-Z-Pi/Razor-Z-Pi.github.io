// Создание плавающих сердечек
function createFloatingHearts() {
    const heartsContainer = document.getElementById('floatingHearts');
    const heartCount = 15;
    const hearts = ['❤️', '💖', '💕', '💗', '💝', '💓', '💞'];

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

        // Случайная позиция
        heart.style.left = Math.random() * 100 + 'vw';

        // Случайный размер
        const size = Math.random() * 1.5 + 1;
        heart.style.fontSize = (size * 1.5) + 'rem';

        // Случайная длительность
        const duration = Math.random() * 5 + 8;
        heart.style.animationDuration = duration + 's';

        // Случайная задержка
        heart.style.animationDelay = Math.random() * 5 + 's';

        heartsContainer.appendChild(heart);
    }
}

// Создание частиц
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Случайная позиция
        particle.style.left = Math.random() * 100 + 'vw';

        // Случайный размер
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        // Случайная длительность
        const duration = Math.random() * 10 + 10;
        particle.style.animationDuration = duration + 's';

        // Случайная задержка
        particle.style.animationDelay = Math.random() * 5 + 's';

        particlesContainer.appendChild(particle);
    }
}

// Секретное сообщение
document.getElementById('secretBtn').addEventListener('click', function () {
    const secretMessage = document.getElementById('secretMessage');
    if (secretMessage.style.display === 'block') {
        secretMessage.style.display = 'none';
        this.innerHTML = '❤️ Секретное послание';
    } else {
        secretMessage.style.display = 'block';
        this.innerHTML = '❤️ Скрыть послание';
        createHeartsBurst();
    }
});

// Создание взрыва сердечек при клике
function createHeartsBurst() {
    const hearts = ['❤️', '💖', '💕', '💗', '💝'];
    const container = document.querySelector('.interactive-section');

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'absolute';
        heart.style.fontSize = '2rem';
        heart.style.left = '50%';
        heart.style.top = '50%';
        heart.style.transform = 'translate(-50%, -50%)';
        heart.style.zIndex = '100';
        heart.style.pointerEvents = 'none';
        heart.style.animation = `heartBurst 1s ease-out forwards`;
        heart.style.animationDelay = (i * 0.1) + 's';

        document.body.appendChild(heart);

        // Удаление после анимации
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 1000);
    }
}

// Добавление стилей для анимации взрыва
const style = document.createElement('style');
style.textContent = `
            @keyframes heartBurst {
                0% {
                    transform: translate(-50%, -50%) scale(0);
                    opacity: 1;
                }
                50% {
                    opacity: 1;
                }
                100% {
                    transform: 
                        translate(
                            calc(-50% + ${Math.random() * 200 - 100}px),
                            calc(-50% + ${Math.random() * 200 - 100}px)
                        ) 
                        scale(1);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(style);

// Интерактивность при клике на сердца
document.querySelectorAll('.heart').forEach(heart => {
    heart.addEventListener('click', function () {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'heartbeat 2s ease-in-out infinite';
        }, 10);
    });
});

// Интерактивность при клике на цветы
document.querySelectorAll('.flower').forEach(flower => {
    flower.addEventListener('click', function () {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'float 4s ease-in-out infinite';
        }, 10);

        // Создание лепестков
        createFallingPetals();
    });
});

// Создание падающих лепестков
function createFallingPetals() {
    const petalsContainer = document.createElement('div');
    petalsContainer.style.position = 'fixed';
    petalsContainer.style.top = '0';
    petalsContainer.style.left = '0';
    petalsContainer.style.width = '100%';
    petalsContainer.style.height = '100%';
    petalsContainer.style.pointerEvents = 'none';
    petalsContainer.style.zIndex = '5';

    for (let i = 0; i < 15; i++) {
        const petal = document.createElement('div');
        petal.style.position = 'absolute';
        petal.style.width = '20px';
        petal.style.height = '20px';
        petal.style.background = ['#ff9ff3', '#feca57', '#ff6b6b'][Math.floor(Math.random() * 3)];
        petal.style.borderRadius = '50%';
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.top = '-30px';
        petal.style.animation = `petalFall ${Math.random() * 3 + 2}s linear forwards`;

        petalsContainer.appendChild(petal);

        setTimeout(() => {
            if (petal.parentNode) {
                petal.parentNode.removeChild(petal);
            }
        }, 5000);
    }

    document.body.appendChild(petalsContainer);

    setTimeout(() => {
        if (petalsContainer.parentNode) {
            petalsContainer.parentNode.removeChild(petalsContainer);
        }
    }, 5000);
}

// Добавление стилей для падающих лепестков
const petalStyle = document.createElement('style');
petalStyle.textContent = `
            @keyframes petalFall {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translateY(100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(petalStyle);

// Запуск анимаций при загрузке
window.addEventListener('load', function () {
    createFloatingHearts();
    createParticles();
});