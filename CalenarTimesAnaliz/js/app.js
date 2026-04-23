(function () {
    const ctxCollision = document.getElementById('collisionFullChart').getContext('2d');
    const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    const expectedPlan = [42, 48, 55, 52, 46, 30, 20];
    const actualCollision = [45, 68, 82, 91, 57, 33, 22];

    new Chart(ctxCollision, {
        type: 'line',
        data: {
            labels: days,
            datasets: [
                {
                    label: 'Ожидание (плавный план / обычный календарь)',
                    data: expectedPlan,
                    borderColor: '#2c9b6e',
                    backgroundColor: 'rgba(44, 155, 110, 0.03)',
                    borderWidth: 3,
                    pointRadius: 5,
                    pointBackgroundColor: '#1e7a5c',
                    pointBorderColor: '#fff',
                    tension: 0.3,
                    fill: false,
                    borderDash: [6, 6],
                },
                {
                    label: 'Реальность (коллизии, невидимые пересечения)',
                    data: actualCollision,
                    borderColor: '#e63946',
                    backgroundColor: 'rgba(230, 57, 70, 0.08)',
                    borderWidth: 3.5,
                    pointRadius: 5,
                    pointBackgroundColor: '#c72a3a',
                    pointBorderColor: '#fff',
                    tension: 0.2,
                    fill: true,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                tooltip: { mode: 'index', intersect: false, callbacks: { label: (ctx) => `${ctx.dataset.label}: ${ctx.raw}% загрузки` } },
                legend: { position: 'top', labels: { font: { size: 12, weight: 'bold' } } }
            },
            scales: {
                y: { title: { display: true, text: 'Загрузка ресурса (%)', font: { weight: 'bold' } }, beginAtZero: true, max: 105, grid: { color: '#d0e2ec' } },
                x: { title: { display: true, text: 'Дни недели (временная ось)', font: { size: 11 } } }
            }
        }
    });

    const ctxScaling = document.getElementById('scalingFullChart').getContext('2d');
    const processes = [5, 10, 20, 35, 50];
    const classicCoordination = [8, 18, 42, 72, 110];   // часы в неделю
    const ourSolutionCoordination = [7, 12, 18, 26, 34]; // эффективное планирование

    new Chart(ctxScaling, {
        type: 'line',
        data: {
            labels: processes,
            datasets: [
                {
                    label: 'Обычный календарь / Excel / Trello (экспонента хаоса)',
                    data: classicCoordination,
                    borderColor: '#d9534f',
                    backgroundColor: 'rgba(217, 83, 79, 0.05)',
                    borderWidth: 3.5,
                    pointRadius: 6,
                    pointBackgroundColor: '#b33c38',
                    tension: 0.2,
                    fill: false,
                },
                {
                    label: 'Временной календарь событий (лицензированный победитель конкурса)',
                    data: ourSolutionCoordination,
                    borderColor: '#1f7a8c',
                    backgroundColor: 'rgba(31, 122, 140, 0.1)',
                    borderWidth: 4,
                    pointRadius: 6,
                    pointBackgroundColor: '#0e5a68',
                    pointBorderColor: '#fff',
                    tension: 0.3,
                    fill: false,
                    borderDash: [3, 4],
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                tooltip: { callbacks: { label: (ctx) => `${ctx.dataset.label}: ${ctx.raw} ч/неделю` } },
                legend: { position: 'top' }
            },
            scales: {
                y: { title: { display: true, text: '⏱ Время на координацию (часов в неделю)', font: { weight: 'bold' } }, beginAtZero: true, grid: { color: '#cbdde6' } },
                x: { title: { display: true, text: 'Количество параллельных бизнес-процессов', font: { size: 11 } } }
            }
        }
    });

    const ctxBlind = document.getElementById('blindFullChart').getContext('2d');
    const stages = ['Заявка', 'Согласование', 'Производство', 'Отгрузка', 'Оплата'];
    const visibleDays = [0, 2, 5, 7, 10];      // календарь видит только события
    const realDuration = [0, 3.8, 9.2, 13.5, 17.8]; // реальные дни с учётом "слепых зон"

    new Chart(ctxBlind, {
        type: 'line',
        data: {
            labels: stages,
            datasets: [
                {
                    label: '● Видимое в календаре (только точки встреч/дедлайнов)',
                    data: visibleDays,
                    borderColor: '#f39c12',
                    backgroundColor: 'rgba(243, 156, 18, 0.05)',
                    borderWidth: 3,
                    pointRadius: 7,
                    pointBackgroundColor: '#e67e22',
                    pointBorderColor: '#fff',
                    pointStyle: 'circle',
                    tension: 0.1,
                    fill: false,
                },
                {
                    label: '■ Реальная длительность процесса (скрытые интервалы, ожидания, передача данных)',
                    data: realDuration,
                    borderColor: '#b03a2e',
                    backgroundColor: 'rgba(176, 58, 46, 0.1)',
                    borderWidth: 3.8,
                    pointRadius: 6,
                    pointBackgroundColor: '#8e2c21',
                    pointBorderColor: '#ffe5d9',
                    tension: 0.2,
                    fill: true,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                tooltip: { callbacks: { label: (ctx) => `${ctx.dataset.label}: ${ctx.raw} дней (накоплено)` } },
                legend: { position: 'top', labels: { font: { size: 11 } } }
            },
            scales: {
                y: { title: { display: true, text: 'Накопленное время (дни)', font: { weight: 'bold' } }, beginAtZero: true, max: 20, grid: { color: '#cee0e9' } },
                x: { title: { display: true, text: 'Этапы бизнес-процесса', font: { size: 12 } } }
            }
        }
    });

    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    function updateActiveDot() {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        let activeIndex = 0;
        for (let i = 0; i < slides.length; i++) {
            const slideTop = slides[i].offsetTop;
            if (scrollTop >= slideTop - windowHeight * 0.3) {
                activeIndex = i;
            }
        }
        dots.forEach((dot, idx) => {
            if (idx === activeIndex) dot.classList.add('active');
            else dot.classList.remove('active');
        });
    }

    // клик по точкам — плавный переход к слайду
    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            slides[idx].scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    window.addEventListener('scroll', () => {
        requestAnimationFrame(updateActiveDot);
    });
    window.addEventListener('resize', () => updateActiveDot());
    updateActiveDot();

    // небольшая коррекция при загрузке (чтобы canvas не "съеживались" на мобильных)
    const resizeCharts = () => {
        [ctxCollision, ctxScaling, ctxBlind].forEach(chartInstance => {
            if (chartInstance && chartInstance.canvas) {
                // перерисовка через requestAnimationFrame (обновляет размеры)
                setTimeout(() => {
                    if (chartInstance.resize) chartInstance.resize();
                }, 80);
            }
        });
    };
    window.addEventListener('resize', resizeCharts);
    resizeCharts();
})();