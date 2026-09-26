(function () {
    const canvas = document.getElementById('drawCanvas');
    const ctx = canvas.getContext('2d');
    const clearBtn = document.getElementById('clearCanvasBtn');
    const saveBtn = document.getElementById('saveCanvasBtn');
    const saveStatus = document.getElementById('saveStatus');

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    // Настройки кисти
    const STROKE_STYLE = '#0d6efd';
    const LINE_WIDTH = 4;
    const LINE_CAP = 'round';
    const LINE_JOIN = 'round';

    function loadCanvasFromStorage() {
        const savedData = localStorage.getItem('algorithmCanvas');
        if (savedData) {
            const img = new Image();
            img.onload = function () {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0);
            };
            img.src = savedData;
            saveStatus.textContent = 'Сохранение: загружено из памяти!!!';
            setTimeout(() => { saveStatus.textContent = 'Сохранение: авто'; }, 2000);
        } else {
            // Если ничего нет — просто белый фон (по умолчанию!!!)
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
    }

    function saveCanvasToStorage() {
        try {
            const dataURL = canvas.toDataURL('image/png');
            localStorage.setItem('algorithmCanvas', dataURL);
            saveStatus.textContent = 'Сохранение: сохранено!!!';
            setTimeout(() => { saveStatus.textContent = 'Сохранение: авто'; }, 1500);
        } catch (e) {
            console.warn('Ошибка сохранения:', e);
            saveStatus.textContent = 'Ошибка сохранения';
        }
    }

    let saveTimeout;
    function scheduleAutoSave() {
        clearTimeout(saveTimeout);
        saveTimeout = setTimeout(() => {
            saveCanvasToStorage();
        }, 800); // сохраняем через 0.8 сек после последнего рисования
    }

    function getCoordinates(e) {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;   // учитываем масштабирование CSS
        const scaleY = canvas.height / rect.height;

        let clientX, clientY;

        if (e.touches) {
            // для touch-событий
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
            e.preventDefault(); // предотвращаем скролл на мобильных
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }

        const canvasX = (clientX - rect.left) * scaleX;
        const canvasY = (clientY - rect.top) * scaleY;
        return { x: canvasX, y: canvasY };
    }

    function startDrawing(e) {
        isDrawing = true;
        const coords = getCoordinates(e);
        lastX = coords.x;
        lastY = coords.y;

        // Начинаем путь и рисуем точку (чтобы одиночный клик оставлял след)
        ctx.beginPath();
        ctx.arc(lastX, lastY, LINE_WIDTH / 2, 0, Math.PI * 2);
        ctx.fillStyle = STROKE_STYLE;
        ctx.fill();
        // Для последующей линии
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
    }

    function draw(e) {
        if (!isDrawing) return;
        e.preventDefault(); // для touch

        const coords = getCoordinates(e);
        const currentX = coords.x;
        const currentY = coords.y;

        ctx.lineWidth = LINE_WIDTH;
        ctx.strokeStyle = STROKE_STYLE;
        ctx.lineCap = LINE_CAP;
        ctx.lineJoin = LINE_JOIN;

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();

        lastX = currentX;
        lastY = currentY;

        scheduleAutoSave();
    }

    function stopDrawing() {
        if (isDrawing) {
            isDrawing = false;
            // Принудительно сохраняем после завершения штриха
            scheduleAutoSave();
        }
    }

    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // Сохраняем пустой холст
        saveCanvasToStorage();
        saveStatus.textContent = 'Сохранение: очищено';
        setTimeout(() => { saveStatus.textContent = 'Сохранение: авто'; }, 1200);
    }

    function initEvents() {
        // Мышь
        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseleave', stopDrawing);

        // Тач-события
        canvas.addEventListener('touchstart', startDrawing, { passive: false });
        canvas.addEventListener('touchmove', draw, { passive: false });
        canvas.addEventListener('touchend', stopDrawing);
        canvas.addEventListener('touchcancel', stopDrawing);

        // Кнопки
        clearBtn.addEventListener('click', clearCanvas);
        saveBtn.addEventListener('click', function () {
            saveCanvasToStorage();
            saveStatus.textContent = 'Сохранение: сохранено!!!';
            setTimeout(() => { saveStatus.textContent = 'Сохранение: авто'; }, 1500);
        });
    }

    function init() {
        // Заливаем белым фоном (на случай если загрузка не удалась)
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Загружаем сохранённый рисунок
        loadCanvasFromStorage();

        // Навешиваем обработчики
        initEvents();
    }

    // Запускаем после полной загрузки DOM
    window.addEventListener('load', init);

    // Сохраняем при закрытии/перезагрузке страницы (на всякий случай!!!)
    window.addEventListener('beforeunload', function () {
        saveCanvasToStorage();
    });

})();