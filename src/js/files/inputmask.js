export default function inputmask() {
  const inputs = document.querySelectorAll('input[type="tel"]');
  const im_seven = new Inputmask("+7 (999) 999-99-99");
  const im_eight = new Inputmask("9 (999) 999-99-99");

  inputs.forEach((input) => {
    let isFirstKey = true;

    input.addEventListener("focus", (e) => {
      const value = e.target.value;
      if (!value) {
        input?.inputmask?.remove();
        isFirstKey = true;
      }
    });
    input.addEventListener("blur", (e) => {
      const value = e.target.value;
      if (!value) {
        input.placeholder = "+7 (999) 999-99-99";
        isFirstKey = true;
      }
    });
    input.addEventListener("keydown", (e) => {
      const value = e.target.value.replace(/\D/g, "");

      if (isFirstKey) {
        if (e.key === "8") {
          im_eight.mask(input);
        } else if (e.key !== "Backspace") {
          if (e.key === "7") {
            e.preventDefault();
          }
          im_seven.mask(input);
        }
        isFirstKey = false;
      }

      if (e.key === "Backspace" && (value === "7" || value === "8" || !value)) {
        input?.inputmask?.remove();
        input.value = "";
        isFirstKey = true;
      }
    });
  });
}
