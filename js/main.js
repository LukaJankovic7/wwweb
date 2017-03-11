$(document).ready(function() {
    // Our Work
    $('.project__slide').on("click", function(e) {
        var current_slide_id = $(this).attr('data-id');
        var current_project_info =  $(".project__info[data-id=" + current_slide_id + "]");
        $(current_project_info).addClass('active');
        $(current_project_info).siblings().removeClass('active');
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
});