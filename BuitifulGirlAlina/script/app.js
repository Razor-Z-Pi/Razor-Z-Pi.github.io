// Данные для сайта - замените на свои
const siteData = {
    photos: [
        {
            url: './image/1.jpg',
            caption: 'Завораживающая и прекрасная красота'
        },
        {
            url: './image/2.jpg',
            caption: 'Шикарная темная принцесса, которой подлваостно что угодно'
        },
        {
            url: './image/6.jpg',
            caption: 'Сила и грация в каждом движении'
        },
        {
            url: './image/4.jpg',
            caption: 'Нежность, что затмевает лунный свет'
        },
        {
            url: './image/5.jpg',
            caption: 'Твои глаза - звёзды в ночном небе'
        },
        {
            url: './image/3.jpg',
            caption: 'Загадочная улыбка, что скрывает тайны вселенной'
        },
        {
            url: './image/8.jpg',
            caption: 'Шикарный, классный стиль'
        },
        {
            url: './image/7.jpg',
            caption: 'Интересная и прикольная'
        }
    ],
    quotes: [
        "Ты - самая прекрасная тайна этой вселенной",
        "В твоих глазах отражается магия ночи",
        "Твоя душа сияет ярче любой звезды",
        "Ты создана из звёздной пыли и ночных грёз",
        "Твоя красота - это заклинание, от которого нет противоядия",
        "В твоём сердце бьётся ритм древних магических миров",
        "Ты - воплощение элегантности и мистической силы",
        "Твоя улыбка освещает даже самые тёмные уголки души"
    ]
};

// Создание летучих мышей
function createBats() {
    const container = document.getElementById('bats-container');
    const batSymbols = ['🦇', '🌙', '✨', '⚡'];

    for (let i = 0; i < 15; i++) {
        const bat = document.createElement('div');
        bat.className = 'bat';
        bat.textContent = batSymbols[Math.floor(Math.random() * batSymbols.length)];
        bat.style.left = Math.random() * 100 + 'vw';
        bat.style.top = Math.random() * 100 + 'vh';
        bat.style.animationDelay = Math.random() * 15 + 's';
        bat.style.fontSize = (Math.random() * 20 + 16) + 'px';
        container.appendChild(bat);
    }
}

// Создание падающих роз
function createRoses() {
    setInterval(() => {
        const rose = document.createElement('div');
        rose.className = 'rose';
        rose.textContent = '🌹';
        rose.style.left = Math.random() * 100 + 'vw';
        rose.style.fontSize = (Math.random() * 10 + 15) + 'px';
        rose.style.animationDuration = (Math.random() * 5 + 5) + 's';
        document.body.appendChild(rose);

        setTimeout(() => {
            rose.remove();
        }, 10000);
    }, 1000);
}

// Загрузка галереи
function loadGallery() {
    const gallery = document.getElementById('photo-gallery');

    siteData.photos.forEach((photo, index) => {
        const card = document.createElement('div');
        card.className = 'photo-card';
        card.addEventListener('click', () => openModal(photo.url));

        card.innerHTML = `
                    <img src="${photo.url}" alt="Фото ${index + 1}" loading="lazy">
                    <div class="caption">${photo.caption}</div>
                `;

        gallery.appendChild(card);
    });
}

// Работа с цитатами
let currentQuoteIndex = 0;
function showNextQuote() {
    const container = document.getElementById('quotes-container');
    container.style.opacity = '0';

    setTimeout(() => {
        currentQuoteIndex = (currentQuoteIndex + 1) % siteData.quotes.length;
        container.innerHTML = `
                    <p style="font-size: 1.3rem; text-align: center; line-height: 1.6; transition: opacity 0.5s ease;">
                        "${siteData.quotes[currentQuoteIndex]}"
                    </p>
                `;
        container.style.opacity = '1';
    }, 500);
}

// Модальное окно
function openModal(imageUrl) {
    document.getElementById('modalImage').src = imageUrl;
    document.getElementById('imageModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// Интерактивный эффект
function castSpell() {
    const buttons = document.querySelectorAll('.spell-button');
    buttons.forEach(button => {
        button.style.animation = 'glow 0.5s ease-in-out 3';
    });

    // Создаём магические искры
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const spark = document.createElement('div');
            spark.className = 'spark';
            spark.style.left = Math.random() * 100 + 'vw';
            spark.style.top = Math.random() * 100 + 'vh';
            spark.style.background = i % 2 === 0 ? '#ff00ff' : '#8a2be2';
            spark.style.boxShadow = `0 0 20px ${i % 2 === 0 ? '#ff00ff' : '#8a2be2'}`;
            spark.style.animation = 'sparkle 1s ease-out forwards';
            document.body.appendChild(spark);

            setTimeout(() => {
                if (spark.parentNode) {
                    spark.remove();
                }
            }, 1000);
        }, i * 100);
    }

    // Создаём звуковой эффект
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.5);

        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch (e) {
        console.log('Аудио не поддерживается');
    }

    setTimeout(() => {
        alert('✨ Магия твоей красоты усиливается! ✨');
    }, 800);
}

// Инициализация
document.addEventListener('DOMContentLoaded', function () {
    createBats();
    createRoses();
    loadGallery();
    showNextQuote();

    // Назначаем обработчики событий
    document.getElementById('spellButton').addEventListener('click', castSpell);
    document.getElementById('quoteButton').addEventListener('click', showNextQuote);
    document.getElementById('closeModal').addEventListener('click', closeModal);

    // Закрытие модального окна по клику вне изображения
    document.getElementById('imageModal').addEventListener('click', function (e) {
        if (e.target === this) {
            closeModal();
        }
    });

    // Закрытие модального окна по ESC
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});

// Параллакс эффект для мышей
document.addEventListener('mousemove', function (e) {
    const bats = document.querySelectorAll('.bat');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    bats.forEach((bat, index) => {
        const speed = (index + 1) * 0.0002;
        const xMove = (x - 0.5) * speed * window.innerWidth;
        const yMove = (y - 0.5) * speed * window.innerHeight;

        const currentTransform = bat.style.transform || '';
        bat.style.transform = currentTransform + ` translate(${xMove}px, ${yMove}px)`;
    });
});

// Добавляем обработчики для всех фото-карточек (на случай динамической загрузки)
document.addEventListener('click', function (e) {
    if (e.target.closest('.photo-card')) {
        const img = e.target.closest('.photo-card').querySelector('img');
        if (img) {
            openModal(img.src);
        }
    }
});