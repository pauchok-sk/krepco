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
    input.addEventListener("keydown", (e) => {
      const value = e.target.value.replace(/\D/g, "");

      if (e.key === "8") {
        im_eight.mask(input);
      } else if (e.key !== "Backspace") {
        im_seven.mask(input);
      }

      if (e.key === "Backspace" && (value === "7" || value === "8")) {
        input?.inputmask?.remove();
        input.value = "";
      }
    });
  });
}
