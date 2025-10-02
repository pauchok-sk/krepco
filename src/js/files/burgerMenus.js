export default function burgerMenus() {
  const buttons = document.querySelectorAll("[data-burger-menu-btn]");

  if (buttons.length) {
    const menus = document.querySelectorAll("[data-burger-menu]");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.burgerMenuBtn;
        const currentMenu = document.querySelector(
          `[data-burger-menu="${id}"]`
        );

        menus.forEach((m) => {
          m.classList.remove("_active");
          m.style.opacity = 0;
        });

        currentMenu.classList.add("_active");
        setTimeout(() => {
          currentMenu.style.opacity = 1;
        }, 100);
      });
    });
  }
}
