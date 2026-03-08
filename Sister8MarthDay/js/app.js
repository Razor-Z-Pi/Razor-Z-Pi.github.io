(function () {
    // 1. Создание блесток
    const glitterContainer = document.getElementById('glitterContainer');
    const symbols = ['✨', '💖', '🌸', '🌟', '💫', '🦋'];
    for (let i = 0; i < 30; i++) {
        const star = document.createElement('div');
        star.classList.add('glitter-star');
        star.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        star.style.left = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 5 + 's';
        star.style.fontSize = (Math.random() * 20 + 15) + 'px';
        star.style.opacity = Math.random() * 0.7 + 0.3;
        glitterContainer.appendChild(star);
    }

    // 2. Кнопка-сюрприз с анимацией и сообщением
    const btn = document.getElementById('magicSister');
    btn.addEventListener('click', () => {
        // Создаем фейерверк из сердечек
        for (let i = 0; i < 12; i++) {
            let heart = document.createElement('span');
            heart.innerHTML = '💜';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = '50%';
            heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
            heart.style.zIndex = 10000;
            heart.style.pointerEvents = 'none';
            heart.style.transition = 'all 1.5s ease-out';
            heart.style.opacity = '1';
            heart.style.transform = 'translateY(0)';
            document.body.appendChild(heart);

            // Анимация разлета
            setTimeout(() => {
                heart.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * -200 - 50}px) rotate(${Math.random() * 360}deg)`;
                heart.style.opacity = '0';
            }, 10);

            setTimeout(() => heart.remove(), 1600);
        }

        // Меняем текст на кнопке временно
        btn.innerHTML = '<span>🎉</span> С 8 марта! <span>🎉</span>';
        setTimeout(() => {
            btn.innerHTML = '<span>🔮</span> Волшебство для сестры <span>🔮</span>';
        }, 2000);

        // Мелодичное уведомление (без звука, только визуал)
        alert('💕 Ты самая чудесная сестра на свете! 💕');
    });

    // Дополнительно: при загрузке можно менять позиции эмодзи
})();