function createStars() {
    const container = document.getElementById('starsContainer');
    const starCount = window.innerWidth < 700 ? 70 : 130;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        const size = Math.random() * 4 + 2;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        const duration = Math.random() * 3 + 2;
        star.style.animationDuration = duration + 's';
        star.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(star);
    }
}
createStars();

const canvas = document.getElementById('confetti-canvas');
let ctx = canvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;
let particles = [];
let animationId = null;
let activeConfetti = false;

function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}
window.addEventListener('resize', () => {
    resizeCanvas();
    if (activeConfetti) {
        // перерисовка с новым размером
        drawConfetti();
    }
});

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function createConfetti(count) {
    const colors = ['#FFB347', '#FF5E7C', '#6BCB77', '#FFD966', '#D96CFF', '#4D9DE0', '#FF8C42'];
    const newParticles = [];
    for (let i = 0; i < count; i++) {
        newParticles.push({
            x: random(0, width),
            y: random(-height * 0.2, -10),
            size: random(5, 12),
            color: colors[Math.floor(Math.random() * colors.length)],
            speedX: random(-3, 3),
            speedY: random(2, 7),
            rotation: random(0, 360),
            spin: random(-0.1, 0.1),
            opacity: random(0.7, 1)
        });
    }
    return newParticles;
}

function drawConfetti() {
    if (!activeConfetti) return;
    ctx.clearRect(0, 0, width, height);
    let allDead = true;
    for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (p.y > height + 100 || p.x < -100 || p.x > width + 100) {
            continue;
        }
        allDead = false;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation * Math.PI / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size / 1.5);
        ctx.restore();

        // обновление
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.spin;
        p.speedY += 0.1; // гравитация
    }
    // удалить частицы за границей
    particles = particles.filter(p => p.y < height + 150 && p.x > -150 && p.x < width + 150);

    if (particles.length === 0 && activeConfetti) {
        // заканчиваем анимацию
        activeConfetti = false;
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
        ctx.clearRect(0, 0, width, height);
        return;
    }
    if (activeConfetti) {
        animationId = requestAnimationFrame(drawConfetti);
    }
}

function startConfetti(durationSec = 2.2) {
    if (activeConfetti) {
        // если уже активен, добавляем новые частицы
        const extra = createConfetti(75);
        particles.push(...extra);
        return;
    }
    activeConfetti = true;
    const initialCount = Math.min(220, Math.floor(width / 5));
    particles = createConfetti(initialCount);
    resizeCanvas();
    if (animationId) cancelAnimationFrame(animationId);
    animationId = requestAnimationFrame(drawConfetti);

    // остановить конфетти через durationSec
    setTimeout(() => {
        if (activeConfetti) {
            setTimeout(() => {
                if (activeConfetti && particles.length < 15) {
                    activeConfetti = false;
                    if (animationId) cancelAnimationFrame(animationId);
                    ctx.clearRect(0, 0, width, height);
                    animationId = null;
                } else if (activeConfetti) {
                    // Если много частиц, ждем еще
                    setTimeout(() => {
                        if (activeConfetti) {
                            activeConfetti = false;
                            if (animationId) cancelAnimationFrame(animationId);
                            ctx.clearRect(0, 0, width, height);
                            animationId = null;
                        }
                    }, 1500);
                }
            }, durationSec * 1000);
        }
    }, durationSec * 1000);
}

const surpriseBtn = document.getElementById('surpriseBtn');
const panel = document.getElementById('surprisePanel');
const dynamicMsg = document.getElementById('dynamicMessage');

const surpriseMessages = [
    "🔥 Рома, ты — настоящая легенда! Пусть фортуна всегда идёт с тобой рядом) 🔥",
    "🎈 Желаю океан драйва, горы классных моментов и море улыбок! Ты лучший) 🎈",
    "🌟 Пусть каждый день будет как праздник! Ценю тебя, брат) 🌟",
    "⚡ Оставайся таким же ярким и неповторимым! С днём варенья, бро) ⚡",
    "🎁 Твой год будет полон побед и невероятных открытий! Верю в тебя) 🎁"
];

