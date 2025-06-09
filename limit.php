<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Try Again later</title>
    <link rel="icon" href="./assets/img/logo(ice bear).png">
    <link rel="apple-touch-icon" href="./assets/img/logo(ice bear).png">
    <link href="./assets/thanks/css/Mail.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
    <div class="container">
        <div class="left">
            <h1 class="typing-animation" data-heading="Thank You for contacting us!"></h1>
            <?php
            $time_frame = 86400;
            $request_limit = 4;
            $client_ip = $_SERVER['REMOTE_ADDR'];
            $request_data = file_get_contents('./mail/request_data.json');
            $requests = json_decode($request_data, true);
            if (!$requests) {
                $requests = [];
            }
            if (isset($requests[$client_ip]) && $requests[$client_ip]['count'] >= $request_limit) {
                echo "<p>Sorry, you have exceeded the request limit. Please do not spam. If you continue to exceed the limit, you will be blocked.</p>";
            } else {
                echo "<p>Thank you for contacting us! We'll get back to you shortly.</p>";
            }
            ?>
            <div class="button clickable" onclick="window.location.href='https://rashaalsaleh.com/'">Go Back</div>
        </div>
    </div>
    <script src="./assets/thanks/js/home.js"></script>
</body>
</html>