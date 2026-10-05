(function () {
  const leafCount = 18;
  for (let i = 0; i < leafCount; i++) {
    const leaf = document.createElement('div');
    leaf.className = 'leaf';
    leaf.style.left = Math.random() * 100 + '%';
    const size = Math.random() * 14 + 14; // 14 – 28px
    leaf.style.width = size + 'px';
    leaf.style.height = size + 'px';
    leaf.style.animationDuration = (Math.random() * 8 + 9) + 's';
    leaf.style.animationDelay = (Math.random() * -22) + 's';
    leaf.style.opacity = Math.random() * 0.3 + 0.3;
    document.body.appendChild(leaf);
  }
  
  const wishBtn = document.getElementById('wishBtn');
  const toast = document.getElementById('toast');

  const toastMessages = [
    'Пусть каждый день радует!',
    'Мудрости и вдохновения!',
    'Тёплой и уютной осени!',
    'Хорошего вам настроения!',
    'Пусть исполняться все ваши мечты и желании!',
  ];

  let toastTimer;

  function showToast() {
    const randomIndex = Math.floor(Math.random() * toastMessages.length);
    toast.textContent = toastMessages[randomIndex];

    if (toastTimer) clearTimeout(toastTimer);
    toast.classList.add('show');

    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  wishBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showToast();
    if (navigator.vibrate) navigator.vibrate(30);
  });

  const card = document.querySelector('.card');

  if (window.matchMedia('(pointer: fine)').matches) {
    let rafId = null;

    document.addEventListener('mousemove', (e) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 6;
        const y = (e.clientY / window.innerHeight - 0.5) * 4;
        card.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y * 0.5}deg) translateY(-2px)`;
        card.style.transition = 'transform 0.1s ease-out, box-shadow 0.4s';
      });
    });

    document.addEventListener('mouseleave', () => {
      if (rafId) cancelAnimationFrame(rafId);
      card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0)';
      card.style.transition = 'transform 0.5s ease, box-shadow 0.4s';
    });
  }

  card.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') {
      card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0)';
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth < 700) {
      card.style.transform = 'none';
    }
  });

  window.addEventListener('load', () => {
    setTimeout(() => {
      card.style.transform = 'scale(1.005)';
      setTimeout(() => {
        card.style.transform = 'scale(1)';
      }, 200);
    }, 300);
  });
})();