(function () {
    // Генерация плавающих сердечек на фоне
    const heartsContainer = document.getElementById('bg-hearts');
    const heartSymbols = ['❤️', '🧡', '💛', '💚', '💙', '💜', '🩷', '💖', '💗', '💓']; // html-код не стал писать, добавил символы сердечек
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    // создаём 25 случайных сердечек
    for (let i = 0; i < 25; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-float';
        // случайный символ
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        // случайный размер
        const size = 0.8 + Math.random() * 1.7;
        heart.style.fontSize = (size * 1.2) + 'rem';
        // случайная горизонтальная позиция
        const left = Math.random() * 100;
        heart.style.left = left + '%';
        // случайная задержка и длительность анимации
        const duration = 6 + Math.random() * 15;
        const delay = Math.random() * -20; // отрицательная, чтобы начали сразу в разных местах
        heart.style.animation = `float ${duration}s infinite linear`;
        heart.style.animationDelay = delay + 's';
        // немного меняем прозрачность
        heart.style.opacity = 0.2 + Math.random() * 0.3;
        heartsContainer.appendChild(heart);
    }

    // кнопка-сюрприз: дополнительные слова или признание
    const surpriseBtn = document.getElementById('surpriseBtn');
    const loveDiv = document.querySelector('.love-words');

    surpriseBtn.addEventListener('click', function () {
        // создаём плавающее сообщение или меняем текст 
        const extraMessage = document.createElement('div');
        extraMessage.textContent = '✨ Ты — лучшая, крутая, классная и добрая милашка ✨';
        extraMessage.style.position = 'fixed';
        extraMessage.style.top = '50%';
        extraMessage.style.left = '50%';
        extraMessage.style.transform = 'translate(-50%, -50%)';
        extraMessage.style.backgroundColor = '#ffd9e5';
        extraMessage.style.color = '#a1304b';
        extraMessage.style.padding = '20px 30px';
        extraMessage.style.borderRadius = '90px 16px 90px 16px';
        extraMessage.style.fontSize = 'clamp(1.2rem, 5vw, 2rem)';
        extraMessage.style.fontFamily = "'Dancing Script', cursive";
        extraMessage.style.boxShadow = '0 15px 35px #ff98af, 0 0 0 6px white';
        extraMessage.style.zIndex = '200';
        extraMessage.style.backdropFilter = 'blur(16px)';
        extraMessage.style.border = '2px solid white';
        extraMessage.style.fontWeight = 'bold';
        extraMessage.style.letterSpacing = '1px';
        extraMessage.style.animation = 'pop 0.5s ease';
        document.body.appendChild(extraMessage);

        // анимация появления
        extraMessage.addEventListener('animationend', function () {
            // через 2 секунды удаляем с затуханием
            setTimeout(() => {
                extraMessage.style.transition = 'opacity 0.8s ease';
                extraMessage.style.opacity = '0';
                setTimeout(() => {
                    if (extraMessage.parentNode) extraMessage.remove();
                }, 900);
            }, 1500);
        });

        const style = document.createElement('style');
        style.innerHTML = `
                    @keyframes pop {
                        0% { opacity: 0; transform: translate(-50%, -30%) scale(0.3); }
                        70% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
                        100% { transform: translate(-50%, -50%) scale(1); }
                    }
                `;
        document.head.appendChild(style);
    });
})();