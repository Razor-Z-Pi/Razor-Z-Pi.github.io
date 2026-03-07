document.addEventListener('DOMContentLoaded', () => {  
    // Добавляем стили для конфетти в CSS (если их нет)
    const style = document.createElement('style');
    style.textContent = `
        @keyframes confettiFall {
            0% {
                transform: translateY(-10vh) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(110vh) rotate(720deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Создаем падающие цветы
    const createFallingFlowers = () => {
        const flowersContainer = document.querySelector('.flowers');
        const flowerSymbols = ['🌸', '🌷', '🌹', '🌼', '🌺', '🌸', '🌷', '🌹'];
        
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const flower = document.createElement('span');
                const randomFlower = flowerSymbols[Math.floor(Math.random() * flowerSymbols.length)];
                const left = Math.random() * 100;
                const size = Math.random() * 20 + 15;
                const duration = Math.random() * 10 + 15;
                const delay = Math.random() * -20;
                
                flower.textContent = randomFlower;
                flower.style.cssText = `
                    position: absolute;
                    left: ${left}%;
                    font-size: ${size}px;
                    opacity: ${Math.random() * 0.5 + 0.3};
                    animation: fall ${duration}s linear infinite;
                    animation-delay: ${delay}s;
                    pointer-events: none;
                    z-index: 0;
                `;
                
                flowersContainer.appendChild(flower);
            }, i * 200); // Добавляем с интервалом для разнообразия
        }
    };
    
    createFallingFlowers();
});