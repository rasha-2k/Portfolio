/* Typing Animation */
const typed = new Typed(".typing", {
    strings: ["Software Engineer", "QA Tester", "Backend Developer", "Problem Solver"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});

/* Aside Navigation */
const nav = document.querySelector('.nav');
const navlist = nav.querySelectorAll('li');
const totalNavList = navlist.length;
const navLinks = nav.querySelectorAll('a');
const allSection = document.querySelectorAll('.section');
const totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navlist[i].querySelector('a');
    a.addEventListener('click', function (e) {
        e.preventDefault();

        showSection(this);

        if (window.innerWidth <= 1200) {
            asideSectionTogglerBtn();
        }
    });
}

window.addEventListener('scroll', () => {
    const fromTop = window.scrollY + 150;

    for (const link of navLinks) {
        const section = document.querySelector(link.getAttribute('href'));

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            for (const l of navLinks) {
                l.classList.remove('active');
            }
            link.classList.add('active');
        }
    }
});

function showSection(element) {
    const targetId = element.getAttribute("href").split("#")[1];
    const targetSection = document.querySelector(`#${targetId}`);

    const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY + 50;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000;

    let start = null;

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;

        const easeInOutQuad = t => (
            t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
        );

        const percentage = Math.min(progress / duration, 1);
        window.scrollTo(0, startPosition + distance * easeInOutQuad(percentage));

        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
}

/* Hire Me Button */
document.querySelector(".hire-me").addEventListener("click", function (e) {
    e.preventDefault();

    showSection(this);
});

/* Toggle Aside Panel */
const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");

    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

/* Logo Click */
document.querySelector('.logo a').addEventListener('click', function (e) {
    e.preventDefault();

    showSection(this);
});

/* About Tabs */
const aboutTabItems = document.querySelectorAll('.about-tab-item');
const aboutContents = document.querySelectorAll('.about-tab-content');

for (const aboutItem of aboutTabItems) {
    aboutItem.addEventListener('click', () => {
        for (const tab of aboutTabItems) {
            tab.classList.remove('active');
        }

        for (const content of aboutContents) {
            content.classList.remove('active');
        }

        aboutItem.classList.add('active');
        document.querySelector(aboutItem.getAttribute('data-target')).classList.add('active');
    });
}

/* Skills Tabs */
const skillsTabItems = document.querySelectorAll('.skills-tab-item');
const skillsContents = document.querySelectorAll('.skills-tab-content');

for (const skillsItem of skillsTabItems) {
    skillsItem.addEventListener('click', () => {
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
document.addEventListener('click', (e) => {
    const clickedInsideAside = aside.contains(e.target);
    const clickedInsideSection = [...allSection].some(section => section.contains(e.target));

    if (
        aside.classList.contains('open') &&
        clickedInsideSection &&
        !clickedInsideAside
    ) {
        aside.classList.remove('open');
        navTogglerBtn.classList.remove('open');

        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove('open');
        }
    }
});
