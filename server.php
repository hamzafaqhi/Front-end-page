<?php
// initializing variables
$username = "";
$email    = "";
$phone    = "";

if(!empty($_GET["phone"])) {
    $phone = $_GET["phone"];
}

if(!empty($_GET["first_name"]) || !empty($_GET["last_name"])) {
    $username = $_GET["first_name"].' '.$_GET["last_name"];
}

if(!empty($_GET["email"])) {
    $email = $_GET["email"];
}

