import "../scss/style.scss";
import burger from "./files/burger.js";
import burgerMenus from "./files/burgerMenus.js";
import cardProductCounter from "./files/cardProductCounter.js";
import dropCatalog from "./files/dropCatalog.js";
import dropdown from "./files/dropdown.js";
import headerScroll from "./files/headerScroll.js";
import inputmask from "./files/inputmask.js";
import mediaAdaptive from "./files/mediaAdaptive.js";
import placeholderIteration from "./files/placeholderIteration.js";
import select from "./files/select.js";
import sliders from "./files/sliders.js";
import spoller from "./files/spoller.js";
import switcherTab from "./files/switcherTab.js";

spoller();
mediaAdaptive();
dropdown();
inputmask();
select();
dropCatalog();
burger();
burgerMenus();
sliders();
placeholderIteration();
headerScroll();
cardProductCounter();
switcherTab();

Fancybox.bind("[data-fancybox]", {
  closeButton: false,
});

// Fancybox.show([{ src: "#modal-call", type: "inline" }]);
