// Добавляем немного интерактивности
document.addEventListener('DOMContentLoaded', function () {
    // Анимация при клике на сердце
    const heart = document.querySelector('.heart');
    heart.addEventListener('click', function () {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'heartbeat 1.5s ease-in-out infinite';
        }, 10);
    });

    // Создаем падающие сердца
    function createFallingHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.style.position = 'fixed';
        heart.style.top = '-50px';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.fontSize = (20 + Math.random() * 20) + 'px';
        heart.style.opacity = '0.7';
        heart.style.zIndex = '-1';
        heart.style.animation = `fall ${3 + Math.random() * 5}s linear forwards`;

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 8000);
    }

    // Добавляем CSS для падающих сердец
    const style = document.createElement('style');
    style.textContent = `
                @keyframes fall {
                    to {
                        transform: translateY(100vh) rotate(360deg);
                        opacity: 0;
                    }
                }
            `;
    document.head.appendChild(style);

    // Создаем несколько падающих сердец
    setInterval(createFallingHeart, 1000);

    // Плавное появление элементов при прокрутке
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeIn 1.5s ease-out forwards`;
            }
        });
    });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});