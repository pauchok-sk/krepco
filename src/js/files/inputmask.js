export default function inputmask() {
  const inputs = document.querySelectorAll('input[type="tel"]');
  const im_seven = new Inputmask("+7 (999) 999-99-99");
  const im_eight = new Inputmask("9 (999) 999-99-99");

  inputs.forEach((input) => {
    input.addEventListener("focus", (e) => {
      const value = e.target.value;
      if (!value) input?.inputmask?.remove();
    });
    input.addEventListener("blur", (e) => {
      const value = e.target.value;
      if (!value) {
        input.placeholder = "+7 (999) 999-99-99";
      }
    });
    input.addEventListener("input", (e) => {
      const value = e.target.value.replace(/\D/g, "");

      if (value.length === 1) {
        if (value[0] === "8") {
          e.preventDefault();
          im_eight.mask(input);
          return false;
        } else {
          im_seven.mask(input);
        }
      }
    });
  });
}
