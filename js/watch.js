$(document).ready(function () {
    /*show and hide text*/
    $("#myBtn").on("click", function(){
        read();
    });
    /* show and hide comments */
    $(".reply").click(function() {
        $(this).parents("div.row").next("div.card").toggle();
    });
});

/*show and hide things*/
function read() {
    var dots = document.getElementById("dots");/*bring 3points*/
    var moreText = document.getElementById("more");/*show the text*/
    var btnText = document.getElementById("myBtn");/*bring the button    */
  
    if (dots.style.display === "none") {/* if 3points hidden the text exists */
      dots.style.display = "inline";/* show points */
      btnText.innerHTML = "Show More";
      moreText.style.display = "none";/* hide text */
    } else {/*if 3points visble then the text does not exist */
      dots.style.display = "none";/* hide points */
      btnText.innerHTML = "Show Less";
      moreText.style.display = "inline";/*  show text */
    }
}