let msgIndex = 0;
function rotateSurpriseMessage() {
    const newMsg = surpriseMessages[msgIndex % surpriseMessages.length];
    dynamicMsg.innerText = newMsg;
    msgIndex++;
    // маленькая анимация смены текста
    dynamicMsg.style.transform = 'scale(1.05)';
    setTimeout(() => { if (dynamicMsg) dynamicMsg.style.transform = 'scale(1)'; }, 200);
}

function addTemporaryFireworkEffect() {
    const btnRect = surpriseBtn.getBoundingClientRect();
    const explosionDiv = document.createElement('div');
    explosionDiv.style.position = 'fixed';
    explosionDiv.style.left = (btnRect.left + btnRect.width / 2) + 'px';
    explosionDiv.style.top = (btnRect.top + btnRect.height / 2) + 'px';
    explosionDiv.style.width = '10px';
    explosionDiv.style.height = '10px';
    explosionDiv.style.background = 'radial-gradient(circle, #FFD966, #FF8C42)';
    explosionDiv.style.borderRadius = '50%';
    explosionDiv.style.pointerEvents = 'none';
    explosionDiv.style.zIndex = '1000';
    explosionDiv.style.transform = 'translate(-50%, -50%) scale(0)';
    explosionDiv.style.transition = 'transform 0.4s ease-out, opacity 0.4s';
    document.body.appendChild(explosionDiv);
    requestAnimationFrame(() => {
        explosionDiv.style.transform = 'translate(-50%, -50%) scale(12)';
        explosionDiv.style.opacity = '0';
    });
    setTimeout(() => explosionDiv.remove(), 500);
}

let isPanelOpen = false;

surpriseBtn.addEventListener('click', () => {
    startConfetti(2.5);
    addTemporaryFireworkEffect();

    if (!isPanelOpen) {
        panel.classList.add('open');
        isPanelOpen = true;
        // при первом открытии показываем случайное сообщение
        const randomMsg = surpriseMessages[Math.floor(Math.random() * surpriseMessages.length)];
        dynamicMsg.innerText = randomMsg;
        msgIndex = surpriseMessages.indexOf(randomMsg) + 1;
        // добавим анимацию в содержимом
        const giftEmoji = document.querySelector('.floating-gift');
        if (giftEmoji) {
            giftEmoji.style.animation = 'none';
            setTimeout(() => { if (giftEmoji) giftEmoji.style.animation = 'shakeGift 1.2s infinite'; }, 20);
        }
    } else {
        rotateSurpriseMessage();
        const giftDiv = document.querySelector('.floating-gift');
        if (giftDiv) {
            giftDiv.style.transform = 'scale(1.3)';
            setTimeout(() => { if (giftDiv) giftDiv.style.transform = 'scale(1)'; }, 300);
        }

        const miniExtra = createConfetti(40);
        particles.push(...miniExtra);
        if (!activeConfetti) {
            activeConfetti = true;
            if (animationId) cancelAnimationFrame(animationId);
            animationId = requestAnimationFrame(drawConfetti);
            setTimeout(() => {
                if (activeConfetti && particles.length < 12) {
                    activeConfetti = false;
                    if (animationId) cancelAnimationFrame(animationId);
                    ctx.clearRect(0, 0, width, height);
                    animationId = null;
                }
            }, 2000);
        }
    }

    if (navigator.vibrate) navigator.vibrate(80);

    // подсветка кнопки
    surpriseBtn.style.transform = 'scale(0.98)';
    setTimeout(() => { surpriseBtn.style.transform = ''; }, 150);
});

window.addEventListener('resize', () => {
    if (activeConfetti) {
        resizeCanvas();
        if (animationId) {
            // просто перерисовка с новым размером
            drawConfetti();
        }
    } else {
        resizeCanvas();
    }
});
resizeCanvas();

let starResizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(starResizeTimeout);
    starResizeTimeout = setTimeout(() => {
        const container = document.getElementById('starsContainer');
        if (container.children.length < 50 && window.innerWidth > 600) {
            // если звезд очень мало, добавим немного (но редко)
            const addCount = 30;
            for (let i = 0; i < addCount; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                const size = Math.random() * 4 + 2;
                star.style.width = size + 'px';
                star.style.height = size + 'px';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDuration = (Math.random() * 3 + 2) + 's';
                star.style.animationDelay = Math.random() * 5 + 's';
                container.appendChild(star);
            }
        }
    }, 300);
});