export default function formSearch() {
  const formSearch = document.querySelector(".form-search");

  if (formSearch) {
    window.addEventListener("scroll", () => {
      if (formSearch.classList.contains("_open")) {
        formSearch.classList.remove("_open")
      }
    })
  }
}