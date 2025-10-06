export default function sliders() {
  const heroSlider = document.querySelector(".section-hero__slider");

  if (heroSlider) {
    const swiper = new Swiper(heroSlider, {
      speed: 700,
      effect: "fade",
      autoplay: {
        delay: 3500
      },
      pagination: {
        el: ".section-hero__slider-pagination",
        clickable: true
      }
    })
  }
}