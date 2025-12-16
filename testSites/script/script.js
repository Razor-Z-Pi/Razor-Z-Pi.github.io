const letterS = document.getElementById("Sl");
let imgS = document.querySelector(".LetterIMG");
let oneSMain = document.querySelector(".oneMainLetter");

letterS.addEventListener("mouseover", function(event) {
    event.preventDefault();

    imgS.style.transition = "width 0.5s ease-in-out, height 0.5s ease-in-out";
    imgS.style.display = "inline-block";
    imgS.style.width = "250px";
    imgS.style.height = "250px";
    oneSMain.style.display = "none";
});