(function () {
    // 1. Создаём летающие цветочки на фоне
    const flowerContainer = document.getElementById('flowerContainer');

    // Массив с символами цветов
    const flowerSymbols = ['🌸', '🌼', '🌷', '🌺', '🌸', '🌻', '🌹', '💐', '🌷', '🌸'];

    for (let i = 0; i < 35; i++) { // Создаём 35 цветочков
        const flower = document.createElement('div');
        flower.className = 'flower';

        // Выбираем случайный цветок из массива
        flower.innerHTML = flowerSymbols[Math.floor(Math.random() * flowerSymbols.length)];

        // Случайное положение по горизонтали
        flower.style.left = Math.random() * 100 + '%';

        // Случайный размер от 20px до 50px
        const size = Math.random() * 30 + 20;
        flower.style.fontSize = size + 'px';

        // Случайная продолжительность анимации (от 8 до 18 секунд)
        const duration = Math.random() * 10 + 8;
        flower.style.animationDuration = duration + 's';

        // Случайная задержка анимации
        flower.style.animationDelay = Math.random() * 5 + 's';

        // Случайная прозрачность
        flower.style.opacity = Math.random() * 0.4 + 0.3;

        flowerContainer.appendChild(flower);
    }

    // 2. Кнопка-сюрприз с красивым эффектом
    const btn = document.getElementById('surpriseBtnSisterInLaw');
    btn.addEventListener('click', function () {
        // Создаём цветочный фейерверк
        for (let i = 0; i < 25; i++) {
            const confetti = document.createElement('div');
            confetti.innerHTML = flowerSymbols[Math.floor(Math.random() * flowerSymbols.length)];
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '70%';
            confetti.style.fontSize = (Math.random() * 30 + 25) + 'px';
            confetti.style.zIndex = 10000;
            confetti.style.pointerEvents = 'none';
            confetti.style.transition = 'all 1.5s ease-out';
            confetti.style.opacity = '1';
            confetti.style.transform = 'scale(1)';
            confetti.style.filter = 'drop-shadow(0 0 10px #ffb6c1)';
            document.body.appendChild(confetti);

            setTimeout(() => {
                confetti.style.transform = `translate(${Math.random() * 400 - 200}px, -${Math.random() * 300 + 150}px) rotate(${Math.random() * 360}deg)`;
                confetti.style.opacity = '0';
            }, 20);

            setTimeout(() => confetti.remove(), 1700);
        }

        // Меняем текст на кнопке
        btn.innerHTML = '<span>✨</span> Вот чудеса! <span>✨</span>';
        setTimeout(() => {
            btn.innerHTML = '<span>🎁</span> Сюрприз для тебя <span>🎁</span>';
        }, 2000);

        // Приятное сообщение
        setTimeout(() => {
            alert('💐 Пусть этот день запомнится только улыбками! С 8 Марта! 💐');
        }, 150);
    });
})();