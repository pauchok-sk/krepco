import { hide, show } from "./helpFunctions.js";

export default function dropdown() {
  const dropdowns = document.querySelectorAll(".dropdown");

  if (dropdowns.length) {
    const bodies = document.querySelectorAll(".dropdown-body");

    bodies.forEach((body) => {
      hide(body, 0);
    });

    dropdowns.forEach((drop) => {
      drop.addEventListener("mousemove", (e) => {
        e.stopPropagation();
        e.preventDefault();
      });
      drop.addEventListener("mouseenter", (e) => {
        e.stopPropagation();
        const body = drop.querySelector(".dropdown-body");
        show(body);
      });
      drop.addEventListener("mouseleave", (e) => {
        e.stopPropagation();
        const body = drop.querySelector(".dropdown-body");
        hide(body);
        setTimeout(() => {
          if (!body.hasAttribute("hidden")) {
            hide(body);
          }
        }, 500);
      });
    });
  }
}
