(function() {
  const particlesContainer = document.getElementById('particles-container');
  const particleCount = 35;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const size = Math.random() * 25 + 5; // от 5 до 30 px
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';

    // Случайное расположение по горизонтали
    particle.style.left = Math.random() * 100 + '%';

    // Случайная задержка и длительность анимации
    const duration = Math.random() * 15 + 10; // 10-25 сек
    const delay = Math.random() * 15;
    particle.style.animationDuration = duration + 's';
    particle.style.animationDelay = delay + 's';

    // Разные оттенки
    const colors = [
      'rgba(255, 215, 0, 0.2)',
      'rgba(255, 179, 71, 0.2)',
      'rgba(255, 107, 107, 0.2)',
      'rgba(255, 255, 255, 0.15)',
      'rgba(200, 200, 255, 0.15)'
    ];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];

    // Начинаем с нижней части экрана (визуально)
    particle.style.bottom = '-10%';
    particle.style.top = 'auto';

    particlesContainer.appendChild(particle);
  }

  const btn = document.getElementById('celebrateBtn');

  function createConfetti() {
    const colors = [
      '#FFD700', '#FF6B6B', '#4ECDC4', '#FFB347', '#AA96DA',
      '#FCBAD3', '#A8E6CF', '#FF8C94', '#FFE66D', '#6C5B7B'
    ];
    const total = 80;

    for (let i = 0; i < total; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');

      // Случайный размер
      const size = Math.random() * 10 + 6; // 6-16 px
      confetti.style.width = size + 'px';
      confetti.style.height = size + 'px';

      // Случайный цвет
      confetti.style.background = colors[Math.floor(Math.random() * colors.length)];

      // Форма: круг или квадрат
      confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';

      // Позиция по горизонтали
      confetti.style.left = Math.random() * 100 + '%';

      // Случайная задержка и скорость
      const duration = Math.random() * 2 + 1.5; // 1.5-3.5 сек
      confetti.style.animationDuration = duration + 's';
      confetti.style.animationDelay = Math.random() * 0.6 + 's';

      // Случайное вращение (уже в анимации)
      document.body.appendChild(confetti);

      // Удаляем после завершения анимации
      setTimeout(() => {
        if (confetti.parentNode) {
          confetti.remove();
        }
      }, (duration + 1) * 1000);
    }
  }

  btn.addEventListener('click', function(e) {
    e.preventDefault();
    createConfetti();

    // Лёгкая вибрация для мобильных (если поддерживается!!!)
    if (navigator.vibrate) {
      navigator.vibrate(30);
    }
  });

  const card = document.getElementById('birthdayCard');
  card.addEventListener('click', function(e) {
    // Небольшой отклик, если кликнули не по кнопке
    if (e.target.tagName !== 'BUTTON') {
      card.style.transform = 'scale(0.99)';
      setTimeout(() => {
        card.style.transform = '';
      }, 150);
    }
  });

  const garlandSpans = document.querySelectorAll('.garland span');
  garlandSpans.forEach(span => {
    span.addEventListener('mouseenter', function() {
      // Мини-вспышка из 3 конфетти
      for (let i = 0; i < 4; i++) {
        const c = document.createElement('div');
        c.classList.add('confetti');
        const size = Math.random() * 8 + 4;
        c.style.width = size + 'px';
        c.style.height = size + 'px';
        c.style.background = ['#FFD700','#FF6B6B','#4ECDC4'][i % 3];
        c.style.borderRadius = '50%';
        c.style.left = (Math.random() * 20 + 40) + '%';
        c.style.animationDuration = '1.2s';
        document.body.appendChild(c);
        setTimeout(() => c.remove(), 1500);
      }
    });
  });

  document.addEventListener('touchstart', function(){}, {passive: true});
})();