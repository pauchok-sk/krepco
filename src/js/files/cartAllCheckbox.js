export default function cartAllCheckbox() {
  const selectAllInput = document.querySelector("#select-all");

  if (selectAllInput) {
    const allInputs = document.querySelectorAll(".card-product-cart .input-checkbox");

    selectAllInput.addEventListener("change", (e) => {
      if (e.target.checked) {
        allInputs.forEach(i => i.checked = true);
      } else {
        allInputs.forEach(i => i.checked = false);
      }
    })

    allInputs.forEach(input => {
      input.addEventListener("change", (e) => {
        if (selectAllInput.checked = e.target.checked) selectAllInput.checked = false;
      })
    })
  }
}