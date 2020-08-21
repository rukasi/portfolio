new WOW().init();

let mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    pagination: {
        el: '.project-pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: 'projects-bullet',
        bulletActiveClass: 'projects-bullet-active',
    },
});