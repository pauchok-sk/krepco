import "../scss/style.scss";
import burger from "./files/burger.js";
import burgerMenus from "./files/burgerMenus.js";
import cardProductCounter from "./files/cardProductCounter.js";
import dropCatalog from "./files/dropCatalog.js";
import dropdown from "./files/dropdown.js";
import filesChange from "./files/filesChange.js";
import filters from "./files/fitlers.js";
import formSearch from "./files/formSearch.js";
import headerScroll from "./files/headerScroll.js";
import inputControlScrollbar from "./files/inputControlScrollbar.js";
import inputmask from "./files/inputmask.js";
import mediaAdaptive from "./files/mediaAdaptive.js";
import more from "./files/more.js";
import placeholderIteration from "./files/placeholderIteration.js";
import priceRange from "./files/priceRange.js";
import select from "./files/select.js";
import sliders from "./files/sliders.js";
import spoller from "./files/spoller.js";
import switcherTab from "./files/switcherTab.js";
import tabs from "./files/tabs.js";

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
tabs();
inputControlScrollbar();
filesChange();
formSearch();
priceRange();
filters();
more();

Fancybox.bind("[data-fancybox]", {
  closeButton: false,
});
Shareon.init();
// Fancybox.show([{ src: "#modal-order", type: "inline" }]);
