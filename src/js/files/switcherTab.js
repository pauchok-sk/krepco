export default function switcherTab() {
  const switchers = document.querySelectorAll(".switcher");

  if (switchers.length) {

    switchers.forEach(switcher => {
      const buttons = switcher.querySelectorAll("[data-switcher-tab-btn]");
      const tabs = switcher.querySelectorAll("[data-switcher-tab]");
      const switchTarget = switcher.querySelector(".switcher__switch");
  
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
    })

  }
}
