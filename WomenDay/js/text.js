window.addEventListener('resize', () => {
    const marquee = document.querySelector('.marquee');
    const containerWidth = document.querySelector('.marquee-container').offsetWidth;
    marquee.style.animationDuration = `${containerWidth / 50}s`; // Скорость анимации зависит от ширины контейнера
});