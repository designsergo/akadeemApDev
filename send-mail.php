<?php
/*
Template Name: sendMailTpl
*/

$email = htmlspecialchars($_GET["email"]);
if (!$email) {
	exit('._.');
}

$name = htmlspecialchars($_GET["trainername"]);
if (!$name) {
	exit('._.');
}

/// send mail
$headers = "Content-Type: text/html; charset=UTF-8 \r\n" .
	"From: Akadeemia veeb <akadeemiaveeb@aripaev.ee>\r\n";

//$to = 'evro_standart@yahoo.com';
//$to = 'jekaterina@aripaev.ee';

$subject = 'Soovin infot koolituse kohta';
$message = $email . ' <BR>' . PHP_EOL . '  ' ;
$message .= 'Soovin infot ('. $name .') tulevaste koolituse kohta. ' . PHP_EOL . '  ' ;
//Soovin infot (koolitaja nimi) tulevaste koolituse kohta.

$to = 'akadeemia@aripaev.ee';
$resp = mail($to, $subject, $message, $headers);
if ($resp) { echo 'mail sent ' . PHP_EOL ; print_r($resp); }
else { echo 'error sending mail' . PHP_EOL; }

$to = 'Igor.Kozlov@aripaev.ee';
$resp = mail($to, $subject, $message, $headers);
if ($resp) { echo 'mail sent ' . PHP_EOL ; print_r($resp); }
else { echo 'error sending mail' . PHP_EOL; }


//$to = 'evro_standart@yahoo.com';
//$resp = mail($to, $subject, $message, $headers);
//if ($resp) { echo 'mail sent ' . PHP_EOL ; print_r($resp); }
//else { echo 'error sending mail' . PHP_EOL; }

///
