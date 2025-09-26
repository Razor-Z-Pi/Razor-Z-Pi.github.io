// Создание воздушных шариков
function createBalloons() {
    const container = document.getElementById('balloons-container');
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#ffa5a5', '#96ceb4', '#feca57'];

    for (let i = 0; i < 12; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDelay = Math.random() * 8 + 's';
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(balloon);
    }
}

// Создание конфетти
function createConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#ffa5a5', '#96ceb4', '#feca57'];

    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 5 + 's';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 10 + 8 + 'px';
        confetti.style.height = confetti.style.width;
        container.appendChild(confetti);
    }
}

// Запуск анимаций при загрузке страницы
window.onload = function () {
    createBalloons();
    createConfetti();
};