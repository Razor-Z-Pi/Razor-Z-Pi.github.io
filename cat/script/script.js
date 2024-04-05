var button = document.getElementById('toggle'); 
button.addEventListener('click', function(e) { 
    var main = document.getElementsByTagName('main')[0]
        main.classList.add('no-scope') 
})

window.addEventListener("DOMContentLoaded", function() {
  var contentDiv = document.getElementById("content");

  var PageHome = `<div class="left-content"><div class="left-content"> 
    <h2>Поможим бизнесу с помощью  CSS, HTML, JavaScript, Bootstrap<span><br>PHP, Node.js<br></span></h2>
    <div class="box-shadow-card-dark-mktg overflow-hidden rounded-2 ml-lg-6 position-relative z-1" style="max-width: 491px">
      <img src="https://github.githubassets.com/assets/illo-vscode-new-5a3469c50818.png?width=785&amp;format=webp 785w,
               https://github.githubassets.com/assets/illo-vscode-new-5a3469c50818.png?width=589&amp;format=webp 589w,
               https://github.githubassets.com/assets/illo-vscode-new-5a3469c50818.png?width=491&amp;format=webp 491w,
               https://github.githubassets.com/assets/illo-vscode-new-5a3469c50818.png?width=392&amp;format=webp 392w,
               https://github.githubassets.com/assets/illo-vscode-new-5a3469c50818.png?width=196&amp;format=webp 196w" style="width: 90%; height: auto;" alt="Изображение">
    </div>
  </div>
  <div class="right-content">
    <div class="wrapper">
      <a href="#" target="_top">Профессионализм и опыт: Наша команда имеет богатый опыт в разработке веб-сайтов различной сложности. Мы знаем все современные технологии и средства разработки, чтобы создать эффективный и интуитивно понятный пользовательский интерфейс.</a>
    </div>
  </div>`;

  function getGet(name) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  var page = getGet("page");


  switch (page) {
    case "home":
      contentDiv.innerHTML = PageHome;
      break;
    case "shop":
      contentDiv.innerHTML = `    <ul class="tabs">
        <li class="active" data-id="0">Education</li>
        <li data-id="1">In-session Training</li>
        <li data-id="2">Experience</li>
        <li data-id="3">Interview</li>
    </ul>

    <div class="contents">

        <div class="box show" data-content="0">
            <img src="https://images.pexels.com/photos/5088009/pexels-photo-5088009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="">
            <div>
                <h3>Lorem ipsum dolor</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium itaque amet ducimus, magni
                    iure
                    a repudiandae molestias nemo voluptatibus voluptas earum excepturi architecto, iusto necessitatibus
                    sequi perferendis veritatis! Voluptatem?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium itaque amet ducimus, magni
                    iure
                    a repudiandae molestias nemo voluptatibus voluptas earum excepturi architecto, iusto necessitatibus
                    sequi perferendis veritatis! Voluptatem?
                </p>
            </div>
        </div>

        <div class="box hide" data-content="1">
            <img src="https://images.pexels.com/photos/5865862/pexels-photo-5865862.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="">
            <div>
                <h3>Lorem ipsum dolor</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium itaque amet ducimus, magni
                    iure
                    a repudiandae molestias nemo voluptatibus voluptas earum excepturi architecto, iusto necessitatibus
                    sequi perferendis veritatis! Voluptatem?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium itaque amet ducimus, magni
                    iure
                    a repudiandae molestias nemo voluptatibus voluptas earum excepturi architecto, iusto necessitatibus
                    sequi perferendis veritatis! Voluptatem?
                </p>
            </div>
        </div>

        <div class="box hide" data-content="2">
            <img src="https://images.pexels.com/photos/3761308/pexels-photo-3761308.jpeg?auto=compress&cs=tinysrgb&w=800" alt="">
            <div>
                <h3>Lorem ipsum dolor</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium itaque amet ducimus, magni
                    iure
                    a repudiandae molestias nemo voluptatibus voluptas earum excepturi architecto, iusto necessitatibus
                    sequi perferendis veritatis! Voluptatem?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium itaque amet ducimus, magni
                    iure
                    a repudiandae molestias nemo voluptatibus voluptas earum excepturi architecto, iusto necessitatibus
                    sequi perferendis veritatis! Voluptatem?
                </p>
            </div>
        </div>

        <div class="box hide" data-content="3">
            <img src="https://images.pexels.com/photos/5336951/pexels-photo-5336951.jpeg?auto=compress&cs=tinysrgb&w=800" alt="">
            <div>
                <h3>Lorem ipsum dolor</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium itaque amet ducimus, magni
                    iure
                    a repudiandae molestias nemo voluptatibus voluptas earum excepturi architecto, iusto necessitatibus
                    sequi perferendis veritatis! Voluptatem?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium itaque amet ducimus, magni
                    iure
                    a repudiandae molestias nemo voluptatibus voluptas earum excepturi architecto, iusto necessitatibus
                    sequi perferendis veritatis! Voluptatem?
                </p>
            </div>
        </div>

    </div>`;
      break;
    default:
      contentDiv.innerHTML = PageHome;
  }
})