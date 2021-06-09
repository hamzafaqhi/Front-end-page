<?php
include('database.php');
session_start();
$_SESSION["totalPrice"] = NULL;
$page = mysqli_real_escape_string($connection,$_POST['page']);

if($page === "product") {
    $quantity= mysqli_real_escape_string($connection,$_POST['quantity']);
    $color = mysqli_real_escape_string($connection,$_POST['color']);
    $priceQuery = "SELECT price FROM products WHERE id = '1'";
    $price = $connection->query($priceQuery);
    $price = $price->fetch_assoc();
    $_SESSION["color"] = $color;
    $_SESSION["quantity"] = $quantity;
    $_SESSION["totalPrice"] = $quantity * $price['price'];
    echo json_encode(array("status"=>200));
}

else {
    $name=  mysqli_real_escape_string($connection,$_POST['name']);
    $email= mysqli_real_escape_string($connection,$_POST['email']);
    $phone= mysqli_real_escape_string($connection,$_POST['phone']);
    $address= mysqli_real_escape_string($connection,$_POST['address']);
    $quantity =  $_SESSION["quantity"];
    $color =  $_SESSION["color"];
    $totalPrice =  $_SESSION["totalPrice"];
    $sql = "INSERT INTO `users`( `name`, `email`, `phone`) 
    VALUES ('$name','$email','$phone')";
    try {
        if (mysqli_query($connection, $sql)) {
            $userId = $connection->insert_id;
            $orderSql = "INSERT INTO orders (user_id, product_id, quantity,color,total_price,address) VALUES ('$userId','1','$quantity','$color','$totalPrice','$address')";
            mysqli_query($connection, $orderSql);
            session_destroy();
            echo json_encode(array("status"=>200));
        }
        mysqli_close($connection);
    }
    catch(Exception $e) {
        echo 'Message: ' .$e->getMessage();
    }
}