import { hide, show } from "./helpFunctions.js";

export default function dropdown() {
  const dropdowns = document.querySelectorAll(".dropdown");

  if (dropdowns.length) {
    const bodies = document.querySelectorAll(".dropdown-body");

    bodies.forEach((body) => {
      hide(body, 0);
    });

    if (window.matchMedia("(min-width: 1024px)").matches) {
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
    } else {
      document.body.addEventListener("click", () => {
        const openDrop = document.querySelector(".dropdown._open");
        if (openDrop) {
          const body = openDrop.querySelector(".dropdown-body");
          openDrop.classList.remove("_open");

          hide(body);
        }
      });
      dropdowns.forEach((drop) => {
        const btn = drop.querySelector(".dropdown-btn");
        const body = drop.querySelector(".dropdown-body");

        body.addEventListener("click", (e) => e.stopPropagation());

        btn.addEventListener("click", (e) => {
          e.stopPropagation();

          if (!drop.classList.contains("_open")) {
            drop.classList.add("_open");
            show(body);
          } else {
            drop.classList.remove("_open");
            hide(body);
          }
        });
      });
    }
  }
}
