
$(document).ready(function () {
    $('.burger').click(function () {
        $(this).toggleClass('close-icon');
        $('.menu').toggle();
    })
})