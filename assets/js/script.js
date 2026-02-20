 const nav = document.querySelector("nav");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

var swiper = new Swiper(".logoslider", {
  loop: true,
  centeredSlides: true,
//   slidesPerView: 4,
  spaceBetween: 30,

  allowTouchMove: false,

  // continuous autoplay
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  speed: 8000,
  freeMode: true,
  freeModeMomentum: false,

  // remove arrows & dots
  navigation: false,
  pagination: false,

  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});

var swiper = new Swiper(".cardslider", {
//   slidesPerView: 3,
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

   var swiper = new Swiper(".mainvideoslider", {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
            speed: 600, // 👈 IMPORTANT
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
        });

        var swiper2 = new Swiper(".tabvideoslider", {
            loop: true,
            spaceBetween: 10,
            speed: 600, // 👈 IMPORTANT
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: swiper,
            },
        });

        const thumbEl = document.querySelector('.mainvideoslider');

thumbEl.addEventListener('mouseenter', () => {
  swiper.autoplay.stop();
  swiper2.autoplay.stop();
});

thumbEl.addEventListener('mouseleave', () => {
  swiper.autoplay.start();
  swiper2.autoplay.start();
});
        const thumbE2 = document.querySelector('.tabvideoslider');

thumbE2.addEventListener('mouseenter', () => {
  swiper.autoplay.stop();
  swiper2.autoplay.stop();
});

thumbE2.addEventListener('mouseleave', () => {
  swiper.autoplay.start();
  swiper2.autoplay.start();
});



// ScrollSmoother Initialization
document.addEventListener("DOMContentLoaded", function () {
  if (typeof ScrollSmoother !== "undefined") {
    const smoother = new ScrollSmoother({
      smooth: true, 
      effects: true, 
      duration: 2000,
    });
  } else {
    console.error("ScrollSmoother is undefined");
  }
});

// odometer 
   window.odometerOptions = {
            animation: 'smooth',
            duration: 2000
        };

        document.addEventListener("DOMContentLoaded", function () {
            const counters = document.querySelectorAll(".counter");
            let started = false;

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !started) {
                        started = true;

                        counters.forEach(counter => {
                            counter.innerHTML = counter.dataset.value;
                        });
                    }
                });
            }, {
                threshold: 0.5
            });

            counters.forEach(counter => observer.observe(counter));
        });



      