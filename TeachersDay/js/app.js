// Функция создания одного конфетти
function createConfetti() {
    const colors = ['#ff6b6b', '#48dbfb', '#1dd1a1', '#feca57', '#ff9ff3',
        '#54a0ff', '#5f27cd', '#00d2d3', '#ff9f43', '#ff6b9c'];

    const confetti = document.createElement('div');
    confetti.className = 'confetti';

    // Случайная позиция по всей ширине экрана
    confetti.style.left = Math.random() * 100 + 'vw';

    // Случайный цвет
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // Случайный размер
    const size = Math.random() * 8 + 6;
    confetti.style.width = size + 'px';
    confetti.style.height = size + 'px';

    // Случайная форма
    const shapes = ['50%', '0', '10% 30%', '30% 10%'];
    confetti.style.borderRadius = shapes[Math.floor(Math.random() * shapes.length)];

    // Случайная длительность анимации
    const duration = Math.random() * 4 + 3;
    confetti.style.animationDuration = duration + 's';

    // Случайная задержка
    confetti.style.animationDelay = Math.random() * 2 + 's';

    document.body.appendChild(confetti);

    // Удаляем конфетти после анимации
    setTimeout(() => {
        if (confetti.parentNode) {
            confetti.parentNode.removeChild(confetti);
        }
    }, (duration + 2) * 1000);
}

// Функция для массового создания конфетти
function createConfettiBurst() {
    const burstCount = 8 + Math.floor(Math.random() * 5); // Уменьшили количество для производительности

    for (let i = 0; i < burstCount; i++) {
        setTimeout(() => createConfetti(), i * 80);
    }
}

// Функция для непрерывного создания конфетти
function startContinuousConfetti() {
    // Создаем начальный взрыв конфетти
    createConfettiBurst();
    
    // Создаем регулярные взрывы каждые 500-1000ms
    setInterval(() => {
        createConfettiBurst();
    }, 500 + Math.random() * 500);

    // Дополнительные отдельные конфетти для заполнения
    setInterval(() => {
        createConfetti();
    }, 150);
}

// Запускаем конфетти при загрузке страницы
window.addEventListener('load', startContinuousConfetti);

// Добавляем интерактивность карточкам
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.03)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Адаптируем количество конфетти под размер экрана
function adjustConfettiDensity() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const area = width * height;

    // Базовое количество конфетти для экрана 1920x1080
    const baseArea = 1920 * 1080;
    const density = area / baseArea;

    console.log(`Плотность конфетти: ${density.toFixed(2)}`);
}

window.addEventListener('resize', adjustConfettiDensity);
window.addEventListener('load', adjustConfettiDensity);