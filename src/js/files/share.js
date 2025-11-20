export default function share() {
  const items = document.querySelectorAll(".share");

  if (items.length) {
    document.addEventListener("click", () => {
      const shareItemsOpen = document.querySelectorAll(".share._open");

      if (shareItemsOpen.length) {
        shareItemsOpen.forEach((item) => handleClose(item));
      }
    });

    items.forEach((item) => {
      const btn = item.querySelector(".share-btn");

      item.addEventListener("click", (e) => e.stopPropagation());

      btn.addEventListener("click", () => {
        const container = btn.closest(".share");

        if (container.classList.contains("_open")) {
          handleClose(container);
        } else {
          handleOpen(container);
        }
      });
    });

    function handleClose(item) {
      item.classList.remove("_open");
    }

    function handleOpen(item) {
      item.classList.add("_open");
    }
  }
}
