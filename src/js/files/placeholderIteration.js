export default function placeholderIteration() {
  const items = document.querySelectorAll("[data-placeholder-iteration]");

  if (items.length) {
    items.forEach((item) => {
      const array = item.dataset.placeholderIteration.split(",");

      let currentIndex = 0;
      item.placeholder = array[currentIndex];

      setInterval(() => {
        item.classList.add("_hide");

        setTimeout(() => {
          item.placeholder = array[currentIndex];
          item.classList.remove("_hide");
        }, 150);

        if (currentIndex < array.length - 1) {
          currentIndex = currentIndex + 1;
        } else {
          currentIndex = 0;
        }
      }, +item.dataset.placeholderDelay);
    });
  }
}
