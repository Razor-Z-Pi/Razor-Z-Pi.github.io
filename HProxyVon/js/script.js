document.addEventListener('DOMContentLoaded', function () {
    const surpriseBtn = document.getElementById('surpriseButton');
    
    // Добавляем обработчик на кнопку
    surpriseBtn.addEventListener('click', function () {
        const messages = [
            "🌟 Ты самый крутой! 🌟",
            "🎈 Пусть мечты сбываются! 🎈",
            "💥 Счастья, здоровья, любви! 💥",
            "🍾 Твой год настал! Жги! 🍾",
            "🎂 Пусть жизнь будет сладкой! 🎂",
            "🔥 Новых побед и свершений! 🔥"
        ];

        // Выбираем случайное сообщение
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];

        // Создаём div с сообщением (как всплывающий тост)
        const toast = document.createElement('div');
        toast.textContent = randomMessage;
        toast.style.position = 'fixed';
        toast.style.bottom = '30px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.backgroundColor = '#b14a2e';
        toast.style.color = 'white';
        toast.style.padding = '18px 30px';
        toast.style.borderRadius = '60px';
        toast.style.fontWeight = 'bold';
        toast.style.fontSize = '1.3rem';
        toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)';
        toast.style.zIndex = '9999';
        toast.style.backdropFilter = 'blur(5px)';
        toast.style.border = '3px solid #ffc896';
        toast.style.animation = 'smoothAppear 0.3s, fadeOut 0.5s ease 2.5s forwards';

        // if (!document.querySelector('#toastKeyframes')) {
        //     const styleSheet = document.createElement("style");
        //     styleSheet.id = 'toastKeyframes';
        //     styleSheet.textContent = `
        //                 @keyframes fadeOut {
        //                     to { opacity: 0; transform: translateX(-50%) translateY(30px); }
        //                 }
        //             `;
        //     document.head.appendChild(styleSheet);
        // }

        document.body.appendChild(toast);

        setTimeout(() => {
            if (toast.parentNode) toast.remove();
        }, 3500);
    });
});