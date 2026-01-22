(() => {
    // ============================================================
    // PERFORMANCE UTILITIES
    // ============================================================

    function debounce(func, wait = 150) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // ============================================================
    // CONSTANTS & CONFIGURATION
    // ============================================================

    const CURSOR_SCALES = {
        default: { scale: 1, translate: -50 },
        hover: { scale: 2, translate: -25 },
        click: { scale: 0.7, translate: -71.4 },
        hoverClick: { scale: 1.85, translate: -27 }
    };

    const CURSOR_HOVER_SELECTORS = [
        '.link',
        '.social-button',
        '.nav-toggler',
        '.nav a',
        '.btn',
        'button',
        '[role="button"]',
        '.cta-primary',
        '.cta-secondary',
        '.achievements-tab-item',
        '.skills-tab-item',
        '.view-btn',
        '.view-project-btn',
        '.project-title a',
        '#day-night-toggle',
        '.progress-ring',
        '#modal-title-link',
        '.modal-btn',
        '.logo a',
        '.colors span'
    ];

    const DISALLOWED_CURSOR_SELECTORS = {
        closest: ['.project-tags'],
        self: ['.logo-text']
    };

    const CODE_SNIPPETS = window.PORTFOLIO_CONFIG?.codeSnippets || {
        home: ['const dev = "Rasha Alsaleh";'],
        about: ['const role = "Software Engineer";'],
        projects: ['const projects = [];'],
        services: ['const services = ["Web Development", "QA Automation"];'],
        contact: ['const email = "info@rashaalsaleh.com";']
    };

    // ============================================================
    // DOM CACHE
    // ============================================================

    const DOM = {
        cursor: null,
        nav: null,
        navLinks: null,
        navToggler: null,
        aside: null,
        sections: null,
        projectGrid: null,
        projectModal: null,
        backToTop: null,
        codeContainer: null,
        init() {
            this.cursor = document.querySelector('.cursor');
            this.nav = document.querySelector('.nav');
            this.navLinks = this.nav ? this.nav.querySelectorAll('a') : [];
            this.navToggler = document.querySelector('.nav-toggler');
            this.aside = document.querySelector('.aside');
            this.sections = document.querySelectorAll('.section');
            this.projectGrid = document.querySelector('.project-grid');
            this.projectModal = document.getElementById('projectModal');
            this.backToTop = document.getElementById('backToTop');
            this.codeContainer = document.getElementById('codeElements');
        }
    };

    DOM.init();

    // ============================================================
    // UTILITY FUNCTIONS
    // ============================================================

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    // ============================================================
    // CURSOR FUNCTIONALITY
    // ============================================================

    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;

    if (isTouchDevice) {
        document.documentElement.classList.add('no-custom-cursor');
    } else if (DOM.cursor) {
        const cursorState = {
            isHovering: false,
            isClicking: false
        };

        function applyCursorTransform() {
            let config;

            if (cursorState.isHovering && cursorState.isClicking) {
                config = CURSOR_SCALES.hoverClick;
            } else if (cursorState.isClicking) {
                config = CURSOR_SCALES.click;
            } else if (cursorState.isHovering) {
                config = CURSOR_SCALES.hover;
            } else {
                config = CURSOR_SCALES.default;
            }

            DOM.cursor.style.transform = `scale(${config.scale}) translate(${config.translate}%, ${config.translate}%)`;
        }

        function isAllowedHoverTarget(target) {
            if (DISALLOWED_CURSOR_SELECTORS.self.some(sel => target.matches(sel))) return false;
            if (DISALLOWED_CURSOR_SELECTORS.closest.some(sel => target.closest(sel))) return false;

            return CURSOR_HOVER_SELECTORS.some(sel => target.closest(sel) && !target.matches('.logo-text'));
        }

        function setCursorHoverState(isHovering) {
            cursorState.isHovering = isHovering;
            applyCursorTransform();
        }

        function setCursorClickState(isClicking) {
            cursorState.isClicking = isClicking;
            DOM.cursor.classList.toggle('click', isClicking);
            applyCursorTransform();
        }

        // Cursor event listeners
        document.addEventListener('mousemove', (e) => {
            DOM.cursor.style.left = `${e.clientX}px`;
            DOM.cursor.style.top = `${e.clientY}px`;
        });

        document.addEventListener('mousedown', () => setCursorClickState(true));
        document.addEventListener('mouseup', () => setCursorClickState(false));

        document.addEventListener('mouseover', (e) => {
            if (isAllowedHoverTarget(e.target)) {
                setCursorHoverState(true);
            }
        }, true);

        document.addEventListener('mouseout', (e) => {
            if (isAllowedHoverTarget(e.target)) {
                setCursorHoverState(false);
            }
        }, true);
    }

    // ============================================================
    // TYPED TEXT ANIMATION
    // ============================================================

    new Typed(".typing", {
        strings: window.PORTFOLIO_CONFIG?.personal?.hero?.typedRoles || [
            "Software Engineer",
            "Backend Developer",
            "Quality Engineer",
            "System Analyst",
            "Web Developer",
            "Database Designer"
        ],
        typeSpeed: 80,
        backSpeed: 40,
        loop: true
    });

    // ============================================================
    // NAVIGATION & SCROLL FUNCTIONALITY
    // ============================================================

    function showSection(element) {
        const targetId = element.getAttribute("href").split("#")[1];
        const targetSection = document.getElementById(targetId);
        const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 400;
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

    function toggleAside() {
        const isOpen = DOM.aside.classList.toggle("open");
        DOM.navToggler.classList.toggle("open", isOpen);
        toggleClassOnSections("open", isOpen ? 'add' : 'remove');
    }

    function closeAside() {
        DOM.aside.classList.remove("open");
        DOM.navToggler.classList.remove("open");
        toggleClassOnSections("open", 'remove');
    }

    function toggleClassOnSections(className, action = 'toggle') {
        DOM.sections.forEach(section => section.classList[action](className));
    }

    DOM.navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            showSection(this);
            if (window.innerWidth <= 1200) closeAside();
        });
    });

    DOM.navToggler.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleAside();
    });

    document.addEventListener('click', (e) => {
        const hireBtn = e.target.closest('.hire-me');
        const ctaBtn = e.target.closest('.cta-primary');
        const logoLink = e.target.closest('.logo a');

        if (hireBtn) {
            e.preventDefault();
            showSection(hireBtn);
            if (window.innerWidth <= 1200) closeAside();
        }

        if (ctaBtn) {
            e.preventDefault();
            showSection(ctaBtn);
            if (window.innerWidth <= 1200) closeAside();
        }

        if (logoLink) {
            e.preventDefault();
            showSection(logoLink);
            if (logoLink.closest('.aside') && window.innerWidth <= 1200) closeAside();
        }
    });

    function updateActiveNavLink() {
        const fromTop = window.scrollY + 150;
        for (const link of DOM.navLinks) {
            const section = document.querySelector(link.getAttribute('href'));
            if (section &&
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                DOM.navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        }
    }

    const debouncedUpdateActiveNavLink = debounce(updateActiveNavLink, 50);
    const debouncedCloseAside = debounce(() => {
        if (DOM.aside.classList.contains("open")) closeAside();
    }, 50);

    window.addEventListener('scroll', () => {
        debouncedUpdateActiveNavLink();
        debouncedCloseAside();
    });

    document.addEventListener('click', (e) => {
        const clickedInsideAside = DOM.aside.contains(e.target);
        const clickedToggler = DOM.navToggler.contains(e.target);
        if (!clickedInsideAside && !clickedToggler && DOM.aside.classList.contains('open')) {
            closeAside();
        }
    });

    // ============================================================
    // BACKGROUND CODE ANIMATION
    // ============================================================

    function getRandomPosition(quadrants, usedPositions, sectionIndex, snippetIndex) {
        let attempts = 0;
        let position;

        do {
            const quadrantIndex = (sectionIndex * 2 + Math.floor(snippetIndex / 2)) % quadrants.length;
            const quadrant = quadrants[quadrantIndex];

            const useRandomQuadrant = Math.random() < 0.01;
            const selectedQuadrant = useRandomQuadrant ?
                quadrants[Math.floor(Math.random() * quadrants.length)] : quadrant;

            position = {
                x: Math.random() * (selectedQuadrant.x[1] - selectedQuadrant.x[0]) + selectedQuadrant.x[0],
                y: Math.random() * (selectedQuadrant.y[1] - selectedQuadrant.y[0]) + selectedQuadrant.y[0]
            };

            attempts++;

            // Check for overlap
            const hasAcceptableOverlap = usedPositions.every(usedPos => {
                const distance = Math.sqrt(
                    Math.pow(position.x - usedPos.x, 2) + Math.pow(position.y - usedPos.y, 2)
                );
                return distance > 8 || Math.random() < 0.1;
            });

            if (hasAcceptableOverlap || attempts > 30) {
                usedPositions.push(position);
                break;
            }

        } while (attempts < 50);

        return position;
    }

    function createCodeElements() {
        if (!DOM.codeContainer) return;

        DOM.codeContainer.innerHTML = '';

        const sections = ['home', 'about', 'projects', 'services', 'contact'];
        const usedPositions = [];

        const vw = window.innerWidth || document.documentElement.clientWidth;
        let densityScale = 1;
        if (vw < 480) densityScale = 0.35;
        else if (vw < 768) densityScale = 0.5;
        else if (vw < 1024) densityScale = 0.75;

        const quadrants = [
            { x: [0, 48], y: [0, 48] },     // top-left
            { x: [52, 100], y: [0, 48] },   // top-right
            { x: [0, 48], y: [52, 100] },   // bottom-left
            { x: [52, 100], y: [52, 100] }, // bottom-right
            { x: [20, 80], y: [20, 80] },   // center
            { x: [0, 100], y: [0, 20] },    // top strip
            { x: [0, 100], y: [80, 100] },  // bottom strip
            { x: [0, 20], y: [0, 100] },    // left strip
            { x: [80, 100], y: [0, 100] }   // right strip
        ];

        sections.forEach((section, sectionIndex) => {
            const snippets = CODE_SNIPPETS[section] || [];
            const maxCount = Math.max(1, Math.round(snippets.length * densityScale));
            const visibleSnippets = snippets.slice(0, maxCount);

            visibleSnippets.forEach((snippet, index) => {
                const codeElement = document.createElement('div');
                codeElement.className = `code-text code-${section}`;
                codeElement.textContent = snippet;

                const position = getRandomPosition(quadrants, usedPositions, sectionIndex, index);

                codeElement.style.left = position.x + '%';
                codeElement.style.top = position.y + '%';
                codeElement.style.animationDelay = (sectionIndex * 1.5 + index * 0.6) + 's';

                DOM.codeContainer.appendChild(codeElement);
            });
        });
    }

    function updateCodeHighlight() {
        const sections = ['home', 'about', 'projects', 'services', 'contact'];
        let currentSection = 'home';

        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    currentSection = section;
                }
            }
        });

        document.querySelectorAll('.code-text').forEach(el => {
            el.classList.remove('highlight', 'section-indicator');
        });

        document.querySelectorAll(`.code-${currentSection}`).forEach((el, index) => {
            el.classList.add('highlight');
            if (index === 0) {
                el.classList.add('section-indicator');
            }
        });
    }

    // Initialize and setup code animation
    createCodeElements();
    updateCodeHighlight();

    const debouncedCodeResize = debounce(() => {
        createCodeElements();
        updateCodeHighlight();
    }, 150);

    window.addEventListener('scroll', updateCodeHighlight);
    window.addEventListener('resize', debouncedCodeResize);

    // ============================================================
    // TABS SETUP
    // ============================================================

    function setupTabs(tabSelector, contentSelector, activeClass = 'active') {
        const tabs = document.querySelectorAll(tabSelector);
        const contents = document.querySelectorAll(contentSelector);

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove(activeClass));
                contents.forEach(c => {
                    c.classList.remove(activeClass);
                    const elements = c.querySelectorAll('[data-aos]');
                    elements.forEach(element => {
                        element.classList.remove('aos-animate');
                        element.setAttribute('data-aos', element.getAttribute('data-aos'));
                    });
                });

                tab.classList.add(activeClass);
                const activeContent = document.querySelector(tab.getAttribute('data-target'));
                activeContent.classList.add(activeClass);

                setTimeout(() => {
                    const elements = activeContent.querySelectorAll('[data-aos]');
                    elements.forEach(element => {
                        element.classList.add('aos-animate');
                    });
                    AOS.refresh();
                }, 100);
            });
        });
    }

    setupTabs('.achievements-tab-item', '.achievements-tab-content');
    setupTabs('.skills-tab-item', '.skills-tab-content');

    // ============================================================
    // PROJECTS & MODAL
    // ============================================================

    window.projectData = {};

    function initializeProjectModal() {
        if (!DOM.projectModal) return;

        const modalClose = document.getElementById('modalClose');
        const modalVideo = document.getElementById('modalMedia');
        const modalVideoSource = document.getElementById('modalVideoSource');
        const modalImage = document.getElementById('modalImage');

        function openProjectModal(viewBtn) {
            const item = viewBtn.closest('.project-item');
            const projectId = viewBtn.dataset.project;
            const category = item.querySelector('.project-category')?.textContent.trim() || '';
            const modalMediaType = projectData[projectId]?.modalMediaType || '';
            const modalSrc = projectData[projectId]?.modalSrc || '';
            const githubUrl = item.dataset.github || '';
            const liveUrl = item.dataset.live || '';

            const description = projectData[projectId]?.description || '';
            const tags = projectData[projectId]?.tags || [];

            if (!description || !tags.length || !modalSrc) {
                console.error(`Missing data for project ID: ${projectId}`);
                return;
            }

            const modalTitle = document.getElementById('modalTitle');
            modalTitle.innerHTML = '';

            const titleLink = document.createElement('a');
            titleLink.textContent = item.querySelector('.project-title a')?.textContent.trim() || '';
            if (githubUrl && githubUrl !== '#') {
                titleLink.href = githubUrl;
                titleLink.target = '_blank';
            }
            titleLink.classList.add('link');
            modalTitle.appendChild(titleLink);

            document.getElementById('modalCategory').textContent = category;
            document.getElementById('modalDescription').innerHTML = description.replace(/\n/g, '<br>');

            if (modalMediaType === 'video') {
                modalVideoSource.src = modalSrc;
                modalVideo.load();
                modalVideo.style.display = 'block';
                modalImage.style.display = 'none';
            } else {
                modalImage.src = modalSrc;
                modalImage.alt = titleLink.textContent;
                modalImage.style.display = 'block';
                modalVideo.style.display = 'none';
            }

            const tagsContainer = document.getElementById('modalTags');
            tagsContainer.innerHTML = '';
            tags.forEach(tag => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.textContent = tag;
                li.appendChild(a);
                tagsContainer.appendChild(li);
            });

            const modalGithubBtn = document.getElementById('modalGithubBtn');
            const modalLiveBtn = document.getElementById('modalLiveBtn');

            if (githubUrl && githubUrl !== '#') {
                modalGithubBtn.style.display = 'inline-flex';
                modalGithubBtn.href = githubUrl;
            } else {
                modalGithubBtn.style.display = 'none';
            }

            if (liveUrl && liveUrl !== '#') {
                modalLiveBtn.style.display = 'inline-flex';
                modalLiveBtn.href = liveUrl;
            } else {
                modalLiveBtn.style.display = 'none';
            }

            DOM.projectModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            DOM.projectModal.classList.remove('active');
            document.body.style.overflow = 'auto';

            if (modalVideo.style.display === 'block') {
                modalVideo.pause();
                modalVideo.currentTime = 0;
            }

            const modalContent = document.getElementById('modal-content');
            if (modalContent) {
                modalContent.scrollTop = 0;
            }
        }

        modalClose.addEventListener('click', closeModal);

        DOM.projectModal.addEventListener('click', (e) => {
            if (e.target === DOM.projectModal) {
                closeModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && DOM.projectModal.classList.contains('active')) {
                closeModal();
            }
        });

        document.addEventListener('click', (e) => {
            const viewBtn = e.target.closest('.view-project-btn');
            if (viewBtn) {
                e.preventDefault();
                openProjectModal(viewBtn);
            }
        });

        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectItems = document.querySelectorAll('.project-item');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                projectItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');
                    const shouldShow = filterValue === 'all' || itemCategory === filterValue;

                    if (shouldShow) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 100);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });

                setTimeout(() => {
                    AOS.refresh();
                }, 300);
            });
        });
    }

    // ============================================================
    // BACK-TO-TOP BUTTON 
    // ============================================================

    function initializeBackToTop() {
        if (!DOM.backToTop) return;

        const progressCircle = document.querySelector(".progress-ring-progress");
        if (!progressCircle) return;

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

            DOM.backToTop.classList.toggle("show", scrollTop > 150);
        }

        DOM.backToTop.addEventListener("click", () => {
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
        updateProgress();
    }

    function populateContentFromConfig() {
        const config = window.PORTFOLIO_CONFIG;
        if (!config) {
            console.error('PORTFOLIO_CONFIG not found. Make sure data.js is loaded before script.js');
            return;
        }

        updatePersonalInfo(config.personal);
        updateHeroSection(config.personal.hero);
        updateSocialLinks(config.personal.social);
        updateContactSection(config.personal);
        generateSkills(config.skills);
        generateServices(config.services);
        generateProjects(config.projects);
        generateAchievements(config.achievements);
    }

    function updatePersonalInfo(personal) {
        // Update name
        const nameEl = document.querySelector('.name');
        if (nameEl && personal.name) {
            nameEl.textContent = personal.name;
        }

        // Update degree
        const degreeEl = document.getElementById('degree-value');
        if (degreeEl && personal.degree) {
            degreeEl.textContent = personal.degree;
        }

        // Calculate and update age
        const ageEl = document.getElementById('age-value');
        if (ageEl && personal.birthDate) {
            const birthDate = new Date(personal.birthDate);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const hasHadBirthday = (today.getMonth() > birthDate.getMonth()) ||
                (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
            if (!hasHadBirthday) age--;
            ageEl.textContent = age.toString();
        }

        // Update location
        const locationEl = document.getElementById('location-value');
        if (locationEl && personal.location) {
            locationEl.textContent = personal.location;
        }

        // Update availability
        const availabilityEl = document.getElementById('freelance-value');
        if (availabilityEl && personal.availability) {
            availabilityEl.textContent = personal.availability;
        }

        // Update sidebar
        const logoTextEl = document.querySelector('.logo-text');
        if (logoTextEl && personal.name) {
            logoTextEl.textContent = personal.name;
        }

        const professionEl = document.querySelector('.profession');
        if (professionEl && personal.title) {
            professionEl.textContent = personal.title;
        }
    }

    function updateHeroSection(hero) {
        if (!hero) return;

        // Update description
        const subtitleEl = document.querySelector('.hero-subtitle');
        if (subtitleEl && hero.description) {
            subtitleEl.textContent = hero.description;
        }

        // Update profile image
        const profileImg = document.querySelector('.profile-img');
        if (profileImg && hero.profileImage) {
            profileImg.src = hero.profileImage;
            profileImg.alt = hero.greeting || 'Profile Image';
        }

        // Update resume link
        const resumeLink = document.querySelector('.cta-secondary');
        if (resumeLink && hero.resumeUrl) {
            resumeLink.href = hero.resumeUrl;
        }
    }

    function updateSocialLinks(social) {
        if (!social) return;

        // Sidebar social links
        const linkedinLink = document.getElementById('linkedin-link');
        if (linkedinLink && social.linkedin) {
            linkedinLink.href = social.linkedin;
        }

        const githubLink = document.getElementById('github-link');
        if (githubLink && social.github) {
            githubLink.href = social.github;
        }

        const emailBtns = document.querySelectorAll('.social-button--email');
        emailBtns.forEach(btn => {
            if (social.email) {
                btn.href = social.email;
            }
        });
    }

    function updateContactSection(personal) {
        if (!personal) return;

        // Get all contact items
        const contactItems = document.querySelectorAll('.contact-item');

        contactItems.forEach(item => {
            const label = item.querySelector('.contact-label')?.textContent.trim();
            const link = item.querySelector('.contact-link');

            if (!link) return;

            switch (label) {
                case 'Phone':
                    if (personal.phone) {
                        link.href = `tel:${personal.phone}`;
                        link.textContent = personal.phone;
                    }
                    break;

                case 'Email':
                    if (personal.email) {
                        link.href = `mailto:${personal.email}`;
                        link.textContent = personal.email;
                    }
                    break;

                case 'LinkedIn':
                    if (personal.social?.linkedin) {
                        link.href = personal.social.linkedin;
                        const username = personal.social.linkedin.split('/in/')[1]?.replace('/', '');
                        if (username) {
                            link.textContent = `@${username}`;
                        }
                    }
                    break;

                case 'GitHub':
                    if (personal.social?.github) {
                        link.href = personal.social.github;
                        const username = personal.social.github.split('.com/')[1]?.replace('/', '');
                        if (username) {
                            link.textContent = `@${username}`;
                        }
                    }
                    break;
            }
        });
    }

    function generateSkills(skills) {
        if (!skills) return;

        // Languages
        const languagesContainer = document.querySelector('.languages .skills-grid');
        if (languagesContainer && skills.languages) {
            languagesContainer.innerHTML = '';
            skills.languages.forEach((skill, index) => {
                const skillHTML = `
                <div class="col" data-aos="zoom-in" data-aos-duration="400" data-aos-delay="${(index + 1) * 100}">
                    <div class="skill">
                        <img src="${skill.icon}" alt="${skill.name}" class="skill-image grayscale">
                    </div>
                    <p class="skill-name">${skill.name}</p>
                </div>
            `;
                languagesContainer.insertAdjacentHTML('beforeend', skillHTML);
            });
        }

        // Tools
        const toolsContainer = document.querySelector('.tools .skills-grid');
        if (toolsContainer && skills.tools) {
            toolsContainer.innerHTML = '';
            skills.tools.forEach((skill, index) => {
                const skillHTML = `
                <div class="col" data-aos="zoom-in" data-aos-duration="400" data-aos-delay="${(index + 1) * 100}">
                    <div class="skill">
                        <img src="${skill.icon}" alt="${skill.name}" class="skill-image grayscale">
                    </div>
                    <p class="skill-name">${skill.name}</p>
                </div>
            `;
                toolsContainer.insertAdjacentHTML('beforeend', skillHTML);
            });
        }

        // Others
        const othersContainer = document.querySelector('.others .skills-grid');
        if (othersContainer && skills.others) {
            othersContainer.innerHTML = '';
            skills.others.forEach((skill, index) => {
                const skillHTML = `
                <div class="col" data-aos="zoom-in" data-aos-duration="400" data-aos-delay="${(index + 1) * 100}">
                    <div class="skill">
                        <img src="${skill.icon}" alt="${skill.name}" class="skill-image grayscale">
                    </div>
                    <p class="skill-name">${skill.name}</p>
                </div>
            `;
                othersContainer.insertAdjacentHTML('beforeend', skillHTML);
            });
        }
    }

    function generateServices(services) {
        if (!services) return;

        const servicesContainer = document.getElementById('services-container');
        if (!servicesContainer) return;

        servicesContainer.innerHTML = '';
        services.forEach((service, index) => {
            const serviceHTML = `
            <div class="service-item padd-15" data-aos="fade-up" data-aos-duration="800" data-aos-delay="${(index + 1) * 100}">
                <div class="service-item-inner">
                    <div class="icon">
                        <ion-icon name="${service.icon}"></ion-icon>
                    </div>
                    <h4>${service.title}</h4>
                    <p>${service.description}</p>
                </div>
            </div>
        `;
            servicesContainer.insertAdjacentHTML('beforeend', serviceHTML);
        });
    }

    function generateAchievements(achievements) {
        if (!achievements) return;

        // Development timeline
        const developmentContainer = document.getElementById('development');
        if (developmentContainer && achievements.development) {
            const timelineContainer = developmentContainer.querySelector('.timeline-container');
            if (timelineContainer) {
                timelineContainer.innerHTML = '';
                achievements.development.forEach((item, index) => {
                    const highlightsList = item.highlights
                        ? `<ul class="timeline-list">${item.highlights.map(h => `<li>${h}</li>`).join('')}</ul>`
                        : '';

                    const timelineHTML = `
                    <div class="timeline-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="${(index + 1) * 100}">
                        <div class="timeline-node">
                            <i class="fas ${item.icon}"></i>
                        </div>
                        <div class="timeline-content">
                            <div class="timeline-header" onclick="toggleExpand(this)">
                                <div class="timeline-date">${item.date}</div>
                                <div class="timeline-title">
                                    <a class="link" target="_blank" href="${item.certificateUrl}">${item.title}</a>
                                    <i class="fas fa-chevron-down expand-icon"></i>
                                </div>
                                <div class="timeline-badges">
                                    <div class="status-indicator ${item.type}">
                                        <i class="fas fa-certificate"></i>
                                        Certificate
                                    </div>
                                    <a href="${item.certificateUrl}" target="_blank" class="view-btn">
                                        View
                                    </a>
                                </div>
                            </div>
                            <div class="timeline-details">
                                <div class="timeline-description" data-aos="fade-in">
                                    ${item.description}
                                    ${item.highlights ? '<br><br><b>Specialized Learning Areas:</b>' + highlightsList : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                    timelineContainer.insertAdjacentHTML('beforeend', timelineHTML);
                });
            }
        }

        // Activities timeline
        const activitiesContainer = document.getElementById('activities');
        if (activitiesContainer && achievements.activities) {
            const timelineContainer = activitiesContainer.querySelector('.timeline-container');
            if (timelineContainer) {
                timelineContainer.innerHTML = '';
                achievements.activities.forEach((item, index) => {
                    const badgeHTML = item.badge
                        ? `<div class="award-badge"><i class="fas fa-award"></i>${item.badge}</div>`
                        : '';
                    const viewBtnHTML = item.certificateUrl
                        ? `<a href="${item.certificateUrl}" target="_blank" class="view-btn">View</a>`
                        : '';

                    const timelineHTML = `
                    <div class="timeline-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="${(index + 1) * 100}">
                        <div class="timeline-node">
                            <i class="fas ${item.icon}"></i>
                        </div>
                        <div class="timeline-content">
                            <div class="timeline-header" onclick="toggleExpand(this)">
                                <div class="timeline-date">${item.date}</div>
                                <div class="timeline-title">
                                    <a class="link" ${item.certificateUrl ? `target="_blank" href="${item.certificateUrl}"` : ''}>${item.title}</a>
                                    <i class="fas fa-chevron-down expand-icon"></i>
                                </div>
                                <div class="timeline-badges">
                                    ${badgeHTML}
                                    ${viewBtnHTML}
                                </div>
                            </div>
                            <div class="timeline-details">
                                <div class="timeline-description" data-aos="fade-in">
                                    ${item.description}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                    timelineContainer.insertAdjacentHTML('beforeend', timelineHTML);
                });
            }
        }
    }

    function generateProjects(projects) {
        if (!projects) return;

        const projectGrid = document.getElementById('project-grid');
        if (!projectGrid) return;

        projectGrid.innerHTML = '';
        projects.forEach((project, index) => {
            const mediaHTML = project.thumbnailMediaType === 'video'
                ? `<video autoplay muted loop playsinline>
                    <source src="${project.thumbnailSrc}" type="video/mp4">
                    Your browser does not support the video tag.
                    </video>`
                : `<img src="${project.thumbnailSrc}" alt="${project.title}">`;

            const tagsHTML = project.tags
                .map(tag => `<li><a>${tag}</a></li>`)
                .join('');

            const projectHTML = `
                <div class="project-item" 
                    data-aos="fade-in" 
                    data-aos-duration="800" 
                    data-aos-delay="${(index + 1) * 100}" 
                    data-category="${project.categoryTag}" 
                    data-github="${project.githubUrl}" 
                    data-live="${project.liveUrl}" 
                    id="project-${project.id}">
                <div class="project-media">
                    ${mediaHTML}
                    <div class="project-overlay">
                        <div class="project-overlay-content">
                            <button class="view-project-btn" data-project="${project.id}">
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
                <div class="project-content">
                    <span class="project-category">${project.category}</span>
                    <h3 class="project-title">
                        <a href="${project.githubUrl || '#'}" target="_blank" class="link">
                            <i class="fas ${project.icon}"></i> ${project.title}
                        </a>
                    </h3>
                    <p class="project-description" data-aos="fade-in">
                        ${project.description}
                    </p>
                    <ul class="project-tags" data-aos="slide-up">
                        ${tagsHTML}
                    </ul>
                </div>
            </div>
        `;
            projectGrid.insertAdjacentHTML('beforeend', projectHTML);
        });

        // Store project data for modal
        projects.forEach(project => {
            window.projectData = window.projectData || {};
            window.projectData[project.id] = {
                ...project,
                description: project.fullDescription || project.description
            };
        });
    }

    // ============================================================
    // INITIALIZATION (DOMContentLoaded)
    // ============================================================

    document.addEventListener('DOMContentLoaded', () => {
        populateContentFromConfig();
        initializeProjectModal();
        initializeBackToTop();

        // Refresh AOS after content is loaded
        if (typeof AOS !== 'undefined') {
            setTimeout(() => {
                AOS.refresh();
            }, 100);
        }
    });

})();