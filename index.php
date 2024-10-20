
<?php
session_start();

function generateCSRFToken() {
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
    <meta name="description"
        content="Rasha Alsaleh's portfolio - Full-stack Developer and Software Engineer based in Amman, Jordan.">
    <meta name="keywords" content="Rasha Alsaleh, Software Engineer, Full-stack Developer, Portfolio, Amman, Jordan">
    <link rel="icon" href="icon.png" type="image/png">
    <title>Rasha's Portfolio</title>
    <!-- CSS Files -->
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/color-1.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Londrina+Shadow&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Slabo+27px&display=swap"
        rel="stylesheet">
    <!-- Style Switcher -->
    <link rel="stylesheet" href="assets/css/color-1.css" class="alternate-style" title="color-1" disabled>
    <link rel="stylesheet" href="assets/css/color-2.css" class="alternate-style" title="color-2" disabled>
    <link rel="stylesheet" href="assets/css/color-3.css" class="alternate-style" title="color-3" disabled>
    <link rel="stylesheet" href="assets/css/color-4.css" class="alternate-style" title="color-4" disabled>
    <link rel="stylesheet" href="assets/css/color-5.css" class="alternate-style" title="color-5" disabled>
    <link rel="stylesheet" href="assets/css/style-switcher.css">
    <!-- upload icon -->
 
    <link rel="apple-touch-icon" sizes="57x57" href="./assets/img/icon black.png">
    <link rel="apple-touch-icon" sizes="60x60" href="./assets/img/icon black.png">
    <link rel="apple-touch-icon" sizes="72x72" href="./assets/img/icon black.png">
    <link rel="apple-touch-icon" sizes="76x76" href="./assets/img/icon black.png">
    <link rel="apple-touch-icon" sizes="114x114" href="./assets/img/icon black.png">
    <link rel="apple-touch-icon" sizes="120x120" href="./assets/img/icon black.png"> 
    <link rel="apple-touch-icon" sizes="144x144" href="./assets/img/icon black.png">
    <link rel="apple-touch-icon" sizes="152x152" href="./assets/img/icon black.png">
    <link rel="apple-touch-icon" sizes="180x180" href="./assets/img/icon black.png">
    <link rel="icon" href="./assets/img/icon black.png" type="image/png">
</head>

<body>
    <!-- Main Container Start -->
    <div class="main-container">
        <!-- Aside Start -->
        <div class="aside">
            <div class="logo">
                <a href="#home"><img src="assets/img/logo black.png" alt="Logo"></a>
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
            <section class="home active section" id="home">
                <div class="container">
                    <div class="row Box shadowEffect">
                        <div class="home-info padd-15">
                            <h3 class="hello">Hello, I'm <span class="name">Rasha Alsaleh</span></h3>
                            <h3 class="my-profession">A <span class="typing">Full-stack Developer</span></h3>
                            <p>I'm a Software Engineering Student from Amman, Jordan</p>
                            <br><br>
                            <a href="assets/resume/Rasha Alsaleh.docx" class="btn"><b>Download CV</b></a>
                        </div>
                        <div class="home-img padd-15">
                            <img src="assets/img/pic.jpg" alt="Profile Picture">
                        </div>
                    </div>
                </div>
            </section>
            <!-- Home Section End -->
            <!-- About Section Start -->
            <section class="about section" id="about">
                <div class="container">
                    <div class="row">
                        <div class="section-title padd-15">
                            <h2>About Me</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="about-content padd-15">
                                <div class="row Box">
                                    <div class="about-text padd-15">
                                        <h3>I'm Rasha Alsaleh and <span>Software Engineer</span></h3>
                                        <p style="text-align: justify;">
                                            I am a passionate and driven software engineering student at Amman Arab
                                            University,
                                            currently in my third year. My journey in the tech world is fueled by a love
                                            for
                                            problem-solving,
                                            creativity, and continuous learning. I have actively participated in various
                                            competitions,
                                            earning accolades for my innovative ideas and technical skills. My focus is
                                            on
                                            mobile app development,
                                            where I am exploring cross-platform solutions using Flutter. Additionally,
                                            I have a strong foundation in C++, Java, and C# with .NET.<br>
                                            I am constantly seeking new challenges that will push me to grow as a
                                            developer
                                            and a problem solver.
                                            My goal is to contribute to impactful projects that improve people’s lives
                                            through technology.
                                        </p>
                                    </div>
                                </div>
                                <div class="row Box">
                                    <div class="personal-info padd-15">
                                        <div class="row">
                                            <div class="info-item padd-15">
                                                <p>Birthday : <span>5 Feb 2005</span></p>
                                            </div>
                                            <div class="info-item padd-15">
                                                <p>Age : <span>19</span></p>
                                            </div>
                                            <div class="info-item padd-15">
                                                <p>LinkedIn : <span><a href="https://www.linkedin.com/in/rasha-alsaleh/"
                                                            target="_blank" class="link">Rasha Alsaleh</a></span></p>
                                            </div>
                                            <div class="info-item padd-15">
                                                <p>Email : <span><a href="mailto:info@rashaalsaleh.com" target="_blank"
                                                            class="link">info@rashaalsaleh.com</a></span></p>
                                            </div>
                                            <div class="info-item padd-15">
                                                <p>Degree : <span>Software Engineering</span></p>
                                            </div>
                                            <div class="info-item padd-15">
                                                <p>Phone : <span><a href="tel:+962-78-127-7089" target="_blank"
                                                            class="link">+962 781277089</a></span></p>
                                            </div>
                                            <div class="info-item padd-15">
                                                <p>City : <span>Amman</span></p>
                                            </div>
                                            <div class="info-item padd-15">
                                                <p>Freelance : <span>Available</span></p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="buttons padd-15">
                                                <a href="#contact" data-section-index="1" class="btn hire-me"><b>Hire
                                                        Me</b>
                                                    <span class="arrow-container">
                                                        <i class="fa-solid fa-arrow-up arrowone"></i>
                                                        <i class="fa-solid fa-arrow-up arrowtwo"></i>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="skills padd-15">
                                        <div class="row">
                                            <div class="skill-item padd-15">
                                                <h5>C++</h5>
                                                <div class="progress">
                                                    <div class="progress-in" style="width: 88%;"></div>
                                                    <div class="skill-percent">88%</div>
                                                </div>
                                            </div>
                                            <div class="skill-item padd-15">
                                                <h5>Java</h5>
                                                <div class="progress">
                                                    <div class="progress-in" style="width: 79%;"></div>
                                                    <div class="skill-percent">79%</div>
                                                </div>
                                            </div>
                                            <div class="skill-item padd-15">
                                                <h5>Flutter</h5>
                                                <div class="progress">
                                                    <div class="progress-in" style="width: 22%;"></div>
                                                    <div class="skill-percent">22%</div>
                                                </div>
                                            </div>
                                            <div class="skill-item padd-15">
                                                <h5>C#</h5>
                                                <div class="progress">
                                                    <div class="progress-in" style="width: 48%;"></div>
                                                    <div class="skill-percent">48%</div>
                                                </div>
                                            </div>
                                            <div class="skill-item padd-15">
                                                <h5>Database</h5>
                                                <div class="progress">
                                                    <div class="progress-in" style="width: 53%;"></div>
                                                    <div class="skill-percent">53%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <div class="row Box">
                                <div class="row">
                                    <div class="about-tabs">
                                        <span class="tab-item active outer-shadow" data-target=".experience">Activities</span>
                                        <span class="tab-item" data-target=".education">Certifications</span>
                                    </div>
                                </div>
                                <div class="experience padd-15 tab-content active">
                                    <!-- <h3 class="title">Activities</h3> -->
                                    <div class="row">
                                        <div class="timeline-box padd-15">
                                            <div class="timeline shadow-dark">
                                                <!-- timeline item -->
                                                <div class="timeline-item">
                                                    <div class="circle-dot"></div>
                                                    <h3 class="timeline-date">
                                                        <i class="fa fa-calendar"></i> October 2024
                                                    </h3>
                                                    <h4 class="timeline-title"><a href="assets/docs/NasaSpaceApp Certificate.pdf" class="link" target="_blank">NASA Space Apps Challenge - Creativity
                                                        Award</a></h4>
                                                    <p class="timeline-text">Awarded the 'Creativity Award' for
                                                        designing a 3D interactive game, <b
                                                            style="color: var(--skin-color);">The Planetary
                                                            Explorer</b>using the Unity engine.
                                                        Targeted at elementary to high school students, the game
                                                        combines engaging gameplay with educational content about
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
                                                <div class="timeline-item">
                                                    <div class="circle-dot"></div>
                                                    <h3 class="timeline-date">
                                                        <i class="fa fa-calendar"></i> May 2024
                                                    </h3>
                                                    <h4 class="timeline-title"><a href="assets/docs/AAU-XDT Second Place Certificate.jpg" class="link" target="_blank">2nd Place | AAU-XDT 2024</a></h4>
                                                    <p class="timeline-text">A UI/UX competition for 3rd and 4th-year
                                                        students, where teams were tasked with designing a prototype for
                                                        an e-learning management system.
                                                        Our project successfully met complex requirements, standing out
                                                        for its clean user interface, smooth navigation, and intuitive
                                                        design, which contributed to our 2nd place win.
                                                    </p>
                                                </div>
                                                <!-- timeline item -->
                                                <div class="timeline-item">
                                                    <div class="circle-dot"></div>
                                                    <h3 class="timeline-date">
                                                        <i class="fa fa-calendar"></i> Jan 2024
                                                    </h3>
                                                    <h4 class="timeline-title"><a href="assets/docs/3Minutes Competition Certificate.jpg" class="link" target="_blank">3rd Place | 3Minutes Competition</a></h4>
                                                    <p class="timeline-text">This competition challenged participants to
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
                                                <div class="timeline-item">
                                                    <div class="circle-dot"></div>
                                                    <h3 class="timeline-date">
                                                        <i class="fa fa-calendar"></i> Nov 2023
                                                    </h3>
                                                    <h4 class="timeline-title">Participant | JCPC23</h4>
                                                    <p class="timeline-text"> Participated in the JCPC23 (Jordanian
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
                                                <div class="timeline-item">
                                                    <div class="circle-dot"></div>
                                                    <h3 class="timeline-date">
                                                        <i class="fa fa-calendar"></i> May 2023
                                                    </h3>
                                                    <h4 class="timeline-title"><a href="assets/docs/AAU-PC 2023 First Solve Certificate.jpg" class="link" target="_blank">First Team To Solve | AAU-PC 2023</a></h4>
                                                    <p class="timeline-text">
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
                                <div class="education padd-15 tab-content">
                                    <!-- <h3 class="title">Certifications</h3> -->
                                    <div class="row">
                                        <div class="timeline-box padd-15">
                                            <div class="timeline shadow-dark">
                                                <!-- timeline item -->
                                                <div class="timeline-item">
                                                    <div class="circle-dot"></div>
                                                    <h3 class="timeline-date">
                                                        <i class="fa fa-calendar"></i> in-progress
                                                    </h3>
                                                    <h4 class="timeline-title">QA Software-Testing</h4>
                                                    <p class="timeline-text">A comprehensive 40-hour QA Testing course
                                                        with "The Hope International" company.
                                                        The course covers theoretical and practical aspects of software
                                                        testing, including test management, tools support,
                                                        API testing, automation testing tools, and more. It enhances my
                                                        skills in quality assurance methodologies and testing
                                                        strategies.
                                                    </p>
                                                </div>
                                                <!-- timeline item -->
                                                <div class="timeline-item">
                                                    <div class="circle-dot"></div>
                                                    <h3 class="timeline-date">
                                                        <i class="fa fa-calendar"></i> August 2024
                                                    </h3>
                                                    <h4 class="timeline-title"><a href="assets/docs/PMI-ACP Certificate.jpg" class="link" target="_blank">PMI-ACP Exam Prep Course</a></h4>
                                                    <p class="timeline-text">Completed the PMI-ACP Exam Prep Course on
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
                        <div class="section-title padd-15">
                            <h2>Services</h2>
                        </div>
                    </div>
                    <div class="row">
                        <!-- Service Item Start -->
                        <div class="service-item padd-15">
                            <div class="service-item-inner">
                                <div class="icon">
                                    <i class="fa fa-mobile-alt"></i>
                                </div>
                                <h4>App Development</h4>
                                <p>Developing cross-platform mobile applications using Flutter,
                                    creating seamless and efficient apps for both Android and iOS platforms.
                                    Focused on providing responsive design and smooth user experience.
                                </p>
                            </div>
                        </div>
                        <!-- Service Item End -->
                        <!-- Service Item Start -->
                        <div class="service-item padd-15">
                            <div class="service-item-inner">
                                <div class="icon">
                                    <i class="fa fa-globe"></i>
                                </div>
                                <h4>Web Development</h4>
                                <p>Building modern, responsive, and user-friendly websites.
                                    Specializing in front-end technologies like HTML, CSS, and JavaScript,
                                    along with back-end development using PHP.
                                </p>
                            </div>
                        </div>
                        <!-- Service Item End -->
                        <!-- Service Item Start -->
                        <div class="service-item padd-15">
                            <div class="service-item-inner">
                                <div class="icon">
                                    <i class="fa fa-pencil-ruler"></i>
                                </div>
                                <h4>UI/UX Design</h4>
                                <p>Creating intuitive and visually appealing user interfaces.
                                    Focused on user experience design, wireframing, and prototyping,
                                    ensuring smooth interactions for both mobile and web applications.
                                </p>
                            </div>
                        </div>
                        <!-- Service Item End -->
                        <!-- Service Item Start -->
                        <div class="service-item padd-15">
                            <div class="service-item-inner">
                                <div class="icon">
                                    <i class="fa fa-bug"></i>
                                </div>
                                <h4>Software Testing</h4>
                                <p>Ensuring the highest quality software through thorough testing,
                                    including unit testing, API testing, and automated testing tools.
                                    Experienced with industry-standard tools such as JIRA, Postman, and Fiddler.
                                </p>
                            </div>
                        </div>
                        <!-- Service Item End -->
                        <!-- Service Item Start -->
                        <div class="service-item padd-15">
                            <div class="service-item-inner">
                                <div class="icon">
                                    <i class="fa fa-cogs"></i>
                                </div>
                                <h4>Problem-Solving & Algorithms</h4>
                                <p>Proficient in developing efficient algorithms and solving complex problems.
                                    Participated in various programming competitions like AAU-PC and JCPC,
                                    consistently demonstrating strong analytical skills.
                                </p>
                            </div>
                        </div>
                        <!-- Service Item End -->
                        <!-- Service Item Start -->
                        <div class="service-item padd-15">
                            <div class="service-item-inner">
                                <div class="icon">
                                    <i class="fa fa-sync-alt"></i>
                                </div>
                                <h4>Project Management (Agile)</h4>
                                <p>mplementing Agile methodologies in project management,
                                    leading development teams through sprints and iterations to deliver high-quality
                                    products.
                                    Experienced in Jira and managing cross-functional teams.
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
                        <div class="section-title padd-15">
                            <h2>Portfolio</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="portfolio-heading padd-15">
                            <h2 style="display: none;">My Last Projects : </h2>
                        </div>
                    </div>
                    <div class="row Box">
                        <!-- portfolio item start -->
                        <!-- <div class="portfolio-item padd-15">
                            <div class="portfolio-item-inner shadow-dark">
                                <div class="portfolio-img">
                                    <video autoplay muted loop width="100%" playsinline>
                                        <source src="assets/img/the planetary explorer.mp4" type="video/mp4">
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div> -->
                        <!-- portfolio item end -->
                        <!-- portfolio item start -->
                        <div class="row">
                            <div class="portfolio-item padd-15">
                                <div class="portfolio-item-inner shadow-dark">
                                    <!-- Project Video/Image -->
                                    <div class="portfolio-img">
                                        <video autoplay muted loop width="100%" playsinline>
                                            <source src="assets/img/the planetary explorer.mp4" type="video/mp4">
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                    <!-- Project Content -->
                                    <div class="project-left-content">
                                        <div class="project_content">
                                            <span class="subtitle">3D Game</span>
                                            <h3 class="title">
                                                <a href="https://github.com/rasha-2k" target="_blank">The Planetary Explorer</a>
                                            </h3>
                                            <p class="desc">Planetary Explorer is a 3D space adventure game developed in Unity and C# 
                                                that aims to provide players with an immersive experience of exploring exoplanet environments. 
                                                Utilizing dynamic low-gravity physics and realistic terrains based on verified NASA resources, 
                                                the game challenges players to navigate obstacles, solve puzzles, and unlock essential tools, 
                                                enhancing their exploration journey across multiple planets.
                                            </p>
                                        </div>
                                        <!-- Project Tags/Technologies Used -->
                                        <ul class="project_tags">
                                            <li><a href="#">Unity</a></li>
                                            <li><a href="#">C#</a></li>
                                            <li><a href="#">3D Environment Design</a></li>
                                            <li><a href="#">Low-Gravity Simulation</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- portfolio item end -->
                    </div>
                </div>
            </section>
            <!-- Portfolio Section End -->
            <!-- Contact Section Start -->
            <section class="contact section" id="contact">
                <div class="container">
                    <div class="row">
                        <div class="section-title padd-15">
                            <h2>Contact Me</h2>
                        </div>
                    </div>
                    <h3 class="contact-title padd-15">Do you have any questions ?</h3>
                    <h4 class="contact-sub-title padd-15">I'M AT YOUR SERVICES</h4>
                    <div class="row">
                        <!-- Contact info item start -->
                        <div class="contact-info-item padd-15">
                            <div class="icon"><i class="fab fa-whatsapp"></i></div>
                            <h4>Call Me On</h4>
                            <p><a href="tel:+962-78-127-7089" target="_blank" class="link">+962 781277089</a></p>
                        </div>
                        <!-- Contact info item end -->
                        <!-- Contact info item start -->
                        <div class="contact-info-item padd-15">
                            <div class="icon"><i class="fa fa-map-marker-alt"></i></div>
                            <h4>Location</h4>
                            <p><a href="#" class="link">Amman</a></p>
                        </div>
                        <!-- Contact info item end -->
                        <!-- Contact info item start -->
                        <div class="contact-info-item padd-15">
                            <div class="icon"><i class="fa fa-envelope"></i></div>
                            <h4>Email</h4>
                            <p><a href="mailto:info@rashaalsaleh.com" target="_blank"
                                    class="link">info@rashaalsaleh.com</a></p>
                        </div>
                        <!-- Contact info item end -->
                        <!-- Contact info item start -->
                        <div class="contact-info-item padd-15">
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
                        <div class="contact-form padd-15">
                            <form action="mail/contact" method="POST">
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
                                <div class="control-group" style="color: white;">
                                    <input type="checkbox" id="agreeCheckbox" onchange="startCountdown()" required> I agree to the terms and conditions
                                </div>
                                <div id="countdown" style="color: white; display: none; font-weight: bold;"></div> <!-- Countdown message -->
                                <div class="row">
                                    <div class="buttons col-12 padd-15">
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
<script>
    function startCountdown() {
        var agreeCheckbox = document.getElementById("agreeCheckbox");
        var countdown = document.getElementById("countdown");
        var button = document.getElementById("sendMessageButton");

        if (agreeCheckbox.checked) {
            countdown.style.display = "block";
            var count = 3;
            button.disabled = true; // Disable the button initially
            var interval = setInterval(function () {
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