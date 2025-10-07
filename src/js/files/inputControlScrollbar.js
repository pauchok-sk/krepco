export default function inputControlScrollbar() {
  const controls = document.querySelectorAll(".input-control._scrollbar");

  if (controls.length) {
    controls.forEach(control => {
      const input = control.querySelector(".input");

      input.addEventListener("blur", () => {
        control.classList.remove("_border-primary")
      })
      input.addEventListener("focus", () => {
        control.classList.add("_border-primary")
      })
    })
  }
}