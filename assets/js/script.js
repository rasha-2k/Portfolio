/* typing animation */
const typed = new Typed(".typing", {
    strings: ["Software Engineer", "QA Tester", "Backend Developer", "Problem Solver"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})
/*Aside*/
const nav = document.querySelector('.nav');
const navlist = nav.querySelectorAll('li');
const totalNavList = navlist.length;
const allSection = document.querySelectorAll('.section');
const totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navlist[i].querySelector('a');
    a.addEventListener('click', function () {
        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if (navlist[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
                //allSection[j].classList.add("back-section");
            }
            navlist[j].querySelector('a').classList.remove('active');
        }
        this.classList.add('active')
        showSection(this);
        if (window.innerWidth <= 1200) {
            asideSectionTogglerBtn();
        }
    })
}
function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num) {
    allSection[num].classList.add("back-section");
}
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector(`#${target}`).classList.add("active")
}
function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navlist[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navlist[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navlist[i].querySelector("a").classList.add("active");
        }
    }
}
for (const item of document.querySelectorAll('.info-item')) {
    item.addEventListener('click', function (event) {
        const url = this.getAttribute('data-url'); // we'll store the URL here
        const isLinkClick = event.target.tagName === 'A' ||
            (event.target.parentElement && event.target.parentElement.tagName === 'A');
        if (!isLinkClick && url) {
            window.open(url, '_blank');
        }
    });
}
document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    //console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}
// Add click event listener to the logo
document.querySelector('.logo a').addEventListener('click', function (event) {
    event.preventDefault();
    const target = this.getAttribute("href").split("#")[1];
    showSection(this);
    updateNav(this);
    removeBackSection();
});
// about tabs
const aboutTabItems = document.querySelectorAll('.about-tab-item');
const aboutContents = document.querySelectorAll('.about-tab-content');
for (const aboutItem of aboutTabItems) {
    aboutItem.addEventListener('click', () => {

        // Remove active classes from all tab items and contents
        for (const tab of aboutTabItems) {
            tab.classList.remove('active');
        }
        for (const content of aboutContents) {
            content.classList.remove('active');
        }

        // Activate the clicked tab and its content
        aboutItem.classList.add('active');
        document.querySelector(aboutItem.getAttribute('data-target')).classList.add('active');
    });
}
// skills tabs
const skillsTabItems = document.querySelectorAll('.skills-tab-item');
const skillsContents = document.querySelectorAll('.skills-tab-content');
for (const skillsItem of skillsTabItems) {
    skillsItem.addEventListener('click', () => {

        // Remove active classes from all tab items and contents
        for (const tab of skillsTabItems) {
            tab.classList.remove('active');
        }
        for (const content of skillsContents) {
            content.classList.remove('active');
        }

        skillsItem.classList.add('active');
        document.querySelector(skillsItem.getAttribute('data-target')).classList.add('active');
    });
}

//skills
document.addEventListener('DOMContentLoaded', () => {
    const skillCounters = document.querySelectorAll('.skill-percentage');
    let animated = false;

    function animateSkills() {
        if (animated) return;
        animated = true;

        for (const el of skillCounters) {
            const target = Number.parseInt(el.getAttribute('data-percentage'), 10);
            let count = 0;

            const interval = setInterval(() => {
                if (count >= target) {
                    clearInterval(interval);
                } else {
                    count++;
                    el.textContent = `${count}%`;
                }
            }, 20);
        }
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    function checkScroll() {
        const skillsSection = document.getElementById('skills');
        if (skillsSection && isElementInViewport(skillsSection)) {
            animateSkills();
            window.removeEventListener('scroll', checkScroll);
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();
});