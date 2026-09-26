// Звёзды
const starsContainer = document.getElementById('stars')
for (let i = 0; i < 130; i++) {
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

const petals = ['🌸', '🌷', '🌹', '✨', '🌺', '🎁', '🌼']
for (let i = 0; i < 14; i++) {
  const p = document.createElement('div')
  p.className = 'petal'
  p.textContent = petals[Math.floor(Math.random() * petals.length)]
  p.style.left = Math.random() * 100 + '%'
  p.style.fontSize = Math.random() * 14 + 14 + 'px'
  const dur = Math.random() * 12 + 12
  p.style.animationDuration = dur + 's'
  p.style.animationDelay = Math.random() * -20 + 's'
  p.style.setProperty('--drift', Math.random() * 200 - 100 + 'px')
  document.body.appendChild(p)
}

// Конфетти
const confettiColors = [
  '#ff9ec7',
  '#ffd1dc',
  '#b48cff',
  '#ffd700',
  '#ff6b9d',
  '#ffffff',
  '#c39bff'
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

// Автосалют после загрузки
window.addEventListener('load', () => {
  setTimeout(() => createConfetti(80, true), 2200)
})

// Кнопка
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
