$(document).ready(function() {
    $(".first-list-element").addClass("active");
    //to remove active class
    $(".nav-item").click(function () {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    });
    // side bar button
    $("#toggler").click(function(event) {
        $('#wrap').toggleClass('toggled');

        //black overly
        var left = $('.sidebar').css("left"); //side bar on left
        if (left == '0px') //close sidebar
        {
            $('.sidebar').css({ 'left': '-17rem' });
            $('.layer').fadeOut(); /* hide black overlay */
        }
        else { //show sidebar
            $('.sidebar').css({ 'left': '0' });
            $('.layer').fadeIn(); /*show black overlay  */
        }   
    });

    //hide sidebar and black overlay
    $('.layer').click(function () {
        $('.sidebar').css({ 'left': '-17rem' });
        $('.layer').fadeOut();
    });

    //search bar in small media
    $(".search-icon").click(function () {
        $(".search-input").slideToggle("slow"); 
    });

});