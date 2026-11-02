(function () {
  'use strict';

  (function matrixRain() {
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');
    const glyphs = '01{}<>/*=+-;:[]()#&%'.split('');
    let cols = 0, drops = [], fontSize = 16, width = 0, height = 0;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      fontSize = window.innerWidth < 640 ? 13 : 17;
      cols = Math.ceil(width / fontSize);
      drops = new Array(cols).fill(0).map(() => Math.random() * -80);
      ctx.fillStyle = '#05070d';
      ctx.fillRect(0, 0, width, height);
    }

    resize();
    window.addEventListener('resize', resize, { passive: true });

    let last = 0;
    function frame(t) {
      requestAnimationFrame(frame);
      if (t - last < 58) return;
      last = t;

      ctx.fillStyle = 'rgba(5,7,13,0.13)';
      ctx.fillRect(0, 0, width, height);
      ctx.font = fontSize + 'px "JetBrains Mono", monospace';

      for (let i = 0; i < cols; i++) {
        const ch = glyphs[(Math.random() * glyphs.length) | 0];
        const y = drops[i] * fontSize;

        if (Math.random() > 0.975) {
          ctx.fillStyle = 'rgba(244,114,182,0.85)';
        } else if (Math.random() > 0.93) {
          ctx.fillStyle = 'rgba(167,139,250,0.7)';
        } else {
          ctx.fillStyle = 'rgba(34,211,238,0.68)';
        }

        ctx.fillText(ch, i * fontSize, y);

        if (y > height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 1;
      }
    }
    requestAnimationFrame(frame);
  })();

  const now = new Date();
  const pad = n => String(n).padStart(2, '0');

  const termEl = document.getElementById('term');
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  const script = [
    { cls: 'cmd', prompt: '$ ', text: 'whoami', speed: 62 },
    { cls: 'out', prompt: '> ', text: 'преподаватель * наставник * мастер', speed: 18 },
    { cls: 'cmd', prompt: '$ ', text: 'cat wishes.txt', speed: 55 },
    { cls: 'out', prompt: '> ', text: 'пусть код жизни компилируется без ошибок,', speed: 15 },
    { cls: 'out', prompt: '> ', text: 'а дедлайны остаются только у счастья', speed: 15 },
    { cls: 'cmd', prompt: '$ ', text: './celebrate --now', speed: 55 },
    { cls: 'out hl', prompt: '> ', text: 'С ДНЁМ РОЖДЕНИЯ!!!', speed: 55 }
  ];

  async function typeLine(line) {
    const row = document.createElement('div');
    row.className = line.cls;

    const pre = document.createElement('span');
    pre.className = 'prompt';
    pre.textContent = line.prompt;
    row.appendChild(pre);

    const textSpan = document.createElement('span');
    row.appendChild(textSpan);

    const caret = document.createElement('span');
    caret.className = 'caret';
    row.appendChild(caret);

    termEl.appendChild(row);

    for (let i = 0; i < line.text.length; i++) {
      textSpan.textContent += line.text[i];
      await sleep(line.speed);
    }

    caret.remove();
    await sleep(line.cls === 'cmd' ? 260 : 200);
  }

  (async function runTerminal() {
    await sleep(420);
    for (const line of script) {
      await typeLine(line);
    }
    const end = document.createElement('div');
    end.className = 'cmd';
    end.innerHTML = '<span class="prompt">$ </span><span class="caret"></span>';
    termEl.appendChild(end);
  })();

  const codeEl = document.getElementById('code');
  document.querySelectorAll('#code .ln').forEach((el, i) => {
    el.style.setProperty('--d', (i * 0.055).toFixed(3) + 's');
  });

  const stats = document.querySelectorAll('[data-stat]');
  const statObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.35 });

  stats.forEach((s, i) => {
    setTimeout(() => statObserver.observe(s), i * 60);
  });

  const codeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        codeEl.classList.add('on');
        codeObserver.unobserve(codeEl);
      }
    });
  }, { threshold: 0.12 });
  codeObserver.observe(codeEl);
  
  // Конфети
  const COLORS = ['#22d3ee', '#f472b6', '#a78bfa', '#34d399', '#fbbf24', '#eaf6ff'];

  function burst(count) {
    for (let i = 0; i < count; i++) {
      const piece = document.createElement('i');
      piece.className = 'confetti';

      const size = 4 + Math.random() * 7; // различные вычесления для размеров, цветов и анимаций
      piece.style.left = Math.random() * 100 + 'vw';
      piece.style.width = size + 'px';
      piece.style.height = (size * (0.6 + Math.random() * 0.8)) + 'px';
      piece.style.background = COLORS[(Math.random() * COLORS.length) | 0];
      piece.style.animationDelay = (Math.random() * 0.7).toFixed(2) + 's';
      piece.style.animationDuration = (2.1 + Math.random() * 2.2).toFixed(2) + 's';

      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 5200);
    }
  }

  const btn = document.getElementById('runBtn');
  const reveal = document.getElementById('reveal');
  const hint = document.getElementById('hint');
  let fired = false;

  btn.addEventListener('click', () => {
    if (fired) {
      reveal.classList.toggle('on');
      return;
    }
    fired = true;

    reveal.classList.add('on');
    burst(80);
    setTimeout(() => burst(50), 420);

    btn.textContent = '// build successful';
    btn.style.borderColor = 'rgba(52,211,153,.6)';
    hint.textContent = '// поздравление доставлено, exit code 0';
    hint.style.color = '#34d399';

    setTimeout(() => {
      reveal.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 220);
  });

})();