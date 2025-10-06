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
        slidesPerView: 5,
        spaceBetween: 20,
        // autoplay: {
        //   delay: 3200,
        // },
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
      });
    });
  }

  const productSliders = document.querySelectorAll(".card-product__slider");

  if (productSliders.length) {
    productSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 700,
        autoplay: {
          delay: 3500,
        },
        pagination: {
          el: slider.nextElementSibling,
          clickable: true,
        },
      });
    });
  }
}
