// Создаем летающие элементы
function createFloatingElements() {
    const types = ['flower', 'heart'];
    const colors = ['#ff9eb5', '#ff6b8b', '#ffb6c1', '#ff69b4', '#ff1493'];
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const element = document.createElement('div');
            const type = types[Math.floor(Math.random() * types.length)];
            const size = 20 + Math.random() * 30;
            const duration = 10 + Math.random() * 15;
            const delay = Math.random() * 5;
            const left = Math.random() * 100;
            
            element.className = type;
            element.style.width = `${size}px`;
            element.style.height = `${size}px`;
            element.style.left = `${left}vw`;
            element.style.bottom = `-${size}px`;
            element.style.animationDuration = `${duration}s`;
            element.style.animationDelay = `${delay}s`;
            
            // Случайный цвет для сердечек
            if (type === 'heart') {
                const color = colors[Math.floor(Math.random() * colors.length)];
                element.style.backgroundImage = element.style.backgroundImage.replace('ff6b8b', color.substring(1));
            }
            
            document.body.appendChild(element);
            
            // Удаляем элемент после анимации
            setTimeout(() => {
                element.remove();
            }, (duration + delay) * 1000);
        }, i * 1000);
    }
}

// Циклическое создание элементов
setInterval(createFloatingElements, 15000);
createFloatingElements(); // Первый запуск

// Смена сообщений
const messages = document.querySelectorAll('.message');
let currentMessage = 0;

function showNextMessage() {
    messages[currentMessage].classList.remove('active');
    currentMessage = (currentMessage + 1) % messages.length;
    messages[currentMessage].classList.add('active');
}

setInterval(showNextMessage, 4000);

// Плавное появление при загрузке
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});