(function () {
    const CONFIG = {
        name: 'Станислав',
        mainMessage: 'Желаю, чтобы каждый день был наполнен радостью, вдохновением и приятными сюрпризами. Пусть сбываются самые смелые мечты, а рядом всегда будут близкие люди!!!',
        wishMessage: 'Отличной учёбы, чтобы здоровье не подводило, а энергия била ключом. Ярких эмоций, новых открытий и незабываемых моментов!!!'
    };

    const nameEl = document.getElementById('namePlaceholder');
    if (nameEl) nameEl.textContent = CONFIG.name;

    (function startTyping() {
        const el = document.getElementById('typedMessage');
        if (!el) return;

        const text = CONFIG.mainMessage || '';
        el.textContent = '';
        el.classList.remove('typing-done');

        let i = 0;
        const speed = 55;

        function step() {
            if (i < text.length) {
                el.textContent += text.charAt(i);
                i++;
                setTimeout(step, speed);
            } else {
                el.classList.add('typing-done');
            }
        }

        // Небольшая задержка, чтобы карточка успела появиться
        setTimeout(step, 1000);
    })();

    (function initPopup() {
        const wishButton = document.getElementById('wishButton');
        const wishPopup = document.getElementById('wishPopup');
        const popupOverlay = document.getElementById('popupOverlay');
        const closePopupBtn = document.getElementById('closePopup');
        const wishTextEl = document.getElementById('wishText');

        if (!wishButton || !wishPopup || !popupOverlay || !closePopupBtn || !wishTextEl) return;

        wishTextEl.textContent = CONFIG.wishMessage;

        function openPopup() {
            wishPopup.classList.add('show');
            popupOverlay.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
        function closePopup() {
            wishPopup.classList.remove('show');
            popupOverlay.classList.remove('show');
            document.body.style.overflow = '';
        }

        wishButton.addEventListener('click', openPopup);
        closePopupBtn.addEventListener('click', closePopup);
        popupOverlay.addEventListener('click', closePopup);
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closePopup();
        });
    })();

    (function initParticles() {
        const canvas = document.getElementById('particles');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width, height, particles = [];

        function initCanvas() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            const count = Math.min(80, Math.floor((width * height) / 12000));
            particles = [];
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    radius: Math.random() * 2.2 + 0.6,
                    speedX: (Math.random() - 0.5) * 0.35,
                    speedY: (Math.random() - 0.5) * 0.35,
                    alpha: Math.random() * 0.5 + 0.15,
                    color: Math.random() > 0.6 ? '#9b6bff' : (Math.random() > 0.5 ? '#4a9eff' : '#ff6b9d')
                });
            }
        }

        function draw() {
            ctx.clearRect(0, 0, width, height);

            const g = ctx.createRadialGradient(width * 0.3, height * 0.3, 0, width * 0.5, height * 0.5, width * 0.8);
            g.addColorStop(0, 'rgba(155, 107, 255, 0.03)');
            g.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, width, height);

            particles.forEach(function (p) {
                p.x += p.speedX;
                p.y += p.speedY;

                if (p.x < -10) p.x = width + 10;
                if (p.x > width + 10) p.x = -10;
                if (p.y < -10) p.y = height + 10;
                if (p.y > height + 10) p.y = -10;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = p.alpha * (0.7 + 0.3 * Math.sin(Date.now() * 0.001 + p.x));
                ctx.fill();
            });

            ctx.globalAlpha = 1;
            requestAnimationFrame(draw);
        }

        initCanvas();
        window.addEventListener('resize', initCanvas);
        draw();
    })();
})();