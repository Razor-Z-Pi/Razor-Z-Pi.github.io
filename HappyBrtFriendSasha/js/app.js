function createFirework(x, y) {
    const container = document.getElementById('fireworkContainer');
    const particleCount = 28;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('firework');
        const angle = Math.random() * Math.PI * 2;
        const velocity = 50 + Math.random() * 80;
        const vx = Math.cos(angle) * velocity * (Math.random() * 0.8 + 0.5);
        const vy = Math.sin(angle) * velocity * (Math.random() * 0.8 + 0.5);
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        // Рандомный цвет для праздничности
        const colors = ['#ffb347', '#ff6a4b', '#f5d742', '#cb6e39', '#ff8c42', '#d4af37'];
        particle.style.background = `radial-gradient(circle, ${colors[Math.floor(Math.random() * colors.length)]}, #e34d2b)`;
        container.appendChild(particle);
        // Анимация с перемещением
        const moveInterval = setInterval(() => {
            const left = parseFloat(particle.style.left);
            const top = parseFloat(particle.style.top);
            particle.style.left = (left + vx * 0.02) + 'px';
            particle.style.top = (top + vy * 0.02 - 0.5) + 'px'; // Небольшое замедление
        }, 20);
        setTimeout(() => {
            clearInterval(moveInterval);
            if (particle && particle.remove) particle.remove();
        }, 900);
        setTimeout(() => {
            if (particle && particle.remove) particle.remove();
        }, 1000);
    }
}

function randomFirework() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const randX = Math.random() * width;
    const randY = Math.random() * (height * 0.7) + (height * 0.2);
    createFirework(randX, randY);
}

function burstMultipleFireworks(count = 7) {
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            randomFirework();
        }, i * 150);
    }
}

// Салют по клику на кнопку (основной)
document.getElementById('startFireworksBtn').addEventListener('click', () => {
    burstMultipleFireworks(12);
    // дополнительный эффект через секунду
    setTimeout(() => burstMultipleFireworks(8), 500);
    setTimeout(() => burstMultipleFireworks(6), 1000);
});

// Отдельные тосты - пожелания с небольшим салютом или всплывающее уведомление (имитация)
const victoryBtn = document.getElementById('victoryToast');
const birthdayBtn = document.getElementById('birthdayToast');

function showMessage(text, type) {
    const toastDiv = document.createElement('div');
    toastDiv.innerText = text;
    toastDiv.style.position = 'fixed';
    toastDiv.style.bottom = '30px';
    toastDiv.style.left = '50%';
    toastDiv.style.transform = 'translateX(-50%)';
    toastDiv.style.backgroundColor = 'rgba(0,0,0,0.85)';
    toastDiv.style.backdropFilter = 'blur(12px)';
    toastDiv.style.color = '#ffda99';
    toastDiv.style.padding = '12px 28px';
    toastDiv.style.borderRadius = '60px';
    toastDiv.style.fontWeight = 'bold';
    toastDiv.style.border = '1px solid #ffb347';
    toastDiv.style.zIndex = '10000';
    toastDiv.style.fontSize = '1rem';
    toastDiv.style.fontFamily = 'Inter, sans-serif';
    toastDiv.style.whiteSpace = 'nowrap';
    if (window.innerWidth < 500) toastDiv.style.whiteSpace = 'normal';
    toastDiv.style.textAlign = 'center';
    toastDiv.style.maxWidth = '85%';
    document.body.appendChild(toastDiv);
    setTimeout(() => {
        toastDiv.style.opacity = '0';
        toastDiv.style.transition = 'opacity 0.4s';
        setTimeout(() => toastDiv.remove(), 500);
    }, 2800);
    // При нажатии также сделать салют 
    burstMultipleFireworks(5);
}

victoryBtn.addEventListener('click', () => {
    showMessage('🎖️ С Днём победы! Вечная слава героям! Пусть небо будет мирным! 🕊️', 'victory');
    setTimeout(() => burstMultipleFireworks(6), 200);
});

birthdayBtn.addEventListener('click', () => {
    showMessage('🎂 С днём рождения, дружище! Ты Лучший! Счастья, здоровья, побед, исполнений желаний! 🥳', 'birth');
    setTimeout(() => burstMultipleFireworks(6), 200);
});

window.addEventListener('load', () => {
    // Маленький салют, чтобы создать настроение
    setTimeout(() => {
        burstMultipleFireworks(4);
    }, 500);
});

// Дополнительный эффект для фото: лёгкая тень
const photoCards = document.querySelectorAll('.photo-card');
photoCards.forEach(card => {
    card.addEventListener('click', (e) => {
        // небольшой визуальный отклик: салют вокруг фото?
        const rect = card.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        createFirework(x, y);
        setTimeout(() => createFirework(x + 12, y - 8), 50);
    });
});

for (let i = 1; i <= 5; i++) {
    const img = document.getElementById(`userPhoto${i}`);
    if (img && img.src && img.src.includes('placehold.co')) {
        img.addEventListener('click', function () {
            showMessage(`Фото ${i}: замените src="${img.src}" на свою фотографию друга. Можно через редактор кода!`, 'info');
        });
    }
}

// const allImgs = document.querySelectorAll('.photo-card img');
// allImgs.forEach((im, idx) => {
//     if (im.src.includes('placehold.co')) {
//         im.style.cursor = 'pointer';
//         im.setAttribute('title', `Загрузи своё фото №${idx+1}`);
//     }
// });