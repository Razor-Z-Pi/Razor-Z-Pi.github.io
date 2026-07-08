(function () {
    const heartBtn = document.getElementById('heartButton');
    const surpriseDiv = document.getElementById('surpriseMessage');
    const familyContainer = document.getElementById('familyBadgesContainer');

    const lovingMessages = [
        "✨ Вы — моя самая большая драгоценность! ✨",
        "🌟 Спасибо, что вы есть у меня! 🌟",
        "💛 Роднее вас нет никого на свете 💛",
        "🏵️ Вместе мы — сила и радость 🏵️",
        "🌿 Люблю вас бесконечно 🌿",
        "💐 Семья — это маленькое чудо 💐"
    ];

    // Функция для отображения случайного сообщения
    function showRandomSurprise() {
        const randomIndex = Math.floor(Math.random() * lovingMessages.length);
        const selectedMessage = lovingMessages[randomIndex];
        surpriseDiv.textContent = selectedMessage;

        // Убираем класс если уже есть, чтобы перезапустить анимацию появления
        surpriseDiv.classList.remove('visible-message');

        // Небольшая хитрость для перезапуска transition
        void surpriseDiv.offsetWidth; // форсируем reflow

        surpriseDiv.classList.add('visible-message');
    }

    // Обработчик клика по кнопке
    heartBtn.addEventListener('click', function (e) {
        heartBtn.style.transform = 'scale(0.96)';
        setTimeout(() => {
            heartBtn.style.transform = '';
        }, 150);

        showRandomSurprise();

        createFloatingHearts();
    });

    // Функция для генерации нескольких летающих сердечек вокруг кнопки
    function createFloatingHearts() {
        const heartEmojis = ['❤️', '💕', '💗', '💖', '✨', '💝'];
        const body = document.body;

        for (let i = 0; i < 8; i++) {
            const heart = document.createElement('span');
            heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            heart.style.position = 'fixed';
            heart.style.fontSize = (20 + Math.random() * 25) + 'px';
            heart.style.left = (Math.random() * 80 + 10) + '%';
            heart.style.top = (Math.random() * 60 + 15) + '%';
            heart.style.zIndex = '999';
            heart.style.pointerEvents = 'none';
            heart.style.opacity = '1';
            heart.style.transition = 'all 1.2s ease-out';
            heart.style.transform = 'translateY(0) scale(1)';
            body.appendChild(heart);

            // Запускаем анимацию исчезновения и движения вверх
            requestAnimationFrame(() => {
                heart.style.transform = `translateY(-80px) scale(0.4)`;
                heart.style.opacity = '0';
            });

            // Удаляем элемент после окончания анимации
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.remove();
                }
            }, 1300);
        }
    }

    if (familyContainer) {
        familyContainer.addEventListener('click', function (e) {
            const badge = e.target.closest('.family-badge');
            if (badge) {
                const roleText = badge.innerText.trim();
                const cleanRole = roleText.replace(/[^\p{L}\p{N}\s]/gu, '').trim() || 'родной человек';
                const personalMessages = [
                    `💛 ${cleanRole}, ты — наша гордость) 💛`,
                    `🌼 ${cleanRole}, спасибо за поддержку) 🌼`,
                    `🌸 ${cleanRole}, люблю тебя) 🌸`,
                    `💎 ${cleanRole}, ты топ) 💎`
                ];
                const randomMsg = personalMessages[Math.floor(Math.random() * personalMessages.length)];
                surpriseDiv.textContent = randomMsg;
                surpriseDiv.classList.remove('visible-message');
                void surpriseDiv.offsetWidth;
                surpriseDiv.classList.add('visible-message');

                createFloatingHearts();
            }
        });
    }

    window.addEventListener('load', function () {
        // Через 600 мс показываем первое сообщение
        setTimeout(() => {
            if (surpriseDiv) {
                surpriseDiv.textContent = '💫 С любовью в каждом мгновении 💫';
                surpriseDiv.classList.add('visible-message');
            }
        }, 700);
    });

})();