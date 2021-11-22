$(document).ready(function () {
    window.onload = function() {
        setInterval(loaddata, 100);
    }
});


function loaddata() {
    $.getJSON('../json/forum_info.json', function (emp) {
        console.log(emp['excursion'][0].coments)
        if ($('#excursion').children("img").length != emp["excursion"].length) {
            excursion();
        } else if ($('#coments').children("article").length != emp["coments"].length){
            coments();
        }
    });
}


//Para acceder a los comentarios es --> emp['excursion']['coments'].length
function excursion(){
    $.getJSON('../json/forum_info.json', function (emp) {
        for (var i = 0; i < emp['excursion'].length; i++) {
            $('#excursion').append('<p class="title">' + emp['excursion'][i].title +'</p>' +
                '<img src="' + emp['excursion'][i].image + '">' +
                '<div class="exc-info">' +
                '   <p class="date mb-3">' + emp['excursion'][i].place + '</p>' +
                '   <p class="date">' + emp['excursion'][i].date + '</p>' +
                '   <p class="date">' + emp['excursion'][i].time + '</p>' +
                '   <p class="date">' + emp['excursion'][i].material + '</p>' +
                '   <p class="description">' + emp['excursion'][i].description + '</p>' +
                '   <form class="assistant">' +
                '       <div class="assistant_text">' + emp['excursion'][i].answer + '</div>' +
                '       <input type="radio" name="my-input" id="yes">' +
                '       <label for="yes">' + emp['excursion'][i].answerYes + '</label>' +
                '       <input type="radio" name="my-input" id="no">' +
                '       <label for="no">' + emp['excursion'][i].answerNo + '</label>' +
                '       <a href="" class="save_button">' + emp['excursion'][i].button +'</a>' +
                '   </form>' +
                '</div>'
            );
        }
    });
}


function coments() {
    $.getJSON('../json/forum_info.json', function (emp) {
        for (var i = 0; i < emp['coments'].length; i++) {
            $('#coments').append('<article>' +
                '   <img src="' + emp['coments'][i].profileImg + '">' +
                '   <div class="comment">' +
                '       <p class="username">' + emp['coments'][i].username + '</p>'+
                '       <p>' + emp['coments'][i].comment + '</p>'+
                '   </div>'+
                '   <p class="answer"><a href="" data-toggle="modal" data-target="#addcoment-forum">' + emp['coments'][i].answer + '</a></p>' +
                '</article>'
            );
        }
    });
}