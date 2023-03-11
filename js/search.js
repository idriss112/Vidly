$(document).ready(function () {
    //open and close filters
    $("#search-filters-icon").click(function () {
        $(".filter-column").slideToggle("slow");
    });
    /* choose one checkbox   */
    $("input:checkbox").click(function () {
        var $box = $(this);
        if ($box.is(":checked")) {

            var group = "input:checkbox[name='" + $box.attr("name") + "']";
            $(group).prop("checked", false);
            $box.prop("checked", true);
        }
    });
});