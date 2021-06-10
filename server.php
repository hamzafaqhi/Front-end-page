<?php
// initializing variables
$totalPrice = 0;

if(!empty($_SESSION["totalPrice"])) {
    $totalPrice = $_SESSION["totalPrice"];
}