export default function dropdown() {
  const buttons = document.querySelectorAll(".dropdown-btn");

  if (buttons.length && window.matchMedia("(max-width: 1023px)")) {
    const dropdowns = document.querySelectorAll(".dropdown");
    const bodies = document.querySelectorAll(".dropdown-body");

    document.body.addEventListener("click", () => {
      dropdowns.forEach((d) => d.classList.remove("_open"));
      buttons.forEach((b) => b.classList.remove("_active"));
    });

    bodies.forEach((b) =>
      b.addEventListener("click", (e) => e.stopPropagation())
    );

    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();

        const dropdown = btn.closest(".dropdown");

        if (btn.classList.contains("_active")) {
          btn.classList.remove("_active");
          dropdown.classList.remove("_open");
        } else {
          dropdowns.forEach((d) => d.classList.remove("_active"));
          btn.classList.add("_active");
          dropdown.classList.add("_open");
        }
      });
    });
  }
}
