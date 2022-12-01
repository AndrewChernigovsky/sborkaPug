
<?php
error_reporting( E_ERROR );

if (isset($_POST['username']))			{$username			= $_POST['username'];		if ($username == '')	{unset($username);}}
if (isset($_POST['userphone']))		{$userphone		= $_POST['userphone'];		if ($userphone == '')	{unset($userphone);}}
if (isset($_POST['sab']))			{$sab			= $_POST['sab'];		if ($sab == '')		{unset($sab);}}

if (isset($username) ) {
$username=stripslashes($username);
$username=htmlspecialchars($username);
}
if (isset($userphone) ) {
$userphone=stripslashes($userphone);
$userphone=htmlspecialchars($userphone);
}

$message = "
Имя клиента: $username \n
Телефон клиента: $userphoneLine
";

$message = wordwrap($message, 70);
var_dump(mail('chernigovsky108@gmail.com', 'Регистрация заявки', $message, "-f ca30572@vh392.timeweb.ru"));
echo "<p style='color:green;'>Уважаемый(ая) <b style='color:red;'>$username</b> Ваше письмо отправленно успешно. <br> Спасибо. <br>Вам перезвонят в течении 2 часов на номер<b style='color:red;'> $userphone</b>.</p>";
?>




<meta charset="utf-8">
<?php
error_reporting( E_ERROR );   //Отключение предупреждений и нотайсов (warning и notice) на сайте
// создание переменных из полей формы
if (isset($_POST['username']))			{$username			= $_POST['username'];		if ($username == '')	{unset($username);}}
if (isset($_POST['userphone']))		{$userphone		= $_POST['userphone'];		if ($userphone == '')	{unset($userphone);}}
if (isset($_POST['sab']))			{$sab			= $_POST['sab'];		if ($sab == '')		{unset($sab);}}
//стирание треугольных скобок из полей формы
/* комментарий */
if (isset($username) ) {
$username=stripslashes($username);
$username=htmlspecialchars($username);
}
if (isset($userphone) ) {
$userphone=stripslashes($userphone);
$userphone=htmlspecialchars($userphone);
}

// адрес почты куда придет письмо
$headers= "AquaLife";
$address="chernigovsky108@gmail.com";
$note_text="
Имя клиента: $username
Телефон клиента: $userphone";

// сообщение после отправки формы
if (isset($username)  &&  isset ($sab) ) {
// mail($address,$note_text,"Content-type:text/plain; windows-1251");
mail($address, $note_text," Имя клиента: $username \r\n Телефон клиента: $userphone");

echo "<p style='color:green;'>Уважаемый(ая) <b style='color:red;'>$username</b> Ваше письмо отправленно успешно. <br> Спасибо. <br>Вам перезвонят в течении 2 часов на номер<b style='color:red;'> $userphone</b>.</p>";
}
?>
<?php
error_reporting( E_ERROR );

if (isset($_POST['username']))			{$username			= $_POST['username'];		if ($username == '')	{unset($username);}}
if (isset($_POST['userphone']))		{$userphone		= $_POST['userphone'];		if ($userphone == '')	{unset($userphone);}}
if (isset($_POST['sab']))			{$sab			= $_POST['sab'];		if ($sab == '')		{unset($sab);}}

if (isset($username) ) {
$username=stripslashes($username);
$username=htmlspecialchars($username);
}
if (isset($userphone) ) {
$userphone=stripslashes($userphone);
$userphone=htmlspecialchars($userphone);
}

$message = "
Имя: $username \r\n
Телефон: $userphone
";

$message = wordwrap($message, 70);

$headers = 'From: easewebcompany@gmail.com' . "\r\n" .
    'Reply-To: easewebcompany@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

var_dump(mail('easewebcompany@gmail.com', 'Регистрация заявки - Easeweb', $message, $headers));
echo "<div style='max-width:1024px; margin:0 auto; padding:0 20px; text-align: center;'>
<p style='color:green;'>Уважаемый(ая) <b style='color:red; font-size:24px'>$username</b> Ваше письмо отправленно успешно. Спасибо. <br>Вам перезвонят в течении 2 часов на номер<b style='color:red;'><span style='letter-spacing: 2px;'> $userphone</span></b>.</p>
</div>";
?>