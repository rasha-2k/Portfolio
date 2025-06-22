/*=========================== toggle style switcher ===========================*/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// hide style switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/*=========================== theme colors ===========================*/
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    localStorage.setItem("themeColor", color);
    for (const style of alternateStyles) {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    }
}

// On page load, apply saved color
const savedColor = localStorage.getItem("themeColor");
if (savedColor) {
    setActiveStyle(savedColor);
}

/*=========================== theme light and dark mode ===========================*/
const dayNight = document.querySelector(".day-night");

// Toggle theme + icon + store in localStorage
dayNight.addEventListener("click", () => {
    document.documentElement.classList.toggle("light");

    const icon = dayNight.querySelector("i");
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");

    // Save theme preference
    const currentTheme = document.documentElement.classList.contains("light") ? "light" : "dark";
    localStorage.setItem("themeMode", currentTheme);
});

// On load, apply saved theme and correct icon
window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("themeMode") || "dark";

    if (savedTheme === "light") {
        document.documentElement.classList.add("light");
        dayNight.querySelector("i").classList.add("fa-moon");
    } else {
        document.documentElement.classList.remove("light");
        dayNight.querySelector("i").classList.add("fa-sun");
    }

    // Make sure the sun/moon icons are properly toggled based on the class
    if (document.documentElement.classList.contains("light")) {
        dayNight.querySelector("i").classList.remove("fa-sun");
        dayNight.querySelector("i").classList.add("fa-moon");
    } else {
        dayNight.querySelector("i").classList.remove("fa-moon");
        dayNight.querySelector("i").classList.add("fa-sun");
    }
});
