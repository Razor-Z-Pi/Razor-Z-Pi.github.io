// Создание лягушек на фоне
function createFrogs() {
    const frogContainer = document.getElementById('frog-container');
    const frogsCount = window.innerWidth < 768 ? 15 : 25;

    for (let i = 0; i < frogsCount; i++) {
        const frog = document.createElement('div');
        frog.className = 'frog';

        // Случайная позиция
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const size = 30 + Math.random() * 40;

        frog.style.left = `${left}%`;
        frog.style.top = `${top}%`;
        frog.style.width = `${size}px`;
        frog.style.height = `${size * 0.7}px`;

        // Случайная задержка анимации
        frog.style.animationDelay = `${Math.random() * 15}s`;

        // Создание левого глаза
        const leftEye = document.createElement('div');
        leftEye.className = 'eye left';
        frog.appendChild(leftEye);

        // Создание правого глаза
        const rightEye = document.createElement('div');
        rightEye.className = 'eye right';
        frog.appendChild(rightEye);

        frogContainer.appendChild(frog);
    }
}

// Обработчик кнопки сюрприза
document.getElementById('surprise-btn').addEventListener('click', function () {
    const button = this;
    const originalText = button.textContent;

    // Изменение текста кнопки
    button.textContent = 'Лягушки поздравляют!';
    button.disabled = true;

    // Создание прыгающих лягушек
    createJumpingFrogs();

    // Воспроизведение звука
    playFrogSound();

    // Восстановление кнопки через 3 секунды
    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
    }, 3000);
});

// Создание прыгающих лягушек для сюрприза
function createJumpingFrogs() {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const frog = document.createElement('div');
            frog.className = 'frog jumping-frog';

            // Случайная стартовая позиция снизу
            const startLeft = Math.random() * 100;
            frog.style.left = `${startLeft}%`;
            frog.style.bottom = '0';
            frog.style.position = 'fixed';
            frog.style.zIndex = '1000';

            // Размер
            const size = 30 + Math.random() * 40;
            frog.style.width = `${size}px`;
            frog.style.height = `${size * 0.7}px`;

            const leftEye = document.createElement('div');
            leftEye.className = 'eye left';
            frog.appendChild(leftEye);

            const rightEye = document.createElement('div');
            rightEye.className = 'eye right';
            frog.appendChild(rightEye);

            document.body.appendChild(frog);

            // Анимация прыжка
            const jumpHeight = 30 + Math.random() * 50;
            const jumpDistance = 100 + Math.random() * 200;
            const jumpDuration = 800 + Math.random() * 1000;

            frog.animate([
                { transform: 'translate(0, 0)', opacity: 1 },
                { transform: `translate(-${jumpDistance}px, -${jumpHeight}vh)`, opacity: 0.8 },
                { transform: `translate(-${jumpDistance * 2}px, 0)`, opacity: 0 }
            ], {
                duration: jumpDuration,
                easing: 'cubic-bezier(0.215, 0.610, 0.355, 1)'
            });

            // Удаление лягушки после прыжка
            setTimeout(() => {
                frog.remove();
            }, jumpDuration);
        }, i * 200);
    }
}

// Воспроизведение звука лягушки (если браузер разрешает)
function playFrogSound() {
    try {
        // Создаем контекст аудио
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();

        // Создаем осциллятор для звука лягушки
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        // Настраиваем звук как кваканье
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.2);

        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
    } catch (e) {
        console.log("Аудио не поддерживается или заблокировано браузером");
    }
}

// Анимация элементов при загрузке
document.addEventListener('DOMContentLoaded', function () {
    // Создание фоновых лягушек
    createFrogs();

    // Анимация появления элементов
    const elements = document.querySelectorAll('.header, .photo-container, .congrats, .wishes, .button');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';

        setTimeout(() => {
            el.style.transition = 'opacity 0.8s, transform 0.8s';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100 * index);
    });

    // Добавление эффекта мигания заголовка
    const title = document.querySelector('.title');
    setInterval(() => {
        title.style.textShadow = `0 0 ${10 + Math.random() * 20}px rgba(198, 40, 40, ${0.5 + Math.random() * 0.5})`;
    }, 1000);
});

// Адаптация количества лягушек при изменении размера окна
window.addEventListener('resize', function () {
    const frogContainer = document.getElementById('frog-container');
    frogContainer.innerHTML = '';
    createFrogs();
});