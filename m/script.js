document.addEventListener('DOMContentLoaded', function () {

    const musicButton = document.getElementById('titStart');
    const audio = document.getElementById('audio');
    const closeBTN = document.getElementById('closeBTN');
  
    musicButton.addEventListener('click', function () {
        audio.play();
    });

    closeBTN.addEventListener('click', function () {
        audio.pause();
    });
});