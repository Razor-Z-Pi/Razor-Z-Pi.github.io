(function () {
    // Контейнер для сердец
    const container = document.getElementById('heartsContainer');
    const heartSymbol = '&#10084;'; //  ❤

    // Создаём 35 сердец с разными параметрами
    function createHearts() {
        const count = 35;
        for (let i = 0; i < count; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = heartSymbol;

            // Случайные размеры (от 1.2rem до 3.6rem)
            const size = 1.2 + Math.random() * 2.4;
            heart.style.fontSize = size + 'rem';

            // Случайное горизонтальное положение (0% .. 100%)
            heart.style.left = Math.random() * 100 + '%';

            // Случайная длительность анимации (от 15 до 30 секунд)
            const duration = 14 + Math.random() * 20;
            heart.style.animationDuration = duration + 's';

            // Задержка старта (0 … 25 секунд) — чтобы не все одновременно
            const delay = Math.random() * 20;
            heart.style.animationDelay = delay + 's';

            // Случайная прозрачность / цветовой оттенок (через opacity)
            const opacityBase = 0.2 + Math.random() * 0.4;
            heart.style.opacity = opacityBase;

            // Случайный цвет (в розово-малиновой гамме)
            const hue = 340 + Math.random() * 20; // 340–360
            const sat = 60 + Math.random() * 35;
            const lig = 55 + Math.random() * 30;
            heart.style.color = `hsl(${hue}, ${sat}%, ${lig}%)`;
            heart.style.textShadow = `0 0 18px hsla(${hue}, 80%, 60%, 0.5)`;

            container.appendChild(heart);
        }
    }

    createHearts();

    // Кнопка "Для тебя" — добавляет новые сердечки и эффект
    const surpriseBtn = document.getElementById('surpriseButton');
    surpriseBtn.addEventListener('click', function () {
        // Создаём 10 новых сердец с эффектом "всплеск"
        const newCount = 12;
        for (let i = 0; i < newCount; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = heartSymbol;

            const size = 1.6 + Math.random() * 2.8;
            heart.style.fontSize = size + 'rem';
            heart.style.left = (10 + Math.random() * 80) + '%';
            const duration = 10 + Math.random() * 12;
            heart.style.animationDuration = duration + 's';
            const delay = Math.random() * 3;
            heart.style.animationDelay = delay + 's';

            const hue = 330 + Math.random() * 30;
            const sat = 70 + Math.random() * 25;
            const lig = 60 + Math.random() * 25;
            heart.style.color = `hsl(${hue}, ${sat}%, ${lig}%)`;
            heart.style.textShadow = `0 0 28px hsla(${hue}, 90%, 70%, 0.7)`;
            heart.style.opacity = 0.6 + Math.random() * 0.4;

            container.appendChild(heart);

            // Автоудаление после окончания анимации (чтобы не засорять)
            setTimeout(() => {
                if (heart.parentNode) heart.remove();
            }, (duration + delay) * 1000 + 200);
        }

        // Дополнительно: лёгкая вибрация карточки (приятный эффект)
        const card = document.querySelector('.card');
        card.style.transition = 'transform 0.1s ease';
        card.style.transform = 'scale(1.02)';
        setTimeout(() => {
            card.style.transform = 'scale(1)';
        }, 150);

        // Изменяем текст кнопки на мгновение
        const originalText = surpriseBtn.innerHTML;
        surpriseBtn.innerHTML = '&#10084; Ты лучшая! &#10084;';
        surpriseBtn.style.background = 'linear-gradient(135deg, #ff9ab0, #ff5a82)';
        setTimeout(() => {
            surpriseBtn.innerHTML = originalText;
            surpriseBtn.style.background = 'linear-gradient(135deg, #ff7a9e, #ff4d7a)';
        }, 1200);
    });

    // Опционально: при клике на фон можно добавить сердечко
    document.body.addEventListener('click', function (e) {
        // Если клик по кнопке или карточке — не мешаем
        if (e.target.closest('.card') || e.target.closest('.surprise-btn')) return;

        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = heartSymbol;
        const size = 1.8 + Math.random() * 2.2;
        heart.style.fontSize = size + 'rem';
        heart.style.left = (e.clientX / window.innerWidth * 100) + '%';
        heart.style.top = '-20px';
        heart.style.animationDuration = (12 + Math.random() * 12) + 's';
        heart.style.opacity = 0.5 + Math.random() * 0.4;
        const hue = 330 + Math.random() * 30;
        heart.style.color = `hsl(${hue}, 80%, 65%)`;
        heart.style.textShadow = `0 0 30px hsla(${hue}, 90%, 70%, 0.6)`;
        container.appendChild(heart);

        setTimeout(() => {
            if (heart.parentNode) heart.remove();
        }, 25000);
    });
})();