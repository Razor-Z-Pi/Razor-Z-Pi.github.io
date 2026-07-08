(function () {
    const button = document.getElementById('magicButton');
    const secretDiv = document.getElementById('secretMessage');

    if (button && secretDiv) {
        button.addEventListener('click', function (e) {
            secretDiv.classList.toggle('show');

            // Меняем текст кнопки для прикола и милоты
            if (secretDiv.classList.contains('show')) {
                button.innerHTML = '<span>🍭</span> Спрятать чудо <span>🍭</span>';
                createMiniHearts();
            } else {
                button.innerHTML = '<span>🎀</span> Нажми меня <span>🎀</span>';
            }
        });
    }

    // Функция для рисования летящих сердечек при открытии секрета (мультяшный эффект)
    function createMiniHearts() {
        const heartEmojis = ['💖', '💕', '💘', '✨', '💗', '🌸'];
        const body = document.body;

        for (let i = 0; i < 12; i++) {
            const heart = document.createElement('span');
            heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 90 + '%';
            heart.style.top = Math.random() * 80 + 20 + '%';
            heart.style.fontSize = (Math.random() * 25 + 20) + 'px';
            heart.style.zIndex = '999';
            heart.style.pointerEvents = 'none';
            heart.style.animation = 'heartFly 1.8s ease-out forwards';
            heart.style.opacity = '1';
            body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 1900);
        }
    }

    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
        @keyframes heartFly {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(0deg);
          }
          100% {
            opacity: 0;
            transform: translateY(-140px) scale(0.4) rotate(25deg);
          }
        }
      `;
    document.head.appendChild(styleSheet);

    let hoverTriggered = false;
    const card = document.querySelector('.card');
    if (card) {
        card.addEventListener('mouseenter', function () {
            if (!hoverTriggered) {
                hoverTriggered = true;
                const extraEmojis = ['🍬', '🍭', '🧁'];
                for (let j = 0; j < 8; j++) {
                    const span = document.createElement('span');
                    span.textContent = extraEmojis[Math.floor(Math.random() * extraEmojis.length)];
                    span.style.position = 'fixed';
                    span.style.left = Math.random() * 90 + '%';
                    span.style.top = Math.random() * 50 + 20 + '%';
                    span.style.fontSize = '2rem';
                    span.style.zIndex = '99';
                    span.style.pointerEvents = 'none';
                    span.style.animation = 'heartFly 1.5s ease-out forwards';
                    document.body.appendChild(span);
                    setTimeout(() => span.remove(), 1600);
                }
            }
        });
    }
})();