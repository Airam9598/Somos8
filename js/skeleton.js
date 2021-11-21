
$(function() {
    $('footer').load("./footer.html");
    $('.nav').load("./menu.html");
});

function check() {
    if ($("#icono-menu").css("display") == "inline") {
        $("#menu").removeAttr("style");
    }
}

setInterval(check, 1000);
function openmenu() {
    if ($("#menu").css("height") != "0px") {
        $("#menu").css("height","0");
        $("#menu").css("width","0");
    }else {
        $("#menu").css("height","100%");
        $("#menu").css("width","100%");
    }
}