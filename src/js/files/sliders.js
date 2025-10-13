export default function sliders() {
  const heroSlider = document.querySelector(".section-hero__slider");

  if (heroSlider) {
    const swiper = new Swiper(heroSlider, {
      speed: 700,
      slidesPerView: 1,
      speaceBetween: 20,
      effect: "fade",
      autoplay: {
        delay: 3500,
      },
      pagination: {
        el: ".section-hero__slider-pagination",
        clickable: true,
      },
    });
  }

  const switcherSliders = document.querySelectorAll(
    ".section-switcher__slider"
  );

  if (switcherSliders.length) {
    switcherSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 700,
        slidesPerView: 2,
        spaceBetween: 10,
        autoplay: {
          delay: 3200,
        },
        navigation: {
          prevEl: slider
            .closest(".section-switcher__tab-wrapper")
            .querySelector(".section-switcher__slider-btn._prev"),
          nextEl: slider
            .closest(".section-switcher__tab-wrapper")
            .querySelector(".section-switcher__slider-btn._next"),
        },
        breakpoints: {
          1500: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        },
      });
    });
  }

  const productSliders = document.querySelectorAll(".card-product__slider");

  if (productSliders.length) {
    productSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 900,
        pagination: {
          el: slider.nextElementSibling,
          clickable: true,
        },
      });

      const switches = slider.querySelectorAll(".card-product__slide-switch");

      if (switches.length) {
        switches.forEach((sw, index) => {
          sw.addEventListener("mouseenter", () => {
            swiper.slideTo(index);
          });
        });
      }
    });
  }

  const fastenersSlider = document.querySelector(".section-fasteners__slider");

  if (fastenersSlider && window.matchMedia("(max-width: 1199px)").matches) {
    const swiper = new Swiper(fastenersSlider, {
      speed: 800,
      slidesPerView: "auto",
      spaceBetween: 10,
      autoplay: {
        delay: 3500,
      },
      breakpoints: {
        768: {
          slidesPerView: "auto",
          spaceBetween: 25,
        },
      },
    });
  }

  const deliveryAdvSlider = document.querySelector(
    ".section-delivery__adv-slider"
  );

  if (deliveryAdvSlider && window.matchMedia("(max-width: 767px)").matches) {
    const swiper = new Swiper(deliveryAdvSlider, {
      speed: 800,
      slidesPerView: "auto",
      spaceBetween: 10,
      autoplay: {
        delay: 3200,
      },
    });
  }

  const partnersSlider = document.querySelector(".section-partners__slider");

  if (partnersSlider) {
    const swiper = new Swiper(partnersSlider, {
      speed: 800,
      slidesPerView: "auto",
      spaceBetween: 10,
      autoplay: {
        delay: 3500,
      },
      navigation: {
        prevEl: ".section-partners .slider-btn._prev",
        nextEl: ".section-partners .slider-btn._next",
      },
      breakpoints: {
        1200: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: "auto",
          spaceBetween: 20,
        },
      },
    });
  }

  const certificatesSlider = document.querySelector(
    ".section-certificates__slider"
  );

  if (certificatesSlider) {
    const swiper = new Swiper(certificatesSlider, {
      speed: 800,
      slidesPerView: "auto",
      spaceBetween: 10,
      autoplay: {
        delay: 3200,
      },
      breakpoints: {
        1200: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: "auto",
          spaceBetween: 20,
        },
      },
    });
  }

  const reviewsSliders = document.querySelectorAll(".section-reviews__slider");

  if (reviewsSliders.length) {
    reviewsSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 800,
        slidesPerView: "auto",
        spaceBetween: 20,
        autoplay: {
          delay: 3700,
        },
        breakpoints: {
          1200: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        },
      });
    });
  }

  const usefulSlider = document.querySelector(".section-useful__slider");

  if (usefulSlider) {
    const swiper = new Swiper(usefulSlider, {
      speed: 800,
      slidesPerView: "auto",
      spaceBetween: 20,
      autoplay: {
        delay: 3600,
      },
      breakpoints: {
        1366: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
        576: {
          slidesPerView: "auto",
          spaceBetween: 25,
        },
      },
    });
  }

  const bannerSlider = document.querySelector(".section-banner__slider");

  if (bannerSlider) {
    const swiper = new Swiper(bannerSlider, {
      speed: 700,
      slidesPerView: 1,
      speaceBetween: 20,
      effect: "fade",
      autoplay: {
        delay: 3500,
      },
      pagination: {
        el: ".section-banner__slider-pagination",
        clickable: true,
      },
    });
  }
}
