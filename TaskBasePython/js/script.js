const topicsData = [
    {
        name: "Основы", tasks: [
            { question: "Вывести 'Привет, мир!'", description: "Напишите программу, которая печатает фразу «Привет, мир!»", expected: "Привет, мир!", hint: "Используй print('Привет, мир!')" },
            { question: "Сложение двух чисел", description: "Пользователь вводит a и b, программа выводит их сумму.", expected: "Сумма = a + b", hint: "a = int(input()); b = int(input()); print(a+b)" },
            { question: "Переменная и тип", description: "Создайте переменную age = 25 и выведите её тип.", expected: "<class 'int'>", hint: "print(type(age))" },
            { question: "Конкатенация строк", description: "Сложите строки 'Python' и ' - лучший!'", expected: "Python - лучший!", hint: "print('Python' + ' - лучший!')" },
            { question: "Пользовательский ввод", description: "Спросите имя и выведите 'Привет, [имя]!'", expected: "Привет, Анна!", hint: "name = input(); print(f'Привет, {name}!')" }
        ]
    },
    {
        name: "Ветвление (if/else)", tasks: [
            { question: "Чётное или нечётное", description: "Проверить, чётное ли число. Вывести 'чёт' или 'нечёт'.", expected: "чёт / нечёт", hint: "if n % 2 == 0: print('чёт') else: print('нечёт')" },
            { question: "Максимум из двух", description: "Даны два числа, вывести большее.", expected: "большее число", hint: "if a > b: print(a) else: print(b)" },
            { question: "Год високосный", description: "Проверить, является ли год високосным.", expected: "Високосный / Нет", hint: "year % 4 == 0 and (year%100!=0 or year%400==0)" },
            { question: "Калькулятор знак", description: "Ввод чисел и операции + - * /, вывести результат.", expected: "результат", hint: "if op == '+': print(a+b) ..." },
            { question: "Оценка по баллам", description: "85+ = отлично, 70-84 = хорошо, <70 = учись!", expected: "отлично / хорошо / учись!", hint: "if score>=85: ... elif score>=70: ..." }
        ]
    },
    {
        name: "Циклы (for/while)", tasks: [
            { question: "Сумма 1 до N", description: "Вычислить сумму чисел от 1 до N.", expected: "Сумма", hint: "sum(range(1, n+1))" },
            { question: "Таблица умножения", description: "Вывести таблицу умножения на 5.", expected: "5x1=5 ... 5x10=50", hint: "for i in range(1,11): print(f'5 x {i} = {5*i}')" },
            { question: "Факториал числа", description: "Вычислить факториал N (N!).", expected: "число", hint: "res=1; for i in range(2,n+1): res*=i" },
            { question: "Числа Фибоначчи", description: "Вывести первые 10 чисел Фибоначчи.", expected: "0 1 1 2 3 5 8 13 21 34", hint: "a,b=0,1; for _ in range(10): print(a); a,b=b,a+b" },
            { question: "Простые числа до 50", description: "Вывести все простые числа до 50.", expected: "2 3 5 7 11 ...", hint: "Вложенный цикл и проверка делителей" }
        ]
    },
    {
        name: "Массивы (списки)", tasks: [
            { question: "Сумма элементов списка", description: "Дан список чисел, найти сумму.", expected: "сумма", hint: "sum(list)" },
            { question: "Поиск максимума", description: "Найти максимальное число в списке.", expected: "max", hint: "max(lst) или цикл" },
            { question: "Чётные числа из списка", description: "Создать новый список из чётных элементов.", expected: "[2,4,6]", hint: "[x for x in lst if x%2==0]" },
            { question: "Реверс списка", description: "Развернуть список без reverse().", expected: "[5,4,3,2,1]", hint: "lst[::-1] или цикл" },
            { question: "Удалить дубликаты", description: "Из списка удалить повторяющиеся элементы.", expected: "уникальные", hint: "list(set(lst))" }
        ]
    },
    {
        name: "Файлы", tasks: [
            { question: "Запись в файл", description: "Записать строку 'Hello file' в data.txt.", expected: "Файл создан", hint: "with open('data.txt','w') as f: f.write('Hello file')" },
            { question: "Чтение файла", description: "Прочитать и вывести содержимое data.txt.", expected: "Содержимое", hint: "with open('data.txt') as f: print(f.read())" },
            { question: "Подсчёт строк", description: "Подсчитать количество строк в файле.", expected: "число строк", hint: "len(open('file.txt').readlines())" },
            { question: "Копирование файла", description: "Скопировать содержимое из A в B.", expected: "копия", hint: "shutil.copy или read/write" },
            { question: "Поиск слова в файле", description: "Найти, встречается ли слово 'Python'.", expected: "Да/Нет", hint: "if 'Python' in f.read()" }
        ]
    },
    {
        name: "Функции", tasks: [
            { question: "Функция приветствия", description: "Создайте функцию greet(name), возвращает 'Привет, name'.", expected: "Привет, Анна", hint: "def greet(n): return f'Привет, {n}'" },
            { question: "Площадь прямоугольника", description: "Функция area(a,b) возвращает площадь.", expected: "a*b", hint: "return a*b" },
            { question: "Функция is_even", description: "Проверка на чётность (True/False).", expected: "True/False", hint: "return n%2==0" },
            { question: "Рекурсивный факториал", description: "Факториал через рекурсию.", expected: "число", hint: "if n==1: return 1 else n*fact(n-1)" },
            { question: "Функция с *args", description: "Суммирует произвольное количество чисел.", expected: "сумма", hint: "return sum(args)" }
        ]
    },
    {
        name: "Списки (продвинутые)", tasks: [
            { question: "Слияние списков", description: "Объединить два списка в один.", expected: "[1,2,3,4,5]", hint: "list1+list2" },
            { question: "Среднее арифметическое", description: "Найти среднее значение списка чисел.", expected: "float", hint: "sum(lst)/len(lst)" },
            { question: "Индексы элемента", description: "Найти все индексы вхождения x.", expected: "[0,2,4]", hint: "enumerate + list comprehension" },
            { question: "Список квадратов", description: "Создать список квадратов от 1 до N.", expected: "[1,4,9,...]", hint: "[i**2 for i in range(1,N+1)]" },
            { question: "Пересечение списков", description: "Найти общие элементы двух списков.", expected: "[2,3]", hint: "set(lst1) & set(lst2)" }
        ]
    },
    {
        name: "Черепашка (turtle)", tasks: [
            { question: "Нарисовать квадрат", description: "Черепашка рисует квадрат со стороной 100.", expected: "квадрат на экране", hint: "forward(100); right(90); повтор 4 раза" },
            { question: "Круг или окружность", description: "Нарисовать круг радиусом 50.", expected: "круг", hint: "turtle.circle(50)" },
            { question: "Звезда", description: "Нарисовать пятиконечную звезду.", expected: "звезда", hint: "угол 144 градуса, повтор 5 раз" },
            { question: "Спираль", description: "Рисуем растущую спираль.", expected: "спираль", hint: "for i in range(100): forward(i); right(90)" },
            { question: "Домик", description: "Квадрат + треугольная крыша.", expected: "домик", hint: "square + triangle (left(60) и тд)" }
        ]
    }
];

