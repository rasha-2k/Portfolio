(() => {
    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    function showSection(element) {
        const targetId = element.getAttribute("href").split("#")[1];
        const targetSection = document.getElementById(targetId);
        const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY + 50;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let start = null;

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const percentage = Math.min(progress / duration, 1);
            window.scrollTo(0, startPosition + distance * easeInOutQuad(percentage));

            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    }

    // Tabs Setup
    function setupTabs(tabSelector, contentSelector, activeClass = 'active') {
        const tabs = document.querySelectorAll(tabSelector);
        const contents = document.querySelectorAll(contentSelector);

        for (const tab of tabs) {
            tab.addEventListener('click', () => {
                for (const t of tabs) {
                    t.classList.remove(activeClass);
                }
                for (const c of contents) {
                    c.classList.remove(activeClass);
                }
                tab.classList.add(activeClass);
                document.querySelector(tab.getAttribute('data-target')).classList.add(activeClass);
            });
        }
    }

    // Toggle "open" class on all sections
    function toggleClassOnSections(className, action = 'toggle') {
        for (const section of allSection) {
            section.classList[action](className);
        }
    }

    // Typed Text Animation
    new Typed(".typing", {
        strings: ["Software Engineer", "QA Tester", "Backend Developer", "Problem Solver"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Aside Navigation
    const nav = document.querySelector('.nav');
    const navLinks = nav.querySelectorAll('a');
    const allSection = document.querySelectorAll('.section');
    const navTogglerBtn = document.querySelector(".nav-toggler");
    const aside = document.querySelector(".aside");

        for(link of navLinks) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            showSection(this);
            if (window.innerWidth <= 1200) {
                asideSectionTogglerBtn();
            }
        });
    };

    function asideSectionTogglerBtn() {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        toggleClassOnSections("open");
    }

    navTogglerBtn.addEventListener("click", asideSectionTogglerBtn);

    document.querySelector(".hire-me").addEventListener("click", function (e) {
        e.preventDefault();
        showSection(this);
    });

    document.querySelector('.logo a').addEventListener('click', function (e) {
        e.preventDefault();
        showSection(this);
    });

    // Active Link on Scroll
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

    // Close Aside on Outside Click
    document.addEventListener('click', (e) => {
        const clickedInsideAside = aside.contains(e.target);
        const clickedInsideSection = [...allSection].some(section => section.contains(e.target));
        if (aside.classList.contains('open') && clickedInsideSection && !clickedInsideAside) {
            aside.classList.remove('open');
            navTogglerBtn.classList.remove('open');
            toggleClassOnSections('open', 'remove');
        }
    });

    // Tabs for About and Skills Sections
    setupTabs('.about-tab-item', '.about-tab-content');
    setupTabs('.skills-tab-item', '.skills-tab-content');

    // Back-to-Top Button with Progress Ring
    document.addEventListener('DOMContentLoaded', () => {
        const backToTop = document.getElementById("backToTop");
        const progressCircle = document.querySelector(".progress-ring-progress");
        const radius = progressCircle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;

        progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
        progressCircle.style.strokeDashoffset = circumference;

        function updateProgress() {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = scrollTop / docHeight;
            const offset = circumference - progress * circumference;
            progressCircle.style.strokeDashoffset = offset;

            backToTop.classList.toggle("show", scrollTop > 150);
        }

        backToTop.addEventListener("click", () => {
            const startPosition = window.scrollY;
            const distance = -startPosition;
            const duration = 1000;
            let start = null;

            function step(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                const percentage = Math.min(progress / duration, 1);
                window.scrollTo(0, startPosition + distance * easeInOutQuad(percentage));
                if (progress < duration) window.requestAnimationFrame(step);
            }

            window.requestAnimationFrame(step);
        });

        window.addEventListener("scroll", updateProgress);
        updateProgress()
    });
})();