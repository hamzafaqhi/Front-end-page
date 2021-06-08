$(document).ready(function() {
    const minus = $('.quantity__minus');
    const plus = $('.quantity__plus');
    const input = $('.quantity__input');
    minus.click(function(e) {
        e.preventDefault();
        var value = input.val();
        if (value > 1) {
            value--;
        }
        input.val(value);
    });

    plus.click(function(e) {
        e.preventDefault();
        var value = input.val();
        value++;
        input.val(value);
    })

    $('span').click(function() {
        let dot = this.className;
        $('.' + dot).text('✔');
        if (dot == "dot1") {
            $('#color').val('grey')
            $('.dot2').text('');
            $('.dot3').text('');

        } else if (dot == "dot2") {
            $('#color').val('white')
            $('.dot1').text('');
            $('.dot3').text('');


        } else {
            $('#color').val('black')
            $('.dot1').text('');
            $('.dot2').text('');
        }
    })

    $('#checkout').click(function() {
        var quantity = $('.quantity__input').val();
        var color = $('#color').val();
        if (!color) {
            $('.error-msg').show()
            setTimeout(function() { $(".error-msg").hide(); }, 5000);
            return false
        }
        $.ajax({
            url: "save.php",
            type: "POST",
            data: {
                color: color,
                quantity: quantity,
                page: 'product',
            },
            cache: false,
            success: function(dataResult) {
                var dataResult = JSON.parse(dataResult);
                if (dataResult.status == 200) {
                    window.location.href = 'form.php';
                } else {
                    return false
                }

            }
        });
    });
});