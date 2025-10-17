export default function filesChange() {
  const inputs = document.querySelectorAll(".input-file");

  if (inputs.length) {
    inputs.forEach((input) => {
      const btn = input.nextElementSibling;
      const name = btn.querySelector(".name");
      const close = btn.querySelector(".file-close");

      close.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();

        input.value = null;
        name.textContent = btn.dataset.text || "Прикрепить файл";
        close.classList.add("_hide");
      });

      input.addEventListener("change", (e) => {
        const file = e.target.files[0];

        if (file) {
          name.textContent = file.name;
          close.classList.remove("_hide");
        }
      });
    });
  }
}
