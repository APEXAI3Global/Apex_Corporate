window.addEventListener("scroll", function () {

    let navbar = document.querySelector(".navbar");

    if (window.scrollY > 80) {

        navbar.classList.add("sticky");

    } else {

        navbar.classList.remove("sticky");

    }

});

let counted = false;

window.addEventListener("scroll", function () {

    let section = document.querySelector(".stats-row");
    let sectionTop = section.offsetTop - window.innerHeight + 100;

    if (!counted && window.scrollY > sectionTop) {

        document.querySelectorAll(".odometer").forEach(function (el) {

            el.innerHTML = el.getAttribute("data-count");

        });

        counted = true;

    }

});


var swiper = new Swiper(".certificateSwiper", {

    loop: true,
    spaceBetween: 30,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    breakpoints: {

        0: {
            slidesPerView: 1
        },

        768: {
            slidesPerView: 1
        },

        1024: {
            slidesPerView: 2
        }

    }

});

var swiper = new Swiper(".skillsSliderdsd", {

    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },

    breakpoints: {

        320: {
            slidesPerView: 1
        },

        576: {
            slidesPerView: 2
        },

        768: {
            slidesPerView: 3
        },

        992: {
            slidesPerView: 4
        },

        1200: {
            slidesPerView: 5
        }

    }

});

var swiper = new Swiper(".skillsSlider", {
    slidesPerView: "auto",
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
});
