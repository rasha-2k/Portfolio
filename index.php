<?php
session_start();
function generateCSRFToken()
{
    if (!isset($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Rasha Alsaleh's portfolio - Quality Control Engineer and Software Engineer based in Amman, Jordan.">
    <meta name="keywords" content="Rasha Alsaleh, Software Engineer, Quality Control, Quality Assurance, QC, QA, manual Testing, Portfolio, Amman, Jordan">
    <meta property="og:image" content="assets/images/logo black.png">

    <title>Rasha's Portfolio</title>
    <script>
        (function() {
            // === Load Saved Theme Color ===
            const savedColor = localStorage.getItem("themeColor");
            if (savedColor) {
                const links = document.querySelectorAll('link.alternate-style');
                links.forEach(link => {
                    if (link.getAttribute("title") === savedColor) {
                        link.removeAttribute("disabled");
                    } else {
                        link.setAttribute("disabled", "true");
                    }
                });
            }

            // === Load Saved Theme Mode (light or dark) ===
            const savedTheme = localStorage.getItem("themeMode");
            if (savedTheme === "light") {
                document.documentElement.classList.add("light");
            } else {
                document.documentElement.classList.remove("light");
            }
        })();
    </script>
    <!-- CSS Files -->
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/color-1.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&family=Roboto+Slab:wght@100..900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&family=Roboto+Slab:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Londrina+Shadow&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Slabo+27px&display=swap" rel="stylesheet">
    <!-- AOS CSS -->
    <link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet">
    <!-- Style Switcher -->
    <link rel="stylesheet" href="assets/css/color-1.css" class="alternate-style" title="color-1" disabled>
    <link rel="stylesheet" href="assets/css/color-2.css" class="alternate-style" title="color-2" disabled>
    <link rel="stylesheet" href="assets/css/color-3.css" class="alternate-style" title="color-3" disabled>
    <link rel="stylesheet" href="assets/css/color-4.css" class="alternate-style" title="color-4" disabled>
    <link rel="stylesheet" href="assets/css/color-5.css" class="alternate-style" title="color-5" disabled>
    <link rel="stylesheet" href="assets/css/style-switcher.css">
    <!-- upload icon -->
    <link rel="apple-touch-icon" sizes="180x180" href="./assets/images/icon black.png">
    <link rel="icon" href="./assets/images/icon black.png" type="image/png">
</head>

<body>
    <!-- Main Container Start -->
    <div class="main-container">
        <!-- Aside Start -->
        <div class="aside">
            <div class="logo">
                <a href="#home"><img src="assets/images/logo black.png" alt="Logo"></a>
            </div>
            <div class="nav-toggler">
                <span></span>
            </div>
            <ul class="nav">
                <li><a href="#home" class="active"><i class="fa fa-home"></i>Home</a></li>
                <li><a href="#about"><i class="fa fa-user"></i>About</a></li>
                <li><a href="#services"><i class="fa fa-list"></i>Services</a></li>
                <li><a href="#portfolio"><i class="fa fa-briefcase"></i>Portfolio</a></li>
                <li><a href="#contact"><i class="fa fa-comments"></i>Contact</a></li>
            </ul>
        </div>
        <!-- Aside End -->
        <!-- Main Content Start -->
        <div class="main-content">
            <!-- Home Section Start -->
            <section class="home section" id="home">
                <div class="container">
                    <div class="row Box shadowEffect">
                        <div class="home-info padd-15" data-aos="fade-in">
                            <h3 class="hello">Hello, I'm <span class="name">Rasha Alsaleh</span></h3>
                            <h3 class="my-profession">A <span class="typing">Full-stack Developer</span></h3>
                            <div class="cv-button">
                                <div class="social-buttons">
                                    <a href="https://www.linkedin.com/in/rasha-alsaleh/" target="_blank" class="social-buttons__button social-button social-button--linkedin" aria-label="LinkedIn">
                                        <span class="social-button__inner">
                                            <i class="fab fa-linkedin-in"></i>
                                        </span>
                                    </a>
                                    <a href="https://github.com/rasha-2k" target="_blank" class="social-buttons__button social-button social-button--github" aria-label="GitHub">
                                        <span class="social-button__inner">
                                            <i class="fab fa-github"></i>
                                        </span>
                                    </a>
                                    <!-- <a href="https://www.instagram.com/rasha2k_/" target="_blank" class="social-buttons__button social-button social-button--instagram" aria-label="InstaGram">
                                                <span class="social-button__inner">
                                                <i class="fab fa-instagram"></i>
                                                </span>
                                            </a> -->
                                </div>
                                <a href="assets/docs/Rasha Alsaleh.pdf" class="btn"><b>Resume</b>
                                    <span class="icon-box">
                                        <i class="fa fa-arrow-down downloadone"></i>
                                        <i class="fa fa-arrow-down downloadtwo"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div class="home-img padd-15" data-aos="fade-in">
                            <img src="assets/images/pfp.jpg" alt="Profile Picture">
                        </div>
                    </div>
                </div>
            </section>
            <!-- Home Section End -->
            <!-- About Section Start -->
            <section class="about section" id="about">
                <div class="container">
                    <div class="row">
                        <div class="section-title padd-15" data-aos="fade-in">
                            <h2>About Me</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="about-content padd-15">
                            <!-- <div class="row Box" style="margin-top: 0;">
                                <div class="about-text padd-15">
                                    <h3>I'm Rasha Alsaleh, a <span>Software Engineer</span></h3>
                                    <p style="text-align: justify;">
                                        I am a passionate third-year software engineering student at Amman Arab University,
                                        focused on delivering high-quality results and continuous improvement.
                                        With a strong foundation in software development, quality assurance, and DevOps,
                                        I excel in collaborative environments where I can apply my technical expertise and contribute to team success.
                                        I’m passionate about problem-solving and ensuring efficiency through automated testing and process optimization.
                                        <br>
                                        My journey has involved embracing new challenges, refining my skills in QA/QC,
                                        and integrating DevOps practices to streamline workflows.
                                        I bring a hands-on approach to project management, balancing technical needs with clear communication to meet deadlines and drive project success.
                                        <br>
                                        I’m always looking for opportunities to grow,
                                        and my goal is to combine my technical expertise with strong teamwork and project management skills to make a meaningful impact in the tech industry.
                                    </p>
                                </div>
                            </div> -->
                            <div class="row Box" style="margin-top: 0;">
                                <div class="section-container padd-15">
                                    <div class="section-subtitle padd-15">
                                        <h3 class="title">Personal Information</h3>
                                    </div>

                                    <div class="personal-info-grid" data-aos="fade-up" data-aos-delay="200">
                                        <div class="info-item" data-aos="fade-in">
                                            <div class="info-icon">
                                                <i class="fa-solid fa-calendar-days"></i>
                                            </div>
                                            <div class="info-content">
                                                <h4 class="info-title">Birthday</h4>
                                                <p class="info-value">5 Feb 2005</p>
                                            </div>
                                        </div>

                                        <div class="info-item" data-aos="fade-in">
                                            <div class="info-icon">
                                                <i class="fa-solid fa-user"></i>
                                            </div>
                                            <div class="info-content">
                                                <h4 class="info-title">Age</h4>
                                                <p class="info-value">20</p>
                                            </div>
                                        </div>

                                        <div class="info-item" data-url="https://www.linkedin.com/in/rasha-alsaleh/">
                                            <div class="info-icon">
                                                <i class="fa-brands fa-linkedin"></i>
                                            </div>
                                            <div class="info-content">
                                                <h4 class="info-title">LinkedIn</h4>
                                                <p class="info-value"><a href="https://www.linkedin.com/in/rasha-alsaleh/" target="_blank" class="info-link">Rasha Alsaleh</a></p>
                                            </div>
                                        </div>

                                        <div class="info-item" data-url="mailto:info@rashaalsaleh.com">
                                            <div class="info-icon">
                                                <i class="fa-solid fa-envelope"></i>
                                            </div>
                                            <div class="info-content">
                                                <h4 class="info-title">Email</h4>
                                                <p class="info-value"><a href="mailto:info@rashaalsaleh.com" target="_blank" class="info-link">info@rashaalsaleh.com</a></p>
                                            </div>
                                        </div>

                                        <div class="info-item" data-aos="fade-in">
                                            <div class="info-icon">
                                                <i class="fa-solid fa-graduation-cap"></i>
                                            </div>
                                            <div class="info-content">
                                                <h4 class="info-title">Degree</h4>
                                                <p class="info-value">Software Engineering</p>
                                            </div>
                                        </div>

                                        <div class="info-item" data-url="tel:+962-78-127-7089">
                                            <div class="info-icon">
                                                <i class="fa-solid fa-phone"></i>
                                            </div>
                                            <div class="info-content">
                                                <h4 class="info-title">Phone</h4>
                                                <p class="info-value"><a href="tel:+962-78-127-7089" target="_blank" class="info-link">+962 781277089</a></p>
                                            </div>
                                        </div>

                                        <div class="info-item" data-aos="fade-in">
                                            <div class="info-icon">
                                                <i class="fa-solid fa-location-dot"></i>
                                            </div>
                                            <div class="info-content">
                                                <h4 class="info-title">Location</h4>
                                                <p class="info-value">Amman - Jordan</p>
                                            </div>
                                        </div>

                                        <div class="info-item" data-aos="fade-in">
                                            <div class="info-icon">
                                                <i class="fa-solid fa-briefcase"></i>
                                            </div>
                                            <div class="info-content">
                                                <h4 class="info-title">Freelance</h4>
                                                <p class="info-value">Available</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="hire-me-container">
                                        <a href="#contact" data-section-index="1" class="btn hire-me">
                                            <b>Hire Me</b>
                                            <span class="arrow-container">
                                                <i class="fa-solid fa-arrow-up arrowone"></i>
                                                <i class="fa-solid fa-arrow-up arrowtwo"></i>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="row Box" id="skills">
                                <div class="section-container padd-15">
                                    <div class="section-subtitle padd-15">
                                        <h3 class="title">My Technical Skills</h3>
                                    </div>
                                    <div class="row">
                                        <div class="skills-tabs" data-aos="fade-up">
                                            <span class="skills-tab-item active" data-target=".languages">Languages</span>
                                            <span class="skills-tab-item" data-target=".tools">Tools</span>
                                            <span class="skills-tab-item" data-target=".others">Others</span>
                                        </div>
                                    </div>
                                    <!-- Tab Contents -->
                                    <div class="skills-container" data-aos="fade-in">
                                        <!-- Languages -->
                                        <div class="languages skills-tab-content active">
                                            <div class="row justify-content-center row-cols-2 row-cols-md-3 row-cols-lg-6 mt-4 gy-4 skills-grid">
                                                <div class="col">
                                                    <div class="skill">
                                                        <img src="assets/images/technologies/html_css_js.png" alt="HTML, CSS, JS" class="skill-image grayscale">
                                                        <!-- <div class="skill-percentage" data-percentage="95">95%</div> -->
                                                    </div>
                                                    <p class="skill-name">HTML, CSS, JS</p>
                                                </div>
                                                <div class="col">
                                                    <div class="skill">
                                                        <img src="assets/images/technologies/Go.svg" alt="Golang" class="skill-image grayscale">
                                                        <!-- <div class="skill-percentage">95%</div> -->
                                                    </div>
                                                    <p class="skill-name">Go Lang</p>
                                                </div>
                                                <div class="col">
                                                    <div class="skill">
                                                        <img src="assets/images/technologies/Python.svg" alt="Python" class="skill-image grayscale">
                                                        <!-- <div class="skill-percentage">95%</div> -->
                                                    </div>
                                                    <p class="skill-name">Python</p>
                                                </div>
                                                <div class="col">
                                                    <div class="skill">
                                                        <img src="assets/images/technologies/PHP.svg" alt="PHP" class="skill-image grayscale">
                                                        <!-- <div class="skill-percentage">95%</div> -->
                                                    </div>
                                                    <p class="skill-name">PHP</p>
                                                </div>
                                                <div class="col">
                                                    <div class="skill">
                                                        <img src="assets/images/technologies/CSharp.svg" alt="C#" class="skill-image grayscale">
                                                        <!-- <div class="skill-percentage">95%</div> -->
                                                    </div>
                                                    <p class="skill-name">C#</p>
                                                </div>
                                                <div class="col">
                                                    <div class="skill">
                                                        <img src="assets/images/technologies/Java.svg" alt="Java" class="skill-image grayscale">
                                                        <!-- <div class="skill-percentage" data-percentage="95">95%</div> -->
                                                    </div>
                                                    <p class="skill-name">Java</p>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Tools -->
                                        <div class="tools skills-tab-content">
                                            <div class="row justify-content-center row-cols-2 row-cols-md-3 row-cols-lg-6 mt-4 gy-4 skills-grid">
                                                <div class="col">
                                                    <div class="skill">
                                                        <img src="assets/images/technologies/Postman.svg" alt="Postman" class="skill-image grayscale">
                                                        <!-- <div class="skill-percentage">95%</div> -->
                                                    </div>
                                                    <p class="skill-name">Postman</p>
                                                </div>
                                                <div class="col">
                                                    <div class="skill">
                                                        <img src="assets/images/technologies/Selenium.svg" alt="Selenium" class="skill-image grayscale">
                                                        <!-- <div class="skill-percentage">95%</div> -->
                                                    </div>
                                                    <p class="skill-name">Selenium</p>
                                                </div>
                                                <div class="col">
                                                    <div class="skill">
                                                        <img src="assets/images/technologies/GitHubActions.svg" alt="GitHub Actions" class="skill-image grayscale">
                                                        <!-- <div class="skill-percentage">95%</div> -->
                                                    </div>
                                                    <p class="skill-name">GitHub Actions</p>
                                                </div>
                                                <div class="col">
                                                    <div class="skill">
                                                        <img src="assets/images/technologies/Git.svg" alt="Git" class="skill-image grayscale">
                                                        <!-- <div class="skill-percentage">85%</div> -->
                                                    </div>
                                                    <p class="skill-name">Git</p>
                                                </div>
                                                <div class="col">
                                                    <div class="skill">
                                                        <img src="assets/images/technologies/Docker.svg" alt="Docker" class="skill-image grayscale">
                                                        <!-- <div class="skill-percentage">80%</div> -->
                                                    </div>
                                                    <p class="skill-name">Docker</p>
                                                </div>
                                                <!-- <div class="col">
                                                    <div class="skill">
                                                        <img src="assets/images/technologies/Kubernetes.svg" alt="Kubernetes" class="skill-image grayscale">
                                                        <div class="skill-percentage">80%</div>
                                                    </div>
                                                    <p class="skill-name">Kubernetes</p>
                                                </div> -->
                                                <div class="col">
                                                    <div class="skill">
                                                        <img src="assets/images/technologies/VirtualBox.svg" alt="VirtualBox" class="skill-image grayscale">
                                                        <!-- <div class="skill-percentage">95%</div> -->
                                                    </div>
                                                    <p class="skill-name">VirtualBox</p>
                                                </div>
                                                <div class="col">
                                                    <div class="skill">
                                                        <img src="assets/images/technologies/VSCode.svg" alt="VS Code" class="skill-image grayscale">
                                                        <!-- <div class="skill-percentage">90%</div> -->
                                                    </div>
                                                    <p class="skill-name">VS Code</p>
                                                </div>
                                                <div class="col">
                                                    <div class="skill">
                                                        <img src="assets/images/technologies/ChatGPT.svg" alt="ChatGPT" class="skill-image grayscale">
                                                        <!-- <div class="skill-percentage">85%</div> -->
                                                    </div>
                                                    <p class="skill-name">ChatGPT</p>
                                                </div>
                                                <div class="col">
                                                    <div class="skill">
                                                        <img src="assets/images/technologies/Figma.svg" alt="Figma" class="skill-image grayscale">
                                                        <!-- <div class="skill-percentage">95%</div> -->
                                                    </div>
                                                    <p class="skill-name">Figma</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="others skills-tab-content">
                                            <div class="row justify-content-center row-cols-2 row-cols-md-3 row-cols-lg-6 mt-4 gy-4 skills-grid">
                                                <div class="col">
                                                    <div class="skill">
                                                        <img src="assets/images/technologies/Devops.svg" alt="Devops" class="skill-image grayscale">
                                                        <!-- <div class="skill-percentage">85%</div> -->
                                                    </div>
                                                    <p class="skill-name">Devops</p>
                                                </div>
                                                <div class="col">
                                                    <div class="skill">
                                                        <img src="assets/images/technologies/Linux.svg" alt="Linux" class="skill-image grayscale">
                                                        <!-- <div class="skill-percentage">80%</div> -->
                                                    </div>
                                                    <p class="skill-name">Linux</p>
                                                </div>
                                                <div class="col">
                                                    <div class="skill">
                                                        <img src="assets/images/technologies/Bash.svg" alt="Bash Script" class="skill-image grayscale">
                                                        <!-- <div class="skill-percentage">80%</div> -->
                                                    </div>
                                                    <p class="skill-name">Bash Script</p>
                                                </div>
                                                <div class="col">
                                                    <div class="skill">
                                                        <img src="assets/images/technologies/Powershell.svg" alt="PowerShell" class="skill-image grayscale">
                                                        <!-- <div class="skill-percentage">80%</div> -->
                                                    </div>
                                                    <p class="skill-name">PowerShell</p>
                                                </div>
                                                <div class="col">
                                                    <div class="skill">
                                                        <img src="assets/images/technologies/MySQL.svg" alt="MySQL" class="skill-image grayscale">
                                                        <!-- <div class="skill-percentage">85%</div> -->
                                                    </div>
                                                    <p class="skill-name">MySQL</p>
                                                </div>
                                                <div class="col">
                                                    <div class="skill">
                                                        <img src="assets/images/technologies/PostgresSQL.svg" alt="PostgreSQL" class="skill-image grayscale">
                                                        <!-- <div class="skill-percentage">85%</div> -->
                                                    </div>
                                                    <p class="skill-name">PostgreSQL</p>
                                                </div>
                                                <div class="col">
                                                    <div class="skill">
                                                        <img src="assets/images/technologies/NetCore.svg" alt=".Net Core" class="skill-image grayscale">
                                                        <!-- <div class="skill-percentage">80%</div> -->
                                                    </div>
                                                    <p class="skill-name">.Net Core</p>
                                                </div>
                                                <div class="col">
                                                    <div class="skill">
                                                        <img src="assets/images/technologies/Jira.svg" alt="Jira" class="skill-image grayscale">
                                                        <!-- <div class="skill-percentage">80%</div> -->
                                                    </div>
                                                    <p class="skill-name">Jira</p>
                                                </div>
                                                <div class="col">
                                                    <div class="skill">
                                                        <img src="assets/images/technologies/Trello.svg" alt="Trello" class="skill-image grayscale">
                                                        <!-- <div class="skill-percentage">95%</div> -->
                                                    </div>
                                                    <p class="skill-name">Trello</p>
                                                </div>
                                                <div class="col">
                                                    <div class="skill">
                                                        <img src="assets/images/technologies/Unity.svg" alt="Unity" class="skill-image grayscale">
                                                        <!-- <div class="skill-percentage">80%</div> -->
                                                    </div>
                                                    <p class="skill-name">Unity</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row Box">
                                <div class="section-container padd-15">
                                    <div class="section-subtitle padd-15">
                                        <h3 class="title">Achievements</h3>
                                    </div>
                                    <div class="row">
                                        <div class="about-tabs" data-aos="fade-up">
                                            <span class="about-tab-item active" data-target=".certifications">Certifications</span>
                                            <span class="about-tab-item" data-target=".activities">Activities</span>
                                        </div>
                                    </div>
                                    <div class="certifications padd-15 about-tab-content active">
                                        <!-- <h3 class="title">Certifications</h3> -->
                                        <div class="row">
                                            <div class="timeline-box padd-15">
                                                <div class="timeline shadow-dark">
                                                    <!-- timeline item -->
                                                    <!-- <div class="timeline-item">
                                                            <div class="circle-dot"></div>
                                                            <h3 class="timeline-date">
                                                                <i class="fa fa-calendar"></i> in-progress
                                                            </h3>
                                                            <h4 class="timeline-title">Advanced Software Testing "Automated Testing"</h4>
                                                            <p class="timeline-text">This course focuses on advanced topics in software testing, 
                                                                with a primary emphasis on automation. 
                                                                It builds on my foundation in manual testing and provides hands-on training in 
                                                                automated testing tools and frameworks, API testing, 
                                                                scripting, and continuous testing in CI/CD pipelines. 
                                                                Designed to meet industry demands, this comprehensive program equips me 
                                                                with the technical skills and expertise to excel in modern quality assurance 
                                                                and secure advanced roles in the field of software testing.
                                                            </p>
                                                        </div> -->
                                                    <!-- timeline item -->
                                                    <div class="timeline-item" data-aos="fade-in">
                                                        <div class="circle-dot"></div>
                                                        <h3 class="timeline-date" data-aos="fade-in">
                                                            <i class="fa fa-calendar"></i> Dec 2024
                                                        </h3>
                                                        <h4 class="timeline-title" data-aos="fade-in">
                                                            <a href="assets/docs/QA Testing Certificate.pdf" class="link" target="_blank">
                                                                QA Software Testing
                                                            </a>
                                                        </h4>
                                                        <p class="timeline-text" data-aos="fade-in">
                                                            An in-depth 40-hour course offered by "The Hope International" company,
                                                            focusing on the core principles and practices of manual software testing.
                                                            This program covers theoretical and practical aspects of QA testing, including testing fundamentals,
                                                            brfecycle integration, test management, and tool support. <br>
                                                            The course emphasizes:
                                                            <br>• Understanding the necessity and principles of software testing.
                                                            <br>• Applying test techniques such as Black Box, White Box, and activities-based methods.
                                                            <br>• Mastering defect management and risk-based testing approaches.
                                                            <br>• Gaining insights into static testing, reviews, and tool-supported static analysis.
                                                            <br>• Learning the fundamentals of test planning, estimation, and monitoring processes.
                                                            <br>• Exploring the basics of API testing and an introduction to automated testing tools.
                                                            <br>
                                                            This course provides a strong foundation for manual testing while offering a glimpse into automation testing,
                                                            preparing participants for advanced roles in software quality assurance.
                                                        </p>
                                                    </div>
                                                    <!-- timeline item -->
                                                    <div class="timeline-item" data-aos="fade-in">
                                                        <div class="circle-dot"></div>
                                                        <h3 class="timeline-date" data-aos="fade-in">
                                                            <i class="fa fa-calendar"></i> August 2024
                                                        </h3>
                                                        <h4 class="timeline-title" data-aos="fade-in">
                                                            <a href="assets/docs/PMI-ACP Certificate.jpg" class="link" target="_blank">
                                                                PMI-ACP Exam Prep Course
                                                            </a>
                                                        </h4>
                                                        <p class="timeline-text" data-aos="fade-in">
                                                            Completed the PMI-ACP Exam Prep Course on
                                                            Udemy,
                                                            covering the 7 domains outlined in the PMI-ACP exam content.
                                                            The course included comprehensive practice exams, mock tests,
                                                            and review sessions,
                                                            with a focus on achieving a minimum score of 80%.
                                                            Successfully completed all requirements to earn 21 PDUs,
                                                            necessary for PMI-ACP certification application.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="activities padd-15 about-tab-content">
                                        <!-- <h3 class="title">Activities</h3> -->
                                        <div class="row">
                                            <div class="timeline-box padd-15">
                                                <div class="timeline shadow-dark">
                                                    <!-- timeline item -->
                                                    <div class="timeline-item" data-aos="fade-in">
                                                        <div class="circle-dot"></div>
                                                        <h3 class="timeline-date" data-aos="fade-in">
                                                            <i class="fa fa-calendar"></i> October 2024
                                                        </h3>
                                                        <h4 class="timeline-title" data-aos="fade-in">
                                                            <a href="assets/docs/NasaSpaceApp Certificate.pdf" class="link" target="_blank">
                                                                Creativity Award | NASA Space Apps Challenge
                                                            </a>
                                                        </h4>
                                                        <p class="timeline-text" data-aos="fade-in">
                                                            Awarded the 'Creativity Award' for
                                                            designing a 3D interactive game, <b>The Planetary
                                                                Explorer</b>using the Unity engine.
                                                            Targeted at elementary to high school students, the game
                                                            combines engaging gameplay with certificationsal content about
                                                            exoplanets.
                                                            By utilizing scientifically accurate data from NASA and Space
                                                            Agency Partner Resources, the game encourages both curiosity and
                                                            learning,
                                                            allowing players to explore distant worlds while expanding their
                                                            knowledge of the universe.
                                                            The game integrates accurate scientific data from NASA
                                                            resources, encouraging both learning and enjoyment.
                                                        </p>
                                                    </div>
                                                    <!-- timeline item -->
                                                    <div class="timeline-item" data-aos="fade-in">
                                                        <div class="circle-dot"></div>
                                                        <h3 class="timeline-date" data-aos="fade-in">
                                                            <i class="fa fa-calendar"></i> May 2024
                                                        </h3>
                                                        <h4 class="timeline-title" data-aos="fade-in">
                                                            <a href="assets/docs/AAU-XDT Second Place Certificate.jpg" class="link" target="_blank">
                                                                2nd Place | AAU-XDT 2024
                                                            </a>
                                                        </h4>
                                                        <p class="timeline-text" data-aos="fade-in">
                                                            A UI/UX competition for 3rd and 4th-year
                                                            students, where teams were tasked with designing a prototype for
                                                            an e-learning management system.
                                                            Our project successfully met complex requirements, standing out
                                                            for its clean user interface, smooth navigation, and intuitive
                                                            design, which contributed to our 2nd place win.
                                                        </p>
                                                    </div>
                                                    <!-- timeline item -->
                                                    <div class="timeline-item" data-aos="fade-in">
                                                        <div class="circle-dot"></div>
                                                        <h3 class="timeline-date" data-aos="fade-in">
                                                            <i class="fa fa-calendar"></i> Jan 2024
                                                        </h3>
                                                        <h4 class="timeline-title" data-aos="fade-in">
                                                            <a href="assets/docs/3Minutes Competition Certificate.jpg" class="link" target="_blank">
                                                                3rd Place | 3Minutes Competition
                                                            </a>
                                                        </h4>
                                                        <p class="timeline-text" data-aos="fade-in">
                                                            This competition challenged participants to
                                                            convince judges of their project idea in just 3 minutes.
                                                            Our project, UniBus, aimed to streamline transportation for
                                                            university students, drivers, and employees
                                                            by offering real-time tracking and scheduling features. The
                                                            judges were impressed
                                                            by how effectively we conveyed the core idea and innovative
                                                            solutions within the limited time, earning us 3rd place.
                                                        </p>
                                                    </div>
                                                    <!-- timeline item -->
                                                    <div class="timeline-item" data-aos="fade-in">
                                                        <div class="circle-dot"></div>
                                                        <h3 class="timeline-date" data-aos="fade-in">
                                                            <i class="fa fa-calendar"></i> Nov 2023
                                                        </h3>
                                                        <h4 class="timeline-title" data-aos="fade-in">
                                                            Participant | JCPC23
                                                        </h4>
                                                        <p class="timeline-text" data-aos="fade-in">
                                                            Participated in the JCPC23 (Jordanian
                                                            Collegiate Programming Contest),
                                                            a competitive programming contest aimed at university students
                                                            in Jordan.
                                                            The contest challenges participants with complex algorithmic
                                                            problems and promotes teamwork,
                                                            problem-solving, and programming skills. It serves as a stepping
                                                            stone for the regional ICPC contest.
                                                        </p>
                                                    </div>
                                                    <!-- timeline item -->
                                                    <div class="timeline-item" data-aos="fade-in">
                                                        <div class="circle-dot"></div>
                                                        <h3 class="timeline-date" data-aos="fade-in">
                                                            <i class="fa fa-calendar"></i> May 2023
                                                        </h3>
                                                        <h4 class="timeline-title" data-aos="fade-in">
                                                            <a href="assets/docs/AAU-PC 2023 First Solve Certificate.jpg" class="link" target="_blank">
                                                                First Team To Solve | AAU-PC 2023
                                                            </a>
                                                        </h4>
                                                        <p class="timeline-text" data-aos="fade-in">
                                                            A problem-solving competition held annually in May, designed to
                                                            simulate JCPC and ICPC contests.
                                                            It serves as a valuable training ground for competitive
                                                            programming. Our team placed 4th and was the first to solve one
                                                            of the problems, showcasing our problem-solving skills and time
                                                            management.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- About Section End -->
            <!-- Service Section Start -->
            <section class="service section" id="services">
                <div class="container">
                    <div class="row">
                        <div class="section-title padd-15" data-aos="fade-in">
                            <h2>Services</h2>
                        </div>
                    </div>
                    <div class="row">
                        <!-- Service Item Start -->
                        <div class="service-item padd-15">
                            <div class="service-item-inner" data-aos="fade-in">
                                <div class="icon">
                                    <i class="fa fa-bug"></i>
                                </div>
                                <h4>Software Testing & QA</h4>
                                <p>
                                    Ensuring software reliability with automated testing.
                                    Using industry-standard tools to catch issues early, streamline workflows, and improve efficiency.
                                    My focus is on delivering high-quality, bug-free releases.
                                </p>
                            </div>
                        </div>
                        <!-- Service Item End -->
                        <!-- Service Item Start -->
                        <div class="service-item padd-15">
                            <div class="service-item-inner" data-aos="fade-in">
                                <div class="icon">
                                    <i class="fa fa-globe"></i>
                                </div>
                                <h4>Web Development</h4>
                                <p>
                                    Building responsive, scalable web apps that provide seamless user experiences.
                                    I combine front-end and back-end technologies
                                    to create reliable solutions that perform efficiently and meet both user and business needs.
                                </p>
                            </div>
                        </div>
                        <!-- Service Item End -->
                        <!-- Service Item Start -->
                        <div class="service-item padd-15">
                            <div class="service-item-inner" data-aos="fade-in">
                                <div class="icon">
                                    <i class="fa fa-paint-brush"></i>
                                </div>
                                <h4>UI/UX Design</h4>
                                <p>
                                    Designing intuitive interfaces that prioritize user experience.
                                    I focus on creating smooth, clean, interactive designs through wireframing,
                                    prototyping, and testing to ensure usability.
                                </p>
                            </div>
                        </div>
                        <!-- Service Item End -->
                        <!-- Service Item Start -->
                        <div class="service-item padd-15">
                            <div class="service-item-inner" data-aos="fade-in">
                                <div class="icon">
                                    <i class="fa fa-solid fa-gears"></i>
                                </div>
                                <h4>DevOps & CI/CD</h4>
                                <p>
                                    Streamlining development with CI/CD pipelines to automate workflows.
                                    I focus on increasing collaboration, accelerating software delivery,
                                    and maintaining stability and quality through automated processes.
                                </p>
                            </div>
                        </div>
                        <!-- Service Item End -->
                        <!-- Service Item Start -->
                        <div class="service-item padd-15">
                            <div class="service-item-inner" data-aos="fade-in">
                                <div class="icon">
                                    <i class="fa fa-puzzle-piece"></i>
                                </div>
                                <h4>Problem-Solving & Optimization</h4>
                                <p>
                                    Developing efficient algorithms and optimized solutions
                                    to enhance system performance, scalability, and reliability.
                                    I tackle challenges with creative and practical approaches to deliver impactful results.
                                </p>
                            </div>
                        </div>
                        <!-- Service Item End -->
                        <!-- Service Item Start -->
                        <div class="service-item padd-15">
                            <div class="service-item-inner" data-aos="fade-in">
                                <div class="icon">
                                    <i class="fa fa-users"></i>
                                </div>
                                <h4>Project Management</h4>
                                <p>
                                    Leading teams with Agile methods to ensure timely and high-quality project delivery.
                                    I facilitate sprints, encourage communication,
                                    and use tools like Jira to ensure everyone stays aligned and focused on goals.
                                </p>
                            </div>
                        </div>
                        <!-- Service Item End -->
                    </div>
                </div>
            </section>
            <!-- Service Section End -->
            <!-- Portfolio Section Start -->
            <section class="portfolio section" id="portfolio">
                <div class="container">
                    <div class="row">
                        <div class="section-title padd-15" data-aos="fade-in">
                            <h2>Portfolio</h2>
                        </div>
                    </div>
                    <!-- Portfolio Filter -->
                    <div class="portfolio-filter" data-aos="fade-up">

                        <span class="filter-btn active" data-filter="all">All Projects</span>
                        <span class="filter-btn" data-filter="web">Web Apps</span>
                        <!-- <span class="filter-btn" data-filter="ai">AI/ML</span> -->
                        <!-- <span class="filter-btn" data-filter="desktop">Desktop Apps</span> -->
                        <span class="filter-btn" data-filter="iot">IoT</span>
                        <span class="filter-btn" data-filter="game">Games</span>
                        <!-- <span class="filter-btn" data-filter="mobile">Mobile</span> -->
                    </div>
                    <!-- Portfolio Grid -->
                    <div class="portfolio-grid" data-aos="slide-up">

                        <!-- Project 1 - PackTrack -->
                        <div class="portfolio-item" data-category="web" data-github="https://github.com/rasha-2k/packtrack" data-live="#" data-mediatype="image" data-mediasrc="assets/images/website-background.jpg" data-aos="fade-in" data-aos-delay="100">
                            <div class="portfolio-media">
                                <img src="assets/images/website-background.jpg" alt="PackTrack Web App">
                                <div class="portfolio-overlay">
                                    <div class="portfolio-overlay-content">
                                        <button class="view-project-btn" data-project="packtrack">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="portfolio-content">
                                <span class="project-category">Full-Stack Web App</span>
                                <h3 class="project-title">
                                    <a href="https://github.com/rasha-2k/packtrack" target="_blank" class="link"><i class="fa-solid fa-truck"></i> PackTrack</a>
                                </h3>
                                <p class="project-description" data-aos="fade-in">
                                    A courier management platform offering real-time package tracking and role-based dashboards for users and admins. It delivers analytics that streamline operations, and improve overall shipping efficiency. </p>
                                <ul class="project-tags" data-aos="slide-up">
                                    <li><a>PHP</a></li>
                                    <li><a>MySQL</a></li>
                                    <li><a>API Integration</a></li>
                                    <li><a>JWT Auth</a></li>
                                    <li><a>Docker</a></li>
                                    <li><a>Chart.js</a></li>
                                    <li><a>Tailwind CSS</a></li>
                                </ul>
                            </div>
                        </div>

                        <!-- Project 2 - Smart Alert System -->
                        <div class="portfolio-item" data-category="iot" data-github="https://github.com/rasha-2k/Arduino-Smart-Alert-System" data-live="#" data-mediatype="image" data-mediasrc="https://t4.ftcdn.net/jpg/03/99/12/51/360_F_399125183_HUy4uv9tzzMq5Kauk1wCl0WVyhVqomLv.jpg" data-aos="fade-in" data-aos-delay="100">
                            <div class="portfolio-media">
                                <img src="https://t4.ftcdn.net/jpg/03/99/12/51/360_F_399125183_HUy4uv9tzzMq5Kauk1wCl0WVyhVqomLv.jpg" alt="Smart Alert System">
                                <div class="portfolio-overlay">
                                    <div class="portfolio-overlay-content">
                                        <button class="view-project-btn" data-project="arduino-smart-alert-system">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="portfolio-content">
                                <span class="project-category">IoT Project</span>
                                <h3 class="project-title">
                                    <a href="https://github.com/rasha-2k/Arduino-Smart-Alert-System" target="_blank" class="link">
                                        <i class="fa-solid fa-microchip"></i> Smart Alert System
                                    </a>
                                </h3>
                                <p class="project-description" data-aos="fade-in">
                                    An Arduino-based safety system combining ultrasonic, PIR, and water sensors to detect motion, proximity, and flooding. Provides real-time alerts using LEDs and a buzzer with condition-based feedback logic. </p>
                                <ul class="project-tags">
                                    <li><a>Arduino</a></li>
                                    <li><a>PIR Sensor</a></li>
                                    <li><a>Ultrasonic</a></li>
                                    <li><a>Water Sensor</a></li>
                                </ul>
                            </div>
                        </div>

                        <!-- Project 3 - The Planetary Explorer -->
                        <div class="portfolio-item" data-category="game" data-github="" data-live="#" data-mediatype="video" data-mediasrc="assets/videos/the planetary explorer.mp4" data-aos="fade-in" data-aos-delay="100">
                            <div class="portfolio-media">
                                <video autoplay muted loop playsinline>
                                    <source src="assets/videos/the planetary explorer.mp4" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                                <div class="portfolio-overlay">
                                    <div class="portfolio-overlay-content">
                                        <button class="view-project-btn" data-project="planetary-explorer">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="portfolio-content">
                                <span class="project-category">3D Game</span>
                                <h3 class="project-title">
                                    <a target="_blank" class="link">
                                        <i class="fa-solid fa-shuttle-space"></i> The Planetary Explorer
                                    </a>
                                </h3>
                                <p class="project-description" data-aos="fade-in">
                                    Planetary Explorer is a 3D space adventure game developed in Unity and C# that aims to provide players with an immersive experience of exploring exoplanet environments. Utilizing dynamic low-gravity physics and realistic terrains based on verified NASA resources, the game challenges players to navigate obstacles, solve puzzles, and unlock essential tools.
                                </p>
                                <ul class="project-tags">
                                    <li><a>Unity</a></li>
                                    <li><a>C#</a></li>
                                    <li><a>3D Environment Design</a></li>
                                    <li><a>Low-Gravity Simulation</a></li>
                                </ul>
                            </div>
                        </div>

                        <!-- Project 4 - Sample AI Project -->
                        <!-- <div class="portfolio-item" data-category="ai" data-github="#" data-live="#" data-mediatype="image" data-mediasrc="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop">
                            <div class="portfolio-media">
                                <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop" alt="AI Image Recognition">
                                <div class="portfolio-overlay">
                                    <div class="portfolio-overlay-content">
                                        <button class="view-project-btn" data-project="ai-recognition">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="portfolio-content">
                                <span class="project-category">AI/Machine Learning</span>
                                <h3 class="project-title">
                                    <a target="_blank" class="link">Smart Image Recognition System</a>
                                </h3>
                                <p class="project-description">
                                    An advanced AI-powered image recognition system using deep learning techniques to classify and analyze images with high accuracy. Features real-time processing, batch analysis, and custom model training capabilities for various industries.
                                </p>
                                <ul class="project-tags">
                                    <li><a>Python</a></li>
                                    <li><a>TensorFlow</a></li>
                                    <li><a>OpenCV</a></li>
                                    <li><a>FastAPI</a></li>
                                </ul>
                            </div>
                        </div> -->
                    </div>
                </div>
            </section>
            <!-- Project Modal -->
            <div class="modal-overlay" id="projectModal">
                <div class="modal-container">
                    <div class="modal-header">
                        <video class="modal-media" id="modalMedia" autoplay muted loop playsinline style="display: none;">
                            <source id="modalVideoSource" src="" type="video/mp4">
                        </video>
                        <img class="modal-media" id="modalImage" src="" alt="" style="display: none;">
                        <button class="modal-close" id="modalClose">x</button>
                    </div>
                    <div class="modal-content">
                        <span class="modal-category" id="modalCategory"></span>
                        <h2 class="modal-title" id="modalTitle"><a href="" target="_blank" class="link"></a></h2>
                        <p class="modal-description" id="modalDescription"></p>
                        <ul class="modal-tags" id="modalTags"></ul>
                        <div class="modal-actions">
                            <a href="#" class="modal-btn secondary" id="modalGithubBtn" target="_blank">
                                <i class="fa-solid fa-link"></i> View on GitHub
                                <span class="arrow-container">
                                    <i class="fa-solid fa-arrow-up arrowone"></i>
                                    <i class="fa-solid fa-arrow-up arrowtwo"></i>
                                </span>
                            </a>
                            <a href="#" class="modal-btn secondary" id="modalLiveBtn" target="_blank">
                                <i class="fa-solid fa-meteor"></i> Live Demo
                                <span class="arrow-container">
                                    <i class="fa-solid fa-arrow-up arrowone"></i>
                                    <i class="fa-solid fa-arrow-up arrowtwo"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Portfolio Section End -->
            <!-- Contact Section Start -->
            <section class="contact section" id="contact">
                <div class="container">
                    <div class="row">
                        <div class="section-title padd-15" data-aos="fade-in">
                            <h2>Contact Me</h2>
                        </div>
                    </div>
                    <h3 class="contact-title padd-15">Do you have any questions ?</h3>
                    <h4 class="contact-sub-title padd-15">I'M AT YOUR SERVICES</h4>
                    <div class="row">
                        <!-- Contact info item start -->
                        <div class="contact-info-item padd-15" data-aos="fade-in" data-aos-delay="100">
                            <div class="icon"><i class="fab fa-whatsapp"></i></div>
                            <h4>Call Me On</h4>
                            <p><a href="tel:+962-78-127-7089" target="_blank" class="link">+962 781277089</a></p>
                        </div>
                        <!-- Contact info item end -->
                        <!-- Contact info item start -->
                        <div class="contact-info-item padd-15" data-aos="fade-in" data-aos-delay="100">
                            <div class="icon"><i class="fa fa-map-marker-alt"></i></div>
                            <h4>Location</h4>
                            <p><a class="link">Amman</a></p>
                        </div>
                        <!-- Contact info item end -->
                        <!-- Contact info item start -->
                        <div class="contact-info-item padd-15" data-aos="fade-in" data-aos-delay="100">
                            <div class="icon"><i class="fa fa-envelope"></i></div>
                            <h4>Email</h4>
                            <p><a href="mailto:info@rashaalsaleh.com" target="_blank"
                                    class="link">info@rashaalsaleh.com</a></p>
                        </div>
                        <!-- Contact info item end -->
                        <!-- Contact info item start -->
                        <div class="contact-info-item padd-15" data-aos="fade-in" data-aos-delay="100">
                            <div class="icon"><i class="fab fa-linkedin"></i></div>
                            <h4>LinkedIn</h4>
                            <p><a href="https://www.linkedin.com/in/rasha-alsaleh/" target="_blank" class="link">Rasha
                                    Alsaleh</a></p>
                        </div>
                        <!-- Contact info item end -->
                    </div>
                    <h3 class="contact-title padd-15">Get In Touch</h3>
                    <h4 class="contact-sub-title padd-15">I'M VERY RESPONSIVE TO MESSAGES</h4>
                    <!-- Contact Form -->
                    <div class="row">
                        <div class="contact-form padd-15" data-aos="fade-up">
                            <form action="mail/contact" method="POST" data-aos="fade-in">
                                <input type="hidden" name="csrf_token" value="<?php echo htmlspecialchars(generateCSRFToken()); ?>">
                                <div class="row">
                                    <div class="form-item col-6 padd-15">
                                        <div class="form-group">
                                            <input type="text" name="name" class="form-control" placeholder="Name" required>
                                        </div>
                                    </div>
                                    <div class="form-item col-6 padd-15">
                                        <div class="form-group">
                                            <input type="email" name="email" class="form-control" placeholder="Email" required>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-item col-12 padd-15">
                                        <div class="form-group">
                                            <input type="text" name="subject" class="form-control" placeholder="Subject" required>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-item col-12 padd-15">
                                        <div class="form-group">
                                            <textarea name="message" class="form-control" placeholder="Message" required></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="control-group" style="color: var(--text-black-900);">
                                    <label class="agreeCheckbox-label">
                                        <input type="checkbox" class="agreeCheckbox" id="agreeCheckbox" onchange="startCountdown()" required>I agree to the terms and conditions
                                    </label>
                                </div>
                                <div id="countdown" style="color:var(--text-black-700); display: none; font-weight: bold;"></div> <!-- Countdown message -->
                                <div class="row">
                                    <div class="buttons col-12 padd-15" style="margin-top:10px">
                                        <button type="submit" class="btn" id="sendMessageButton" disabled><b>Send Message</b></button> <!-- Button is disabled initially -->
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Contact Section End -->
        </div>
        <!-- Main Content End -->
    </div>
    <!-- Main Container End -->
    <!-- Back-to-Top Button -->
    <div id="backToTop">
        <svg class="progress-ring" width="60" height="60">
            <circle class="progress-ring-circle" cx="30" cy="30" r="28" stroke-width="4"></circle>
            <circle class="progress-ring-progress" cx="30" cy="30" r="28" stroke-width="4"></circle>
        </svg>
        <i class="fa fa-arrow-up"></i>
    </div>
    <!-- Style Switcher Start -->
    <div class="style-switcher">
        <div class="style-switcher-toggler s-icon">
            <i class="fas fa-cog fa-spin "></i>
        </div>
        <div class="day-night s-icon">
            <i class="fas "></i>
        </div>
        <h4>Theme Colors</h4>
        <div class="colors">
            <span class="color-1" onclick="setActiveStyle('color-1')"></span>
            <span class="color-2" onclick="setActiveStyle('color-2')"></span>
            <span class="color-3" onclick="setActiveStyle('color-3')"></span>
            <span class="color-4" onclick="setActiveStyle('color-4')"></span>
            <span class="color-5" onclick="setActiveStyle('color-5')"></span>
        </div>
    </div>
    <!-- Style Switcher End -->
    <!-- JS Files -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.1.0/typed.umd.js"
        integrity="sha512-+2pW8xXU/rNr7VS+H62aqapfRpqFwnSQh9ap6THjsm41AxgA0MhFRtfrABS+Lx2KHJn82UOrnBKhjZOXpom2LQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="assets/js/script.js"></script>
    <script src="assets/js/style-switcher.js"></script>
    <!-- AOS JS -->
    <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
    <script>
        AOS.init({
            duration: 800,
            easing: 'ease-out',
            once: false,
            offset: 150,
            delay: 100,
            anchorPlacement: 'center-bottom',
        });
    </script>

    <script>
        function startCountdown() {
            var agreeCheckbox = document.getElementById("agreeCheckbox");
            var countdown = document.getElementById("countdown");
            var button = document.getElementById("sendMessageButton");

            if (agreeCheckbox.checked) {
                countdown.style.display = "block";
                var count = 3;
                button.disabled = true;
                var interval = setInterval(function() {
                    countdown.textContent = "You can submit the email after " + count + "s";
                    count--;
                    if (count < 0) {
                        clearInterval(interval);
                        countdown.textContent = "You can submit right now!";
                        button.disabled = false; // Enable the button after countdown
                    }
                }, 1000);
            } else {
                countdown.style.display = "none";
                countdown.textContent = "";
                button.disabled = true; // Disable the button if unchecked
            }
        }
    </script>
</body>

</html>