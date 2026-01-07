// Создание звездного неба
function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 150;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Случайный размер
        const size = Math.random() * 3;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Случайная позиция
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;

        // Случайная яркость и скорость мерцания
        const opacity = Math.random() * 0.7 + 0.3;
        star.style.opacity = opacity;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.animationDelay = `${Math.random() * 5}s`;

        starsContainer.appendChild(star);
    }
}

// Создание снежинок
function createSnowflakes() {
    const snowContainer = document.getElementById('snow');
    const snowflakeCount = 80;

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        // Случайный размер
        const size = Math.random() * 8 + 2;
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;

        // Случайная позиция
        snowflake.style.left = `${Math.random() * 100}vw`;

        // Случайная прозрачность
        snowflake.style.opacity = Math.random() * 0.7 + 0.3;

        // Случайная скорость падения
        const duration = Math.random() * 10 + 10;
        snowflake.style.animationDuration = `${duration}s`;

        // Случайная задержка
        snowflake.style.animationDelay = `${Math.random() * 5}s`;

        snowContainer.appendChild(snowflake);
    }
}

function initMusic() {
    const music = document.getElementById('backgroundMusic');
    const musicControl = document.getElementById('musicControl');
    const musicIcon = document.getElementById('musicIcon');

    let isPlaying = false;

    // Попытка автоматического воспроизведения
    const playMusic = () => {
        music.play().then(() => {
            isPlaying = true;
            musicIcon.classList.remove('fa-music');
            musicIcon.classList.add('fa-volume-up');
        }).catch(error => {
            console.log("Автовоспроизведение заблокировано. Нажмите на кнопку музыки.");
        });
    };

    // Задержка перед воспроизведением для лучшего UX
    setTimeout(playMusic, 1000);

    // Обработчик клика по кнопке
    musicControl.addEventListener('click', () => {
        if (isPlaying) {
            music.pause();
            musicIcon.classList.remove('fa-volume-up');
            musicIcon.classList.add('fa-music');
        } else {
            music.play();
            musicIcon.classList.remove('fa-music');
            musicIcon.classList.add('fa-volume-up');
        }
        isPlaying = !isPlaying;
    });
}

// Музыкальное сопровождение
let isPlaying = false;
let indx = 0;

document.getElementById('musicBtn').addEventListener('click', function () {
    const btn = this;
    if (indx === 0) {
        initMusic();
        indx = 1;
    } else {
        indx = 0;
    }
    
    if (!isPlaying) {
        // Визуальный эффект вместо реальной музыки
        createMusicVisualization();

        btn.style.background = 'rgba(77, 255, 145, 0.9)';

        // Добавляем анимацию
        btn.style.animation = 'pulseGlow 1s infinite';

        isPlaying = true;
        console.log("Включена рождественская музыка");
    } else {
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }

        // Возвращаем исходный вид
        btn.style.background = 'rgba(255, 215, 0, 0.9)';
        btn.style.animation = 'pulseGlow 2s infinite';

        isPlaying = false;
        console.log("Музыка выключена");
    }
});

// Визуализация музыки
function createMusicVisualization() {
    const colors = ['#ffd700', '#ff6b6b', '#4dff91', '#4d96ff'];

    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const note = document.createElement('div');
            note.style.position = 'fixed';
            note.style.fontSize = '1.5rem';
            note.style.zIndex = '9999';
            note.style.pointerEvents = 'none';
            note.style.left = `${Math.random() * 100}vw`;
            note.style.top = `${Math.random() * 100}vh`;
            note.style.color = colors[Math.floor(Math.random() * colors.length)];
            note.style.opacity = '0.8';
            note.innerHTML = '♪';

            document.body.appendChild(note);

            // Анимация появления и исчезновения ноты
            const animation = note.animate([
                { transform: 'scale(0) rotate(0deg)', opacity: 0 },
                { transform: 'scale(1) rotate(180deg)', opacity: 1 },
                { transform: 'scale(0) rotate(360deg)', opacity: 0 }
            ], {
                duration: 2000,
                easing: 'ease-out'
            });

            animation.onfinish = () => note.remove();
        }, i * 100);
    }
}

// Эффект при наведении на пожелания
document.querySelectorAll('.wish-item').forEach(item => {
    item.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px) scale(1.05)';
    });

    item.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Случайные огоньки на свече
setInterval(() => {
    const flame = document.querySelector('.flame');
    flame.style.animation = 'none';
    setTimeout(() => {
        flame.style.animation = 'flicker 0.5s infinite alternate';
    }, 10);
}, 3000);

// Создаем звезды и снежинки при загрузке
window.addEventListener('load', () => {
    createStars();
    createSnowflakes();

    // Постепенное появление элементов
    const elements = document.querySelectorAll('.header, .greeting-card, .wish-item');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';

        setTimeout(() => {
            el.style.transition = 'opacity 1s, transform 1s';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 300);
    });
});

// Эффект параллакса при скролле
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const stars = document.querySelector('.stars');
    const snow = document.querySelector('.snow');

    stars.style.transform = `translateY(${scrolled * 0.5}px)`;
    snow.style.transform = `translateY(${scrolled * 0.3}px)`;
});