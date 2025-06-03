<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Thank you</title>
    <link rel="apple-touch-icon" sizes="57x57" href="./assets/img/icon black.png">
    <link rel="apple-touch-icon" sizes="60x60" href="./assets/img/icon black.png">
    <link rel="apple-touch-icon" sizes="72x72" href="./assets/img/icon black.png">
    <link rel="apple-touch-icon" sizes="76x76" href="./assets/img/icon black.png">
    <link rel="apple-touch-icon" sizes="114x114" href="./assets/img/icon black.png">
    <link rel="apple-touch-icon" sizes="120x120" href="./assets/img/icon black.png">
    <link rel="apple-touch-icon" sizes="144x144" href="./assets/img/icon black.png">
    <link rel="apple-touch-icon" sizes="152x152" href="./assets/img/icon black.png">
    <link rel="apple-touch-icon" sizes="180x180" href="./assets/img/icon black.png">
    <link rel="icon" type="image/png" sizes="192x192" href="./assets/img/icon black.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./assets/img/icon black.png">
    <link rel="icon" type="image/png" sizes="96x96" href="./assets/img/icon black.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./assets/img/icon black.png">
    <link href="./assets/thanks/css/Mail.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>

<body>
    <div class="container">
        <div class="left">
            <h1 class="typing-animation" data-heading="Thank You for contact me"></h1>
            <p>I will respond as soon as possible.</p>
            <div class="button clickable" onclick="window.location.href='https://rashaalsaleh.com'">Go Back</div>
        </div>
    </div>
    <script src="./assets/thanks/js/home.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const savedColor = localStorage.getItem('themeColor') || 'color-1';

            const colorMappings = {
                'color-1': { rgb: '236, 37, 176', hex: '#f024b3' },
                'color-2': { rgb: '135, 80, 247', hex: '#8750f7' },
                'color-3': { rgb: '64, 93, 230', hex: '#405DE6' },
                'color-4': { rgb: '236, 24, 57', hex: '#ec1839' },
                'color-5': { rgb: '255, 127, 62', hex: '#FF7F3E' }
            };

            // Set the CSS variables
            const root = document.documentElement;
            const selectedColor = colorMappings[savedColor];

            if (selectedColor) {
                root.style.setProperty('--skin-color-rgb', selectedColor.rgb);
                root.style.setProperty('--skin-color', selectedColor.hex);
                root.style.setProperty('--skin-gradient', `linear-gradient(135deg, 
                rgba(${selectedColor.rgb}, 0.8) 0%, 
                rgba(${selectedColor.rgb}, 0.3) 100%)`);
            }

            // Load the corresponding color stylesheet
            const links = document.querySelectorAll('link.alternate-style');
            links.forEach(link => {
                if (link.getAttribute('title') === savedColor) {
                    link.removeAttribute('disabled');
                } else {
                    link.setAttribute('disabled', 'true');
                }
            });
        });
    </script>
</body>

</html>