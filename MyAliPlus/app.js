(function () {
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    const PARTICLE_COUNT = 80;
    const MAX_SIZE = 4;
    const MIN_SIZE = 1;

    // Настройка размера канваса
    function resizeCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        initParticles();
    }

    // Класс частицы
    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5 + 0.3;
            // Оттенки розового/фиолетового
            const hue = Math.random() * 60 + 300; // 300-360 (фиолетово-розовый)
            const lightness = Math.random() * 30 + 60;
            this.color = `hsla(${hue}, 80%, ${lightness}%, ${this.opacity})`;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Плавное возвращение при выходе за границы
            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.shadowColor = '#ffb6c1';
            ctx.shadowBlur = 10;
            ctx.fill();
            ctx.shadowBlur = 0; // сброс для других фигур
        }
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push(new Particle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        // Соединяем близкие частицы линиями (для красоты)
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(255, 182, 193, ${0.1 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.6;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animateParticles);
    }

    // Инициализация
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animateParticles();

    const wishes = [
        "Ты — моё вдохновение и счастье ✨",
        "С тобой каждый день — праздник 🌸",
        "Твоя улыбка освещает мой мир 💫",
        "Ты самая красивая на свете 🌹",
        "Я люблю тебя больше всех на свете ❤️",
        "Ты делаешь меня лучше 💖",
        "Моё сердце принадлежит только тебе 💘",
        "Ты — моя мечта, ставшая реальностью 🌟",
        "Спасибо, что ты есть, родная 🌺",
        "Ты — моё солнце, моя луна и все звёзды ✨",
        "Каждая секунда с тобой — бесценна ⏳",
        "Ты — причина моей счастливой улыбки 😊",
        "Мне так повезло с тобой 🍀",
        "Ты — моя вселенная и мой дом 🏡",
        "Люблю тебя до бесконечности и ещё чуть-чуть ∞"
    ];

    const wishDisplay = document.getElementById('wishDisplay');
    const newWishBtn = document.getElementById('newWishBtn');

    // Функция показа случайного пожелания с анимацией
    function showRandomWish() {
        // Плавное затухание
        wishDisplay.style.opacity = '0';
        wishDisplay.style.transform = 'scale(0.95)';
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * wishes.length);
            wishDisplay.textContent = wishes[randomIndex];
            // Добавляем иконку-сердечко в конце
            if (!wishDisplay.textContent.includes('❤️') && !wishDisplay.textContent.includes('💖') && Math.random() > 0.5) {
                // иногда добавляем дополнительное сердечко
            }
            wishDisplay.style.opacity = '1';
            wishDisplay.style.transform = 'scale(1)';
        }, 200);
    }

    wishDisplay.textContent = wishes[0];

    // Добавляем transition для плавности
    wishDisplay.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

    newWishBtn.addEventListener('click', showRandomWish);

    const modalOverlay = document.getElementById('modalOverlay');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const loveBtn = document.getElementById('loveBtn');
    const heartButton = document.getElementById('heartButton');
    const modalMessage = document.getElementById('modalMessage');

    const messages = [
        "Ты — самое дорогое, что у меня есть. Каждый день с тобой — это подарок. Спасибо, что ты рядом. Ты делаешь мою жизнь ярче и счастливее. Ты моя вселенная. 💖",
        "Я люблю тебя больше, чем можно выразить словами. Ты — моё сердце, моя душа, моё всё. С тобой я чувствую себя самым счастливым человеком. ❤️",
        "Твоя нежность и красота сводят меня с ума. Я хочу, чтобы ты знала: ты — самая лучшая, и я благодарю судьбу за каждый момент с тобой. 💕",
        "Моё сердце бьётся только для тебя. Ты — моя радость, моё вдохновение и моя любовь. Никогда не забывай об этом. ✨"
    ];

    function openModal() {
        // Выбираем случайное сообщение для разнообразия
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        modalMessage.textContent = randomMsg;
        modalOverlay.classList.add('active');
        // Блокируем скролл body
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    loveBtn.addEventListener('click', openModal);
    heartButton.addEventListener('click', openModal);

    closeModalBtn.addEventListener('click', closeModal);

    // Закрытие по клику на оверлей
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Закрытие по ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });

    heartButton.addEventListener('click', () => {
        if (navigator.vibrate) {
            navigator.vibrate(30);
        }
    });

    newWishBtn.addEventListener('click', () => {
        if (navigator.vibrate) {
            navigator.vibrate(20);
        }
    });
})();