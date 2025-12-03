export default function quickCart() {
  const forms = document.querySelectorAll(".quick-cart");

  if (forms.length) {
    forms.forEach(form => {
      const input = form.querySelector(".quick-cart__input")
      
      input.addEventListener("input", (e) => {
        if (e.target.value) {
          form.classList.add("_entered")
        } else {
          form.classList.remove("_entered")
        }
      })
    })
  }
}