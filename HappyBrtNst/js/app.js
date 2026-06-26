(function () {
    const flowersContainer = document.getElementById('flowersContainer');
    const flowerEmojis = ['🌸', '🌷', '🌼', '💮', '🌺', '🪷', '🌻', '✨', '🍃'];

    for (let i = 0; i < 22; i++) {
        const flower = document.createElement('span');
        flower.className = 'flower';
        flower.textContent = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
        flower.style.left = Math.random() * 100 + '%';
        flower.style.top = Math.random() * 100 + '%';
        flower.style.fontSize = (Math.random() * 2.2 + 1.4) + 'rem';
        flower.style.animationDelay = Math.random() * 8 + 's';
        flower.style.animationDuration = (Math.random() * 14 + 12) + 's';
        flower.style.opacity = (Math.random() * 0.2 + 0.08);
        flowersContainer.appendChild(flower);
    }

    const surpriseBtn = document.getElementById('surpriseBtn');
    const secretMessage = document.getElementById('secretMessage');

    surpriseBtn.addEventListener('click', function () {
        if (secretMessage.classList.contains('visible')) {
            secretMessage.classList.remove('visible');
            surpriseBtn.innerHTML = 'Открыть сюрприз';
        } else {
            secretMessage.classList.add('visible');
            surpriseBtn.innerHTML = 'Сюрприз открыт';

            createMiniConfetti();
        }
    });

    function createMiniConfetti() {
        const card = document.querySelector('.card');
        if (!card) return;

        const emojis = ['🎉', '🎊', '💖', '✨', '🌸', '🎂', '💫'];
        for (let i = 0; i < 12; i++) {
            const confetti = document.createElement('span');
            confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            confetti.style.position = 'absolute';
            confetti.style.left = Math.random() * 90 + '%';
            confetti.style.top = Math.random() * 70 + '%';
            confetti.style.fontSize = (1.4 + Math.random() * 1.8) + 'rem';
            confetti.style.zIndex = '20';
            confetti.style.pointerEvents = 'none';
            confetti.style.animation = 'confettiFall 1.3s ease-out forwards';
            confetti.style.opacity = '0.9';
            card.appendChild(confetti);

            setTimeout(() => {
                if (confetti && confetti.parentNode) {
                    confetti.remove();
                }
            }, 1300);
        }
    }

    // Добавим стиль для анимации конфетти динамически
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
        @keyframes confettiFall {
          0% { transform: translateY(0) rotate(0deg) scale(1); opacity: 1; }
          100% { transform: translateY(70px) rotate(360deg) scale(0.5); opacity: 0; }
        }
      `;
    document.head.appendChild(styleSheet);

    const nastyaImg = document.getElementById('nastyaImg');
    if (nastyaImg) {
        nastyaImg.addEventListener('click', function () {
            this.style.borderColor = '#f7b2c0';
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.borderColor = '#fff5f7';
                this.style.transform = 'scale(1)';
            }, 300);
        });
    }
})();