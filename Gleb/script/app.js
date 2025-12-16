$(document).on("click", ".point_start", function(e) {
    e.preventDefault();
    $('body, html').animate({scrollTop: 0}, 800);
});