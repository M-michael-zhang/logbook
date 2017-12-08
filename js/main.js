$(document).ready(function () {
    $(".user").mouseenter(function () {
        $(".user_info").slideDown();
    })

    $(".user_info").mouseleave(function () {
        $(".user_info").slideUp();
    })

    var w=$(window).width();
    $("#myCarousel").height(w*570/1735);


})

$(window).resize(function () {
    var w=$(window).width();
    $("#myCarousel").height(w*570/1735);
})

