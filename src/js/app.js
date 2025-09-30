import "../scss/style.scss";
import dropdown from "./files/dropdown.js";
import inputmask from "./files/inputmask.js";
import mediaAdaptive from "./files/mediaAdaptive.js";
import select from "./files/select.js";
import spoller from "./files/spoller.js";

spoller();
mediaAdaptive();
dropdown();
inputmask();
select();

Fancybox.bind("[data-fancybox]", {
  closeButton: false,
});

Fancybox.show([{ src: "#modal-call", type: "inline" }]);
