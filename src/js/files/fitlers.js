export default function filters() {
  const filters = document.querySelector("#filters");

  if (filters && window.matchMedia("(max-width: 1023px)").matches) {
    const shop = document.querySelector("#shop");
    const btnOpen = document.querySelector("#filters-open");
    const btnClose = document.querySelector("#filters-close");
    const overlay = document.querySelector("#filters-overlay");

    btnOpen.addEventListener("click", handleOpen);
    btnClose.addEventListener("click", handleClose);
    overlay.addEventListener("click", handleClose);

    function handleOpen() {
      filters.classList.add("_active");
      overlay.classList.add("_active");
      document.body.classList.add("body-hidden");
    }

    function handleClose() {
      filters.classList.remove("_active");
      overlay.classList.remove("_active");
      document.body.classList.remove("body-hidden");
    }

    shop.appendChild(filters);
  }
}
