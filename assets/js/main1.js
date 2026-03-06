// AOS animation init
AOS.init({
    duration: 900,
    once: true
});

let lastScrollTop = 0;
const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scroll Down – hide
        navbar.classList.remove("sticky-show");
        navbar.classList.add("scrolled");
    } else {
        // Scroll Up – show
        navbar.classList.remove("scrolled");
        navbar.classList.add("sticky-show");
    }
    lastScrollTop = scrollTop;
});

var swiper = new Swiper(".skillsSlider", {

    spaceBetween: 30,
    loop: true,
    speed: 5000,

    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },

    freeMode: true,
    freeModeMomentum: false,
    allowTouchMove: false,

    breakpoints: {

        0: {
            slidesPerView: 1
        },

        576: {
            slidesPerView: 2
        },

        768: {
            slidesPerView: 2
        },

        1200: {
            slidesPerView: 3
        }

    }

});