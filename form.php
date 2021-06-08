<?php include('server.php') ?>
<!DOCTYPE html>
<html>
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="author" content="Golootlo"> 
    <script src="./js/jquery.min.js"></script>
    <script src="./js/form.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/form.css">
    </head>
    <body>
        <main>
            <div class="mx-4 form-img">
                <p class="heading">Huawei FreeBuds 4i</p>
            </div>
            <div class="card-info">
                <p class="card-heading text-left">Pre Order Form</p>
                <p class="small-text text-left">Please fill the information below to order</p>
                <form class="order-form">
                    <label for="">Name</label>
                    <div class="input-div">
                        <i class="fa fa-user"></i>
                        <input  name="name" id="name" type="text" value="<?php echo $username ?>" required autocomplete="off">
                    </div>
                    <span><p class="text-left error-msg name-error" style="display:none">Please Enter Name</p></span>

                    <label for="">Contact Number</label>
                    <div class="input-div">
                        <i class="fa fa-phone"></i>
                        <input  name="phone" id="phone" type="tel" value = "<?php echo $phone ?> " required autocomplete="off">
                    </div>
                    <span><p class="text-left error-msg phone-error" style="display:none">Please Select Phone</p></span>

                    <label for="">Email</label>
                    <div class="input-div">
                        <i class="fa fa-envelope"></i>
                        <input  name="email" id="email" type="email" autocomplete="off"  value="<?php echo $email ?>"  required> 
                    </div>
                    <span><p class="text-left error-msg email-error" style="display:none">Please Select Email</p></span>

                    <label for="">Address</label>
                    <div class="input-div">
                        <i class="fa fa-map-marker"></i>
                        <input  name="address" id="address" type="address" required autocomplete="off">
                    </div>
                    <div><p class="text-left error-msg address-error" style="display:none">Please Select Address</p></div>
                    <div class="price">
                        <div class="selection">
                            <h3 class="price-tag">Total <small>(incl.VAT)</small></h3>
                        </div>
                        <div class="selection">
                            <div class="img-card" style="text-align: right;">
                                <p class="total-price"><?php session_start(); echo 'Rs. ' . number_format($_SESSION["totalPrice"]);?> </p>
                            </div>
                        </div>
                    </div>
                    <div class="pre-order">
                        <button class="pre-order-btn" type="button" id="submitBtn" >Place Order </button> 
                    </div>
                </form>
            </div>
        </main>
    <!-- The Modal -->
    <div id="myModal" class="modal center" >
        <!-- Modal content -->
        <div class="modal-content">
            <p class="modal-heading" >Order Successful! </p>
            <p class="modal-description">Your order have been places successfully, Our customer support member will contact you shortly</p><br>
            <button class="modal-btn" id="myBtn" type="button">Continue to Home </button> 
        </div>
    </div>
   </body>
</html>
 
 