<?php
/*
Template Name: sendMailTpl
*/

$email = htmlspecialchars($_GET["email"]);
if (!$email) {
	exit('._.');
}



/// send mail
$headers = "Content-Type: text/html; charset=UTF-8";

//$to = 'evro_standart@yahoo.com';
//$to = 'jekaterina@aripaev.ee';
//$to = 'Registreerimine@aripaev.ee';
$subject = 'Akadeemia new mail';
$message = $email . ' <BR>' . PHP_EOL . '  ' ;
$message .= 'Soovin infot tulevaste koolituse kohta' . PHP_EOL . '  ' ;

//$resp = mail($to, $subject, $message, $headers);
//if ($resp) { echo 'mail sent ' . PHP_EOL ; print_r($resp); }
//else { echo 'error sending mail' . PHP_EOL; }

$to = 'Igor.Kozlov@aripaev.ee';
$resp = mail($to, $subject, $message, $headers);
if ($resp) { echo 'mail sent ' . PHP_EOL ; print_r($resp); }
else { echo 'error sending mail' . PHP_EOL; }
///
