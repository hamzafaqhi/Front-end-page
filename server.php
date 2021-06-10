<?php
// initializing variables
$totalPrice;
$color;
$quantity;

if(!empty($_GET["totalPrice"])) {
    $totalPrice = $_GET["totalPrice"];
}

if(!empty($_GET["quantity"])) {
    $quantity =$_GET["quantity"];
}

if(!empty($_GET["color"])) {
    $color =$_GET["color"];
}