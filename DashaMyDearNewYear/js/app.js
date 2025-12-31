// Создание снегопада
function createSnowflakes() {
    const snowflakesContainer = document.getElementById('snowflakes');
    const snowflakeCount = 80;

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = '&#10052;';

        const startPosition = Math.random() * 100;
        const animationDuration = Math.random() * 15 + 10;
        const size = Math.random() * 20 + 10;
        const opacity = Math.random() * 0.7 + 0.3;

        snowflake.style.left = `${startPosition}%`;
        snowflake.style.fontSize = `${size}px`;
        snowflake.style.opacity = opacity;
        snowflake.style.animationDuration = `${animationDuration}s`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;

        snowflakesContainer.appendChild(snowflake);
    }
}

// Создание сердечек
function createHearts() {
    const heartsContainer = document.getElementById('hearts');
    const heartCount = 20;

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '&#128150;';

        const startPosition = Math.random() * 100;
        const animationDuration = Math.random() * 20 + 15;
        const size = Math.random() * 25 + 15;
        const opacity = Math.random() * 0.6 + 0.4;

        heart.style.left = `${startPosition}%`;
        heart.style.top = `${Math.random() * 100 + 100}%`;
        heart.style.fontSize = `${size}px`;
        heart.style.opacity = opacity;
        heart.style.animationDuration = `${animationDuration}s`;
        heart.style.animationDelay = `${Math.random() * 10}s`;

        heartsContainer.appendChild(heart);
    }
}

// Создание конфетти
function createConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    const confettiCount = 150;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        // Случайный цвет
        const colors = ['#ff4081', '#ffd700', '#4CAF50', '#2196F3', '#9C27B0'];
        const color = colors[Math.floor(Math.random() * colors.length)];

        // Случайные параметры
        const left = Math.random() * 100;
        const size = Math.random() * 10 + 5;
        const animationDuration = Math.random() * 3 + 2;
        const animationDelay = Math.random() * 5;

        confetti.style.left = `${left}%`;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.backgroundColor = color;
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';

        // Анимация падения
        confetti.style.animation = `fall ${animationDuration}s linear ${animationDelay}s forwards`;

        // Добавляем стиль для анимации падения
        const style = document.createElement('style');
        style.innerHTML = `
                    @keyframes fall {
                        0% {
                            transform: translateY(-100px) rotate(0deg);
                            opacity: 1;
                        }
                        100% {
                            transform: translateY(100vh) rotate(360deg);
                            opacity: 0;
                        }
                    }
                `;
        document.head.appendChild(style);

        confettiContainer.appendChild(confetti);
    }
}

// Создание всплывающих фото
function createFloatingPhotos() {
    const container = document.querySelector('.floating-photos-container');
    const photoCount = 5;

    // Запасные фото
    const defaultPhotos = [
        './image/8.jpg',
        './image/17.jpeg',
        './image/12.png',
        './image/13.png',
        './image/2.jpg'
    ];

    for (let i = 0; i < photoCount; i++) {
        const photo = document.createElement('div');
        photo.classList.add('floating-photo');

        // Задержка для каждой фото
        photo.style.animationDelay = `${i * 4}s`;

        const img = document.createElement('img');
        img.src = defaultPhotos[i];
        img.alt = `Фото ${i + 1}`;

        photo.appendChild(img);
        container.appendChild(photo);
    }
}

// Данные для слайд-шоу
const slideshowData = [
    {
        image: './image/1.jpg',
        caption: 'Пусть каждый момент будет волшебным&#128149;'
    },
    {
        image: './image/15.jpg',
        caption: 'Пусть сбудутся все твои мечты&#128171;'
    },
    {
        image: './image/14.jpg',
        caption: 'Пусть новый год принесет много радости:)'
    },
    {
        image: './image/9.jpg',
        caption: 'Пусть любовь и счастье всегда будут с тобой&#129505;'
    },
    {
        image: './image/16.jpg',
        caption: 'Пусть каждый день будет вкусным и сладким&#127856;'
    }
];

// Данные для фото с пожеланиями
const photosData = [
    {
        image: './image/12.png',
        wish: 'Здоровья - самого крепкого и нерушимого&#129321;'
    },
    {
        image: './image/13.png',
        wish: 'Улыбок - самых искренних и солнечных&#128522;'
    },
    {
        image: './image/2.jpg',
        wish: 'Любви - бесконечной и взаимной&#129392;'
    },
    {
        image: './image/10.jpg',
        wish: 'Удачи - во всех начинаниях&#128525;'
    },
    {
        image: './image/4.jpg',
        wish: 'Путешествий - незабываемых и ярких&#128526;'
    },
    {
        image: './image/7.jpg',
        wish: 'Вдохновения - для новых свершений&#128151;'
    }
];

// Инициализация слайд-шоу
function initSlideshow() {
    const swiperWrapper = document.querySelector('.swiper-wrapper');

    // Добавляем слайды
    slideshowData.forEach(slide => {
        const slideElement = document.createElement('div');
        slideElement.classList.add('swiper-slide');

        slideElement.innerHTML = `
                    <img src="${slide.image}" alt="Слайд">
                    <div class="slide-caption">${slide.caption}</div>
                `;

        swiperWrapper.appendChild(slideElement);
    });

    // Инициализация Swiper
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        speed: 800,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });
}

// Добавление фото с пожеланиями
function initPhotos() {
    const photosGrid = document.getElementById('photosGrid');

    photosData.forEach(photo => {
        const photoItem = document.createElement('div');
        photoItem.classList.add('photo-item');

        photoItem.innerHTML = `
                    <img src="${photo.image}" alt="Пожелание">
                    <div class="photo-wish">${photo.wish}</div>
                `;

        photosGrid.appendChild(photoItem);
    });
}

// Таймер до Нового года
function updateCountdown() {
    const now = new Date();
    const nextYear = now.getFullYear() + 1;
    const newYear = new Date(`January 1, ${nextYear} 00:00:00`);

    const diff = newYear - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Управление музыкой
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

// Секретное сообщение
function initSecretMessage() {
    const secretMessage = document.getElementById('secretMessage');
    const hiddenMessage = secretMessage.querySelector('.hidden-message');

    secretMessage.addEventListener('mouseenter', () => {
        hiddenMessage.style.display = 'block';
        secretMessage.style.backgroundColor = 'rgba(255, 64, 129, 0.2)';
    });

    secretMessage.addEventListener('mouseleave', () => {
        hiddenMessage.style.display = 'none';
        secretMessage.style.backgroundColor = 'rgba(255, 64, 129, 0.1)';
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
    createSnowflakes();
    createHearts();
    createConfetti();
    createFloatingPhotos();
    initSlideshow();
    initPhotos();
    initMusic();
    initSecretMessage();

    // Обновление таймера каждую секунду
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Случайные вспышки на заголовке
    const title = document.querySelector('.header-title');
    setInterval(() => {
        title.style.textShadow = `0 0 ${20 + Math.random() * 15}px rgba(255, 64, 129, ${0.7 + Math.random() * 0.3})`;
    }, 800);
});