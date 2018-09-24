<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/vendor/autoload.php';

$mail = new PHPMailer(true);

$name_error = $message_error = $attending_error = "";
$name = $number = $attending = $message = $url = $success = "";

//form is submitted with POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
  if (empty($_POST["name"])) {
    $name_error = "Name is required";

  } else {
    $name = test_input($_POST["name"]);
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z\n\r ]+$/",$name)) {
      $name_error = "Only letters and white space allowed"; 
    }
  } 

  if (empty($_POST["email"])) {
    $email_error = "E-mail is required";
  } else {
    $email = test_input($_POST["email"]);
    // check if e-mail address is well-formed
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $email_error = "Invalid e-mail format"; 
    }
  }

  if (empty($_POST["message"])) {
    $message_error = "Please enter a message";

  } else {
    $message = test2($_POST["message"]);
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z\n\r\+\#\!@\.%\*\?'\",\/\(\)\$&\- ]+$/", $message)) {
      $message_error = "Please only use normal characters in your message";
    }
  } 

  if ($name_error == '' and $email_error == '' and $message_error == ''){
      $email_body = '';
      unset($_POST['submit']);
      foreach ($_POST as $key => $value){
          $email_body .=  "$key: $value\r\n";
      }

      $email_body = nl2br($email_body);

      try {
      //Server settings
      $mail->SMTPDebug = 0;                                 // Enable verbose debug output
      $mail->isSMTP();                                      // Set mailer to use SMTP
      $mail->Host = '';  // Specify main and backup SMTP servers
      $mail->SMTPAuth = true;                               // Enable SMTP authentication
      $mail->Username = '';                 // SMTP username
      $mail->Password = '!';                           // SMTP password
      $mail->SMTPSecure = '';                            // Enable TLS encryption, `ssl` also accepted
      $mail->Port = ;                                    // TCP port to connect to

      //Recipients
      $mail->setFrom('', 'benbrophy.io Website Contact');
      $mail->addAddress('', 'Ben Brophy');     // Add a recipient
      $mail->addReplyTo('', 'Website Contact');
      

      

      //Content
      $mail->isHTML(true);                                  // Set email format to HTML
      $mail->Subject = 'Message from benbrophy.io';
      $mail->Body    = $email_body;
      $mail->AltBody = $email_body;

      $mail->send();
      echo '';
          $success = "Your message has been sent - thank you!";
          $name = $email = $message = '';
          unset($_POST);

  } catch (Exception $e) {
      echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
      $error = 'Message could not be sent. Mailer Error.';

    }
      
  }
  
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

function test2($data) {
  $data = trim($data);
  $data = stripslashes($data);
  return $data;
}

