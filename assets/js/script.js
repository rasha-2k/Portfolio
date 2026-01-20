(() => {
    //! cursor functionality
    const cursor = document.querySelector('.cursor');
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    
    //if it's a touchable device, disable the custom cursor otherwise enable it :)
    if (isTouchDevice) {
        document.documentElement.classList.add('no-custom-cursor');
    } else {
        const cursorState = {
            isHovering: false,
            isClicking: false
        };

        const CURSOR_SCALES = {
            default: { scale: 1, translate: -50 },
            hover: { scale: 2, translate: -25 },
            click: { scale: 0.7, translate: -71.4 },
            hoverClick: { scale: 1.85, translate: -27 }
        };

        const cursorHoverSelectors = [
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
            '.logo a',
            '.colors span'
        ];

        const disallowedClosestSelectors = ['.project-tags'];
        const disallowedSelfSelectors = ['.logo-text'];

        const applyCursorTransform = () => {
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

            cursor.style.transform = `scale(${config.scale}) translate(${config.translate}%, ${config.translate}%)`;
        };

        const isAllowedHoverTarget = (target) => {
            if (disallowedSelfSelectors.some(sel => target.matches(sel))) return false;
            if (disallowedClosestSelectors.some(sel => target.closest(sel))) return false;

            return cursorHoverSelectors.some(sel => target.closest(sel) && !target.matches('.logo-text'));
        };
        const setCursorHoverState = (isHovering) => {
            cursorState.isHovering = isHovering;
            applyCursorTransform();
        };

        const setCursorClickState = (isClicking) => {
            cursorState.isClicking = isClicking;
            cursor.classList.toggle('click', isClicking);
            applyCursorTransform();
        };

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
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

    //! Typed Text Animation
    new Typed(".typing", {
        strings: [
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

    //! Utility Functions
    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    //! Scroll Functionality
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

    //! Navigation
    const nav = document.querySelector('.nav');
    const navLinks = nav.querySelectorAll('a');
    const allSection = document.querySelectorAll('.section');
    const navTogglerBtn = document.querySelector(".nav-toggler");
    const aside = document.querySelector(".aside");

    function toggleAside() {
        const isOpen = aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open", isOpen);
        toggleClassOnSections("open", isOpen ? 'add' : 'remove');
    }

    function closeAside() {
        aside.classList.remove("open");
        navTogglerBtn.classList.remove("open");
        toggleClassOnSections("open", 'remove');
    }

    function toggleClassOnSections(className, action = 'toggle') {
        allSection.forEach(section => section.classList[action](className));
    }

    // Nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            showSection(this);
            if (window.innerWidth <= 1200) closeAside();
        });
    });

    navTogglerBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleAside();
    });

    document.querySelector(".hire-me")?.addEventListener("click", function (e) {
        e.preventDefault();
        showSection(this);
        if (window.innerWidth <= 1200) closeAside();
    });
    document.querySelectorAll(".cta-primary").forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            showSection(this);
            if (window.innerWidth <= 1200) closeAside();
        });
    });


    document.querySelectorAll('.logo a').forEach(logoLink => {
        logoLink.addEventListener('click', function (e) {
            e.preventDefault();
            showSection(this);
            if (this.closest('.aside') && window.innerWidth <= 1200) closeAside();
        });
    });

    // Active link on scroll
    window.addEventListener('scroll', () => {
        const fromTop = window.scrollY + 150;
        for (const link of navLinks) {
            const section = document.querySelector(link.getAttribute('href'));
            if (section &&
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        }
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        const clickedInsideAside = aside.contains(e.target);
        const clickedToggler = navTogglerBtn.contains(e.target);
        if (!clickedInsideAside && !clickedToggler && aside.classList.contains('open')) {
            closeAside();
        }
    });

    //close on scroll
    window.addEventListener("scroll", () => {
        if (aside.classList.contains("open")) closeAside();
    });

    //! Background Code snippets for each section
    const codeSnippets = {
        home: [
            'const dev = "Rasha Alsaleh";',
            'const theme = "dark";',
            'class Portfolio {}',
            'export default Home;',
            'console.log("Welcome to my portfolio");',
            'const projectsCount = 4;',
            '/* HTML • CSS • JS */',
            'let languages = ["PHP", "JS", "Python"];',
            '// Built with passion'
        ],
        about: [
            'const role = "Software Engineer";',
            'function getSkills() { return ["PHP", "Java", "MySQL"]; }',
            'class Dev { learn() { this.experience++; } }',
            'const passion = true;',
            'export { role, skills };',
            'const interests = ["DevOps", "Testing", "AI"];',
            '// Always be learning',
            'console.info("Open to opportunities");',
        ],
        projects: [
            'git clone repo.git',
            'const projects = ["PackTrack", "DevTasks", "Portfolio"];',
            'function buildProject(name) { return `${name} ready`; }',
            'docker run project-container',
            'git push origin main',
            'npm run build',
            'CI: passed ✓',
            'deploy --env production',
            'const isResponsive = true;',
        ],
        services: [
            'const services = ["Web Development", "QA Automation"];',
            'function deliverService(type) { return quality[type]; }',
            'class ServiceProvider {}',
            'const quality = 100;',
            'export default Services;',
            'const testingTools = ["Selenium", "Appium", "JUnit"];',
            'const ci = ["GitHub Actions", "Jenkins"];',
            'function monitor() { return uptime > 99.9; }',
            'const deliveryModel = "Agile";'
        ],
        contact: [
            'const email = "info@rashaalsaleh.com";',
            'function sendMessage() { return "Message sent"; }',
            'const social = ["GitHub", "LinkedIn"];',
            'const available = true;',
            'export { email, social };',
            'const timezone = "UTC+3";',
            'const responseRate = 98;',
            'const location = "Remote | Amman";'
        ]
    };

    function createCodeElements() {
        const container = document.getElementById('codeElements');
        if (!container) return;

        container.innerHTML = '';

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
            const snippets = codeSnippets[section] || [];

            // determine how many snippets to show for this section based on densityScale
            const maxCount = Math.max(1, Math.round(snippets.length * densityScale));
            const visibleSnippets = snippets.slice(0, maxCount);

            visibleSnippets.forEach((snippet, index) => {
                const codeElement = document.createElement('div');
                codeElement.className = `code-text code-${section}`;
                codeElement.textContent = snippet;

                let position = getRandomPosition(quadrants, usedPositions, sectionIndex, index);

                codeElement.style.left = position.x + '%';
                codeElement.style.top = position.y + '%';
                codeElement.style.animationDelay = (sectionIndex * 1.5 + index * 0.6) + 's';

                container.appendChild(codeElement);
            });
        });
    }


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

        // Update code highlighting - only active section gets skin color
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

    createCodeElements();

    window.addEventListener('scroll', updateCodeHighlight);
    window.addEventListener('resize', updateCodeHighlight);

    updateCodeHighlight();

    let __codeResizeTimer = null;
    window.addEventListener('resize', () => {
        if (__codeResizeTimer) clearTimeout(__codeResizeTimer);
        __codeResizeTimer = setTimeout(() => {
            createCodeElements();
            updateCodeHighlight();
        }, 150);
    });

    //! Tabs Setup
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
                    const elements = c.querySelectorAll('[data-aos]');
                    elements.forEach(element => {
                        element.classList.remove('aos-animate');
                        element.setAttribute('data-aos', element.getAttribute('data-aos')); // Reset AOS attributes
                    });
                }
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
        }
    }

    setupTabs('.achievements-tab-item', '.achievements-tab-content');
    setupTabs('.skills-tab-item', '.skills-tab-content');

    //! Back-to-Top Button with Progress Ring
    document.addEventListener('DOMContentLoaded', () => {
        const ageEl = document.getElementById('age-value');
        if (ageEl) {
            const birthDate = new Date('2005-02-05'); 
            if (!isNaN(birthDate)) {
                const today = new Date();
                let age = today.getFullYear() - birthDate.getFullYear();
                const hasHadBirthday = (today.getMonth() > birthDate.getMonth()) ||
                    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
                if (!hasHadBirthday) age--;
                ageEl.textContent = age.toString();
            }
        }
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
        updateProgress();

        //todo make this more dynamic
        //! Projects Section
        const projectData = {
            'packtrack': {
                description: `PackTrack is a full-stack delivery management platform designed to simplify package tracking for users and admins. The app features a clean dashboard UI, real-time courier tracking via external APIs, and JWT-based role authentication.
                            Users can securely log in, submit delivery forms, monitor package statuses, and get intelligent packaging tips. Admins get access to a powerful admin panel with dynamic data visualizations (Chart.js), user activity logs, and system analytics.
                            PackTrack stands out for its modern DevOps workflow—containerized with Docker, automated via GitHub Actions—and includes secure backend logic, role-based access control, and responsive design for seamless use on any device.`,
                tags: ['PHP', 'MySQL', 'JWT', 'API Integration', 'Docker', 'GitHub Actions', 'Role-Based Access Control'],
                mediaType: 'video',
                mediaSrc: 'assets/videos/PackTrack Recording.mp4',
            },
            'planetary-explorer': {
                description: `Planetary Explorer is a 3D space exploration game built in Unity and C#, where players travel to procedurally generated exoplanets inspired by real NASA data. The game combines realistic physics with artistic design to simulate low-gravity environments, alien terrains, and interactive exploration.
                            From advanced physics-based movement to immersive soundscapes, the game is both educational and visually engaging. It’s designed to spark curiosity about space science while showcasing real-time rendering and gameplay optimization techniques.`,
                tags: ['Unity', 'C#', '3D Environment Design', 'Low-Gravity Simulation', 'NASA Data', 'Game Physics'],
                mediaType: 'video',
                mediaSrc: 'assets/videos/Game View.mp4',
            },

            'arduino-smart-alert-system': {
                description: `The Smart Alert System is a hands-on hardware project built using Arduino Uno and multiple environmental sensors. It combines ultrasonic, PIR motion, and water sensors to detect distance, movement, and flooding. Based on the sensor readings, the system triggers real-time responses through LED indicators and a buzzer.
                            This project deepened my understanding of hardware-software interaction, including sensor integration, analog/digital signal processing, and real-time condition-based logic. It also sharpened my skills in writing clean, event-driven code for embedded systems and debugging on physical devices.`,
                tags: ['Arduino Uno', 'Ultrasonic Sensor', 'PIR Sensor', 'Water Sensor', 'LED Control', 'Buzzer Alerts', 'Real-Time Sensing', 'IoT Integration'],
            },
            'ai-recognition': {
                description: `An advanced AI-powered image recognition system utilizing cutting-edge deep learning techniques to classify and analyze images with exceptional accuracy across various industries.
                            This project demonstrates expertise in machine learning, computer vision, API development, and scalable system architecture. The system has been successfully deployed in production environments.`,
                tags: ['Python', 'TensorFlow', 'OpenCV', 'FastAPI', 'Docker', 'Cloud Deployment'],
            }
        };

        //! Modal functionality
        const modal = document.getElementById('projectModal');
        const modalClose = document.getElementById('modalClose');
        const modalVideo = document.getElementById('modalMedia');
        const modalVideoSource = document.getElementById('modalVideoSource');
        const modalImage = document.getElementById('modalImage');

        const viewProjectBtns = document.querySelectorAll('.view-project-btn');
        for (const viewBtn of viewProjectBtns) {
            viewBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const item = viewBtn.closest('.project-item');
                const projectId = viewBtn.dataset.project;
                const category = item.querySelector('.project-category')?.textContent.trim() || '';
                const mediaType = projectData[projectId]?.mediaType || item.dataset.mediatype || '';
                const mediaSrc = projectData[projectId]?.mediaSrc || item.dataset.mediasrc || '';

                const githubUrl = item.dataset.github || '';
                const modalGithubBtn = document.getElementById('modalGithubBtn');
                const liveUrl = item.dataset.live || '';
                const modalLiveBtn = document.getElementById('modalLiveBtn');

                // Show/hide GitHub button based on URL availability
                if (githubUrl && githubUrl !== '#') {
                    modalGithubBtn.style.display = 'inline-flex';
                    modalGithubBtn.href = githubUrl;
                } else {
                    modalGithubBtn.style.display = 'none';
                }

                // Show/hide Live button based on URL availability
                if (liveUrl && liveUrl !== '#') {
                    modalLiveBtn.style.display = 'inline-flex';
                    modalLiveBtn.href = liveUrl;
                } else {
                    modalLiveBtn.style.display = 'none';
                }

                const title = item.querySelector('.project-title a')?.textContent.trim() || '';
                const modalTitle = document.getElementById('modalTitle');
                modalTitle.innerHTML = '';

                const titleLink = document.createElement('a');
                titleLink.textContent = title;
                if (githubUrl && githubUrl !== '#') {
                    titleLink.href = githubUrl;
                }
                titleLink.target = '_blank';
                titleLink.classList.add('link');

                modalTitle.appendChild(titleLink);
                const description = projectData[projectId]?.description || '';
                const tags = projectData[projectId]?.tags || [];
                if (!description) {
                    console.error(`No description found for project ID: ${projectId}`);
                    return;
                }
                if (!tags || !Array.isArray(tags)) {
                    console.error(`No tags found for project ID: ${projectId}`);
                    return;
                }
                if (!mediaSrc) {
                    console.error(`No media source found for project ID: ${projectId}`);
                    return;
                }

                // Set modal content
                document.getElementById('modalCategory').textContent = category;
                document.getElementById('modalDescription').innerHTML = description.replace(/\n/g, '<br>');


                // Media handling
                if (mediaType === 'video') {
                    modalVideoSource.src = mediaSrc;
                    modalVideo.load();
                    modalVideo.style.display = 'block';
                    modalImage.style.display = 'none';
                } else {
                    modalImage.src = mediaSrc;
                    modalImage.alt = title;
                    modalImage.style.display = 'block';
                    modalVideo.style.display = 'none';
                }

                // Tags
                const tagsContainer = document.getElementById('modalTags');
                tagsContainer.innerHTML = '';
                for (const tag of tags) {
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.textContent = tag;
                    li.appendChild(a);
                    tagsContainer.appendChild(li);
                }

                // URLs
                document.getElementById('modalGithubBtn').href = githubUrl;
                // document.getElementById('modalLiveBtn').href = liveUrl;

                // Show modal
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';

                // Show/hide GitHub button based on URL availability
                const btn = document.getElementById('modalGithubBtn');
                if (githubUrl && githubUrl !== '#') {
                    btn.style.display = 'inline-flex';
                    btn.href = githubUrl;
                } else {
                    btn.style.display = 'none';
                }
            });
        }

        // Close modal
        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';

            // Pause video if playing
            const modalVideo = document.getElementById('modalMedia');
            if (modalVideo.style.display === 'block') {
                modalVideo.pause();
                modalVideo.currentTime = 0;
            }
        }

        modalClose.addEventListener('click', closeModal);

        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });

        // Projects Filter Functionality
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectItems = document.querySelectorAll('.project-item');

        for (const btn of filterBtns) {
            btn.addEventListener('click', () => {
                for (const b of filterBtns) {
                    b.classList.remove('active');
                }
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                for (const item of projectItems) {
                    const itemCategory = item.getAttribute('data-category');

                    if (filterValue === 'all' || itemCategory === filterValue) {
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
                }

                // Refresh AOS animations after filtering
                setTimeout(() => {
                    AOS.refresh();
                }, 300);
            });
        }
    });

})();