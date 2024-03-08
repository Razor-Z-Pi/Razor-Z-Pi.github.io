// Получить модальный
var modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальный
var btn = document.getElementById("myBtn");

// Получить элемент <span>, который закрывает модальный
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальный
btn.onclick = function() {
  modal.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
  modal.style.display = "none";
}

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};