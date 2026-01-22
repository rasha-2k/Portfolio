(() => {
    'use strict';
    
    /*! ========== PERFORMANCE UTILITIES ========== */

    const debounce = (func, wait = 150) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), wait);
        };
    };
    
    const throttle = (func, limit = 100) => {
        let inThrottle;
        return (...args) => {
            if (!inThrottle) {
                func(...args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    };

    /*! ========== CONSTANTS & CONFIGURATION ========== */
/*
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
        'project-filter',
        '.view-btn',
        '.view-project-btn',
        '.project-title a',
        '.modal-actions a',
        '.day-night',
        '.progress-ring',
        '#modal-title-link',
        '.modal-btn',
        '.logo a',
        '.colors span'
    ];

    const DISALLOWED_CURSOR_SELECTORS = {
        closest: ['.project-tags'],
        self: ['.logo-text']
    };*/

    const CODE_SNIPPETS = window.PORTFOLIO_CONFIG?.codeSnippets || {
        home: ['const dev = "Rasha Alsaleh";'],
        about: ['const role = "Software Engineer";'],
        projects: ['const projects = [];'],
        services: ['const services = ["Web Development", "QA Automation"];'],
        contact: ['const email = "info@rashaalsaleh.com";']
    };

    /*! ========== DOM CACHE ========== */

    const DOM = {
        cursor: null,
        nav: null,
        navLinks: [],
        navToggler: null,
        aside: null,
        sections: [],
        projectGrid: null,
        projectModal: null,
        backToTop: null,
        codeContainer: null,
        progressCircle: null,
        
        init() {
            this.cursor = document.querySelector('.cursor');
            this.nav = document.querySelector('.nav');
            this.navLinks = this.nav ? Array.from(this.nav.querySelectorAll('a')) : [];
            this.navToggler = document.querySelector('.nav-toggler');
            this.aside = document.querySelector('.aside');
            this.sections = Array.from(document.querySelectorAll('.section'));
            this.projectGrid = document.querySelector('.project-grid');
            this.projectModal = document.getElementById('projectModal');
            this.backToTop = document.getElementById('backToTop');
            this.codeContainer = document.getElementById('codeElements');
            this.progressCircle = document.querySelector('.progress-ring-progress');
        }
    };

    DOM.init();

    /*! ========== UTILITY FUNCTIONS ========== */

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    /*! ========== CURSOR FUNCTIONALITY ========== */

    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;

    /* 
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
    */

    /*! ========== TYPED TEXT ANIMATION ========== */

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

    /*! ========== NAVIGATION & SCROLL FUNCTIONALITY ========== */

    const showSection = (element) => {
        const targetId = element.getAttribute("href").split("#")[1];
        const targetSection = document.getElementById(targetId);
        if (!targetSection) return;
        
        const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 400;
        let start = null;

        const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));
            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    };

    const toggleAside = () => {
        const isOpen = DOM.aside.classList.toggle("open");
        DOM.navToggler.classList.toggle("open", isOpen);
        DOM.sections.forEach(section => section.classList[isOpen ? 'add' : 'remove']("open"));
    };

    const closeAside = () => {
        DOM.aside.classList.remove("open");
        DOM.navToggler.classList.remove("open");
        DOM.sections.forEach(section => section.classList.remove("open"));
    };

    DOM.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showSection(link);
            if (window.innerWidth <= 1200) closeAside();
        });
    });

    DOM.navToggler.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleAside();
    });

    document.addEventListener('click', (e) => {
        const navTarget = e.target.closest('.hire-me, .cta-primary, .logo a');
        if (navTarget) {
            e.preventDefault();
            showSection(navTarget);
            if (window.innerWidth <= 1200) closeAside();
            return;
        }

        // Close aside if clicking outside
        if (!DOM.aside.contains(e.target) && !DOM.navToggler.contains(e.target) && DOM.aside.classList.contains('open')) {
            closeAside();
        }
    });

    const updateActiveNavLink = () => {
        const fromTop = window.scrollY + 150;
        for (const link of DOM.navLinks) {
            const section = document.querySelector(link.getAttribute('href'));
            if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                DOM.navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                break;
            }
        }
    };

    const debouncedUpdateActiveNavLink = debounce(updateActiveNavLink, 50);
    const debouncedCloseAside = debounce(() => {
        if (DOM.aside.classList.contains("open")) closeAside();
    }, 50);

    window.addEventListener('scroll', () => {
        debouncedUpdateActiveNavLink();
        debouncedCloseAside();
    }, { passive: true });

    /*! ========== BACKGROUND CODE ANIMATION ========== */

    const getRandomPosition = (quadrants, usedPositions, sectionIndex, snippetIndex) => {
        let attempts = 0;
        let position;

        do {
            const quadrantIndex = (sectionIndex * 2 + Math.floor(snippetIndex / 2)) % quadrants.length;
            const selectedQuadrant = Math.random() < 0.01 
                ? quadrants[Math.floor(Math.random() * quadrants.length)]
                : quadrants[quadrantIndex];

            position = {
                x: Math.random() * (selectedQuadrant.x[1] - selectedQuadrant.x[0]) + selectedQuadrant.x[0],
                y: Math.random() * (selectedQuadrant.y[1] - selectedQuadrant.y[0]) + selectedQuadrant.y[0]
            };

            const hasAcceptableOverlap = usedPositions.every(usedPos => {
                const distance = Math.hypot(position.x - usedPos.x, position.y - usedPos.y);
                return distance > 8 || Math.random() < 0.1;
            });

            if (hasAcceptableOverlap || attempts > 30) {
                usedPositions.push(position);
                break;
            }
            attempts++;
        } while (attempts < 50);

        return position;
    };

    const createCodeElements = () => {
        if (!DOM.codeContainer) return;

        DOM.codeContainer.innerHTML = '';

        const sections = ['home', 'about', 'projects', 'services', 'contact'];
        const usedPositions = [];

        const vw = window.innerWidth;
        let densityScale = 1;
        if (vw < 480) densityScale = 0.35;
        else if (vw < 768) densityScale = 0.5;
        else if (vw < 1024) densityScale = 0.75;

        const quadrants = [
            { x: [0, 48], y: [0, 48] },
            { x: [52, 100], y: [0, 48] },
            { x: [0, 48], y: [52, 100] },
            { x: [52, 100], y: [52, 100] },
            { x: [20, 80], y: [20, 80] },
            { x: [0, 100], y: [0, 20] },
            { x: [0, 100], y: [80, 100] },
            { x: [0, 20], y: [0, 100] },
            { x: [80, 100], y: [0, 100] }
        ];

        const fragment = document.createDocumentFragment();

        sections.forEach((section, sectionIndex) => {
            const snippets = CODE_SNIPPETS[section] || [];
            const maxCount = Math.max(1, Math.round(snippets.length * densityScale));
            const visibleSnippets = snippets.slice(0, maxCount);

            visibleSnippets.forEach((snippet, index) => {
                const codeElement = document.createElement('div');
                codeElement.className = `code-text code-${section}`;
                codeElement.textContent = snippet;

                const position = getRandomPosition(quadrants, usedPositions, sectionIndex, index);

                codeElement.style.left = `${position.x}%`;
                codeElement.style.top = `${position.y}%`;
                codeElement.style.animationDelay = `${sectionIndex * 1.5 + index * 0.6}s`;

                fragment.appendChild(codeElement);
            });
        });

        DOM.codeContainer.appendChild(fragment);
    };

    const updateCodeHighlight = () => {
        const sections = ['home', 'about', 'projects', 'services', 'contact'];
        let currentSection = 'home';

        for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    currentSection = section;
                    break;
                }
            }
        }

        document.querySelectorAll('.code-text').forEach(el => {
            el.classList.remove('highlight', 'section-indicator');
        });

        document.querySelectorAll(`.code-${currentSection}`).forEach((el, index) => {
            el.classList.add('highlight');
            if (index === 0) el.classList.add('section-indicator');
        });
    };

    createCodeElements();
    updateCodeHighlight();

    const debouncedCodeResize = debounce(() => {
        createCodeElements();
        updateCodeHighlight();
    }, 150);

    window.addEventListener('scroll', throttle(updateCodeHighlight, 100), { passive: true });
    window.addEventListener('resize', debouncedCodeResize, { passive: true });

    /*! ========== TABS SETUP ========== */

    const setupTabs = (tabSelector, contentSelector, activeClass = 'active') => {
        const tabs = document.querySelectorAll(tabSelector);
        const contents = document.querySelectorAll(contentSelector);

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove(activeClass));
                contents.forEach(c => {
                    c.classList.remove(activeClass);
                    c.querySelectorAll('[data-aos]').forEach(el => {
                        el.classList.remove('aos-animate');
                    });
                });

                tab.classList.add(activeClass);
                const activeContent = document.querySelector(tab.getAttribute('data-target'));
                if (activeContent) {
                    activeContent.classList.add(activeClass);

                    setTimeout(() => {
                        activeContent.querySelectorAll('[data-aos]').forEach(el => {
                            el.classList.add('aos-animate');
                        });
                        if (typeof AOS !== 'undefined') AOS.refresh();
                    }, 100);
                }
            });
        });
    };

    setupTabs('.achievements-tab-item', '.achievements-tab-content');
    setupTabs('.skills-tab-item', '.skills-tab-content');

    /*! ========== PROJECTS & MODAL ========== */

    window.projectData = {};

    const initializeProjectModal = () => {
        if (!DOM.projectModal) return;

        const modalClose = document.getElementById('modalClose');
        const modalVideo = document.getElementById('modalMedia');
        const modalVideoSource = document.getElementById('modalVideoSource');
        const modalImage = document.getElementById('modalImage');

        const openProjectModal = (viewBtn) => {
            const item = viewBtn.closest('.project-item');
            const projectId = viewBtn.dataset.project;
            const project = projectData[projectId];
            
            if (!project) {
                console.error(`Missing data for project ID: ${projectId}`);
                return;
            }

            const category = item.querySelector('.project-category')?.textContent.trim() || '';
            const githubUrl = item.dataset.github || '';
            const liveUrl = item.dataset.live || '';

            const modalTitle = document.getElementById('modalTitle');
            const titleText = item.querySelector('.project-title a')?.textContent.trim() || '';
            modalTitle.innerHTML = githubUrl && githubUrl !== '#'
                ? `<a href="${githubUrl}" target="_blank" class="link">${titleText}</a>`
                : `<a class="link">${titleText}</a>`;

            document.getElementById('modalCategory').textContent = category;
            document.getElementById('modalDescription').innerHTML = (project.description || '').replace(/\n/g, '<br>');

            // Set media (video or image)
            if (project.modalMediaType === 'video') {
                modalVideoSource.src = project.modalSrc;
                modalVideo.load();
                modalVideo.style.display = 'block';
                modalImage.style.display = 'none';
            } else {
                modalImage.src = project.modalSrc;
                modalImage.alt = titleText;
                modalImage.style.display = 'block';
                modalVideo.style.display = 'none';
            }

            const tagsContainer = document.getElementById('modalTags');
            tagsContainer.innerHTML = project.tags.map(tag => 
                `<li><a>${tag}</a></li>`
            ).join('');

            const modalGithubBtn = document.getElementById('modalGithubBtn');
            const modalLiveBtn = document.getElementById('modalLiveBtn');

            modalGithubBtn.style.display = githubUrl && githubUrl !== '#' ? 'inline-flex' : 'none';
            if (githubUrl && githubUrl !== '#') modalGithubBtn.href = githubUrl;

            modalLiveBtn.style.display = liveUrl && liveUrl !== '#' ? 'inline-flex' : 'none';
            if (liveUrl && liveUrl !== '#') modalLiveBtn.href = liveUrl;

            DOM.projectModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        };

        const closeModal = () => {
            DOM.projectModal.classList.remove('active');
            document.body.style.overflow = 'auto';

            if (modalVideo.style.display === 'block') {
                modalVideo.pause();
                modalVideo.currentTime = 0;
            }

            const modalContent = document.getElementById('modal-content');
            if (modalContent) modalContent.scrollTop = 0;
        };

        modalClose.addEventListener('click', closeModal);
        DOM.projectModal.addEventListener('click', (e) => {
            if (e.target === DOM.projectModal) closeModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && DOM.projectModal.classList.contains('active')) closeModal();
        });
        document.addEventListener('click', (e) => {
            const viewBtn = e.target.closest('.view-project-btn');
            if (viewBtn) {
                e.preventDefault();
                openProjectModal(viewBtn);
            }
        });

        const filterBtns = document.querySelectorAll('.project-filter-tab');
        const projectItems = document.querySelectorAll('.project-item');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                projectItems.forEach(item => {
                    const shouldShow = filterValue === 'all' || item.getAttribute('data-category') === filterValue;

                    if (shouldShow) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 100);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(() => item.style.display = 'none', 300);
                    }
                });

                setTimeout(() => {
                    if (typeof AOS !== 'undefined') AOS.refresh();
                }, 300);
            });
        });
    };

    /*! ========== BACK-TO-TOP BUTTON ========== */

    const initializeBackToTop = () => {
        if (!DOM.backToTop || !DOM.progressCircle) return;

        const radius = DOM.progressCircle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;

        DOM.progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
        DOM.progressCircle.style.strokeDashoffset = circumference;

        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = scrollTop / docHeight;
            const offset = circumference - progress * circumference;
            DOM.progressCircle.style.strokeDashoffset = offset;
            DOM.backToTop.classList.toggle("show", scrollTop > 150);
        };

        DOM.backToTop.addEventListener("click", () => {
            const startPosition = window.scrollY;
            const duration = 1000;
            let start = null;

            const step = (timestamp) => {
                if (!start) start = timestamp;
                const progress = Math.min((timestamp - start) / duration, 1);
                window.scrollTo(0, startPosition * (1 - easeInOutQuad(progress)));
                if (progress < 1) requestAnimationFrame(step);
            };

            requestAnimationFrame(step);
        });

        window.addEventListener("scroll", throttle(updateProgress, 50), { passive: true });
        updateProgress();
    };

    /*! ========== CONTENT POPULATION FROM CONFIG ========== */

    const populateContentFromConfig = () => {
        const config = window.PORTFOLIO_CONFIG;
        if (!config) {
            console.error('PORTFOLIO_CONFIG not found. Make sure data.js is loaded before script.js');
            return;
        }

        updatePersonalInfo(config.personal);
        updateHeroSection(config.personal.hero);
        updateSocialLinks(config.personal.social);
        updateContactSection(config.personal);
        updateFooter(config.personal);
        generateSkills(config.skills);
        generateServices(config.services);
        generateProjects(config.projects);
        generateAchievements(config.achievements);
    };

    const updatePersonalInfo = (personal) => {
        if (!personal) return;

        const nameEl = document.querySelector('.name');
        if (nameEl) nameEl.textContent = personal.name || '';

        const degreeEl = document.getElementById('degree-value');
        if (degreeEl) degreeEl.textContent = personal.degree || '';

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

        const locationEl = document.getElementById('location-value');
        if (locationEl) locationEl.textContent = personal.location || '';

        const availabilityEl = document.getElementById('freelance-value');
        if (availabilityEl) availabilityEl.textContent = personal.availability || '';

        const logoTextEl = document.querySelector('.logo-text');
        if (logoTextEl) logoTextEl.textContent = personal.name || '';

        const professionEl = document.querySelector('.profession');
        if (professionEl) professionEl.textContent = personal.title || '';
    };

    const updateFooter = (personal) => {
        if (!personal) return;
        const footerAuthor = document.getElementById('footer-author');
        if (footerAuthor) footerAuthor.textContent = personal.name || '';
    };

    const updateHeroSection = (hero) => {
        if (!hero) return;

        const subtitleEl = document.querySelector('.hero-subtitle');
        if (subtitleEl) subtitleEl.textContent = hero.description || '';

        const profileImg = document.querySelector('.profile-img');
        if (profileImg && hero.profileImage) {
            profileImg.src = hero.profileImage;
            profileImg.alt = hero.greeting || 'Profile Image';
        }

        const resumeLink = document.querySelector('.cta-secondary');
        if (resumeLink && hero.resumeUrl) resumeLink.href = hero.resumeUrl;
    };

    const updateSocialLinks = (social) => {
        if (!social) return;

        const linkedinLink = document.getElementById('linkedin-link');
        if (linkedinLink && social.linkedin) linkedinLink.href = social.linkedin;

        const githubLink = document.getElementById('github-link');
        if (githubLink && social.github) githubLink.href = social.github;

        const emailBtns = document.querySelectorAll('.social-button--email');
        if (social.email) emailBtns.forEach(btn => btn.href = social.email);
    };

    const updateContactSection = (personal) => {
        if (!personal) return;

        const contactItems = document.querySelectorAll('.contact-item');

        contactItems.forEach(item => {
            const label = item.querySelector('.contact-label')?.textContent.trim();
            const link = item.querySelector('.contact-link');
            if (!link) return;

            const updates = {
                'Phone': () => {
                    if (personal.phone) {
                        link.href = `tel:${personal.phone}`;
                        link.textContent = personal.phone;
                    }
                },
                'Email': () => {
                    if (personal.email) {
                        link.href = `mailto:${personal.email}`;
                        link.textContent = personal.email;
                    }
                },
                'LinkedIn': () => {
                    if (personal.social?.linkedin) {
                        link.href = personal.social.linkedin;
                        const username = personal.social.linkedin.split('/in/')[1]?.replace('/', '');
                        if (username) link.textContent = `@${username}`;
                    }
                },
                'GitHub': () => {
                    if (personal.social?.github) {
                        link.href = personal.social.github;
                        const username = personal.social.github.split('.com/')[1]?.replace('/', '');
                        if (username) link.textContent = `@${username}`;
                    }
                }
            };

            if (updates[label]) updates[label]();
        });
    };

    const generateSkills = (skills) => {
        if (!skills) return;

        const createSkillHTML = (skill, index) => `
            <div class="col" data-aos="zoom-in" data-aos-duration="400" data-aos-delay="${(index + 1) * 100}">
                <div class="skill">
                    <img src="${skill.icon}" alt="${skill.name}" class="skill-image grayscale">
                </div>
                <p class="skill-name">${skill.name}</p>
            </div>
        `;

        const populateSkillCategory = (category, selector) => {
            const container = document.querySelector(selector);
            if (container && skills[category]) {
                container.innerHTML = skills[category].map((skill, index) => 
                    createSkillHTML(skill, index)
                ).join('');
            }
        };

        populateSkillCategory('languages', '.languages .skills-grid');
        populateSkillCategory('tools', '.tools .skills-grid');
        populateSkillCategory('others', '.others .skills-grid');
    };

    const generateServices = (services) => {
        if (!services) return;

        const servicesContainer = document.getElementById('services-container');
        if (!servicesContainer) return;

        servicesContainer.innerHTML = services.map((service, index) => `
            <div class="service-item padd-15" data-aos="fade-up" data-aos-duration="800" data-aos-delay="${(index + 1) * 100}">
                <div class="service-item-inner">
                    <div class="icon">
                        <ion-icon name="${service.icon}"></ion-icon>
                    </div>
                    <h4>${service.title}</h4>
                    <p>${service.description}</p>
                </div>
            </div>
        `).join('');
    };

    const generateAchievements = (achievements) => {
        if (!achievements) return;

        const createTimelineItem = (item, index) => {
            const highlightsList = item.highlights
                ? `<ul class="timeline-list">${item.highlights.map(h => `<li>${h}</li>`).join('')}</ul>`
                : '';

            return `
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
                                ${item.badge ? `<div class="award-badge"><i class="fas fa-award"></i>${item.badge}</div>` : 
                                  item.type === 'cert' ? '<div class="status-indicator cert"><i class="fas fa-certificate"></i>Certificate</div>' : ''}
                                ${item.certificateUrl ? `<a href="${item.certificateUrl}" target="_blank" class="view-btn">View</a>` : ''}
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
        };

        const developmentContainer = document.querySelector('#development .timeline-container');
        if (developmentContainer && achievements.development) {
            developmentContainer.innerHTML = achievements.development.map((item, index) => 
                createTimelineItem(item, index)
            ).join('');
        }

        const activitiesContainer = document.querySelector('#activities .timeline-container');
        if (activitiesContainer && achievements.activities) {
            activitiesContainer.innerHTML = achievements.activities.map((item, index) => 
                createTimelineItem(item, index)
            ).join('');
        }
    };

    const generateProjects = (projects) => {
        if (!projects) return;

        const projectGrid = document.getElementById('project-grid');
        if (!projectGrid) return;

        projectGrid.innerHTML = projects.map((project, index) => {
            const mediaHTML = project.thumbnailMediaType === 'video'
                ? `<video autoplay muted loop playsinline>
                    <source src="${project.thumbnailSrc}" type="video/mp4">
                    Your browser does not support the video tag.
                    </video>`
                : `<img src="${project.thumbnailSrc}" alt="${project.title}">`;

            const tagsHTML = project.tags.map(tag => `<li><a>${tag}</a></li>`).join('');

            return `
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
        }).join('');

        projects.forEach(project => {
            window.projectData[project.id] = {
                ...project,
                description: project.fullDescription || project.description
            };
        });
    };

    /*! ========== INITIALIZATION (DOMContentLoaded) ========== */

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