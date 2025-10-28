(() => {
    "use strict";
    function anchors_anchors() {
        document.querySelectorAll("[data-anchor]").forEach(link => {
            link.addEventListener("click", function(e) {
                e.preventDefault();
                let href = this.getAttribute("href").substring(1);
                const scrollTarget = document.getElementById(href);
                if (scrollTarget) window.scrollBy({
                    top: scrollTarget.getBoundingClientRect().top,
                    behavior: "smooth"
                });
            });
        });
    }
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
    function cardProductCounter() {
        const counters = document.querySelectorAll(".card-product__counter");
        if (counters.length) counters.forEach(counter => {
            const input = counter.querySelector(".card-product__counter-input");
            const min = +input.min;
            const max = +input.max;
            const btnPlus = counter.querySelector(".card-product__counter-btn._plus");
            const btnMinus = counter.querySelector(".card-product__counter-btn._minus");
            if (+input.value <= min) btnMinus.classList.add("_disabled");
            if (+input.value >= max) btnPlus.classList.add("_disabled");
            btnPlus.addEventListener("click", () => {
                change("plus");
            });
            btnMinus.addEventListener("click", () => {
                change("minus");
            });
            input.addEventListener("input", e => {
                const value = +e.target.value;
                if (value > min) btnMinus.classList.remove("_disabled"); else btnMinus.classList.add("_disabled");
                if (value < max) btnPlus.classList.remove("_disabled"); else btnPlus.classList.add("_disabled");
                if (value > max) input.value = 100; else if (value < min) input.value = 1;
            });
            function change(action) {
                if (action === "minus") input.value = +input.value - 1; else if (action === "plus") input.value = +input.value + 1;
                if (+input.value > min) btnMinus.classList.remove("_disabled"); else btnMinus.classList.add("_disabled");
                if (+input.value < max) btnPlus.classList.remove("_disabled"); else btnPlus.classList.add("_disabled");
            }
        });
    }
    function cartAllCheckbox() {
        const selectAllInput = document.querySelector("#select-all");
        if (selectAllInput) {
            const allInputs = document.querySelectorAll(".card-product-cart .input-checkbox");
            selectAllInput.addEventListener("change", e => {
                if (e.target.checked) allInputs.forEach(i => i.checked = true); else allInputs.forEach(i => i.checked = false);
            });
            allInputs.forEach(input => {
                input.addEventListener("change", e => {
                    if (selectAllInput.checked = e.target.checked) selectAllInput.checked = false;
                });
            });
        }
    }
    function counter() {
        const counters = document.querySelectorAll(".counter");
        if (counters.length) counters.forEach(counter => {
            const input = counter.querySelector(".counter__input");
            const min = +input.min;
            const max = +input.max;
            const btnPlus = counter.querySelector(".counter__btn._plus");
            const btnMinus = counter.querySelector(".counter__btn._minus");
            if (+input.value <= min) btnMinus.classList.add("_disabled");
            if (+input.value >= max) btnPlus.classList.add("_disabled");
            btnPlus.addEventListener("click", () => {
                change("plus");
            });
            btnMinus.addEventListener("click", () => {
                change("minus");
            });
            input.addEventListener("input", e => {
                const value = +e.target.value;
                if (value > min) btnMinus.classList.remove("_disabled"); else btnMinus.classList.add("_disabled");
                if (value < max) btnPlus.classList.remove("_disabled"); else btnPlus.classList.add("_disabled");
                if (value > max) input.value = 100; else if (value < min) input.value = 1;
            });
            function change(action) {
                if (action === "minus") input.value = +input.value - 1; else if (action === "plus") input.value = +input.value + 1;
                if (+input.value > min) btnMinus.classList.remove("_disabled"); else btnMinus.classList.add("_disabled");
                if (+input.value < max) btnPlus.classList.remove("_disabled"); else btnPlus.classList.add("_disabled");
            }
        });
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
            dropCatalog.addEventListener("click", e => {
                if (!e.target.hasAttribute("data-fancybox")) e.stopPropagation();
            });
            toggleBtn.addEventListener("click", e => {
                e.stopPropagation();
                toggleBtn.classList.toggle("_active");
                dropCatalog.classList.toggle("_open");
            });
        }
    }
    function hide(target, duration = 200, showmore = 0) {
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
    }
    function show(target, duration = 200, showmore = 0) {
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
    }
    function dropdown() {
        const dropdowns = document.querySelectorAll(".dropdown");
        if (dropdowns.length) {
            const bodies = document.querySelectorAll(".dropdown-body");
            bodies.forEach(body => {
                hide(body, 0);
            });
            if (window.matchMedia("(min-width: 1024px)").matches) dropdowns.forEach(drop => {
                drop.addEventListener("mousemove", e => {
                    e.stopPropagation();
                    e.preventDefault();
                });
                drop.addEventListener("mouseenter", e => {
                    e.stopPropagation();
                    const body = drop.querySelector(".dropdown-body");
                    show(body);
                });
                drop.addEventListener("mouseleave", e => {
                    e.stopPropagation();
                    const body = drop.querySelector(".dropdown-body");
                    hide(body);
                    setTimeout(() => {
                        if (!body.hasAttribute("hidden")) hide(body);
                    }, 500);
                });
            }); else {
                document.body.addEventListener("click", () => {
                    const openDrop = document.querySelector(".dropdown._open");
                    if (openDrop) {
                        const body = openDrop.querySelector(".dropdown-body");
                        openDrop.classList.remove("_open");
                        hide(body);
                    }
                });
                dropdowns.forEach(drop => {
                    const btn = drop.querySelector(".dropdown-btn");
                    const body = drop.querySelector(".dropdown-body");
                    body.addEventListener("click", e => e.stopPropagation());
                    btn.addEventListener("click", e => {
                        e.stopPropagation();
                        if (!drop.classList.contains("_open")) {
                            drop.classList.add("_open");
                            show(body);
                        } else {
                            drop.classList.remove("_open");
                            hide(body);
                        }
                    });
                });
            }
        }
    }
    function filesChange() {
        const inputs = document.querySelectorAll(".input-file");
        if (inputs.length) inputs.forEach(input => {
            const btn = input.nextElementSibling;
            const name = btn.querySelector(".name");
            const close = btn.querySelector(".file-close");
            close.addEventListener("click", e => {
                e.stopPropagation();
                e.preventDefault();
                input.value = null;
                name.textContent = btn.dataset.text || "Прикрепить файл";
                close.classList.add("_hide");
            });
            input.addEventListener("change", e => {
                const file = e.target.files[0];
                if (file) {
                    name.textContent = file.name;
                    close.classList.remove("_hide");
                }
            });
        });
    }
    function filters() {
        const filters = document.querySelector("#filters");
        if (filters && window.matchMedia("(max-width: 1023px)").matches) {
            const shop = document.querySelector("#shop");
            const btnOpen = document.querySelector("#filters-open");
            const btnClose = document.querySelector("#filters-close");
            const overlay = document.querySelector("#filters-overlay");
            btnOpen.addEventListener("click", handleOpen);
            btnClose.addEventListener("click", handleClose);
            overlay.addEventListener("click", handleClose);
            function handleOpen() {
                filters.classList.add("_active");
                overlay.classList.add("_active");
                document.body.classList.add("body-hidden");
            }
            function handleClose() {
                filters.classList.remove("_active");
                overlay.classList.remove("_active");
                document.body.classList.remove("body-hidden");
            }
            shop.appendChild(filters);
        }
    }
    function formSearch() {
        const formSearch = document.querySelector(".form-search");
        if (formSearch) window.addEventListener("scroll", () => {
            if (formSearch.classList.contains("_open")) formSearch.classList.remove("_open");
        });
    }
    function headerScroll() {
        const header = document.querySelector("header");
        if (header) {
            let lastScrollTop = 0;
            window.addEventListener("scroll", () => {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                if (scrollTop > header.clientHeight && scrollTop > lastScrollTop) header.classList.add("_scroll"); else header.classList.remove("_scroll");
                lastScrollTop = scrollTop;
            });
        }
    }
    function inputControlScrollbar() {
        const controls = document.querySelectorAll(".input-control._scrollbar");
        if (controls.length) controls.forEach(control => {
            const input = control.querySelector(".input");
            input.addEventListener("blur", () => {
                control.classList.remove("_border-primary");
            });
            input.addEventListener("focus", () => {
                control.classList.add("_border-primary");
            });
        });
    }
    function inputmask() {
        const inputs = document.querySelectorAll('input[type="tel"]');
        const im = new Inputmask("+7 (999) 999-99-99");
        im.mask(inputs);
    }
    function map() {
        const maps = document.querySelectorAll(".map");
        if (maps.length) maps.forEach(map => {
            const center = JSON.parse(map.dataset.center);
            const zoom = Number(map.dataset.zoom);
            function init() {
                const htmlMap = new ymaps.Map(map, {
                    center,
                    zoom
                });
                const placemark = new ymaps.Placemark(center, {}, {});
                htmlMap.geoObjects.add(placemark);
                htmlMap.controls.remove("geolocationControl");
                htmlMap.controls.remove("searchControl");
                htmlMap.controls.remove("trafficControl");
                htmlMap.controls.remove("typeSelector");
                htmlMap.controls.remove("fullscreenControl");
                htmlMap.controls.remove("rulerControl");
                htmlMap.behaviors.disable([ "scrollZoom" ]);
            }
            ymaps.ready(init);
        });
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
    function more() {
        const containers = document.querySelectorAll(".container-more");
        if (containers.length) containers.forEach(container => {
            const btn = container.querySelector("[data-more-btn]");
            const count = +container.dataset.countShow;
            const hideItems = Array.from(container.querySelectorAll("[data-more-item]")).filter(item => window.getComputedStyle(item).display === "none");
            if (hideItems.length === 0) btn.remove();
            btn.addEventListener("click", () => {
                const items = container.querySelectorAll("[data-more-item]");
                const hideItems = Array.from(items).filter(item => window.getComputedStyle(item).display === "none");
                hideItems.splice(0, count).forEach(item => {
                    item.style.display = "block";
                    setTimeout(() => {
                        item.style.opacity = 1;
                        item.style.transform = "translateY(0)";
                    });
                });
                if (hideItems.length <= 0) btn.remove();
            });
        });
    }
    function placeholderIteration() {
        const items = document.querySelectorAll("[data-placeholder-iteration]");
        if (items.length) items.forEach(item => {
            const array = item.dataset.placeholderIteration.split(",");
            let currentIndex = 0;
            item.placeholder = array[currentIndex];
            setInterval(() => {
                item.classList.add("_hide");
                setTimeout(() => {
                    item.placeholder = array[currentIndex];
                    item.classList.remove("_hide");
                }, 150);
                if (currentIndex < array.length - 1) currentIndex += 1; else currentIndex = 0;
            }, +item.dataset.placeholderDelay);
        });
    }
    function priceRange() {
        const priceRange = document.querySelector("#price-range");
        if (priceRange) {
            const inputMin = document.querySelector("#input-price-min");
            const inputMax = document.querySelector("#input-price-max");
            const inputs = [ inputMin, inputMax ];
            noUiSlider.create(priceRange, {
                start: [ +inputMin.value, +inputMax.value ],
                connect: true,
                range: {
                    min: +inputMin.value,
                    max: +inputMax.value
                },
                step: 1
            });
            priceRange.noUiSlider.on("update", (values, handle) => {
                inputs[handle].value = Math.round(values[handle]);
            });
            inputs.forEach(input => {
                input.addEventListener("input", () => {
                    if (input.value < input.min) input.value = input.min;
                });
            });
        }
    }
    function printBtn() {
        const buttons = document.querySelectorAll(".print-btn");
        if (buttons.length) buttons.forEach(btn => {
            btn.addEventListener("click", () => window.print());
        });
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
                    const isInputReadonly = input.dataset.readonly;
                    if (select.classList.contains("_open")) {
                        select.classList.remove("_open");
                        if (!isInputReadonly) input.setAttribute("readonly", "");
                    } else {
                        selects.forEach(s => {
                            handleClose(s);
                        });
                        select.classList.add("_open");
                        if (!isInputReadonly) {
                            input.removeAttribute("readonly");
                            input.focus();
                        }
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
        const heroSlider = document.querySelector(".section-hero__slider");
        if (heroSlider) {
            new Swiper(heroSlider, {
                speed: 700,
                slidesPerView: 1,
                spaceBetween: 20,
                effect: "fade",
                autoplay: {
                    delay: 3500
                },
                pagination: {
                    el: ".section-hero__slider-pagination",
                    clickable: true
                }
            });
        }
        const switcherSliders = document.querySelectorAll(".section-switcher__slider");
        if (switcherSliders.length) switcherSliders.forEach(slider => {
            new Swiper(slider, {
                speed: 700,
                slidesPerView: 2,
                spaceBetween: 10,
                navigation: {
                    prevEl: slider.closest(".section-switcher__tab-wrapper").querySelector(".section-switcher__slider-btn._prev"),
                    nextEl: slider.closest(".section-switcher__tab-wrapper").querySelector(".section-switcher__slider-btn._next")
                },
                breakpoints: {
                    1500: {
                        slidesPerView: 5,
                        spaceBetween: 20
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    576: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    }
                }
            });
        });
        const productSliders = document.querySelectorAll(".card-product__slider");
        if (productSliders.length) productSliders.forEach(slider => {
            const swiper = new Swiper(slider, {
                speed: 900,
                pagination: {
                    el: slider.nextElementSibling,
                    clickable: true
                }
            });
            const switches = slider.querySelectorAll(".card-product__slide-switch");
            if (switches.length) switches.forEach((sw, index) => {
                sw.addEventListener("mouseenter", () => {
                    swiper.slideTo(index);
                });
            });
        });
        const fastenersSlider = document.querySelector(".section-fasteners__slider");
        if (fastenersSlider && window.matchMedia("(max-width: 1199px)").matches) {
            new Swiper(fastenersSlider, {
                speed: 800,
                slidesPerView: "auto",
                spaceBetween: 10,
                autoplay: {
                    delay: 3500
                },
                breakpoints: {
                    768: {
                        slidesPerView: "auto",
                        spaceBetween: 25
                    }
                }
            });
        }
        const deliveryAdvSlider = document.querySelector(".section-delivery__adv-slider");
        if (deliveryAdvSlider && window.matchMedia("(max-width: 767px)").matches) {
            new Swiper(deliveryAdvSlider, {
                speed: 800,
                slidesPerView: "auto",
                spaceBetween: 10,
                autoplay: {
                    delay: 3200
                }
            });
        }
        const partnersSlider = document.querySelector(".section-partners__slider");
        if (partnersSlider) {
            new Swiper(partnersSlider, {
                speed: 800,
                slidesPerView: "auto",
                spaceBetween: 10,
                autoplay: {
                    delay: 3500
                },
                navigation: {
                    prevEl: ".section-partners .slider-btn._prev",
                    nextEl: ".section-partners .slider-btn._next"
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 6,
                        spaceBetween: 20
                    },
                    576: {
                        slidesPerView: "auto",
                        spaceBetween: 20
                    }
                }
            });
        }
        const certificatesSlider = document.querySelector(".section-certificates__slider");
        if (certificatesSlider) {
            new Swiper(certificatesSlider, {
                speed: 800,
                slidesPerView: "auto",
                spaceBetween: 10,
                autoplay: {
                    delay: 3200
                },
                navigation: {
                    prevEl: ".section-certificates .slider-btn._prev",
                    nextEl: ".section-certificates .slider-btn._next"
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 20
                    },
                    576: {
                        slidesPerView: "auto",
                        spaceBetween: 20
                    }
                }
            });
        }
        const reviewsSliders = document.querySelectorAll(".section-reviews__slider");
        if (reviewsSliders.length) reviewsSliders.forEach(slider => {
            new Swiper(slider, {
                speed: 800,
                slidesPerView: "auto",
                spaceBetween: 20,
                autoplay: {
                    delay: 3700
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    }
                }
            });
        });
        const usefulSlider = document.querySelector(".section-useful__slider");
        if (usefulSlider) {
            new Swiper(usefulSlider, {
                speed: 800,
                slidesPerView: "auto",
                spaceBetween: 20,
                breakpoints: {
                    1366: {
                        slidesPerView: 4,
                        spaceBetween: 25
                    },
                    576: {
                        slidesPerView: "auto",
                        spaceBetween: 25
                    }
                }
            });
        }
        const bannerSlider = document.querySelector(".section-banner__slider");
        if (bannerSlider) {
            new Swiper(bannerSlider, {
                speed: 700,
                slidesPerView: 1,
                spaceBetween: 20,
                effect: "fade",
                autoplay: {
                    delay: 3500
                },
                pagination: {
                    el: ".section-banner__slider-pagination",
                    clickable: true
                }
            });
        }
        const recSliders = document.querySelectorAll(".section-recommendation__slider");
        if (recSliders.length) recSliders.forEach((slider, index) => {
            new Swiper(slider, {
                speed: 700,
                slidesPerView: "auto",
                spaceBetween: 10,
                navigation: {
                    prevEl: slider.closest(".section-recommendation").querySelector(".slider-btn._prev"),
                    nextEl: slider.closest(".section-recommendation").querySelector(".slider-btn._next")
                },
                breakpoints: {
                    1540: {
                        slidesPerView: 5,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: "auto",
                        spaceBetween: 20
                    }
                }
            });
        });
        const productSlider = document.querySelector(".section-product__slider");
        if (productSlider) {
            const thumbSlider = document.querySelector(".section-product__thumb-slider");
            new Swiper(thumbSlider, {
                speed: 900,
                spaceBetween: 20,
                direction: "horizontal",
                slidesPerView: "auto",
                breakpoints: {
                    1366: {
                        direction: "vertical",
                        spaceBetween: 27,
                        slidesPerView: 4
                    },
                    768: {
                        spaceBetween: 24,
                        direction: "horizontal",
                        slidesPerView: "auto"
                    }
                }
            });
            new Swiper(productSlider, {
                speed: 900,
                spaceBetween: 20,
                navigation: {
                    prevEl: ".section-product .slider-btn._prev",
                    nextEl: ".section-product .slider-btn._next"
                },
                thumbs: {
                    swiper: thumbSlider
                }
            });
        }
        const teamSlider = document.querySelector(".section-team__slider");
        if (teamSlider) {
            new Swiper(teamSlider, {
                speed: 700,
                slidesPerView: "auto",
                spaceBetween: 25,
                autoplay: {
                    delay: 3500
                },
                navigation: {
                    prevEl: ".section-team .slider-btn._prev",
                    nextEl: ".section-team .slider-btn._next"
                },
                breakpoints: {
                    1540: {
                        slidesPerView: 5,
                        spaceBetween: 60
                    },
                    1366: {
                        slidesPerView: 5,
                        spaceBetween: 30
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }
            });
        }
        const trustSlider = document.querySelector(".section-trust__slider");
        if (trustSlider) {
            new Swiper(trustSlider, {
                speed: 700,
                slidesPerView: 2,
                spaceBetween: 10,
                autoplay: {
                    delay: 3500
                },
                breakpoints: {
                    1366: {
                        slidesPerView: 6,
                        spaceBetween: 25
                    },
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 25
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 25
                    },
                    576: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    }
                }
            });
        }
        const portfolioSlider = document.querySelector(".section-portfolio__slider");
        if (portfolioSlider) {
            new Swiper(portfolioSlider, {
                speed: 700,
                slidesPerView: "auto",
                spaceBetween: 10,
                autoplay: {
                    delay: 3500
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 25
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 25
                    }
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
    function switcherTab() {
        const switchers = document.querySelectorAll(".switcher");
        if (switchers.length) switchers.forEach(switcher => {
            const buttons = switcher.querySelectorAll("[data-switcher-tab-btn]");
            const tabs = switcher.querySelectorAll("[data-switcher-tab]");
            const switchTarget = switcher.querySelector(".switcher__switch");
            switchTarget.addEventListener("click", () => {
                const btnNotActive = switcher.querySelector("[data-switcher-tab-btn]:not(._active)");
                const id = btnNotActive.dataset.switcherTabBtn;
                buttons.forEach(b => b.classList.remove("_active"));
                btnNotActive.classList.add("_active");
                change(id);
            });
            buttons.forEach(btn => {
                btn.addEventListener("click", () => {
                    const id = btn.dataset.switcherTabBtn;
                    buttons.forEach(b => b.classList.remove("_active"));
                    btn.classList.add("_active");
                    change(id);
                });
            });
            function change(id) {
                tabs.forEach(t => {
                    t.classList.remove("_active");
                    t.classList.remove("_show");
                });
                const currentTab = document.querySelector(`[data-switcher-tab="${id}"]`);
                switchTarget.classList.toggle("_right");
                currentTab.classList.add("_active");
                setTimeout(() => {
                    currentTab.classList.add("_show");
                }, 150);
            }
        });
    }
    function tabs() {
        const buttons = document.querySelectorAll("[data-tab-btn]");
        if (buttons.length) buttons.forEach(btn => {
            btn.addEventListener("click", () => {
                const container = btn.closest(".tabs");
                const tabId = btn.dataset.tabBtn;
                const allButtons = container.querySelector(".tabs-nav").querySelectorAll("[data-tab-btn]");
                const allTabs = Array.from(container.querySelector(".tabs-content").children).filter(child => child.hasAttribute("data-tab"));
                const currentTab = container.querySelector(`[data-tab="${tabId}"]`);
                allTabs.forEach(t => {
                    t.classList.remove("_show");
                    t.classList.remove("_active");
                });
                currentTab.classList.add("_active");
                setTimeout(() => {
                    currentTab.classList.add("_show");
                }, 150);
                allButtons.forEach(b => b.classList.remove("_active"));
                btn.classList.add("_active");
            });
        });
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
    counter();
    anchors_anchors();
    printBtn();
    cartAllCheckbox();
    map();
    Fancybox.bind("[data-fancybox]", {
        closeButton: false
    });
    Shareon.init();
})();