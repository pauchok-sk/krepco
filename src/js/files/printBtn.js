export default function printBtn() {
  const buttons = document.querySelectorAll(".print-btn");

  if (buttons.length) {
    buttons.forEach(btn => {
      btn.addEventListener("click", () => window.print());
    })
  }
}