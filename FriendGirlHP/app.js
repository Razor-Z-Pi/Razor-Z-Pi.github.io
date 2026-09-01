(function () {
  const btn = document.getElementById('surpriseBtn')
  const hiddenMsg = document.getElementById('hiddenMessage')

  if (btn && hiddenMsg) {
    btn.addEventListener('click', function () {
      hiddenMsg.classList.toggle('show')
      if (hiddenMsg.classList.contains('show')) {
        btn.innerHTML = 'С днём рождения!!!'
        btn.style.transform = 'scale(0.96)'
        setTimeout(() => {
          btn.style.transform = 'translateY(-4px)'
        }, 150)
      } else {
        btn.innerHTML = 'Открыть сюрприз!!!'
        btn.style.transform = 'translateY(0)'
      }
    })
  }

  const canvas = document.getElementById('fireworks-canvas')
  const ctx = canvas.getContext('2d')
  let width, height
  let particles = []
  let rockets = []
  let animationFrame
  let launchInterval = null
  let rocketsLaunched = 0
  const MAX_ROCKETS = 18 // всего ракет за весь салют
  const INITIAL_BURST = 6 // ракеты в первом залпе

  // Функция обновления размеров canvas
  function resizeCanvas () {
    width = window.innerWidth
    height = window.innerHeight
    canvas.width = width
    canvas.height = height
  }
  window.addEventListener('resize', resizeCanvas)
  resizeCanvas()

  // Генерация случайного числа
  function random (min, max) {
    return Math.random() * (max - min) + min
  }

  // Класс частицы (искры)
  class Particle {
    constructor (x, y, color, velocity, life, size) {
      this.x = x
      this.y = y
      this.color = color
      this.velocity = velocity
      this.life = life
      this.maxLife = life
      this.size = size || random(1.5, 3.5)
      this.alpha = 1
    }
    update () {
      this.velocity.y += 0.04
      this.x += this.velocity.x
      this.y += this.velocity.y
      this.life--
      this.alpha = this.life / this.maxLife
    }
    draw () {
      ctx.save()
      ctx.globalAlpha = this.alpha * 0.8 // делаем чуть прозрачнее, чтобы не мешали
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fillStyle = this.color
      ctx.fill()
      ctx.shadowBlur = 8
      ctx.shadowColor = this.color
      ctx.restore()
    }
  }

  // Класс ракеты
  class Rocket {
    constructor (x, targetY) {
      this.x = x
      this.y = height
      this.targetY = targetY || random(height * 0.2, height * 0.45)
      this.velocity = random(7, 10)
      this.angle = -Math.PI / 2 + random(-0.2, 0.2)
      this.trail = []
      this.color = `hsl(${random(0, 360)}, 90%, 65%)`
      this.exploded = false
    }

    update () {
      if (this.exploded) return

      this.x += Math.cos(this.angle) * this.velocity
      this.y += Math.sin(this.angle) * this.velocity

      this.trail.push({ x: this.x, y: this.y, alpha: 1 })
      if (this.trail.length > 10) this.trail.shift()

      if (this.y <= this.targetY || this.y < 0) {
        this.explode()
      }
    }

    explode () {
      this.exploded = true
      const explosionCount = Math.floor(random(25, 50)) // меньше частиц, чем раньше
      for (let i = 0; i < explosionCount; i++) {
        const angle = random(0, Math.PI * 2)
        const speed = random(1, 5)
        const velocity = {
          x: Math.cos(angle) * speed,
          y: Math.sin(angle) * speed
        }
        const life = random(20, 50)
        const size = random(1.5, 3)
        particles.push(
          new Particle(this.x, this.y, this.color, velocity, life, size)
        )
      }
      // Белая вспышка
      for (let i = 0; i < 10; i++) {
        const angle = random(0, Math.PI * 2)
        const speed = random(0.5, 1.5)
        const velocity = {
          x: Math.cos(angle) * speed,
          y: Math.sin(angle) * speed
        }
        particles.push(
          new Particle(this.x, this.y, '#ffffff', velocity, 12, 2.2)
        )
      }
    }

    draw () {
      for (let i = 0; i < this.trail.length; i++) {
        const t = this.trail[i]
        ctx.save()
        ctx.globalAlpha = (i / this.trail.length) * 0.5
        ctx.beginPath()
        ctx.arc(t.x, t.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.restore()
      }
      ctx.save()
      ctx.beginPath()
      ctx.arc(this.x, this.y, 4, 0, Math.PI * 2)
      ctx.fillStyle = '#fff'
      ctx.shadowBlur = 10
      ctx.shadowColor = this.color
      ctx.fill()
      ctx.restore()
    }
  }

  function launchRocket () {
    if (rocketsLaunched >= MAX_ROCKETS) {
      // Если превышен лимит, останавливаем интервал
      if (launchInterval) {
        clearInterval(launchInterval)
        launchInterval = null
      }
      return false
    }
    const x = random(width * 0.15, width * 0.85)
    const targetY = random(height * 0.2, height * 0.5)
    rockets.push(new Rocket(x, targetY))
    rocketsLaunched++
    return true
  }

  function update () {
    for (let i = rockets.length - 1; i >= 0; i--) {
      rockets[i].update()
      if (rockets[i].exploded) {
        rockets.splice(i, 1)
      }
    }

    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update()
      if (particles[i].life <= 0 || particles[i].alpha <= 0.02) {
        particles.splice(i, 1)
      }
    }
  }

  function draw () {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.12)' // лёгкое затухание
    ctx.fillRect(0, 0, width, height)

    for (const rocket of rockets) {
      rocket.draw()
    }
    for (const p of particles) {
      p.draw()
    }
  }

  function animate () {
    update()
    draw()
    animationFrame = requestAnimationFrame(animate)
  }

  animate()

  // Функция старта салюта: несколько залпов и остановка
  function startFireworksShow () {
    // Первый залп (несколько ракет сразу)
    for (let i = 0; i < INITIAL_BURST; i++) {
      setTimeout(() => {
        if (launchRocket()) {
          // Если ракета запущена, продолжаем
        }
      }, i * 250) // небольшая задержка для красоты
    }

    // Затем запускаем по одной ракете с интервалом, пока не достигнем лимита
    launchInterval = setInterval(() => {
      const launched = launchRocket()
      if (!launched) {
        // Если лимит исчерпан, останавливаем интервал
        if (launchInterval) {
          clearInterval(launchInterval)
          launchInterval = null
        }
        // Дополнительно: через 2 секунды после остановки можно полностью очистить частицы (не обязательно)
        setTimeout(() => {
          // Мягко гасим всё (необязательно)
        }, 2000)
      }
    }, 400) // интервал 400мс между ракетами
  }

  // Запускаем салют при загрузке
  window.addEventListener('load', () => {
    startFireworksShow()
  })

  if (document.readyState === 'complete') {
    startFireworksShow()
  }

  // Очистка при уходе
  window.addEventListener('beforeunload', () => {
    if (animationFrame) cancelAnimationFrame(animationFrame)
    if (launchInterval) clearInterval(launchInterval)
  })
})()