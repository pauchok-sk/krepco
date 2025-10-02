(() => {
    "use strict";
    function burger() {
        const burgerOpen = document.querySelector("#burger-open");
        const burgerCloses = document.querySelectorAll("[data-burger-close]");
        const burger = document.querySelector("#burger");
        const burgerOverlay = document.querySelector("#burger-overlay");
        if (burger) {
            burger.addEventListener("click", e => e.stopPropagation());
            burgerOverlay.addEventListener("click", handlerBurgerClose);
            burgerOpen.addEventListener("click", e => {
                e.stopPropagation();
                handlerBurgerOpen();
            });
            burgerCloses.forEach(btn => {
                btn.addEventListener("click", e => {
                    e.stopPropagation();
                    handlerBurgerClose();
                });
            });
            function handlerBurgerClose() {
                burger.classList.remove("_open");
                burgerOverlay.classList.remove("_active");
                document.body.classList.remove("body-hidden");
            }
            function handlerBurgerOpen() {
                burger.classList.add("_open");
                burgerOverlay.classList.add("_active");
                document.body.classList.add("body-hidden");
            }
            function updateHeightBurger() {
                burger.style.maxHeight = `${window.visualViewport.height - 30}px`;
            }
            window.visualViewport.addEventListener("resize", updateHeightBurger);
            window.visualViewport.addEventListener("scroll", updateHeightBurger);
            updateHeightBurger();
        }
    }
    function burgerMenus() {
        const buttons = document.querySelectorAll("[data-burger-menu-btn]");
        if (buttons.length) {
            const menus = document.querySelectorAll("[data-burger-menu]");
            buttons.forEach(btn => {
                btn.addEventListener("click", () => {
                    const id = btn.dataset.burgerMenuBtn;
                    const currentMenu = document.querySelector(`[data-burger-menu="${id}"]`);
                    menus.forEach(m => {
                        m.classList.remove("_active");
                        m.style.opacity = 0;
                    });
                    currentMenu.classList.add("_active");
                    setTimeout(() => {
                        currentMenu.style.opacity = 1;
                    }, 100);
                });
            });
        }
    }
    function dropCatalog() {
        const buttons = document.querySelectorAll("[data-drop-menu-btn]");
        if (buttons.length) {
            const menus = document.querySelectorAll("[data-drop-menu]");
            buttons.forEach(btn => {
                btn.addEventListener("mouseenter", () => {
                    const id = btn.dataset.dropMenuBtn;
                    const currentMenu = document.querySelector(`[data-drop-menu="${id}"]`);
                    if (!btn.classList.contains("_active")) {
                        menus.forEach(m => {
                            m.style.opacity = 0;
                            m.classList.remove("_active");
                        });
                        buttons.forEach(b => b.classList.remove("_active"));
                        btn.classList.add("_active");
                        currentMenu.classList.add("_active");
                        setTimeout(() => {
                            currentMenu.style.opacity = 1;
                        }, 100);
                    }
                });
            });
        }
        const dropCatalog = document.querySelector("#drop-catalog");
        if (dropCatalog) {
            const toggleBtn = document.querySelector("#drop-catalog-toggle");
            document.body.addEventListener("click", () => {
                dropCatalog.classList.remove("_open");
                toggleBtn.classList.remove("_active");
            });
            dropCatalog.addEventListener("click", e => e.stopPropagation());
            toggleBtn.addEventListener("click", e => {
                e.stopPropagation();
                toggleBtn.classList.toggle("_active");
                dropCatalog.classList.toggle("_open");
            });
        }
    }
    function dropdown() {
        const buttons = document.querySelectorAll(".dropdown-btn");
        if (buttons.length && window.matchMedia("(max-width: 1023px)")) {
            const dropdowns = document.querySelectorAll(".dropdown");
            const bodies = document.querySelectorAll(".dropdown-body");
            document.body.addEventListener("click", () => {
                dropdowns.forEach(d => d.classList.remove("_open"));
                buttons.forEach(b => b.classList.remove("_active"));
            });
            bodies.forEach(b => b.addEventListener("click", e => e.stopPropagation()));
            buttons.forEach(btn => {
                btn.addEventListener("click", e => {
                    e.stopPropagation();
                    const dropdown = btn.closest(".dropdown");
                    if (btn.classList.contains("_active")) {
                        btn.classList.remove("_active");
                        dropdown.classList.remove("_open");
                    } else {
                        dropdowns.forEach(d => d.classList.remove("_active"));
                        btn.classList.add("_active");
                        dropdown.classList.add("_open");
                    }
                });
            });
        }
    }
    function inputmask() {
        const inputs = document.querySelectorAll('input[type="tel"]');
        const im = new Inputmask("+7 (999) 999-99-99");
        im.mask(inputs);
    }
    function mediaAdaptive() {
        function DynamicAdapt(type) {
            this.type = type;
        }
        DynamicAdapt.prototype.init = function() {
            const _this = this;
            this.оbjects = [];
            this.daClassname = "_dynamic_adapt_";
            this.nodes = document.querySelectorAll("[data-da]");
            for (let i = 0; i < this.nodes.length; i++) {
                const node = this.nodes[i];
                const data = node.dataset.da.trim();
                const dataArray = data.split(",");
                const оbject = {};
                оbject.element = node;
                оbject.parent = node.parentNode;
                оbject.destination = document.querySelector(dataArray[0].trim());
                оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.оbjects.push(оbject);
            }
            this.arraySort(this.оbjects);
            this.mediaQueries = Array.prototype.map.call(this.оbjects, function(item) {
                return "(" + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
            }, this);
            this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function(item, index, self) {
                return Array.prototype.indexOf.call(self, item) === index;
            });
            for (let i = 0; i < this.mediaQueries.length; i++) {
                const media = this.mediaQueries[i];
                const mediaSplit = String.prototype.split.call(media, ",");
                const matchMedia = window.matchMedia(mediaSplit[0]);
                const mediaBreakpoint = mediaSplit[1];
                const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function(item) {
                    return item.breakpoint === mediaBreakpoint;
                });
                matchMedia.addListener(function() {
                    _this.mediaHandler(matchMedia, оbjectsFilter);
                });
                this.mediaHandler(matchMedia, оbjectsFilter);
            }
        };
        DynamicAdapt.prototype.mediaHandler = function(matchMedia, оbjects) {
            if (matchMedia.matches) for (let i = 0; i < оbjects.length; i++) {
                const оbject = оbjects[i];
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.moveTo(оbject.place, оbject.element, оbject.destination);
            } else for (let i = 0; i < оbjects.length; i++) {
                const оbject = оbjects[i];
                if (оbject.element.classList.contains(this.daClassname)) this.moveBack(оbject.parent, оbject.element, оbject.index);
            }
        };
        DynamicAdapt.prototype.moveTo = function(place, element, destination) {
            element.classList.add(this.daClassname);
            if (place === "last" || place >= destination.children.length) {
                destination.insertAdjacentElement("beforeend", element);
                return;
            }
            if (place === "first") {
                destination.insertAdjacentElement("afterbegin", element);
                return;
            }
            destination.children[place].insertAdjacentElement("beforebegin", element);
        };
        DynamicAdapt.prototype.moveBack = function(parent, element, index) {
            element.classList.remove(this.daClassname);
            if (parent.children[index] !== void 0) parent.children[index].insertAdjacentElement("beforebegin", element); else parent.insertAdjacentElement("beforeend", element);
        };
        DynamicAdapt.prototype.indexInParent = function(parent, element) {
            const array = Array.prototype.slice.call(parent.children);
            return Array.prototype.indexOf.call(array, element);
        };
        DynamicAdapt.prototype.arraySort = function(arr) {
            if (this.type === "min") Array.prototype.sort.call(arr, function(a, b) {
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) return 0;
                    if (a.place === "first" || b.place === "last") return -1;
                    if (a.place === "last" || b.place === "first") return 1;
                    return a.place - b.place;
                }
                return a.breakpoint - b.breakpoint;
            }); else {
                Array.prototype.sort.call(arr, function(a, b) {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if (a.place === "first" || b.place === "last") return 1;
                        if (a.place === "last" || b.place === "first") return -1;
                        return b.place - a.place;
                    }
                    return b.breakpoint - a.breakpoint;
                });
                return;
            }
        };
        const da = new DynamicAdapt("max");
        da.init();
    }
    function select_select() {
        const buttons = document.querySelectorAll(".select-btn");
        if (buttons.length) {
            const selectsBodies = document.querySelectorAll(".select-body");
            const selects = document.querySelectorAll(".select");
            const selectItems = document.querySelectorAll(".select-item");
            const selectInputs = document.querySelectorAll(".select-input");
            selectsBodies.forEach(body => {
                body.addEventListener("click", e => e.stopPropagation());
            });
            document.body.addEventListener("click", () => {
                const currentSelect = document.querySelector(".select._open");
                if (currentSelect) handleClose(currentSelect);
            });
            selectItems.forEach(item => {
                item.addEventListener("click", () => {
                    const select = item.closest(".select");
                    const input = select.querySelector(".select-input");
                    const value = item.dataset.value;
                    selectItems.forEach(i => i.classList.remove("_active"));
                    input.value = value;
                    item.classList.add("_active");
                    handleClose(select);
                });
            });
            buttons.forEach(btn => {
                btn.addEventListener("click", e => {
                    e.stopPropagation();
                    const select = btn.closest(".select");
                    const input = select.querySelector(".select-input");
                    if (select.classList.contains("_open")) {
                        select.classList.remove("_open");
                        input.setAttribute("readonly", "");
                    } else {
                        selects.forEach(s => {
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
            selectInputs.forEach(input => {
                const select = input.closest(".select");
                const items = select.querySelectorAll(".select-item");
                const body = select.querySelector(".select-body");
                input.addEventListener("input", e => {
                    const inputValue = e.target.value.toLowerCase();
                    items.forEach(item => {
                        const notFound = select.querySelector(".select-not-found");
                        const value = item.dataset.value.toLowerCase();
                        if (value.includes(inputValue)) item.style.display = "block"; else item.style.display = "none";
                        const unequal = document.querySelectorAll('*[style*="display: none"]').length;
                        if (unequal === items.length) {
                            if (!notFound) {
                                const div = document.createElement("div");
                                div.classList.add("select-not-found");
                                div.textContent = "По запросу ничего не найдено :с";
                                body.appendChild(div);
                            }
                        } else notFound?.remove();
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
    function sliders() {
        const heroSlider = document.querySelector(".s-hero__slider");
        if (heroSlider) {
            new Swiper(heroSlider, {
                speed: 700,
                effect: "fade",
                autoplay: {
                    delay: 3500
                },
                pagination: {
                    el: ".s-hero__slider-pagination",
                    clickable: true
                }
            });
        }
    }
    function spoller() {
        const spollersArray = document.querySelectorAll("[data-spollers]");
        if (spollersArray.length > 0) {
            const spollersRegular = Array.from(spollersArray).filter(function(item, index, self) {
                return !item.dataset.spollers.split(",")[0];
            });
            if (spollersRegular.length) initSpollers(spollersRegular);
            let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
            if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach(mdQueriesItem => {
                mdQueriesItem.matchMedia.addEventListener("change", function() {
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                });
                initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
            });
            function initSpollers(spollersArray, matchMedia = false) {
                spollersArray.forEach(spollersBlock => {
                    spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                    if (matchMedia.matches || !matchMedia) {
                        spollersBlock.classList.add("_spoller-init");
                        initSpollerBody(spollersBlock);
                        spollersBlock.addEventListener("click", setSpollerAction);
                    } else {
                        spollersBlock.classList.remove("_spoller-init");
                        initSpollerBody(spollersBlock, false);
                        spollersBlock.removeEventListener("click", setSpollerAction);
                    }
                });
            }
            function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                if (spollerTitles.length) {
                    spollerTitles = Array.from(spollerTitles).filter(item => item.closest("[data-spollers]") === spollersBlock);
                    spollerTitles.forEach(spollerTitle => {
                        if (hideSpollerBody) {
                            spollerTitle.removeAttribute("tabindex");
                            if (!spollerTitle.classList.contains("_spoller-active")) spollerTitle.nextElementSibling.hidden = true;
                        } else {
                            spollerTitle.setAttribute("tabindex", "-1");
                            spollerTitle.nextElementSibling.hidden = false;
                        }
                    });
                }
            }
            function setSpollerAction(e) {
                const el = e.target;
                if (el.closest("[data-spoller]")) {
                    const spollerTitle = el.closest("[data-spoller]");
                    const spollersBlock = spollerTitle.closest("[data-spollers]");
                    const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (!spollersBlock.querySelectorAll("._slide").length) {
                        if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) hideSpollersBody(spollersBlock);
                        spollerTitle.classList.toggle("_spoller-active");
                        _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                    }
                }
            }
            function hideSpollersBody(spollersBlock) {
                const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
                const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                    spollerActiveTitle.classList.remove("_spoller-active");
                    _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                }
            }
            const spollersClose = document.querySelectorAll("[data-spoller-close]");
            if (spollersClose.length) document.addEventListener("click", function(e) {
                const el = e.target;
                if (!el.closest("[data-spollers]")) spollersClose.forEach(spollerClose => {
                    const spollersBlock = spollerClose.closest("[data-spollers]");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    spollerClose.classList.remove("_spoller-active");
                    _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                });
            });
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter(function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            });
            if (media.length) {
                const breakpointsArray = [];
                media.forEach(item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                });
                let mdQueries = breakpointsArray.map(function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                });
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach(breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter(function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        });
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    });
                    return mdQueriesArray;
                }
            }
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout(() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }, duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout(() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }, duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        function uniqArray(array) {
            return array.filter(function(item, index, self) {
                return self.indexOf(item) === index;
            });
        }
    }
    spoller();
    mediaAdaptive();
    dropdown();
    inputmask();
    select_select();
    dropCatalog();
    burger();
    burgerMenus();
    sliders();
    Fancybox.bind("[data-fancybox]", {
        closeButton: false
    });
})();