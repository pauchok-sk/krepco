export default function searchInputCart() {
  const forms = document.querySelectorAll(".section-cart__form-search");

  if (forms.length) {
    forms.forEach(form => {
      const input = form.querySelector(".section-cart__search-input")
      
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