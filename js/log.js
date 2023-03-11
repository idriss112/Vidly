$(document).ready(function() {
    // delete video on history when you click
    $(".remove").click(function () {
        $(this).parents('.card').hide(); 
    });
});