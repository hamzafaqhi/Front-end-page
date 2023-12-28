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
        
        <!-- slider -->
        <div class="slideshow-container">
        <div class="heading">FreeBuds 4i</div>
            <div class="mySlides fade" style="display: block;" id="slider1" >
                <img src="./images/product.png"  style="width:100%" onclick="currentSlide(2)">
              
            </div>
    
        
            <div class="mySlides fade" id="slider2">
                <img src="./images/productred.png" style="width:100%" onclick="currentSlide(3)" >
            </div>
        
            <div class="mySlides fade" id="slider3">
                <img src="./images/productwhite.png" style="width:100%" onclick="currentSlide(4)">
            </div>
        
            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>
        <br>

        <div style="text-align:center">
            <span class="dot" onclick="currentSlide(1)"></span> 
            <span class="dot" onclick="currentSlide(2)"></span> 
            <span class="dot" onclick="currentSlide(3)"></span> 
        </div>
        <!-- slidr -->
        <!-- <div class="mx-4 airbuds-img" id="airbuds-img">
            <p class="heading">Huawei FreeBuds 4i</p>
        </div> -->
        <div class="card-info">
            <p class="card-heading text-left">FreeBuds 4i</p>
            <div class="grid-container-2">
                <div class="selection">
                    <h3 class="price-tag">Rs. xx,xxxx</h3>
                    <p class="small-txt text-left">Pre Order Only - Delivery in 7 days</p>
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
                    <div class="dot1" onclick="currentSlide(2)" ></div>
                    <div class="dot2" onclick="currentSlide(3)"></div>
                    <div class="dot3" onclick="currentSlide(1)"></div>
                </div>
                <div class="error-div"><span class=" text-left">Please Select Color</span></div>
                <div>
                <p class="free-description text-left"><strong> <em> Pre-order now and get a Bluetooth Speaker & Music 3-month Subscription FREE!</em></strong></p>
                <p class="description text-left"><strong>High Quality Sound | Active Noise Cancellation | 10 Hours of Continuous Playback.</strong><br><br> Crystal clear sound that will blow you away. Rich instrumental harmonies, clear vocals, punchy bass, and finely balanced sound.</p>
            </div>
            <input type="hidden" name="color" id="color" value="" >
            <div class="pre-order">
                <button class="pre-order-btn" id="checkout" type="button">Proceed to Checkout </button> 
            </div>
        </div>
    </main>
</body>
</html>