// Создание снегопада
function createSnowflakes() {
    const snowflakesContainer = document.getElementById('snowflakes');
    const snowflakeCount = 50;

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = '&#10052;';

        // Случайная позиция и анимация
        const startPosition = Math.random() * 100;
        const animationDuration = Math.random() * 10 + 10;
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

const defaultCards = [
    {
        title: "С наступающим Новым годом!",
        text: "Пусть в новом году сбудутся все ваши мечты! Желаю счастья, здоровья и благополучия!",
        image: "./image/1.jpg"
    },
    {
        title: "Волшебства и чудес!",
        text: "Пусть Новый год принесет в ваш дом уют, тепло и радость. Желаю исполнения желаний!",
        image: "./image/2.jpg"
    },
    {
        title: "Процветания и удачи!",
        text: "Желаю, чтобы новый год стал самым успешным и плодотворным в вашей жизни!",
        image: "./image/3.jpg"
    }
];

// Отображение открыток
function displayCards() {
    const cardsContainer = document.getElementById('cardsContainer');
    cardsContainer.innerHTML = '';

    defaultCards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        const imageUrl = card.image || './image/2.jpg';

        cardElement.innerHTML = `
                    <img src="${imageUrl}" alt="${card.title}" class="card-image">
                    <div class="card-content">
                        <h3 class="card-title">${card.title}</h3>
                        <p class="card-text">${card.text}</p>
                    </div>
                `;

        cardsContainer.appendChild(cardElement);
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
    createSnowflakes();
    displayCards();

    // Добавляем мерцание к заголовку
    const title = document.querySelector('.header-title');
    setInterval(() => {
        title.style.textShadow = `0 0 ${15 + Math.random() * 10}px rgba(255, 215, 0, ${0.7 + Math.random() * 0.3})`;
    }, 1000);
});