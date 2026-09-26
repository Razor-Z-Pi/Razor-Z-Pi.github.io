// Генерация звёзд
const starsContainer = document.getElementById('stars')
const starCount = 120
for (let i = 0; i < starCount; i++) {
  const star = document.createElement('div')
  star.className = 'star'
  const size = Math.random() * 2.5 + 1
  star.style.width = size + 'px'
  star.style.height = size + 'px'
  star.style.left = Math.random() * 100 + '%'
  star.style.top = Math.random() * 100 + '%'
  star.style.setProperty('--dur', Math.random() * 3 + 2 + 's')
  star.style.animationDelay = Math.random() * 5 + 's'
  starsContainer.appendChild(star)
}

// Летающие шарики
const balloonColors = [
  '#ff6b9d',
  '#ffd700',
  '#4ecdc4',
  '#a29bfe',
  '#ff9a76',
  '#74b9ff'
]

for (let i = 0; i < 8; i++) {
  const b = document.createElement('div')
  b.className = 'balloon'
  b.style.left = Math.random() * 100 + '%'
  b.style.background = `radial-gradient(circle at 30% 30%, #fff, ${
    balloonColors[i % balloonColors.length]
  })`
  const dur = Math.random() * 12 + 14
  b.style.animationDuration = dur + 's'
  b.style.animationDelay = Math.random() * -20 + 's'
  b.style.setProperty('--drift', Math.random() * 200 - 100 + 'px')
  b.style.opacity = 0.5 + Math.random() * 0.3
  document.body.appendChild(b)
}

// Конфетти
const confettiColors = [
  '#ff6b9d',
  '#ffd700',
  '#4ecdc4',
  '#a29bfe',
  '#ff9a76',
  '#74b9ff',
  '#ff5e5e'
]

function createConfetti (count = 60, burst = false) {
  for (let i = 0; i < count; i++) {
    const c = document.createElement('div')
    c.className = 'confetti'
    c.style.left = Math.random() * 100 + '%'
    c.style.background =
      confettiColors[Math.floor(Math.random() * confettiColors.length)]
    c.style.width = Math.random() * 6 + 5 + 'px'
    c.style.height = Math.random() * 10 + 8 + 'px'
    const dur = Math.random() * 2.5 + 2.5
    c.style.animationDuration = dur + 's'
    c.style.animationDelay = burst
      ? Math.random() * 0.5 + 's'
      : Math.random() * 2 + 's'
    if (Math.random() > 0.5) c.style.borderRadius = '50%'
    document.body.appendChild(c)
    setTimeout(() => c.remove(), (dur + 2) * 1000)
  }
}

// Автоматический салют при загрузке
window.addEventListener('load', () => {
  setTimeout(() => createConfetti(80, true), 2200)
})

// Кнопка салюта
document.getElementById('celebrateBtn').addEventListener('click', () => {
  createConfetti(120, true)
  setTimeout(() => createConfetti(80, true), 400)
  setTimeout(() => createConfetti(60, true), 800)

  const btn = document.getElementById('celebrateBtn')
  btn.textContent = 'С днём рождения!!!'
  setTimeout(() => (btn.textContent = 'Запустить салют!!!'), 2500)
})

if (window.matchMedia('(hover: hover)').matches) {
  const card = document.querySelector('.card')
  document.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 8
    const y = (e.clientY / window.innerHeight - 0.5) * 8
    card.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) translateZ(0)`
  })
  document.addEventListener('mouseleave', () => {
    card.style.transform = ''
  })
}
