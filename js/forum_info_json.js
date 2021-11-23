$(document).ready(function () {
    setInterval(loaddata, 500);
    loaddata()
});


function loaddata() {
    $.getJSON('../json/forum_info.json', function (emp) {
        console.log(emp["excursion"].length)
        console.log($('#excursion').children("article").length )
        if ($('#excursion').children("article").length < 1) {
            excursion();
        } else if ($('#coments').children("article").length != emp["coments"].length){
            coments();
        }
    });
}

function excursion(){
    var data="Excursion";
    var id="null";
    if(window.location.href.toString().includes("id")){
        id= window.location.href.toString().substr(window.location.href.toString().indexOf("id=")+3,window.location.href.toString().length);
    }
    $.getJSON('../json/forum_info.json', function (emp) {
        $('#myexcursions-table').children("article").remove();
        for (var i = 0; i < emp['excursion'].length; i++) {
            if (id == emp['excursion'][i].id){
                $('#excursion').append('<article>' +
                    '   <p class="title">' + emp['excursion'][i].title +'</p>' +
                    '   <img src="' + emp['excursion'][i].image + '">' +
                    '   <div class="exc-info">' +
                    '       <p class="date mb-3">' + emp['excursion'][i].place + '</p>' +
                    '       <p class="date">' + emp['excursion'][i].date + '</p>' +
                    '       <p class="date">' + emp['excursion'][i].time + '</p>' +
                    '       <p class="date">' + emp['excursion'][i].material + '</p>' +
                    '       <p class="description">' + emp['excursion'][i].description + '</p>' +
                    '       <form class="assistant">' +
                    '           <div class="assistant_text">' + emp['excursion'][i].answer + '</div>' +
                    '           <input type="radio" name="my-input" id="yes">' +
                    '           <label for="yes">' + emp['excursion'][i].answerYes + '</label>' +
                    '           <input type="radio" name="my-input" id="no">' +
                    '           <label for="no">' + emp['excursion'][i].answerNo + '</label>' +
                    '           <a href="" class="save_button">' + emp['excursion'][i].button +'</a>' +
                    '       </form>' +
                    '   </div>' +
                    '</article>');
                break;
            }
        }
    });
}


function coments() {
    $.getJSON('../json/forum_info.json', function (emp) {
        for (var i = 0; i < emp['coments'].length; i++) {
            $('#coments').append('<article class="mb-4">' +
                '   <div class="row m-1">' +
                '       <img class="md-2" id="imageForum"" src="' + emp['coments'][i].profileImg + '">' +
                '       <div class="col-lg-10 col-md-12">' +
                '           <p class="username col-12 mt-1">' + emp['coments'][i].username + '</p>'+
                '           <p class="col-12">' + emp['coments'][i].comment + '</p>'+
                '       <p class="answer col-12 mt-3"><a href="" data-toggle="modal" data-target="#addcoment-forum">' + emp['coments'][i].answer + '</a></p>' +
                '       </div>' +
                '   </div>'+
                '</article>'
            );
        }
    });
}