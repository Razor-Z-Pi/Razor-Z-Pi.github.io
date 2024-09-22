alert("Для запуска фоновой музыки щелкни в любое место экрана сайта!!!");

const sound = new Audio("./music/Vøj_Memory_Reboot_Ft_Narvent.mp3");

window.addEventListener("click", () => {
    if (sound.paused) {
        sound.play();
    } else {
        sound.pause();       
    }; 
});