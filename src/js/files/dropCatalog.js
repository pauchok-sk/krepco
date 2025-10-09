export default function dropCatalog() {
  const buttons = document.querySelectorAll("[data-drop-menu-btn]");

  if (buttons.length) {
    const menus = document.querySelectorAll("[data-drop-menu]");

    buttons.forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        const id = btn.dataset.dropMenuBtn;
        const currentMenu = document.querySelector(`[data-drop-menu="${id}"]`);

        if (!btn.classList.contains("_active")) {
          menus.forEach((m) => {
            m.style.opacity = 0;
            m.classList.remove("_active");
          });
          buttons.forEach((b) => b.classList.remove("_active"));

          btn.classList.add("_active");
          currentMenu.classList.add("_active");
          setTimeout(() => {
            currentMenu.style.opacity = 1;
          }, 100);
        }
      });
    });
  }

  const dropCatalog = document.querySelector("#drop-catalog");

  if (dropCatalog) {
    const toggleBtn = document.querySelector("#drop-catalog-toggle");

    document.body.addEventListener("click", () => {
      dropCatalog.classList.remove("_open");
      toggleBtn.classList.remove("_active");
    });

    // window.addEventListener("scroll", () => {
    //   if (dropCatalog.classList.contains("_open")) {
    //     dropCatalog.classList.remove("_open");
    //     toggleBtn.classList.remove("_active");
    //   }
    // });

    dropCatalog.addEventListener("click", (e) => e.stopPropagation());

    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();

      toggleBtn.classList.toggle("_active");
      dropCatalog.classList.toggle("_open");
    });
  }
}
