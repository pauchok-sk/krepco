export default function switcherTab() {
  const buttons = document.querySelectorAll("[data-switcher-tab-btn]");

  if (buttons.length) {
    const tabs = document.querySelectorAll("[data-switcher-tab]");
    const switchTarget = document.querySelector(".section-switcher__switch");

    switchTarget.addEventListener("click", () => {
      const btnNotActive = document.querySelector("[data-switcher-tab-btn]:not(._active)");
      const id = btnNotActive.dataset.switcherTabBtn;

      buttons.forEach((b) => b.classList.remove("_active"));
      btnNotActive.classList.add("_active");

      change(id);
    })

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.switcherTabBtn;

        buttons.forEach((b) => b.classList.remove("_active"));
        btn.classList.add("_active");

        change(id);
      });
    });

    function change(id) {
      tabs.forEach((t) => {
        t.classList.remove("_active");
        t.classList.remove("_show");
      });

      const currentTab = document.querySelector(`[data-switcher-tab="${id}"]`);

      switchTarget.classList.toggle("_right");

      currentTab.classList.add("_active");
      setTimeout(() => {
        currentTab.classList.add("_show");
      }, 150);
    }
  }
}
