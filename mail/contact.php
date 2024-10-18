<?php
session_start();

function generateCSRFToken() {
    if (!isset($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}

function validateCSRFToken($token) {
    return isset($_SESSION['csrf_token']) && $_SESSION['csrf_token'] === $token;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") { 
    $csrf_token = $_POST['csrf_token'];
    if (!validateCSRFToken($csrf_token)) {
        header("Location: ../limit");
        exit();
    }
$time_frame = 86400;
$request_limit = 3;
$client_ip = $_SERVER['REMOTE_ADDR'];
$request_data = file_get_contents('./request_data.json');
$requests = json_decode($request_data, true);

if (!$requests) {
    $requests = [];
}

$redirection_url = null;

if (isset($requests[$client_ip]) && time() - $requests[$client_ip]['time'] < $time_frame) {
    $requests[$client_ip]['count']++;
    if ($requests[$client_ip]['count'] >= $request_limit) {
        http_response_code(429);
        $redirection_url = '../limit';
    }
} else {
    $requests[$client_ip] = [
        'time' => time(),
        'count' => 1
    ];
}

file_put_contents('./request_data.json', json_encode($requests));

if ($redirection_url !== null) {
    header("Location: $redirection_url");
    exit();
}

    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $userMessage = $_POST['message'];

 
    $to = "qayssarayra.h@gmail.com, info@rashaalsaleh.com";

 
    $headers = "From: $email \r\n";
    $headers .= "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

 
    $message = '
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="background-color: white;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <!-- Email Header -->
                <tr>
                    <td align="center" bgcolor="white">
                        <a href="" target="_blank" style="display: inline-block;">
                            <link href="" rel="icon">
                        </a>
                    </td>
                </tr>
                <!-- Email Content -->
                <tr>
                    <td align="center" bgcolor="white">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                            <tr>
                                <td align="left" bgcolor="#ffffff" style="padding: 36px 24px 0; font-family: \'Source Sans Pro\', Helvetica, Arial, sans-serif; border-top: 3px solid #d4dadf;">
                                    <h1 style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 48px;">Email Request</h1>
                                </td>
                            </tr>
                            <tr>
                                <td align="left" bgcolor="#c12e2f" style="padding: 24px; font-family: \'Source Sans Pro\', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
                                    <p style="margin: 0; color: white;"><strong>Name:</strong> ' . $name . '</p>
                                    <p style="margin: 0; color: white;"><strong>Email:</strong> <a href="mailto: ' . $email . ' " style="color: white; text-decoration: underline;">' . $email . '</a></p>

                                    <p style="margin: 0; color: white;"><strong>Subject:</strong> ' . $subject . '</p>
                                    <p style="margin: 0; color: white;">' . $userMessage . '</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <!-- Email Footer -->
                <tr>
                    <td align="center" bgcolor="white" style="padding: 24px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                            <tr>
                                <td align="center" bgcolor="#c12e2f" style="padding: 12px 24px; font-family: \'Source Sans Pro\', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
                                    <p style="color: white;">&copy; <a href="#" style="color: white; text-decoration: underline;">rashaalsaleh</a>, All Right Reserved | Designed By <a href="https://rashaalsaleh.com/" style="color: white; text-decoration: underline;">rashaalsaleh</a></p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
    ';

    if (mail($to, $subject, $message, $headers)) {
        header("Location: ../Thank-you");
        exit();
    } else {
        echo "<script>alert('Oops! Something went wrong with sending the email. Please try again later.')</script>";
        header("Location: ./"); 
        exit();
    }
}
?>
