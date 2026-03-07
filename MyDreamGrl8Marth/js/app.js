(function () {
    // Интерактивность: кнопка сюрприза
    const surpriseBtn = document.getElementById('surpriseBtn');
    const surpriseBox = document.getElementById('surpriseBox');

    surpriseBtn.addEventListener('click', function () {
        surpriseBox.classList.toggle('show');

        if (surpriseBox.classList.contains('show')) {
            surpriseBtn.textContent = 'Спрятать сюрприз!!!';
        } else {
            surpriseBtn.textContent = 'Нажми меня &#128150;';
        }
    });

    // Дополнительная анимация: всплывающее сердечко при загрузке (alert не используем, просто мелкий эффект)
    // Можно добавить появление подсказки при первом посещении
    console.log('С 8 марта, любимая! 💕');

    // Адаптивность для телефонов — убедимся, что кнопка работает и на touch экранах
    surpriseBtn.addEventListener('touchstart', function (e) {
        e.preventDefault();  // предотвратим двойное срабатывание если нужно, но в целом click работает
        surpriseBtn.click();
    });

    // Дополнительный маленький бонус: при двойном клике на сердечко (заголовок) что-то происходит
    const heartDec = document.querySelector('.heart-decoration');
    if (heartDec) {
        heartDec.addEventListener('dblclick', function () {
            alert('💕 Ты — моё сердце! 💕');
        });
    }
})();