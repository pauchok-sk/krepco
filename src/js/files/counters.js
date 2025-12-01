export default function counter() {
  const counters = document.querySelectorAll(".counter");

  if (counters.length) {
    counters.forEach((counter) => {
      const input = counter.querySelector(".counter__input");
      const min = 1;

      const btnPlus = counter.querySelector(".counter__btn._plus");
      const btnMinus = counter.querySelector(".counter__btn._minus");

      if (+input.value <= min) btnMinus.classList.add("_disabled");

      btnPlus.addEventListener("click", () => {
        change("plus");
      });
      btnMinus.addEventListener("click", () => {
        change("minus");
      });

      input.addEventListener("change", (e) => {
        const value = +e.target.value;

        if (!value || value <= 0) input.value = 1;
      });

      input.addEventListener("input", (e) => {
        const value = +e.target.value;

        if (value > min) {
          btnMinus.classList.remove("_disabled");
        } else {
          btnMinus.classList.add("_disabled");
        }


        if (value < min) {
          input.value = 1;
        }
      });

      function change(action) {
        if (action === "minus") {
          input.value = +input.value - 1;
        } else if (action === "plus") {
          input.value = +input.value + 1;
        }

        if (+input.value > min) {
          btnMinus.classList.remove("_disabled");
        } else {
          btnMinus.classList.add("_disabled");
        }
      }
    });
  }
}
