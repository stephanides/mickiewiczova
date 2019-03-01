<?php
require_once "Mail.php";
$name = "";
if(isset($_POST['name'])){
    $name = $_POST['name'];
}
$surname = "";
if(isset($_POST['surname'])){
    $surname = $_POST['surname'];
}
$email = "";
if(isset($_POST['email'])){
    $email = $_POST['email'];
}
$number = "";
if(isset($_POST['number'])){
    $number = $_POST['number'];
}
$message = "";
if(isset($_POST['message'])){
    $message = $_POST['message'];
}
$host = "mail.novebytystaremesto.sk";
$port = 25; 
$username = "info@novebytystaremesto.sk";
$password = "Hlavna24hlavna24"; // heslo asi do webhouse 
$to = "Me <info@novebytystaremesto.sk>";

$subject = "";
if(isset($_POST['subject'])){
    $subject = $_POST['subject'];
}
$body = "Od: $name $surname <br> Telefónne číslo: $number <br> Email: $email <br> Sprava: $message";

$headers = array ('From' => $email,
'To' => $to,
'Subject' => 'Správa z webu Mickewiczova',
'Content-Type'  => 'text/html; charset=UTF-8');
$smtp = Mail::factory('smtp',
array ('host' => $host,
'port' => $port, 
'auth' => true,
'username' => $username,
'password' => $password));

$mail = $smtp->send($to, $headers, $body);

if (PEAR::isError($mail)) {
          echo("<p>" . $mail->getMessage() . "</p>"); 
} 
else {
          echo("<p>Message successfully sent!</p>");
} 
?>


