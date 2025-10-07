export default function sliders() {
  const heroSlider = document.querySelector(".section-hero__slider");

  if (heroSlider) {
    const swiper = new Swiper(heroSlider, {
      speed: 700,
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
        pagination: {
          el: ".section-hero__slider-pagination",
          clickable: true,
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
        speed: 700,
        pagination: {
          el: slider.nextElementSibling,
          clickable: true,
        },
      });
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
}
