export default function sliders() {
  const heroSlider = document.querySelector(".s-hero__slider");

  if (heroSlider) {
    const swiper = new Swiper(heroSlider, {
      speed: 700,
      effect: "fade",
      autoplay: {
        delay: 3500
      },
      pagination: {
        el: ".s-hero__slider-pagination",
        clickable: true
      }
    })
  }
}