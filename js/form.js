$(document).ready(function() {
    $('#submitBtn').click(function() {
        name = $('#name').val();
        phone = $('#phone').val();
        email = $('#email').val();
        address = $('#address').val();
        if (!name) {
            $('.name-error').show();
            setTimeout(function() { $(".error-msg").hide(); }, 5000);
            return false
        }
        if (!phone) {
            $('.phone-error').show();
            setTimeout(function() { $(".error-msg").hide(); }, 5000);
            return false
        }
        if (!email) {
            $('.email-error').show();
            setTimeout(function() { $(".error-msg").hide(); }, 5000);
            return false
        }
        if (!address) {
            $('.address-error').show();
            setTimeout(function() { $(".error-msg").hide(); }, 5000);
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
});