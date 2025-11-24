export default function dropdown() {
  const dropdowns = document.querySelectorAll(".dropdown");

  if (dropdowns.length) {
    const burger = document.querySelector(".burger");
    if (window.matchMedia("(max-width: 1023px)").matches) {
      document.body.addEventListener("click", handleCloseAll);
      burger.addEventListener("click", handleCloseAll);

      dropdowns.forEach((drop) => {
        const btn = drop.querySelector(".dropdown-btn");
        const body = drop.querySelector(".dropdown-body");

        body.addEventListener("click", (e) => e.stopPropagation());

        btn.addEventListener("click", (e) => {
          e.stopPropagation();

          if (!drop.classList.contains("_open")) {
            drop.classList.add("_open");
          } else {
            drop.classList.remove("_open");
          }
        });
      });

      function handleCloseAll() {
        const openDrops = document.querySelectorAll(".dropdown._open");
        if (openDrops) {
          openDrops.forEach((d) => d.classList.remove("_open"));
        }
      }
    }
  }
}