// Рендер всех тем и задач
const container = document.getElementById('topicsContainer');

function buildUI() {
    container.innerHTML = '';
    topicsData.forEach((topic, idxTopic) => {
        const topicDiv = document.createElement('div');
        topicDiv.className = 'topic-card';
        topicDiv.innerHTML = `
                <div class="topic-header">
                    <span class="topic-title">${topic.name}</span>
                    <span class="topic-count">${topic.tasks.length} задач</span>
                </div>
                <div class="tasks-list" id="tasks-${idxTopic}"></div>
            `;
        container.appendChild(topicDiv);
        const tasksContainer = topicDiv.querySelector(`.tasks-list`);
        topic.tasks.forEach((task, idxTask) => {
            const taskId = `task-${idxTopic}-${idxTask}`;
            const taskEl = document.createElement('div');
            taskEl.className = 'task-item';
            taskEl.innerHTML = `
                    <div class="task-question">
                        <span>${task.question}</span>
                        <span style="font-size:0.7rem; background:#EFF3F8; padding:0.2rem 0.6rem; border-radius:30px;">№${idxTask + 1}</span>
                    </div>
                    <div class="task-desc">${task.description}</div>
                    <div class="answer-hint-area">
                        <div class="expected-answer">Ожидаемый ответ: ${task.expected}</div>
                        <button class="hint-btn" data-id="${taskId}">Подсказка</button>
                    </div>
                    <div id="${taskId}" class="hint-text">${task.hint}</div>
                `;
            tasksContainer.appendChild(taskEl);
        });
    });

    // добавить обработчики подсказок
    document.querySelectorAll('.hint-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetId = btn.getAttribute('data-id');
            const hintDiv = document.getElementById(targetId);
            if (hintDiv) {
                hintDiv.classList.toggle('show');
            }
        });
    });
}

buildUI();

const canvas = document.getElementById('turtleCanvas');
const ctx = canvas.getContext('2d');
let width = 600, height = 400;
canvas.width = width;
canvas.height = height;

// состояние черепашки
let turtle = {
    x: width / 2,
    y: height / 2,
    angle: -90,   // градусы, 0 - вправо, -90 вверх (для удобства)
    penDown: true,
    color: '#1f6d5c'
};

