// Элементы
const music = document.getElementById('backgroundMusic');
const musicBtn = document.getElementById('musicBtn');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// Управление музыкой
let isPlaying = false;

musicBtn.addEventListener('click', function () {
    if (isPlaying) {
        music.pause();
        musicBtn.innerHTML = '🔇 Музыка';
        isPlaying = false;
    } else {
        music.play().catch(e => {
            console.log('Автовоспроизведение заблокировано. Нажмите на кнопку еще раз.');
            musicBtn.innerHTML = '▶️ Включить';
        });
        musicBtn.innerHTML = '🔊 Музыка';
        isPlaying = true;
    }
});

// Обработчики кнопок
yesBtn.addEventListener('click', function () {
    alert('Отлично! Так держать! 🥳');
    createConfetti();
});

noBtn.addEventListener('click', function () {
    alert('Срочно иди кушать! 🍽️\nТвое здоровье важно! ❤️');
});

// Функция создания конфетти
function createConfetti() {
    const colors = ['#ff00ff', '#00ffff', '#ffff00', '#ff0000', '#00ff00'];

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '15px';
        confetti.style.height = '15px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-20px';
        confetti.style.zIndex = '20';
        confetti.style.animation = `confettiFall ${Math.random() * 3 + 2}s linear forwards`;

        document.body.appendChild(confetti);

        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 5000);
    }
}

// Добавляем стили для конфетти
const style = document.createElement('style');
style.textContent = `
            @keyframes confettiFall {
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
document.head.appendChild(style);

// Автозапуск музыки при взаимодействии
document.body.addEventListener('click', function () {
    if (!isPlaying) {
        music.play().then(() => {
            isPlaying = true;
            musicBtn.innerHTML = '🔊 Музыка';
        }).catch(e => {
            console.log('Автовоспроизведение заблокировано');
        });
    }
}, { once: true });