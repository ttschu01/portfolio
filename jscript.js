// Show Projects
$("#firstProjectbtn").click(function(){
    $(".all-project-cards").hide();
    $("#showProject1").show();
});

$("#secondProjectbtn").click(function(){
    $(".all-project-cards").hide();
    $("#showProject2").show();
});

// Hide Projects
$("#goBack1").click(function(){
    $("#showProject1").hide();
    $(".all-project-cards").show();
});

$("#goBack2").click(function(){
    $("#showProject2").hide();
    $(".all-project-cards").show();
});

//Carousel
$('.carousel').carousel({
    interval: false
    })