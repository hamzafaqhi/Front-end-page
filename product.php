<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="author" content="Golootlo">
    <script src="./js/jquery.min.js"></script>
    <script src="./js/product.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/product.css">
</head>

<body>
    <main>
        <div class="mx-4 airbuds-img">
            <p class="heading">Huawei FreeBuds 4i</p>
        </div>
        <div class="card-info">
            <p class="card-heading text-left">Huawei FreeBuds 4i</p>
            <div class="grid-container-2">
                <div class="selection">
                    <h3 class="price-tag">Rs. 16,499</h3>
                    <p class="small-txt text-left">Pre Order Only</p>
                </div>
                <div class="selection">
                    <div class="img-card" style="text-align: left;">
                        <div class="quantity">
                            <a href="#" class="quantity__minus"><span>-</span></a>
                            <input name="quantity" type="text" class="quantity__input" maxlength="99" value="1" readonly>
                            <a href="#" class="quantity__plus"><span>+</span></a>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div class="detail">
                <p class="select-txt text-left">Select Color</p>
                <div class="select-color">
                    <div class="dot1" ></div>
                    <div class="dot2" ></div>
                    <div class="dot3" ></div>
                </div>
                <div class="error-div"><span class=" text-left">Please Select Color</span></div>
                <div>
                <p class="description text-left">High Quality Sound | Active Noise Cancellation | 10 Hours of Continuous Playback. <br> Crystal clear sound that will blow you away. Rich instrumental harmonies, clear vocals, punchy bass, and finely balanced sound.</p>
            </div>
            <input type="hidden" name="color" id="color" value="" >
            <div class="pre-order">
                <button class="pre-order-btn" id="checkout" type="button">Proceed to Checkout </button> 
            </div>
        </div>
    </main>
</body>
</html>