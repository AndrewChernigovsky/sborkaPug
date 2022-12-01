<?php
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$fio = $_POST['username'];
$phone = $_POST['userphone'];
$polite = $_POST['polite'];
$fio = htmlspecialchars($fio);
$phone = htmlspecialchars($phone);
$fio = urldecode($fio);
$phone = urldecode($phone);
$fio = trim($fio);
$phone = trim($phone);
$token = '5667961004:AAE_j-IbnI30eLZPqx9ejXNKYEDO-N7-HRA';
$chat_id = '-620731731';

$mail->isHTML(true);
$mail->setFrom('wordpress@izosimov-andrew.ru');
$mail->addAddress('easeweb@mail.ru');
$mail->addAddress('easewebcompany@gmail.com');
$mail->Subject = 'Easeweb | Обратный звонок';
$mail->Body    = '' . '<p style="color: #1662a8; font-size: 16px;"><strong>' . $fio . '</strong></p>' . "<p style='color: black; font-size: 24px;'>телефон<strong> \r\n" . '+'.$phone . '</strong></p>';
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
	echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    header('location: thank-you.html');
}

$arr = array(
	'Имя пользователя: ' => $fio,
	'Телефон: ' => "+{$phone}",
	'Согласие: ' => $polite
);

foreach($arr as $key => $value) {
$txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
header('Location: thank-you.html');
} else {
echo "Error";
}

?>
