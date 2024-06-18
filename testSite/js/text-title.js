let companent = document.querySelector(".type");
let i = 0;
let txt1 = "КОМФОРТАБЕЛЬНЫЕ КВАРТИРЫ";
let txt2 = "ПОЛЕЗНО ОТДЫХАТЬ";
let speed = 120;
let index = false;

let typeWrite = setInterval(function() {
    if (i < txt1.length) {
        companent.innerHTML += txt1.charAt(i);
        i++;
        companent.innerHTML.replace(0.2);
    } else {
        clearInterval(typeWrite);
    }
}, speed);