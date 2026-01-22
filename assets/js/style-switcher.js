(() => {
    'use strict';

    /*! ========== STYLE SWITCHER ========== */

    const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
    const styleSwitcher = document.querySelector(".style-switcher");
    const alternateStyles = document.querySelectorAll(".alternate-style");
    const dayNight = document.querySelector(".day-night");
    const dayNightIcon = dayNight?.querySelector("i");

    styleSwitcherToggle?.addEventListener("click", () => {
        styleSwitcher?.classList.toggle("open");
    });

    window.addEventListener("scroll", () => {
        styleSwitcher?.classList.remove("open");
    }, { passive: true });

    /*! ========== THEME COLORS ========== */

    const setActiveStyle = (color) => {
        localStorage.setItem("themeColor", color);
        alternateStyles.forEach(style => {
            if (color === style.getAttribute("title")) {
                style.removeAttribute("disabled");
            } else {
                style.setAttribute("disabled", "true");
            }
        });
    };

    window.setActiveStyle = setActiveStyle;

    const savedColor = localStorage.getItem("themeColor");
    if (savedColor) setActiveStyle(savedColor);

    /*! ========== THEME LIGHT/DARK MODE ========== */

    const toggleTheme = () => {
        const isLight = document.documentElement.classList.toggle("light");
        
        if (dayNightIcon) {
            dayNightIcon.classList.toggle("fa-sun", !isLight);
            dayNightIcon.classList.toggle("fa-moon", isLight);
        }

        localStorage.setItem("themeMode", isLight ? "light" : "dark");
    };

    dayNight?.addEventListener("click", toggleTheme);

    window.addEventListener("load", () => {
        const savedTheme = localStorage.getItem("themeMode") || "dark";
        const isLight = savedTheme === "light";

        document.documentElement.classList.toggle("light", isLight);
        
        if (dayNightIcon) {
            dayNightIcon.classList.toggle("fa-sun", !isLight);
            dayNightIcon.classList.toggle("fa-moon", isLight);
        }
    });

})();