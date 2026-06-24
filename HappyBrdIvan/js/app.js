(function () {
    const particlesContainer = document.getElementById('particles-container');
    function createParticles() {
        if (!particlesContainer) return;
        particlesContainer.innerHTML = '';
        const count = 22;
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            const size = Math.floor(Math.random() * 90 + 25);
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 10 + 's';
            particle.style.animationDuration = Math.random() * 15 + 12 + 's';
            particlesContainer.appendChild(particle);
        }
    }
    createParticles();

    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    let width, height;
    let confettiParticles = [];
    let animationFrameId = null;
    let isConfettiActive = false;

    const CONFETTI_COLORS = [
        '#FFD166', '#F7A85C', '#FF8C42', '#F4A261', '#E9C46A',
        '#FFB347', '#FF9F4B', '#F6AE2D', '#F29E4C', '#E59866',
        '#FFC8A2', '#FAD7A1', '#F9C74F', '#F9844A', '#F3722C'
    ];

    function resizeCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    window.addEventListener('resize', () => {
        resizeCanvas();
        createParticles();
    });

    // Генератор частиц конфетти
    function createConfettiParticle() {
        return {
            x: Math.random() * width,
            y: Math.random() * -height * 0.4 - 15, // старт выше экрана
            size: Math.random() * 9 + 4.5,
            speedY: Math.random() * 4.5 + 3.2,
            speedX: (Math.random() - 0.5) * 3.4,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 7,
            color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
            shape: Math.random() > 0.5 ? 'rect' : 'circle',
            opacity: 0.9 + Math.random() * 0.1,
        };
    }

    function spawnConfettiBurst(count = 85) {
        for (let i = 0; i < count; i++) {
            confettiParticles.push(createConfettiParticle());
        }
    }

    function updateConfetti() {
        for (let i = confettiParticles.length - 1; i >= 0; i--) {
            const p = confettiParticles[i];
            p.y += p.speedY;
            p.x += p.speedX;
            p.rotation += p.rotationSpeed;

            // Небольшая гравитация и затухание
            p.speedY += 0.04;
            p.opacity -= 0.002;

            if (p.y > height + 50 || p.opacity <= 0.02 || p.x < -60 || p.x > width + 60) {
                confettiParticles.splice(i, 1);
            }
        }
    }

    function drawConfetti() {
        ctx.clearRect(0, 0, width, height);
        for (let p of confettiParticles) {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.globalAlpha = p.opacity;
            ctx.fillStyle = p.color;
            ctx.shadowColor = 'rgba(0,0,0,0.2)';
            ctx.shadowBlur = 4;

            if (p.shape === 'rect') {
                ctx.fillRect(-p.size * 0.7, -p.size * 0.25, p.size * 1.4, p.size * 0.5);
            } else {
                ctx.beginPath();
                ctx.arc(0, 0, p.size * 0.5, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();
        }
    }

    function confettiLoop() {
        if (!isConfettiActive) return;
        updateConfetti();
        drawConfetti();

        if (confettiParticles.length === 0) {
            stopConfettiAnimation();
            return;
        }
        animationFrameId = requestAnimationFrame(confettiLoop);
    }

    function startConfetti() {
        if (isConfettiActive) {
            spawnConfettiBurst(70);
            return;
        }
        // очищаем старые частицы на всякий случай
        confettiParticles = [];
        resizeCanvas();
        isConfettiActive = true;
        spawnConfettiBurst(100);
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(confettiLoop);
    }

    function stopConfettiAnimation() {
        isConfettiActive = false;
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }
        // плавно очистим canvas
        ctx.clearRect(0, 0, width, height);
        confettiParticles = [];
    }

    // Обработчик кнопки
    const celebrateBtn = document.getElementById('celebrateButton');
    if (celebrateBtn) {
        celebrateBtn.addEventListener('click', (e) => {
            startConfetti();

            // Небольшая тактильная обратная связь (вибрация на мобильных, если поддерживается)
            if (window.navigator && window.navigator.vibrate) {
                window.navigator.vibrate(40);
            }

            const originalText = celebrateBtn.innerHTML;
            celebrateBtn.innerHTML = 'Ура! Ваня:)';
            celebrateBtn.disabled = true;
            setTimeout(() => {
                celebrateBtn.innerHTML = originalText;
                celebrateBtn.disabled = false;
            }, 900);
        });
    }

    resizeCanvas();

    window.addEventListener('load', () => {
        setTimeout(() => {
            startConfetti();
            setTimeout(() => {
                if (isConfettiActive && confettiParticles.length < 25) {
                    stopConfettiAnimation();
                } else if (isConfettiActive) {
                    setTimeout(() => {
                        if (isConfettiActive && confettiParticles.length > 0) {
                            const checkEmpty = setInterval(() => {
                                if (confettiParticles.length === 0 && isConfettiActive) {
                                    stopConfettiAnimation();
                                    clearInterval(checkEmpty);
                                } else if (!isConfettiActive) {
                                    clearInterval(checkEmpty);
                                }
                            }, 400);
                        }
                    }, 4500);
                }
            }, 2800);
        }, 650);
    });

    // Очистка при уходе со страницы
    window.addEventListener('beforeunload', () => {
        stopConfettiAnimation();
    });

})();