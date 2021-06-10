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

    $('.select-color').children('div').click(function() {
        let dot = this.className;
        $('.error-div').hide()
        if (!$('.' + dot).html()) {
            $('.' + dot).html(' <i class = "fa fa-check" > </i>');
        }
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
                    let url = window.location.origin + '/form.php?totalPrice=' + dataResult.totalPrice + '&color=' + dataResult.color + '&quantity=' + dataResult.quantity;

                    window.location.href = url;
                } else {
                    return false
                }

            }
        });
    });
});


var slideIndex = 1;
// showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {

        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}