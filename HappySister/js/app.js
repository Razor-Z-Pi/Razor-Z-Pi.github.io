// Создание конфетти
function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const confettiCount = 150;

    for (let i = 0; i < confettiCount; i++) {
        const piece = document.createElement('div');
        piece.classList.add('confetti-piece');

        const left = Math.random() * 100;
        const animationDuration = Math.random() * 5 + 3;
        const animationDelay = Math.random() * 5;
        const size = Math.random() * 10 + 5;

        piece.style.left = `${left}%`;
        piece.style.width = `${size}px`;
        piece.style.height = `${size}px`;
        piece.style.animationDuration = `${animationDuration}s`;
        piece.style.animationDelay = `${animationDelay}s`;

        // Начальная позиция выше экрана
        piece.style.top = `-${size}px`;

        confettiContainer.appendChild(piece);
    }
}

// Фотографии по умолчанию (замените эти ссылки на свои фото)
const photos = [
    {
        url: "./image/1.jpg",
        caption: "Красивая"
    },
    {
        url: "./image/2.jpg",
        caption: "Веселая"
    },
    {
        url: "./image/3.jpg",
        caption: "Интересная"
    },
    {
        url: "./image/4.jpg",
        caption: "Милая"
    },
    {
        url: "./image/5.jpg",
        caption: "Умная"
    },
    {
        url: "./image/6.jpg",
        caption: "Лучшая №1"
    }
];

// Инициализация галереи
function initGallery() {
    const galleryGrid = document.getElementById('galleryGrid');

    photos.forEach(photo => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        galleryItem.innerHTML = `
                    <img src="${photo.url}" alt="${photo.caption}" loading="lazy">
                    <div class="photo-caption">${photo.caption}</div>
                `;

        // Добавляем обработчик для открытия фото в модальном окне
        galleryItem.addEventListener('click', () => {
            openModal(photo.url);
        });

        galleryGrid.appendChild(galleryItem);
    });
}

// Модальное окно для фото
function initModal() {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeModal = document.getElementById('closeModal');

    // Функция открытия модального окна
    window.openModal = function (imageSrc) {
        modal.style.display = 'flex';
        modalImage.src = imageSrc;
        document.body.style.overflow = 'hidden'; // Отключаем прокрутку
    };

    // Закрытие модального окна
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Включаем прокрутку
    });

    // Закрытие при клике вне изображения
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Закрытие на Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Таймер праздника
function initTimer() {
    function updateTimer() {
        const now = new Date();
        const hours = 23 - now.getHours();
        const minutes = 59 - now.getMinutes();
        const seconds = 59 - now.getSeconds();

        document.getElementById('timerHours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('timerMinutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('timerSeconds').textContent = seconds.toString().padStart(2, '0');
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}

// Секретное сообщение
function initSecretMessage() {
    const secretMessage = document.getElementById('secretMessage');
    const hiddenMessage = secretMessage.querySelector('.hidden-message');

    secretMessage.addEventListener('click', () => {
        if (hiddenMessage.style.display === 'none') {
            hiddenMessage.style.display = 'block';
            secretMessage.style.backgroundColor = 'rgba(255, 107, 139, 0.2)';

            // Через 5 секунд скрываем сообщение
            setTimeout(() => {
                hiddenMessage.style.display = 'none';
                secretMessage.style.backgroundColor = 'rgba(255, 107, 139, 0.1)';
            }, 5000);
        } else {
            hiddenMessage.style.display = 'none';
            secretMessage.style.backgroundColor = 'rgba(255, 107, 139, 0.1)';
        }
    });
}

// Запуск случайных эффектов
function randomEffects() {
    // Случайные вспышки на заголовке
    const title = document.querySelector('.header-title');
    setInterval(() => {
        if (Math.random() > 0.7) {
            title.style.color = `hsl(${Math.random() * 360}, 70%, 60%)`;
            setTimeout(() => {
                title.style.color = '';
            }, 500);
        }
    }, 1000);

    // Периодический запуск конфетти
    setInterval(() => {
        // Удаляем старые конфетти
        const confettiContainer = document.getElementById('confetti');
        confettiContainer.innerHTML = '';

        // Создаем новые
        createConfetti();
    }, 8000);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
    createConfetti();
    initGallery();
    initModal();
    initTimer();
    initSecretMessage();
    randomEffects();
});