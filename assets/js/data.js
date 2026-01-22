const PORTFOLIO_CONFIG = {
    // Personal Information
    personal: {
        name: "Rasha Alsaleh",
        title: "Software Engineer",
        email: "info@rashaalsaleh.com",
        phone: "+962781277089",
        location: "Amman - Jordan",
        birthDate: "2005-02-05", // Format: YYYY-MM-DD
        degree: "Software Engineering",
        availability: "Available",
        
        // Hero Section
        hero: {
            greeting: "Hello, I'm",
            typedRoles: [
                "Software Engineer",
                "Backend Developer",
                "Quality Engineer",
                "System Analyst",
                "Web Developer",
                "Database Designer"
            ],
            description: "I'm a software engineer with a strong focus on backend systems, quality assurance, and practical problem-solving. Through hands-on projects, training programs, and coding competitions, I've developed skills in designing, testing, and delivering reliable software. Continuously learning and exploring new approaches, I aim to build solutions that are both efficient and impactful.",
            resumeUrl: "assets/docs/Rasha Alsaleh.pdf",
            profileImage: "assets/images/pfp.jpg"
        },
        
        // Social Links
        social: {
            linkedin: "https://www.linkedin.com/in/rasha-alsaleh/",
            github: "https://github.com/rasha-2k",
            email: "mailto:info@rashaalsaleh.com"
        }
    },

    // Skills organized by category
    skills: {
        languages: [
            { name: "PHP", icon: "assets/images/technologies/PHP.svg" },
            { name: "C#", icon: "assets/images/technologies/CSharp.svg" },
            { name: "Go Lang", icon: "assets/images/technologies/Go.svg" },
            { name: "Java", icon: "assets/images/technologies/Java.svg" },
            { name: "C++", icon: "assets/images/technologies/CPlusPlus.svg" },
            { name: "TypeScript", icon: "assets/images/technologies/TypeScript.svg" },
            { name: "Python", icon: "assets/images/technologies/Python.svg" }
        ],
        tools: [
            { name: "Docker", icon: "assets/images/technologies/Docker.svg" },
            { name: "VS Code", icon: "assets/images/technologies/VSCode.svg" },
            { name: "Visual Studio", icon: "assets/images/technologies/VisualStudio.svg" },
            { name: "Eclipse IDE", icon: "assets/images/technologies/Eclipse.svg" },
            { name: "Selenium", icon: "assets/images/technologies/Selenium.svg" },
            { name: "Postman", icon: "assets/images/technologies/Postman.svg" },
            { name: "JUnit 5", icon: "assets/images/technologies/JUnit.svg" },
            { name: "VirtualBox", icon: "assets/images/technologies/VirtualBox.svg" },
            { name: "Jira", icon: "assets/images/technologies/Jira.svg" },
            { name: "Trello", icon: "assets/images/technologies/Trello.svg" },
            { name: "Figma", icon: "assets/images/technologies/Figma.svg" }
        ],
        others: [
            { name: "GitHub Actions", icon: "assets/images/technologies/GitHubActions.svg" },
            { name: "Linux", icon: "assets/images/technologies/Linux.svg" },
            { name: "Git", icon: "assets/images/technologies/Git.svg" },
            { name: "React", icon: "assets/images/technologies/React.svg" },
            { name: ".Net Core", icon: "assets/images/technologies/NetCore.svg" },
            { name: "Laravel", icon: "assets/images/technologies/Laravel.svg" },
            { name: "Arduino", icon: "assets/images/technologies/Arduino.svg" },
            { name: "Unity Engine", icon: "assets/images/technologies/Unity.svg" },
            { name: "MySQL", icon: "assets/images/technologies/MySQL.svg" },
            { name: "PostgreSQL", icon: "assets/images/technologies/PostgresSQL.svg" }
        ]
    },

    // Projects
    projects: [
        {
            id: "packtrack",
            title: "PackTrack",
            category: "Full-Stack Web App",
            categoryTag: "web",
            icon: "fa-truck",
            description: "A courier management platform offering real-time package tracking and role-based dashboards for users and admins. It delivers analytics that streamline operations, and improve overall shipping efficiency.",
            fullDescription: "PackTrack is a full-stack delivery management platform designed to simplify package tracking for users and admins. The app features a clean dashboard UI, real-time courier tracking via external APIs, and JWT-based role authentication.\n\nUsers can securely log in, submit delivery forms, monitor package statuses, and get intelligent packaging tips. Admins get access to a powerful admin panel with dynamic data visualizations (Chart.js), user activity logs, and system analytics.\n\nPackTrack stands out for its modern DevOps workflow—containerized with Docker, automated via GitHub Actions—and includes secure backend logic, role-based access control, and responsive design for seamless use on any device.",
            tags: ["PHP", "MySQL", "API Integration", "JWT Auth", "Docker", "Chart.js", "Tailwind CSS"],
            thumbnailMediaType: "image",
            thumbnailSrc: "assets/images/projects/placeholder-packtrack.png",
            modalMediaType: "video",
            modalSrc: "assets/videos/projects/PackTrack Recording.mp4",
            githubUrl: "https://github.com/rasha-2k/packtrack",
            liveUrl: "#"
        },
        {
            id: "arduino-smart-alert-system",
            title: "Smart Alert System",
            category: "IoT Project",
            categoryTag: "iot",
            icon: "fa-microchip",
            description: "An Arduino-based safety system combining ultrasonic, PIR, and water sensors to detect motion, proximity, and flooding. Provides real-time alerts using LEDs and a buzzer with condition-based feedback logic.",
            fullDescription: "The Smart Alert System is a hands-on hardware project built using Arduino Uno and multiple environmental sensors. It combines ultrasonic, PIR motion, and water sensors to detect distance, movement, and flooding. Based on the sensor readings, the system triggers real-time responses through LED indicators and a buzzer.\n\nThis project deepened my understanding of hardware-software interaction, including sensor integration, analog/digital signal processing, and real-time condition-based logic. It also sharpened my skills in writing clean, event-driven code for embedded systems and debugging on physical devices.",
            tags: ["Arduino", "PIR Sensor", "Ultrasonic", "Water Sensor"],
            thumbnailMediaType: "image",
            thumbnailSrc: "https://t4.ftcdn.net/jpg/03/99/12/51/360_F_399125183_HUy4uv9tzzMq5Kauk1wCl0WVyhVqomLv.jpg",
            modalMediaType: "image",
            modalSrc: "https://t4.ftcdn.net/jpg/03/99/12/51/360_F_399125183_HUy4uv9tzzMq5Kauk1wCl0WVyhVqomLv.jpg",
            githubUrl: "https://github.com/rasha-2k/Arduino-Smart-Alert-System",
            liveUrl: "#"
        },
        {
            id: "planetary-explorer",
            title: "The Planetary Explorer",
            category: "3D Game",
            categoryTag: "game",
            icon: "fa-shuttle-space",
            description: "Planetary Explorer is a 3D space adventure game developed in Unity and C# that aims to provide players with an immersive experience of exploring exoplanet environments. Utilizing dynamic low-gravity physics and realistic terrains based on verified NASA resources, the game challenges players to navigate obstacles, solve puzzles, and unlock essential tools.",
            fullDescription: "Planetary Explorer is a 3D space exploration game built in Unity and C#, where players travel to procedurally generated exoplanets inspired by real NASA data. The game combines realistic physics with artistic design to simulate low-gravity environments, alien terrains, and interactive exploration.\n\nFrom advanced physics-based movement to immersive soundscapes, the game is both educational and visually engaging. It's designed to spark curiosity about space science while showcasing real-time rendering and gameplay optimization techniques.",
            tags: ["Unity", "C#", "3D Environment Design", "Low-Gravity Simulation"],
            thumbnailMediaType: "video",
            thumbnailSrc: "assets/videos/projects/placeholder-planetary-explorer.mp4",
            modalMediaType: "video",
            modalSrc: "assets/videos/projects/Game Demo.mp4",
            githubUrl: "",
            liveUrl: "#"
        }
    ],

    // Services
    services: [
        {
            icon: "bug-outline",
            title: "Software Testing & QA",
            description: "Ensuring software reliability with automated testing. Using industry-standard tools to catch issues early, streamline workflows, and improve efficiency. My focus is on delivering high-quality, bug-free releases."
        },
        {
            icon: "globe-outline",
            title: "Web Development",
            description: "Building responsive, scalable web apps that provide seamless user experiences. I combine front-end and back-end technologies to create reliable solutions that perform efficiently and meet both user and business needs."
        },
        {
            icon: "brush-outline",
            title: "UI/UX Design",
            description: "Designing intuitive interfaces that prioritize user experience. I focus on creating smooth, clean, interactive designs through wireframing, prototyping, and testing to ensure usability."
        },
        {
            icon: "git-branch-outline",
            title: "DevOps & CI/CD",
            description: "Streamlining development with CI/CD pipelines to automate workflows. I focus on increasing collaboration, accelerating software delivery, and maintaining stability and quality through automated processes."
        },
        {
            icon: "bulb-outline",
            title: "Problem-Solving & Optimization",
            description: "Developing efficient algorithms and optimized solutions to enhance system performance, scalability, and reliability. I tackle challenges with creative and practical approaches to deliver impactful results."
        },
        {
            icon: "people-outline",
            title: "Project Management",
            description: "Leading teams with Agile methods to ensure timely and high-quality project delivery. I facilitate sprints, encourage communication, and use tools like Jira to ensure everyone stays aligned and focused on goals."
        }
    ],

    // Achievements
    achievements: {
        development: [
            {
                date: "May 2025 • 40 hours",
                title: "Advanced Software Testing – Automation Track",
                icon: "fa-code",
                certificateUrl: "assets/docs/QA_Automation Certificate.pdf",
                type: "cert",
                description: "A hands-on training program offered by <b>The Hope International</b> focused on test automation tools and practices. This course builds on manual testing knowledge and transitions learners into automation and performance testing roles. It introduces advanced tools, practical frameworks, and development aligned with global QA standards.",
                highlights: [
                    "Automating test cases and reducing manual testing overhead.",
                    "Performance testing using JMeter (aligned with ISTQB CTFL-Performance Testing).",
                    "Mobile testing best practices (ASTQB Mobile Testing standards).",
                    "Agile and DevOps integration (Agile Tester & Scrum Master concepts).",
                    "API automation and Selenium WebDriver-based testing workflows."
                ]
            },
            {
                date: "DEC 2024 • 40 HOURS",
                title: "QA Software Testing",
                icon: "fa-bug",
                certificateUrl: "assets/docs/QA Testing Certificate.pdf",
                type: "cert",
                description: "Comprehensive manual software testing course by <b>The Hope International</b> focused on the principles, methodologies, and tools of manual software testing. This program covered the full QA lifecycle, from planning and static testing to test execution and defect management.",
                highlights: [
                    "Core software testing concepts and industry best practices.",
                    "Test design techniques including Black Box, and experience-based methods.",
                    "Defect lifecycle, bug reporting, and risk-based testing strategies.",
                    "Static testing techniques such as reviews and tool-supported analysis.",
                    "Test planning, estimation, execution, and monitoring fundamentals.",
                    "Basics of API testing and introduction to automation tools."
                ]
            },
            {
                date: "AUG 2024 • 28 PDUS",
                title: "PMI-ACP® Exam Prep",
                icon: "fa-project-diagram",
                certificateUrl: "assets/docs/PMI-ACP Certificate.jpg",
                type: "cert",
                description: "A hands-on Agile training program focused on building practical project management skills and preparing for PMI-ACP® certification. This course helped me strengthen my ability to lead Agile teams and deliver project using modern frameworks and adaptive planning strategies.",
                highlights: [
                    "Deep understanding of Agile principles, values, and mindset (Scrum, Kanban, XP, Lean).",
                    "Developed skills in stakeholder communication, adaptive planning, and team facilitation.",
                    "Learned risk management, estimation, and prioritization techniques in dynamic project.",
                    "Strengthened knowledge of Agile metrics, velocity tracking, and iterative delivery cycles.",
                    "Practiced applying Agile techniques through case scenarios and mock exam simulations."
                ]
            }
        ],
        activities: [
            {
                date: "OCT 2024 • NASA SPACE APPS",
                title: "NASA Space Apps Challenge",
                icon: "fa-rocket",
                certificateUrl: "assets/docs/NasaSpaceApp Certificate.pdf",
                type: "award",
                badge: "Creativity Award",
                description: "Received the <b>Creativity Award</b> for designing <b>The Planetary Explorer</b>, an educational 3D game built with Unity. The game targets elementary to high school students, combining interactive gameplay with scientifically accurate NASA data on exoplanets.<br>By integrating real data from NASA and space agency partners, the game fosters curiosity and expands player knowledge of distant worlds and the universe. It was developed to make space science accessible, engaging, and fun through immersive digital exploration."
            },
            {
                date: "MAY 2024 • AAU-XDT",
                title: "UI/UX Design Competition",
                icon: "fa-palette",
                certificateUrl: "assets/docs/AAU-XDT Second Place Certificate.jpg",
                type: "award",
                badge: "2nd Place",
                description: "Earned <b>2nd place</b> in a university-level UI/UX design competition for senior students. As a team, we developed a high-fidelity prototype of an e-learning management system, praised for its clean visual design, seamless user flow, and strong emphasis on accessibility and usability principles."
            },
            {
                date: "JAN 2024",
                title: "3 Minutes Competition",
                icon: "fa-clock",
                certificateUrl: "assets/docs/3Minutes Competition Certificate.jpg",
                type: "award",
                badge: "3rd Place",
                description: "Earned <b>3rd place</b> in a fast-paced pitch competition where teams had just 3 minutes to convince judges. Presented <b>UniBus</b>, a transportation solution for university communities featuring real-time tracking and smart scheduling. Judges praised our clear communication and innovative approach within the time constraint."
            },
            {
                date: "NOV 2023 • JCPC",
                title: "Jordanian Collegiate Programming Contest",
                icon: "fa-code",
                certificateUrl: "",
                type: "participant",
                badge: "Competitor",
                description: "Competed in <b>JCPC23</b>, Jordan's national collegiate programming contest and qualifier for the ICPC regionals for university students. The contest challenges participants with complex algorithmic problems, promoting teamwork, advanced problem-solving skills, and team collaboration in a high-stakes competitive environment."
            },
            {
                date: "MAY 2023 • AAU-PC",
                title: "AAU Programming Contest",
                icon: "fa-lightbulb",
                certificateUrl: "assets/docs/AAU-PC 2023 First Solve Certificate.jpg",
                type: "award",
                badge: "First Solve",
                description: "Placed <b>4th overall</b> in AAU's annual programming contest and earned the <b>First Solve</b> award for being the first team to crack a problem under time pressure. The competition mirrors JCPC/ICPC formats and served as hands-on training in algorithmic thinking, time management, and collaborative coding."
            }
        ]
    },

    // Background code snippets for each section
    codeSnippets: {
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
            'console.info("Open to opportunities");'
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
            'const isResponsive = true;'
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
    }
};

if (typeof window !== 'undefined') {
    window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = PORTFOLIO_CONFIG;
}