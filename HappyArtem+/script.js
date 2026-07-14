(function () {
    'use strict';

    const wishBtn = document.getElementById('wishBtn');
    const confettiBtn = document.getElementById('confettiBtn');
    const surpriseBlock = document.getElementById('surpriseMessage');
    const friendNameSpan = document.getElementById('friendNameDisplay');

    // Массив дополнительных поздравлений
    const wishes = [
        'Будь счастлив каждый миг)',
        'Оставайся таким же искренним и смелым)',
        'Пусть удача ходит за тобой по пятам)',
        'Ты достоин всего самого лучшего)',
        'Спасибо, что ты есть в моей жизни)',
        'Новых побед и вдохновения)',
        'Пусть каждый день будет как маленький праздник)',
        'Здоровья, сил и настоящей дружбы)'
    ];

    // Показать блок с пожеланием (анимация появления)
    function showSurprise(text) {
        surpriseBlock.textContent = text;
        surpriseBlock.classList.add('visible');

        // Автоматически скрыть через 8 секунд, чтобы не перегружать экран
        clearTimeout(window.surpriseTimer);
        window.surpriseTimer = setTimeout(() => {
            surpriseBlock.classList.remove('visible');
        }, 8000);
    }

    // Обработчик кнопки "Тёплые пожелания"
    wishBtn.addEventListener('click', () => {
        const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
        showSurprise(randomWish);

        // Добавляем легкую анимацию нажатия
        wishBtn.style.transform = 'scale(0.96)';
        setTimeout(() => { wishBtn.style.transform = ''; }, 150);
    });

    // Функция создания конфетти
    function spawnConfetti(amount = 70) {
        const colors = [
            '#FFD166', '#FFB347', '#FF8C42', '#F4A261', '#E9C46A',
            '#A7C7E7', '#B5EAD7', '#FFDAC1', '#C3B1E1', '#FBC0A6'
        ];

        for (let i = 0; i < amount; i++) {
            const particle = document.createElement('div');
            particle.className = 'confetti-particle';

            const size = Math.floor(Math.random() * 10) + 6; // 6-15px
            const leftPosition = Math.random() * 100; // % по ширине экрана
            const animationDuration = Math.random() * 2.5 + 2.2; // 2.2-4.7 сек
            const delay = Math.random() * 0.7;
            const color = colors[Math.floor(Math.random() * colors.length)];

            particle.style.width = `${size}px`;
            particle.style.height = `${size * 1.8}px`;
            particle.style.left = `${leftPosition}%`;
            particle.style.background = color;
            particle.style.animationDuration = `${animationDuration}s`;
            particle.style.animationDelay = `${delay}s`;
            particle.style.borderRadius = size > 10 ? '30%' : '40%';
            particle.style.opacity = '0.9';

            document.body.appendChild(particle);

            // Удаляем частицу после окончания анимации
            setTimeout(() => {
                if (particle && particle.parentNode) {
                    particle.remove();
                }
            }, (animationDuration + delay) * 1000 + 100);
        }
    }

    // Обработчик кнопки "Праздничный салют"
    confettiBtn.addEventListener('click', () => {
        // Запускаем конфетти несколько волн для эффектности
        spawnConfetti(55);
        setTimeout(() => spawnConfetti(35), 250);
        setTimeout(() => spawnConfetti(45), 500);

        // Также показываем особое сообщение
        showSurprise('Салют в твою честь, друг! Ты заслуживаешь фейерверков.');

        // Анимация кнопки
        confettiBtn.style.transform = 'scale(0.94)';
        setTimeout(() => { confettiBtn.style.transform = ''; }, 150);
    });

    // Дополнительно: при загрузке страницы можно мягко показать первое пожелание (через 2 сек)
    setTimeout(() => {
        if (!surpriseBlock.classList.contains('visible')) {
            showSurprise('Твой день — твоя легенда. С праздником!!!');
        }
    }, 2000);

    // Делаем имя друга кликабельным для небольшого секрета (меняется имя в блоке)
    friendNameSpan.addEventListener('click', () => {
        const names = ['Артём', 'Дружище', 'Брат', 'Легенда', 'Герой дня'];
        const current = friendNameSpan.textContent;
        let newName = names[Math.floor(Math.random() * names.length)];
        // Чтобы не повторялось сразу то же самое
        while (newName === current && names.length > 1) {
            newName = names[Math.floor(Math.random() * names.length)];
        }
        friendNameSpan.textContent = newName;
        friendNameSpan.style.transform = 'scale(1.1)';
        setTimeout(() => { friendNameSpan.style.transform = 'scale(1)'; }, 200);

        // Маленькое сообщение
        showSurprise(`Да, именно так! ${newName}, с твоим днём!!!`);
    });

    // Стилизуем курсор для имени
    friendNameSpan.style.cursor = 'pointer';
    friendNameSpan.style.transition = 'transform 0.2s ease';

})();