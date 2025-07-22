// Массив с комплиментами
const compliments = [
    "Ты самое красивое создание во Вселенной!",
    "Твоя улыбка освещает мой день!",
    "Ты невероятно умна и талантлива!",
    "С тобой я чувствую себя самым счастливым человеком!",
    "Твои глаза - как две звезды, в которых я тону!",
    "Ты вдохновляешь меня становиться лучше!",
    "Твой смех - самая прекрасная музыка!",
    "Ты не просто красива, ты божественна!",
    "Каждый момент с тобой - это подарок!",
    "Ты делаешь этот мир лучше просто своим существованием!",
    "Ты - воплощение всех моих мечтаний!",
    "Твоя доброта и нежность бесценны!",
    "С тобой даже обычный день становится праздником!",
    "Ты - моя самая большая удача в жизни!",
    "Твоя любовь - самое дорогое, что у меня есть!"
];

// Показ случайного комплимента
document.getElementById('showCompliment').addEventListener('click', function() {
    const complimentContainer = document.getElementById('complimentContainer');
    complimentContainer.innerHTML = '';
    
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    const complimentElement = document.createElement('div');
    complimentElement.className = 'compliment';
    complimentElement.textContent = randomCompliment;
    
    complimentContainer.appendChild(complimentElement);
    
    // Анимация появления
    setTimeout(() => {
        complimentElement.style.opacity = '1';
        complimentElement.style.transform = 'translateY(0)';
    }, 10);
    
    // Создаем сердечки вокруг комплимента
    createHearts(5, complimentElement.getBoundingClientRect());
});

// Показ сообщения о любви
document.getElementById('showLove').addEventListener('click', function() {
    const loveMessage = document.getElementById('loveMessage');
    loveMessage.style.display = 'block';
    
    // Анимация появления
    setTimeout(() => {
        loveMessage.style.opacity = '1';
        loveMessage.style.transform = 'scale(1)';
    }, 10);
    
    // Создаем фейерверк
    createFireworks(15);
});

// Создание сердечек
document.getElementById('makeHearts').addEventListener('click', function() {
    createHearts(20);
});

// Функция создания сердечек
function createHearts(count, aroundElement = null) {
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = aroundElement 
            ? `${aroundElement.left + Math.random() * aroundElement.width}px`
            : `${Math.random() * window.innerWidth}px`;
        heart.style.top = aroundElement 
            ? `${aroundElement.top + Math.random() * aroundElement.height}px`
            : `${Math.random() * window.innerHeight}px`;
        heart.style.fontSize = `${10 + Math.random() * 20}px`;
        heart.style.animationDuration = `${3 + Math.random() * 4}s`;
        
        document.body.appendChild(heart);
        
        // Удаляем сердечко после анимации
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
}

// Функция создания фейерверка
function createFireworks(count) {
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.className = 'firework';
            firework.style.left = `${Math.random() * window.innerWidth}px`;
            firework.style.top = `${Math.random() * window.innerHeight}px`;
            firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            
            document.body.appendChild(firework);
            
            // Анимация фейерверка
            const size = 5 + Math.random() * 10;
            firework.animate([
                { transform: 'scale(1)', opacity: 1 },
                { transform: `scale(${size})`, opacity: 0 }
            ], {
                duration: 1000 + Math.random() * 1000,
                easing: 'cubic-bezier(0.1, 0.8, 0.2, 1)'
            });
            
            // Удаление фейерверка после анимации
            setTimeout(() => {
                firework.remove();
            }, 2000);
        }, i * 200);
    }
}

// Создаем случайные сердечки в фоне
setInterval(() => {
    if (Math.random() > 0.7) {
        createHearts(1);
    }
}, 1000);

// Клики по странице тоже создают сердечки
document.addEventListener('click', function(e) {
    const rect = { left: e.clientX - 20, top: e.clientY - 20, width: 40, height: 40 };
    createHearts(3, rect);
});