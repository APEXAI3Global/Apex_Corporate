const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

const sidebar = document.querySelector('.sidebar');

function opencanvas() {
  sidebar.classList.add('active');
}

function closeSidebar() {
  sidebar.classList.remove('active');
}

document.querySelectorAll('.submenu-toggle').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    btn.parentElement.classList.toggle('open');
  });
});

sidebar.querySelectorAll('a:not(.submenu-toggle)').forEach(link => {
  link.addEventListener('click', () => {
    closeSidebar();
  });
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

// var swiper = new Swiper(".mainvideoslider", {
//   loop: true,
//   spaceBetween: 10,
//   slidesPerView: 4,
//   freeMode: true,
//   watchSlidesProgress: true,
//   speed: 600, // 👈 IMPORTANT
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
// });

// var swiper2 = new Swiper(".tabvideoslider", {
//   loop: true,
//   spaceBetween: 10,
//   speed: 600, // 👈 IMPORTANT
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   thumbs: {
//     swiper: swiper,
//   },
// });

// const thumbEl = document.querySelector('.mainvideoslider');

// thumbEl.addEventListener('mouseenter', () => {
//   swiper.autoplay.stop();
//   swiper2.autoplay.stop();
// });

// thumbEl.addEventListener('mouseleave', () => {
//   swiper.autoplay.start();
//   swiper2.autoplay.start();
// });
// const thumbE2 = document.querySelector('.tabvideoslider');

// thumbE2.addEventListener('mouseenter', () => {
//   swiper.autoplay.stop();
//   swiper2.autoplay.stop();
// });

// thumbE2.addEventListener('mouseleave', () => {
//   swiper.autoplay.start();
//   swiper2.autoplay.start();
// });



// ── Swiper init ──────────────────────────────────────────
const thumbSwiper = new Swiper(".mainvideoslider", {
  loop: true,
  slidesPerView: 4,
  freeMode: true,
  spaceBetween: 10,
  watchSlidesProgress: true,
  speed: 600,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

const mainSwiper = new Swiper(".tabvideoslider", {
  loop: true,
  spaceBetween: 10,
  speed: 600,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: { swiper: thumbSwiper },
});

// ── Pause autoplay on hover ───────────────────────────────
document.querySelectorAll('.mainvideoslider, .tabvideoslider').forEach(el => {
  el.addEventListener('mouseenter', () => {
    mainSwiper.autoplay.stop();
    thumbSwiper.autoplay.stop();
  });
  el.addEventListener('mouseleave', () => {
    // Only resume if no popup is open
    if (!document.querySelector('.popup-overlay.active')) {
      mainSwiper.autoplay.start();
      thumbSwiper.autoplay.start();
    }
  });
});

// VALIDATION FORM

document.getElementById("enquiryForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = this.firstName.value.trim();
  const lastName = this.lastName.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!firstName || !lastName || !email || !message) {
    alert("Please fill all fields");
    return;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email");
    return;
  }

  alert("Form submitted successfully ✅");

  // Optional: reset form
  this.reset();
});
// ── Helper: open popup ────────────────────────────────────
function openPopup(popupId) {
  const overlay = document.getElementById("popup-" + popupId);
  if (!overlay) return;
  const video = overlay.querySelector("video");

  // Stop autoplay when video popup is open
  mainSwiper.autoplay.stop();
  thumbSwiper.autoplay.stop();

  overlay.classList.add("active");
  if (video) { video.play(); }

  const closeBtn = overlay.querySelector("button[id^='close']");
  if (closeBtn) {
    closeBtn.onclick = () => closePopup(popupId);
  }

  overlay.onclick = (e) => {
    if (e.target === overlay) closePopup(popupId);
  };
}

// ── Helper: close popup ───────────────────────────────────
function closePopup(popupId) {
  const overlay = document.getElementById("popup-" + popupId);
  if (!overlay) return;
  const video = overlay.querySelector("video");

  overlay.classList.remove("active");
  if (video) { video.pause(); video.currentTime = 0; }

  // Resume autoplay after popup closes
  mainSwiper.autoplay.start();
  thumbSwiper.autoplay.start();
}

// ── Play buttons inside slides ────────────────────────────
document.querySelectorAll(".open-popup-btn[data-popup]").forEach(btn => {
  btn.addEventListener("click", () => {
    openPopup(btn.dataset.popup);
  });
});

// ── Header nav links ──────────────────────────────────────
document.querySelectorAll("a[data-tab]").forEach(link => {
  link.addEventListener("click", function (e) {
    const tabIndex = parseInt(this.dataset.tab);
    const popupId = this.dataset.popup;

    // ✅ Use slideToLoop() instead of slideTo() when loop: true
    mainSwiper.slideToLoop(tabIndex);
    thumbSwiper.slideToLoop(tabIndex);

    // Wait for scroll + slide animation, then open popup
    setTimeout(() => {
      openPopup(popupId);
    }, 800);
  });
});

// ScrollSmoother Initialization
document.addEventListener("DOMContentLoaded", function () {
  if (typeof ScrollSmoother !== "undefined") {
    gsap.registerPlugin(ScrollSmoother);

    ScrollSmoother.create({
      smooth: 1.5,
      effects: true,
    });
  } else {
    console.warn("ScrollSmoother not loaded — skipping smooth scroll");
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



