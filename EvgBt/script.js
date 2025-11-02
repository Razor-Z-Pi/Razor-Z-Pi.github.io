// Добавляем дополнительные анимации при прокрутке
document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);

    // Наблюдаем за элементами, которые должны анимироваться при прокрутке
    const animatedElements = document.querySelectorAll('.poem-section, .flowers, .gallery');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Добавляем случайные сердечки при клике
    document.body.addEventListener('click', function (e) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        heart.style.fontSize = (20 + Math.random() * 20) + 'px';
        heart.style.opacity = '1';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        heart.style.transition = 'all 1s ease';

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.opacity = '0';
            heart.style.transform = `translateY(-${100 + Math.random() * 100}px) translateX(${Math.random() * 100 - 50}px)`;
        }, 10);

        setTimeout(() => {
            document.body.removeChild(heart);
        }, 1100);
    });
});