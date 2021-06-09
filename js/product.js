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
        if (value < 99) {
            value++;
        }
        input.val(value);


    })

    $('.quantity__input').keydown(function() {
        //code to not allow any changes to be made to input field
        return false;
    });

    $('.select-color').children('div').click(function() {
        let dot = this.className;
        $('.error-div').hide()
        $('.' + dot).append(' <i class = "fa fa-check" > </i>');
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
            $('.error-div').show()
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