 // Загрузка фото
 const userPhoto = document.getElementById('userPhoto');
 userPhoto.style.display = 'block';
 createHearts();
 
 // Сообщения от участников BTS
 const members = document.querySelectorAll('.member');
 const messageBox = document.getElementById('messageBox');
 const messageText = document.getElementById('messageText');
 const idolPopup = document.getElementById('idolPopup');
 const popupIdolImage = document.getElementById('popupIdolImage');
 const popupMessage = document.getElementById('popupMessage');
 const leftIdol = document.getElementById('leftIdol');
 const rightIdol = document.getElementById('rightIdol');
 
 const messages = {
     jin: [
         "Твоя улыбка ярче, чем моя Worldwide Handsome улыбка!",
         "Ты так прекрасна, как редкий изумрудик!",
         "Если бы ты была эпицентром, я бы хотел быть твоим землетрясением!"
     ],
     suga: [
         "Твоя красота вдохновляет, как мои лучшие стихи.",
         "Ты - мьюза, которую я искал всю жизнь.",
         "Даже моя серьёзность тает перед твоей улыбкой."
     ],
     jhope: [
         "Твоя энергия заряжает лучше, чем мой солнечный свет!",
         "Ты заставляешь мое сердце танцевать!",
         "С тобой каждый день - Hope Day!"
     ],
     rm: [
         "Твоя красота глубже, чем самые мудрые цитаты.",
         "Ты - самое поэтичное, что я когда-либо видел.",
         "Бум, насколько ты прекрасна."
     ],
     jimin: [
         "Ты сияешь ярче, чем я на сцене!",
         "Твои глаза прекрасны, как мои любимые фильмы.",
         "Я бы спел Serendipity только для тебя."
     ],
     v: [
         "Ты - произведение искусства, достойное Лувра.",
         "Твоя красота уникальна, как мой вкус в искусстве.",
         "Я бы хотел сфотографировать тебя в своем стиле."
     ],
     jungkook: [
         "Ты - мое вдохновение, как музыка для меня.",
         "Твоя улыбка заставляет мое сердце биться быстрее.",
         "Я бы спел Euphoria только для тебя."
     ]
 };
 
 const memberImages = {
     jin: "./image/Jin.png",
     suga: "./image/Suga.jpg",
     jhope: "./image/J-Hope.jpg",
     rm: "./image/RM.jpg",
     jimin: "./image/Jimin.png",
     v: "./image/V.jpg",
     jungkook: "./image/Jungkook.jpg"
 };
 
 members.forEach(member => {
     member.addEventListener('click', () => {
         const memberName = member.getAttribute('data-member');
         const randomMessage = messages[memberName][Math.floor(Math.random() * messages[memberName].length)];
         
         messageText.textContent = randomMessage;
         messageBox.classList.add('show');
         
         // Показываем попап с участником
         popupIdolImage.src = memberImages[memberName];
         popupMessage.textContent = randomMessage;
         idolPopup.classList.add('show');
         
         // Создаем конфетти
         createConfetti();
         
         // Скрываем попап через 5 секунд
         setTimeout(() => {
             idolPopup.classList.remove('show');
         }, 5000);
     });
 });
 
 // Музыкальный плеер
 const musicPlayer = document.getElementById('musicPlayer');
 const playBtn = document.getElementById('playBtn');
 const prevBtn = document.getElementById('prevBtn');
 const nextBtn = document.getElementById('nextBtn');
 const songTitle = document.querySelector('.song-title');
 
 const songs = [
     { title: "Idol", artist: "BTS", src: "./music/Idol.mp3" },
     { title: "Butter", artist: "BTS", src: "./music/Butter.mp3" },
     { title: "Dynamite", artist: "BTS", src: "./music/Dynamite.mp3" }
 ];
 
 let currentSong = 0;
 
 function loadSong(songIndex) {
     const song = songs[songIndex];
     songTitle.textContent = song.title;
     document.querySelector('.artist').textContent = song.artist;
     musicPlayer.src = song.src;
     
     if (playBtn.textContent === '⏸') {
         musicPlayer.play();
     }
 }
 
 // Автоматическое воспроизведение музыки при загрузке страницы
 document.addEventListener('DOMContentLoaded', () => {
     musicPlayer.play();
     playBtn.textContent = '⏸';
 });
 
 playBtn.addEventListener('click', () => {
     if (musicPlayer.paused) {
         musicPlayer.play();
         playBtn.textContent = '⏸';
     } else {
         musicPlayer.pause();
         playBtn.textContent = '▶';
     }
 });
 
 prevBtn.addEventListener('click', () => {
     currentSong = (currentSong - 1 + songs.length) % songs.length;
     loadSong(currentSong);
 });
 
 nextBtn.addEventListener('click', () => {
     currentSong = (currentSong + 1) % songs.length;
     loadSong(currentSong);
 });
 
 musicPlayer.addEventListener('ended', () => {
     nextBtn.click();
 });
 
 // Загружаем первую песню
 loadSong(currentSong);
 
 // Создание сердечек
 function createHearts() {
     const heartsContainer = document.getElementById('hearts');
     heartsContainer.innerHTML = '';
     
     for (let i = 0; i < 50; i++) {
         setTimeout(() => {
             const heart = document.createElement('div');
             heart.classList.add('heart');
             heart.innerHTML = '❤';
             heart.style.left = Math.random() * 100 + 'vw';
             heart.style.animationDuration = Math.random() * 3 + 2 + 's';
             heartsContainer.appendChild(heart);
             
             setTimeout(() => {
                 heart.remove();
             }, 5000);
         }, i * 100);
     }
 }
 
 // Создание конфетти
 function createConfetti() {
     const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
     
     for (let i = 0; i < 100; i++) {
         setTimeout(() => {
             const confetti = document.createElement('div');
             confetti.classList.add('confetti');
             confetti.style.left = Math.random() * 100 + 'vw';
             confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
             confetti.style.width = Math.random() * 10 + 5 + 'px';
             confetti.style.height = Math.random() * 10 + 5 + 'px';
             document.body.appendChild(confetti);
             
             setTimeout(() => {
                 confetti.remove();
             }, 3000);
         }, i * 10);
     }
 }
 
 // Случайные появления участников в центре
 setInterval(() => {
     if (Math.random() > 0.7) {
         const randomMember = members[Math.floor(Math.random() * members.length)];
         randomMember.style.transform = 'scale(1.2)';
         
         setTimeout(() => {
             randomMember.style.transform = 'scale(1)';
         }, 1000);
     }
 }, 5000);
 
 // Появление боковых айдолов
 function showSideIdol() {
     const side = Math.random() > 0.5 ? 'left' : 'right';
     const idol = side === 'left' ? leftIdol : rightIdol;
     const memberNames = Object.keys(memberImages);
     const randomMember = memberNames[Math.floor(Math.random() * memberNames.length)];
     
     // Устанавливаем случайного участника
     idol.querySelector('img').src = memberImages[randomMember];
     
     // Показываем айдола
     idol.classList.add('show');
     
     // Скрываем через 3-6 секунд
     setTimeout(() => {
         idol.classList.remove('show');
         
         // Запускаем следующее появление через случайный интервал
         setTimeout(showSideIdol, Math.random() * 10000 + 5000);
     }, Math.random() * 3000 + 3000);
 }
 
 // Начинаем показ боковых айдолов
 setTimeout(showSideIdol, 3000);