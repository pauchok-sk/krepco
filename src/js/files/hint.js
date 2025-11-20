export default function hint() {
  const hints = document.querySelectorAll(".hint");

  if (hints.length && window.matchMedia("(max-width: 1023px)").matches) {
    document.body.addEventListener("click", () => {
      const openHints = document.querySelectorAll(".hint._active");

      if (openHints.length) {
        openHints.forEach((h) => h.classList.remove("_active"));
      }
    });

    hints.forEach((hint) => {
      hint.addEventListener("click", (e) => {
        e.stopPropagation();
        hint.classList.toggle("_active");
      });
    });
  }
}
