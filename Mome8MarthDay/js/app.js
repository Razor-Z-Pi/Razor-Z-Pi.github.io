// 1. Генерация летающих лепестков
const petalsContainer = document.getElementById('petalsContainer');
for (let i = 0; i < 20; i++) {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    const size = Math.random() * 25 + 10; // 10-35px
    petal.style.width = size + 'px';
    petal.style.height = size + 'px';
    petal.style.left = Math.random() * 100 + '%';
    petal.style.animationDelay = Math.random() * 10 + 's';
    petal.style.animationDuration = Math.random() * 10 + 12 + 's'; // 12-22s
    petal.style.background = `rgba(255, ${150 + Math.random() * 80}, 200, 0.6)`;
    petalsContainer.appendChild(petal);
}

// 2. Кнопка-сюрприз
const surpriseBtn = document.getElementById('surpriseBtn');
surpriseBtn.addEventListener('click', () => {
    // Создаем сердечки (визуальный эффект)
    for (let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.fontSize = Math.random() * 30 + 20 + 'px';
        heart.style.zIndex = '9999';
        heart.style.pointerEvents = 'none';
        heart.style.animation = 'floatPetal 2s forwards';
        heart.style.opacity = '1';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
    }
    alert('🌸 Мамочка, ты самая прекрасная! 🌸');
});