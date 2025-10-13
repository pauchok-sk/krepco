export default function priceRange() {
  const priceRange = document.querySelector("#price-range");

  if (priceRange) {
    const inputMin = document.querySelector("#input-price-min");
    const inputMax = document.querySelector("#input-price-max");
    const inputs = [inputMin, inputMax];

    noUiSlider.create(priceRange, {
      start: [+inputMin.value, +inputMax.value],
      connect: true,
      range: {
        min: +inputMin.value,
        max: +inputMax.value,
      },
      step: 1,
    });

    priceRange.noUiSlider.on("update", (values, handle) => {
      inputs[handle].value = Math.round(values[handle]);
    });

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        if (input.value < input.min) {
          input.value = input.min
        }
      })
    })
  }
}
