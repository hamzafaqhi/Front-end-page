$(document).ready(function() {
    $('#submitBtn').click(function() {

        name = $('#name').val();
        phone = $('#phone').val();
        email = $('#email').val();
        address = $('#address').val();
        color = $('#color').val();
        quantity = $('#quantity').val();
        totalPrice = $('#totalPrice').val();
        if (!name) {
            $('.name-error').show();
            return false
        }
        if (!phone) {
            $('.phone-error').show();
            return false
        }
        if (!email) {
            $('.email-error').show();
            return false
        }

        if (email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!regex.test(email)) {
                $('.email-error').text("Please Enter Valid Email Address");
                $('.email-error').show();
                return false
            }
        }
        if (!address) {
            $('.address-error').show();
            return false
        }

        if (totalPrice == 0 || !color || quantity === 0) {
            $('.price-error').show();
            return false;
        }
        if (phone && name && address && email && totalPrice > 0) {
            $('.loader').show();
            $('.card-info').addClass('blur');
            $("#submitBtn").prop("disabled", true);
        }

        $.ajax({
            url: "save.php",
            type: "POST",
            data: {
                name: name,
                phone: phone,
                email: email,
                address: address,
                totalPrice: totalPrice,
                color: color,
                quantity: quantity,
                page: 'form',
            },
            cache: false,
            success: function(dataResult) {
                var dataResult = JSON.parse(dataResult);
                if (dataResult.status == 200) {
                    $('.loader').hide()
                    $('.card-info').removeClass('blur');
                    $(".order-form").trigger('reset');
                    $("#submitBtn").prop("disabled", false);
                    $('#myModal').show()
                } else {
                    $('.loader').hide()
                    $('.card-info').removeClass('blur');
                    alert('Error while creating your order!')
                }

            }
        });
    });

    var modal = $("#myModal");

    // Get the button that close the modal
    var btn = $("#myBtn");

    // When the user clicks the button, close the modal 
    btn.click(function() {
        backToApp('CLOSE_WINDOW');
    });

    function backToApp(event) {
        if (window.mobileApp) {
            window.mobileApp.webViewEvent(event);
        }
        if (window.webkit) {
            window.webkit.messageHandlers.webViewEvent.postMessage({
                event: event
            });
        }
        if (window.parent) {
            window.parent.postMessage({ 'status': 'success' }, "*")
        }
        modal.hide();
    }

    $('#name').keydown(function() {
        $('.name-error').hide();
        $('.price-error').hide();
        return true;
    })
    $('#email').keydown(function() {
        $('.email-error').hide();
        $('.price-error').hide();

        return true;
    })
    $('#phone').keydown(function() {
        $('.phone-error').hide();
        $('.price-error').hide();

        return true;
    })

    $('#address').keydown(function() {
        $('.address-error').hide();
        $('.price-error').hide();
        return true;
    })
});