export default function jobModal() {
  const buttons = document.querySelectorAll("[data-job-btn]");
  const input = document.querySelector("#job-name-input");

  if (buttons.length && input) {
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const name = btn.dataset.jobBtn;

        input.value = name;
      })
    })
  }
}