$("h1").addClass("bigtitle bigmargin") //adding multiple classes using jquery
$("button").text("No NO")
$("a").attr("href","https://www.youtube.com/")
$("button").click(function () {           //click ditector
    $("h1").css("color","green");
    
});
//$("input").keypress(function (event) {    //keystroke ditector for only in input box 
    //alert(event.key)
//});


$("h1").before("<a href = www.google.com>Google</a>"); //add elemnt before the selected tag or class (outside the html elements)
$("h1").after("<a href = www.google.com>youtube</a>");
$("h1").append("baby");  //append elemnts inside html tag after 
$("h1").prepend("Say");


$(document).keypress(function (event) {    //keystroke ditector it will work for the whole document
    $("h1").text(event.key)
});

$("h1").on("mouseover", function () {         //advance level event listener 
    $("h1").css("color","purple")
});
$(document).on("click", function () {         //animation in jquery
    $("h1").slideToggle();
});