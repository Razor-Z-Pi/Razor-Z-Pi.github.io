document.addEventListener('DOMContentLoaded', function () {
    const surpriseBtn = document.getElementById('surpriseButton');

    // Добавляем обработчик события
    surpriseBtn.addEventListener('click', function () {
        // Создаем конфетти
        for (let i = 0; i < 30; i++) {
            createConfetti();
        }

        // Меняем текст кнопки на мгновение
        surpriseBtn.textContent = 'Ура! 🎉';
        setTimeout(() => {
            surpriseBtn.textContent = 'Ещё сюрприз? 🎁';
        }, 1000);

        alert('🌹 С днём рождения, Анечка! Пусть всё будет именно так, как ты захочешь! 🌹');
    });

    // Функция для создания конфетти
    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        // Случайные цвета
        const colors = ['#ffb6c1', '#ffdab9', '#e6e6fa', '#fffacd', '#ffa07a', '#dda0dd'];
        const color = colors[Math.floor(Math.random() * colors.length)];

        // Случайные размеры и позиция
        const size = Math.random() * 15 + 5;
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 3 + 2;

        confetti.style.cssText = `
                    position: fixed;
                    top: -20px;
                    left: ${left}vw;
                    width: ${size}px;
                    height: ${size}px;
                    background-color: ${color};
                    border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
                    transform: rotate(${Math.random() * 360}deg);
                    pointer-events: none;
                    z-index: 9999;
                    animation: confettiFall ${animationDuration}s linear forwards;
                `;

        document.body.appendChild(confetti);

        // Удаляем конфетти после анимации
        setTimeout(() => {
            confetti.remove();
        }, animationDuration * 1000);
    }
});

const styleSheet = document.createElement("style");
styleSheet.textContent = `
            @keyframes confettiFall {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translateY(100vh) rotate(720deg);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(styleSheet);