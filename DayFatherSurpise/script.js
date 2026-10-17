(function () {
    const starsContainer = document.getElementById('stars');
    const starsCount = 140;

    for (let i = 0; i < starsCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        const size = Math.random() * 3 + 1.5; // 1.5 - 4.5px
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 5 + 's';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        star.style.opacity = Math.random() * 0.7 + 0.3;
        starsContainer.appendChild(star);
    }

    const loveBtn = document.getElementById('loveBtn');
    const heartsContainer = document.getElementById('heartsContainer');

    // эмодзи для разлетающихся сердечек
    const heartEmojis = ['❤️', '💖', '💘', '💝', '💕', '💗', '💓', '🧡', '💛', '💚', '💙', '💜', '🤍', '🤎', '❤️‍🔥', '❤️‍🩹'];

    function createHearts(count = 14) {
        for (let i = 0; i < count; i++) {
            const heart = document.createElement('div');
            heart.classList.add('floating-heart');
            // случайный эмодзи
            heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

            // случайная позиция по X (в пределах окна, но ближе к центру для красоты)
            const left = Math.random() * 100; // %
            heart.style.left = left + '%';

            // случайный размер
            const size = Math.random() * 1.5 + 1.2; // 1.2 - 2.7 rem
            heart.style.fontSize = size + 'rem';

            // случайная задержка и длительность анимации
            const duration = Math.random() * 2 + 3; // 3 - 5 сек
            heart.style.animationDuration = duration + 's';


            // добавляем в контейнер
            heartsContainer.appendChild(heart);

            // удаляем элемент после завершения анимации
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.remove();
                }
            }, duration * 1000 + 200);
        }
    }

    // клик по кнопке
    loveBtn.addEventListener('click', function (e) {
        e.preventDefault();
        createHearts(18); // больше сердечек при клике

        // вибрация для мобильных (если поддерживается)
        if (navigator.vibrate) {
            navigator.vibrate(30);
        }

        loveBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            loveBtn.style.transform = '';
        }, 120);
    });

    const timerElement = document.getElementById('timer');
    const hoursSpan = timerElement.querySelector('span:nth-child(1)');
    const minutesSpan = timerElement.querySelector('span:nth-child(2)');
    const secondsSpan = timerElement.querySelector('span:nth-child(3)');

    // function updateTimer() {
    //     const now = new Date();
    //     const endOfDay = new Date(now);
    //     endOfDay.setHours(23, 59, 59, 999);

    //     let diff = endOfDay - now;

    //     if (diff < 0) {
    //         // если уже прошло (на всякий случай)
    //         hoursSpan.innerHTML = `00<small>ч</small>`;
    //         minutesSpan.innerHTML = `00<small>м</small>`;
    //         secondsSpan.innerHTML = `00<small>с</small>`;
    //         return;
    //     }

    //     const hours = Math.floor(diff / (1000 * 60 * 60));
    //     const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    //     const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    //     // форматируем с ведущим нулём
    //     const format = (num) => String(num).padStart(2, '0');

    //     hoursSpan.innerHTML = `${format(hours)}<small>ч</small>`;
    //     minutesSpan.innerHTML = `${format(minutes)}<small>м</small>`;
    //     secondsSpan.innerHTML = `${format(seconds)}<small>с</small>`;
    // }

    updateTimer();
    setInterval(updateTimer, 1000);

    const card = document.querySelector('.card');
    card.addEventListener('click', function (e) {
        // не мешаем кнопке и ссылкам
        if (e.target.closest('.btn-heart')) return;

        if (navigator.vibrate) navigator.vibrate(15);
        createHearts(5);
    });

    window.addEventListener('load', () => {
        // дополнительная анимация появления, если нужно
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.8s';
            document.body.style.opacity = '1';
        }, 50);
    });
})();