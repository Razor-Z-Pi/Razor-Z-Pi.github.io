(function () {
    // Эффектный сюрприз при клике с анимацией
    const btn = document.getElementById('surpriseBtn');
    const hiddenDiv = document.getElementById('hiddenMsg');

    // Дополнительный звуковой эффект мы не добавляем (из-за политики браузеров), только визуал

    btn.addEventListener('click', function (e) {
        e.preventDefault();

        // Переключение класса show
        hiddenDiv.classList.toggle('show');

        // Маленькая радость: меняем текст кнопки на некоторое время
        if (hiddenDiv.classList.contains('show')) {
            btn.innerHTML = '<span>&#10024;</span> Ещё сюрприз? <span>&#127882;</span>';
            // Добавим эффект конфетти через мелкие изменения фона или вызовем ещё анимацию
            document.body.style.transition = 'background 0.5s';
            document.body.style.background = 'linear-gradient(145deg, #ffe0ea, #ffd9e6, #ffe0f0)';
            setTimeout(() => {
                document.body.style.background = ''; // сброс к исходному (CSS класс управляет)
            }, 600);
        } else {
            btn.innerHTML = '<span>&#127873;</span> Сюрприз <span>&#127880;</span>';
        }

        // Создаём временные всплывающие сердечки (для дополнительного веселья)
        for (let i = 0; i < 6; i++) {
            createFloatingHeart(i * 70);
        }
    });

    // Функция для создания плавающих сердечек в момент клика (как микро-анимация)
    function createFloatingHeart(delay) {
        const heart = document.createElement('span');
        heart.innerHTML = '&#128151;';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = (window.innerHeight - 50) + 'px';
        heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
        heart.style.opacity = '0.8';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        heart.style.transition = 'transform 2s ease-out, opacity 1.8s';
        heart.style.transform = 'translateY(0)';
        document.body.appendChild(heart);

        // Анимация вверх и исчезновение
        setTimeout(() => {
            heart.style.transform = `translateY(-${window.innerHeight * 0.7}px) scale(1.5)`;
            heart.style.opacity = '0';
        }, 10);

        // Удаление из DOM через 2.5 секунды
        setTimeout(() => {
            if (heart.parentNode) heart.parentNode.removeChild(heart);
        }, 2500);
    }

    // Дополнительная анимация при загрузке: плавно появляются элементы списка
    // (уже сделано через CSS animation, но добавим небольшую "живости")
    console.log('Сайт для Яны запущен!');
})();