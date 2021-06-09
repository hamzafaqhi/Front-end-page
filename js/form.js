$(document).ready(function() {
    $('#submitBtn').click(function() {
        name = $('#name').val();
        phone = $('#phone').val();
        email = $('#email').val();
        address = $('#address').val();
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
        $.ajax({
            url: "save.php",
            type: "POST",
            data: {
                name: name,
                phone: phone,
                email: email,
                address: address,
                page: 'form',
            },
            cache: false,
            success: function(dataResult) {
                var dataResult = JSON.parse(dataResult);
                if (dataResult.status == 200) {
                    $(".order-form").trigger('reset');
                    $("#submitBtn").removeAttr("disabled");
                    $('#myModal').show()
                } else {
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
        return true;
    })
    $('#email').keydown(function() {
        $('.email-error').hide();
        return true;
    })
    $('#phone').keydown(function() {
        $('.phone-error').hide();
        return true;
    })

    $('#address').keydown(function() {
        $('.address-error').hide();
        return true;
    })
});