function clearCanvas() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#fef9e8';
    ctx.fillRect(0, 0, width, height);
    // нарисовать лёгкую сетку
    ctx.beginPath();
    ctx.strokeStyle = '#ddd9cc';
    ctx.lineWidth = 0.5;
    for (let i = 0; i < width; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
        ctx.moveTo(0, i);
        ctx.lineTo(width, i);
        ctx.stroke();
    }
    // рисовать начальную точку
    ctx.beginPath();
    ctx.arc(turtle.x, turtle.y, 4, 0, 2 * Math.PI);
    ctx.fillStyle = '#289672';
    ctx.fill();
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(turtle.x, turtle.y, 2, 0, 2 * Math.PI);
    ctx.fill();
}

function forward(steps) {
    let rad = turtle.angle * Math.PI / 180;
    let newX = turtle.x + steps * Math.cos(rad);
    let newY = turtle.y + steps * Math.sin(rad);
    if (turtle.penDown) {
        ctx.beginPath();
        ctx.moveTo(turtle.x, turtle.y);
        ctx.lineTo(newX, newY);
        ctx.strokeStyle = turtle.color;
        ctx.lineWidth = 2.5;
        ctx.stroke();
    }
    turtle.x = newX;
    turtle.y = newY;
    // ограничения по краям (не уходим за край)
    turtle.x = Math.min(Math.max(turtle.x, 5), width - 5);
    turtle.y = Math.min(Math.max(turtle.y, 5), height - 5);
    drawCursor();
}

function right(deg) {
    turtle.angle += deg;
}

function left(deg) {
    turtle.angle -= deg;
}

function setPosition(x, y) {
    turtle.x = Math.min(Math.max(x, 5), width - 5);
    turtle.y = Math.min(Math.max(y, 5), height - 5);
    drawCursor();
}

function drawCursor() {
    // рисовать маленькую черепашку/курсор
    ctx.beginPath();
    ctx.arc(turtle.x, turtle.y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = '#289672';
    ctx.fill();
    ctx.fillStyle = '#f5f1e0';
    ctx.beginPath();
    ctx.arc(turtle.x, turtle.y, 2.2, 0, 2 * Math.PI);
    ctx.fill();
}

function resetTurtle() {
    turtle.x = width / 2;
    turtle.y = height / 2;
    turtle.angle = -90;
    turtle.penDown = true;
    turtle.color = '#1f6d5c';
    clearCanvas();
}

// команды для демо фигур (черепашковые задачи)
function drawSquareDemo() {
    resetTurtle();
    for (let i = 0; i < 4; i++) {
        forward(80);
        right(90);
    }
}
function drawStarDemo() {
    resetTurtle();
    setPosition(width / 2, height / 2 - 30);
    turtle.angle = -90;
    for (let i = 0; i < 5; i++) {
        forward(100);
        right(144);
    }
}
function drawSpiralDemo() {
    resetTurtle();
    setPosition(width / 2, height / 2);
    turtle.angle = -90;
    for (let i = 5; i < 120; i += 4) {
        forward(i);
        right(85);
    }
}

// интерактивное рисование мышкой (доп. удобство)
let drawing = false;
function getMousePos(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    let mouseX = (e.clientX - rect.left) * scaleX;
    let mouseY = (e.clientY - rect.top) * scaleY;
    mouseX = Math.min(Math.max(mouseX, 0), width);
    mouseY = Math.min(Math.max(mouseY, 0), height);
    return { mx: mouseX, my: mouseY };
}

canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    const { mx, my } = getMousePos(e);
    ctx.beginPath();
    ctx.moveTo(mx, my);
    turtle.x = mx;
    turtle.y = my;
    drawCursor();
    ctx.beginPath();
    ctx.moveTo(turtle.x, turtle.y);
});
canvas.addEventListener('mousemove', (e) => {
    if (!drawing) return;
    const { mx, my } = getMousePos(e);
    ctx.beginPath();
    ctx.moveTo(turtle.x, turtle.y);
    ctx.lineTo(mx, my);
    ctx.strokeStyle = turtle.color;
    ctx.lineWidth = 2.5;
    ctx.stroke();
    turtle.x = mx;
    turtle.y = my;
    drawCursor();
});
canvas.addEventListener('mouseup', () => { drawing = false; });
canvas.addEventListener('mouseleave', () => { drawing = false; });

document.getElementById('clearCanvasBtn').addEventListener('click', () => resetTurtle());
document.getElementById('drawSquareBtn').addEventListener('click', () => drawSquareDemo());
document.getElementById('drawStarBtn').addEventListener('click', () => drawStarDemo());
document.getElementById('drawSpiralBtn').addEventListener('click', () => drawSpiralDemo());

// инициализация холста
resetTurtle();

// дополнительно небольшой адаптив canvas по размерам родителя (без деформации)
function resizeCanvasDisplay() {
    // сохраняем внутреннее разрешение 600x400
    canvas.style.width = '100%';
    canvas.style.height = 'auto';
}
window.addEventListener('resize', resizeCanvasDisplay);
resizeCanvasDisplay();