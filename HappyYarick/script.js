(function() {
        const colors = [
            'rgba(232, 182, 120, 0.9)',
            'rgba(123, 167, 217, 0.9)',
            'rgba(200, 220, 245, 0.8)',
            'rgba(160, 200, 240, 0.7)'
        ];
        const count = 26;

        for (let i = 0; i < count; i++) {
            const p = document.createElement('div');
            p.className = 'particle';

            const size = Math.random() * 5 + 2;
            const left = Math.random() * 100;
            const bottom = Math.random() * 60 - 10;
            const duration = Math.random() * 12 + 10;
            const delay = Math.random() * 14;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const blur = Math.random() > 0.6 ? 1 : 0;

            p.style.width = size + 'px';
            p.style.height = size + 'px';
            p.style.left = left + 'vw';
            p.style.bottom = bottom + 'vh';
            p.style.background = color;
            p.style.boxShadow = `0 0 ${size * 2}px ${color}`;
            p.style.animationDuration = duration + 's';
            p.style.animationDelay = delay + 's';
            if (blur) p.style.filter = 'blur(1px)';

            document.body.appendChild(p);
        }
    })();

    (function() {
        const card = document.querySelector('.card');
        const leftCol = document.querySelector('.left-col');
        const particles = document.querySelectorAll('.particle');

        if (!card || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        let rafId = null;
        let targetX = 0, targetY = 0;
        let currentX = 0, currentY = 0;

        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
            targetX = x;
            targetY = y;

            if (!rafId) rafId = requestAnimationFrame(animate);
        });

        function animate() {
            currentX += (targetX - currentX) * 0.06;
            currentY += (targetY - currentY) * 0.06;

            // Карточка — лёгкий наклон
            card.style.transform = `translateY(${Math.sin(Date.now() / 1500) * 4}px) rotateX(${currentY * 3}deg) rotateY(${currentX * 4}deg)`;

            // Левая колонка — противоположное смещение
            if (leftCol) {
                leftCol.style.transform = `translate(${currentX * -8}px, ${currentY * -6}px)`;
            }

            // Частицы — едва заметный сдвиг
            particles.forEach((p, i) => {
                const depth = (i % 5) + 1;
                p.style.marginLeft = (currentX * depth * 3) + 'px';
                p.style.marginTop = (currentY * depth * 3) + 'px';
            });

            if (Math.abs(targetX - currentX) > 0.001 || Math.abs(targetY - currentY) > 0.001) {
                rafId = requestAnimationFrame(animate);
            } else {
                rafId = null;
            }
        }

        // Сброс при уходе мыши
        document.addEventListener('mouseleave', () => {
            targetX = 0;
            targetY = 0;
            if (!rafId) rafId = requestAnimationFrame(animate);
        });
    })();