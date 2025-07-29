// Создаем летающие сердечки
function createHearts() {
    const container = document.getElementById('hearts-container');
    const heartCount = 15;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Рандомные параметры для сердечек
        const size = Math.random() * 20 + 10;
        const posX = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 3 + 4;
        
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        heart.style.left = `${posX}%`;
        heart.style.animationDelay = `${delay}s`;
        heart.style.animationDuration = `${duration}s`;
        
        container.appendChild(heart);
    }
}

// Создаем цветы при клике
document.addEventListener('click', function(e) {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    
    const size = Math.random() * 30 + 20;
    flower.style.width = `${size}px`;
    flower.style.height = `${size}px`;
    flower.style.left = `${e.clientX - size/2}px`;
    flower.style.top = `${e.clientY - size/2}px`;
    
    document.getElementById('flowers-container').appendChild(flower);
    
    // Анимация исчезновения цветка
    gsap.to(flower, {
        opacity: 0,
        duration: 2,
        onComplete: () => flower.remove()
    });
});

// Комплименты
const compliments = [
    "У тебя прекрасная улыбка!)",
    "Ты делаешь мир лучше просто своим присутствием❤️",
    "Ты умная, добрая и невероятная!)",
    "Твоя сила вдохновляет:)",
    "Ты справляешься лучше, чем думаешь:)",
    "Твое сердце - настоящее сокровище❤️",
    "Ты заслуживаешь всего самого хорошего❤️",
    "Твоя чувствительность - это твоя суперсила❤️",
    "С тобой так приятно проводить время❤️",
    "Ты уникальна и неповторима."
];

document.getElementById('compliment-btn').addEventListener('click', function() {
    const complimentElement = document.getElementById('compliment');
    complimentElement.textContent = compliments[Math.floor(Math.random() * compliments.length)];
    complimentElement.style.display = 'block';
    complimentElement.style.opacity = 0;
    
    // Анимация появления
    gsap.to(complimentElement, {
        opacity: 1,
        y: 0,
        duration: 0.5
    });
});

// Реакции на настроение
const moodResponses = {
    happy: "Я так рад, что тебе хорошо! Поделись этим настроением!",
    sad: "Грусть - это нормально. Помни, что это временно, и ты не одна. Я здесь для тебя:)",
    angry: "Гнев - естественная эмоция. Попробуй глубоко подышать или написать о своих чувствах.",
    tired: "Отдых - это важно. Позволь себе немного расслабиться, ты заслуживаешь это)",
    anxious: "Тревога может быть сложной. Попробуй сосредоточиться на своем дыхании - вдох на 4 счета, задержка на 4, выдох на 6!!!",
    confused: "Иногда все кажется запутанным. Давай разбираться по шагам, не спеша:)",
    loved: "Ты достойна всей любви в этом мире! И я очень тебя люблю:)))❤️❤️❤️"
};

document.querySelectorAll('.mood-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Убираем выделение у всех кнопок
        document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
        
        // Добавляем выделение текущей
        this.classList.add('selected');
        
        const mood = this.dataset.mood;
        const responseElement = document.getElementById('mood-response');
        responseElement.textContent = moodResponses[mood];
        responseElement.style.display = 'block';
        responseElement.style.opacity = 0;
        
        // Анимация
        gsap.to(responseElement, {
            opacity: 1,
            y: 0,
            duration: 0.5
        });
    });
});

// Отправка сообщения
document.getElementById('send-message-btn').addEventListener('click', function() {
    const messageBox = document.querySelector('.message-box');
    const responseElement = document.getElementById('message-response');
    
    if (messageBox.value.trim() === '') {
        responseElement.textContent = "Напиши что-нибудь, я действительно хочу тебя услышать)";
    } else {
        responseElement.textContent = "Твои слова улетели в космос и достигли моего сердца. Спасибо, что поделилась! ❤️";
        messageBox.value = ''; // Очищаем поле
    }
    
    responseElement.style.display = 'block';
    responseElement.style.opacity = 0;
    gsap.to(responseElement, {
        opacity: 1,
        y: 0,
        duration: 0.5
    });
});

// Идеи для поднятия настроения
const activities = [
    "Сделай 5-минутную растяжку",
    "Нарисуй что-нибудь абстрактное",
    "Напиши список из 5 приятных воспоминаний",
    "Потанцуй под свою любимую песню",
    "Сделай себе вкусный напиток",
    "Посмотри смешные видео",
    "Полистай старые фотографии",
    "Сделай массаж рук",
    "Позвони близкому человеку",
    "Поиграй с домашним животным, собачки хе хе хе"
];

document.getElementById('activity-btn').addEventListener('click', function() {
    const activityElement = document.getElementById('activity');
    activityElement.textContent = activities[Math.floor(Math.random() * activities.length)];
    activityElement.style.display = 'block';
    activityElement.style.opacity = 0;
    
    gsap.to(activityElement, {
        opacity: 1,
        y: 0,
        duration: 0.5
    });
});

// Персональные письма
const letters = [
    "Дорогая, даже в самые трудные дни помни - ты сильнее, чем думаешь. Я верю в тебя❤️",
    "Моя любимая, твое сердце так прекрасно, что даже в темноте оно светит, как маяк❤️",
    "Знай, что каждое твое усилие не остается незамеченным. Ты делаешь огромную работу, даже если сама так не считаешь❤️",
    "Ты - самое ценное, что есть в моей жизни. Никогда не сомневайся в этом❤️",
    "Даже когда тебе кажется, что ты одна, помни - я всегда с тобой в мыслях и в сердце❤️",
    "Твои чувства важны. Твои переживания значимы. Ты имеешь право на любую эмоцию❤️",
    "Спасибо, что ты есть. Просто спасибо за то, что ты - это ты❤️"
];

document.getElementById('heart-letter').addEventListener('click', function() {
    const letterElement = document.getElementById('letter');
    letterElement.textContent = letters[Math.floor(Math.random() * letters.length)];
    letterElement.style.display = 'block';
    letterElement.style.opacity = 0;
    
    // Анимация сердца
    gsap.to(this, {
        scale: 1.3,
        duration: 0.3,
        yoyo: true,
        repeat: 1
    });
    
    gsap.to(letterElement, {
        opacity: 1,
        y: 0,
        duration: 0.5
    });
});

// Инициализация при загрузке
window.addEventListener('load', function() {
    createHearts();
    
    // Анимация появления элементов с задержкой
    gsap.from("section", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        delay: 1
    });
});
// Закрытие сообщений при клике вне их области
document.addEventListener('click', function(e) {
    if (!e.target.closest('.hidden-message') && 
        !e.target.closest('#compliment-btn') && 
        !e.target.closest('.mood-btn') && 
        !e.target.closest('#send-message-btn') && 
        !e.target.closest('#activity-btn') && 
        !e.target.closest('#heart-letter')) {
        
        document.querySelectorAll('.hidden-message').forEach(msg => {
            gsap.to(msg, {
                opacity: 0,
                y: 20,
                duration: 0.3,
                onComplete: () => msg.style.display = 'none'
            });
        });
        
        // Снимаем выделение с кнопок настроения
        document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
    }
});