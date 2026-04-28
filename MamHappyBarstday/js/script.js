// Живая интерактивность — сюрприз с сердечками и уведомлением
const surpriseBtn = document.getElementById('surpriseBtn');
if (surpriseBtn) {
    surpriseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showFloatingHearts();
        const toast = document.createElement('div');
        toast.innerHTML = '💗 Мамочка, ты самая лучшая! Обнимаю крепко-крепко! 💗';
        toast.style.position = 'fixed';
        toast.style.bottom = '20px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.backgroundColor = '#fff2e4';
        toast.style.backdropFilter = 'blur(12px)';
        toast.style.color = '#9b4b2e';
        toast.style.padding = '14px 28px';
        toast.style.borderRadius = '80px';
        toast.style.fontWeight = '600';
        toast.style.fontSize = '1rem';
        toast.style.boxShadow = '0 12px 28px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,245,220,0.9)';
        toast.style.border = '1px solid #ffd9bd';
        toast.style.zIndex = '999';
        toast.style.fontFamily = "'Inter', sans-serif";
        toast.style.letterSpacing = '0.3px';
        toast.style.textAlign = 'center';
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease, transform 0.2s';
        document.body.appendChild(toast);
        setTimeout(() => { toast.style.opacity = '1'; }, 10);
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => {
                if (toast.parentNode) toast.remove();
            }, 300);
        }, 3200);
    });
}

function showFloatingHearts() {
    for (let i = 0; i < 18; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = ['❤️', '💖', '💗', '🌸', '🌺', '💝', '💞'][Math.floor(Math.random() * 7)];
        heart.style.position = 'fixed';
        heart.style.fontSize = (Math.random() * 20 + 18) + 'px';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.bottom = '0px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        heart.style.opacity = '0.9';
        heart.style.filter = 'drop-shadow(0 2px 6px rgba(0,0,0,0.1))';
        heart.style.transition = 'transform 1.2s cubic-bezier(0.2, 0.9, 0.4, 1.2), opacity 1s';
        document.body.appendChild(heart);
        const randomX = (Math.random() - 0.5) * 80;
        const duration = 1 + Math.random() * 1.2;
        heart.style.transform = `translateX(${randomX}px)`;
        heart.animate([
            { transform: 'translateY(0px) translateX(0px)', opacity: 0.9 },
            { transform: `translateY(-${120 + Math.random() * 150}px) translateX(${randomX * 1.5}px)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.3, 0.7, 0.5, 1)',
            fill: 'forwards'
        });
        setTimeout(() => {
            if (heart && heart.remove) heart.remove();
        }, duration * 1100);
    }
}

window.addEventListener('load', () => {
    setTimeout(() => {
        const welcomeMsg = document.createElement('div');
        welcomeMsg.innerText = '🌼🌷 Дорогая мама, с праздником! 🌷🌼';
        welcomeMsg.style.position = 'fixed';
        welcomeMsg.style.top = '20px';
        welcomeMsg.style.left = '50%';
        welcomeMsg.style.transform = 'translateX(-50%)';
        welcomeMsg.style.backgroundColor = '#ffefe3';
        welcomeMsg.style.color = '#bf7a53';
        welcomeMsg.style.padding = '8px 20px';
        welcomeMsg.style.borderRadius = '40px';
        welcomeMsg.style.fontWeight = '500';
        welcomeMsg.style.fontSize = '0.9rem';
        welcomeMsg.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)';
        welcomeMsg.style.border = '1px solid #ffdac2';
        welcomeMsg.style.zIndex = '100';
        welcomeMsg.style.backdropFilter = 'blur(8px)';
        welcomeMsg.style.fontFamily = "'Inter', sans-serif";
        welcomeMsg.style.opacity = '0';
        welcomeMsg.style.transition = 'opacity 0.5s';
        document.body.appendChild(welcomeMsg);
        setTimeout(() => { welcomeMsg.style.opacity = '1'; }, 50);
        setTimeout(() => {
            welcomeMsg.style.opacity = '0';
            setTimeout(() => welcomeMsg.remove(), 500);
        }, 3500);
    }, 600);
});

const heartIconElem = document.querySelector('.heart-icon');
if (heartIconElem) {
    heartIconElem.addEventListener('click', () => {
        const compliments = ['💐 Ты — мой ангел-хранитель!', '🌹 Самая нежная мама на свете!', '✨ Твоя забота бесценна ✨', '⭐ Ты — наша семейная звезда!'];
        const randomC = compliments[Math.floor(Math.random() * compliments.length)];
        const miniNote = document.createElement('div');
        miniNote.innerText = randomC;
        miniNote.style.position = 'fixed';
        miniNote.style.bottom = '70px';
        miniNote.style.left = '50%';
        miniNote.style.transform = 'translateX(-50%)';
        miniNote.style.backgroundColor = '#FBE9DF';
        miniNote.style.padding = '6px 18px';
        miniNote.style.borderRadius = '40px';
        miniNote.style.fontSize = '0.85rem';
        miniNote.style.fontWeight = '500';
        miniNote.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        miniNote.style.color = '#a5542d';
        miniNote.style.zIndex = '200';
        miniNote.style.pointerEvents = 'none';
        document.body.appendChild(miniNote);
        setTimeout(() => miniNote.remove(), 1800);
    });
}