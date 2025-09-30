export default function select() {
  const buttons = document.querySelectorAll(".select-btn");

  if (buttons.length) {
    const selectsBodies = document.querySelectorAll(".select-body");
    const selects = document.querySelectorAll(".select");
    const selectItems = document.querySelectorAll(".select-item");
    const selectInputs = document.querySelectorAll(".select-input");

    selectsBodies.forEach((body) => {
      body.addEventListener("click", (e) => e.stopPropagation());
    });

    document.body.addEventListener("click", () => {
      const currentSelect = document.querySelector(".select._open");

      if (currentSelect) {
        handleClose(currentSelect);
      }
    });

    selectItems.forEach((item) => {
      item.addEventListener("click", () => {
        const select = item.closest(".select");
        const input = select.querySelector(".select-input");
        const value = item.dataset.value;

        selectItems.forEach((i) => i.classList.remove("_active"));

        input.value = value;
        item.classList.add("_active");

        handleClose(select);
      });
    });

    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();

        const select = btn.closest(".select");
        const input = select.querySelector(".select-input");

        if (select.classList.contains("_open")) {
          select.classList.remove("_open");
          input.setAttribute("readonly", "");
        } else {
          selects.forEach((s) => {
            s.addEventListener("click", () => {
              handleClose(s);
            });
          });

          select.classList.add("_open");
          input.removeAttribute("readonly");

          input.focus();
        }
      });
    });

    selectInputs.forEach((input) => {
      const select = input.closest(".select");
      const items = select.querySelectorAll(".select-item");
      const body = select.querySelector(".select-body");

      input.addEventListener("input", (e) => {
        const inputValue = e.target.value.toLowerCase();

        items.forEach((item) => {
          const notFound = select.querySelector(".select-not-found");
          const value = item.dataset.value.toLowerCase();

          if (value.includes(inputValue)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }

          const unequal = document.querySelectorAll(
            '*[style*="display: none"]'
          ).length;

          if (unequal === items.length) {
            if (!notFound) {
              const div = document.createElement("div");
              div.classList.add("select-not-found");
              div.textContent = "По запросу ничего не найдено :с";
  
              body.appendChild(div);
            }
          } else {
            notFound?.remove();
          }
        });
      });
    });

    function handleClose(select) {
      const input = select.querySelector(".select-input");

      select.classList.remove("_open");
      input.setAttribute("readonly", "");
    }
  }
}
