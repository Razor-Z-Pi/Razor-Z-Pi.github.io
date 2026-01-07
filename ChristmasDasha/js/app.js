// Создание снежинок
function createSnowflakes() {
    const snowflakesContainer = document.getElementById('snowflakes');
    const snowflakeCount = 50;

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        // Случайный размер
        const size = Math.random() * 10 + 5;
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;

        snowflake.style.left = `${Math.random() * 100}vw`;

        // Случайная продолжительность анимации
        const duration = Math.random() * 5 + 5;
        snowflake.style.animationDuration = `${duration}s`;

        // Случайная задержка
        snowflake.style.animationDelay = `${Math.random() * 5}s`;

        snowflakesContainer.appendChild(snowflake);
    }
}

// Создаем снежинки при загрузке
window.addEventListener('load', createSnowflakes);

// Обработка кнопки сюрприза
document.getElementById('surpriseBtn').addEventListener('click', function () {
    // Создаем эффект конфетти
    createConfetti();

    // Показываем сообщение
    showSurpriseMessage();

    // Воспроизводим звук (если нужно)
    playBellSound();

    // Меняем текст кнопки
    this.innerHTML = 'С Рождеством, Даша!';
    this.style.background = 'linear-gradient(45deg, #6bcf7f, #4d96ff)';
    this.disabled = true;

    // Добавляем анимацию к финальному сообщению
    const finalHeart = document.querySelector('.final-heart');
    finalHeart.style.animation = 'heartbeat 0.8s infinite';
});

// Создание конфетти
function createConfetti() {
    const colors = ['#ff6b6b', '#ffd93d', '#6bcf7f', '#4d96ff', '#9d4edd'];
    const confettiCount = 100;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = '50%';
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = '-10px';
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';

        document.body.appendChild(confetti);

        // Анимация падения
        const animation = confetti.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1)'
        });

        // Удаляем элемент после анимации
        animation.onfinish = () => confetti.remove();
    }
}

// Показ surprise сообщения
function showSurpriseMessage() {
    const message = document.createElement('div');
    message.innerHTML = `
                <div style="
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: rgba(0, 0, 0, 0.9);
                    color: white;
                    padding: 30px;
                    border-radius: 20px;
                    text-align: center;
                    z-index: 10000;
                    border: 2px solid #ffd93d;
                    max-width: 80%;
                    animation: fadeIn 0.5s;
                ">
                    <h2 style="color: #ffd93d; margin-bottom: 15px;">🎄 С Рождеством! 🎄</h2>
                    <p style="font-size: 1.2rem;">Даша, пусть все твои желания сбудутся в этом году!</p>
                    <p style="margin-top: 15px; font-size: 3rem;">&#10024;&#128150;&#10024;</p>
                    <button onclick="this.parentElement.remove()" style="
                        margin-top: 20px;
                        padding: 10px 20px;
                        background: #ff6b6b;
                        color: white;
                        border: none;
                        border-radius: 10px;
                        cursor: pointer;
                    ">Закрыть</button>
                </div>
            `;

    document.body.appendChild(message);
}

// Звук колокольчика (симуляция)
function playBellSound() {
    createSoundWaves();
}

// Визуализация звуковых волн
function createSoundWaves() {
    const waveColors = ['#ffd93d', '#ff6b6b', '#4d96ff'];

    for (let i = 0; i < 3; i++) {
        const wave = document.createElement('div');
        wave.style.position = 'fixed';
        wave.style.top = '50%';
        wave.style.left = '50%';
        wave.style.transform = 'translate(-50%, -50%)';
        wave.style.width = '0px';
        wave.style.height = '0px';
        wave.style.border = `2px solid ${waveColors[i]}`;
        wave.style.borderRadius = '50%';
        wave.style.zIndex = '9998';
        wave.style.pointerEvents = 'none';

        document.body.appendChild(wave);

        const animation = wave.animate([
            { width: '0px', height: '0px', opacity: 1 },
            { width: '300px', height: '300px', opacity: 0 }
        ], {
            duration: 1500,
            delay: i * 300,
            easing: 'ease-out'
        });

        animation.onfinish = () => wave.remove();
    }
}

// Дополнительные анимации при скролле
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;

    // Параллакс эффект для снежинок
    document.querySelector('.snowflakes').style.transform = `translateY(${rate}px)`;
});