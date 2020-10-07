/* Swiper-slider https://swiperjs.com/
========================================*/
let swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    grabCursor: true,
    speed: 700,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


/* JQuery
========================================*/
$(function () {

    /* Header-fixed
========================================*/
    let header = $("#header");

    header.addClass("fixed")

    /* NavToggle
========================================*/
    let nav = $("#nav")
    let navToggle = $("#navToggle")

    navToggle.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass ("show")
    })

});




