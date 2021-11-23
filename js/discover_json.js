
$(document).ready(function () {
    setInterval(loaddata, 3000);
    function loaddata() {
        if ($("#categories").length > 0) {
            discover();
        } else if ($("#discover_categories").length > 0) {
            discover_categories();
        } else if ($("#discover_info").length > 0) {
            discover_info();
        }
    }
    loaddata();
});

function discover(){
    $.getJSON('../json/discover.json', function (emp) {
        if($('#categories').children("article").length != emp["main"].length)
        {
            $('#categories').children("article").remove();
            for (var i = 0; i < emp["main"].length; i++) {
                $('#categories').append('<article class="card">\n' +
                    '<div class="card-body">\n' +
                    '   <img src="' + emp["main"][i].img + '">\n' +
                    '   <h5 class="card-title">' + emp["main"][i].title + '</h5>\n' +
                    '   <a class="btn btn-primary" href="' + emp["main"][i].url + '">Ver</a>\n' +
                    '</div>\n' +
                    '</article>');
            }
        }
    });
}

function discover_categories(){
    var data="restaurants";
    if(window.location.href.toString().includes("restaurant")){
        data="restaurants";
    }else if(window.location.href.toString().includes("party")){
        data="partys";
    }else if(window.location.href.toString().includes("sites")){
        data="sites";
    }
    var island="null";
    if(window.location.href.toString().includes("island")){
        island= window.location.href.toString().substr(window.location.href.toString().indexOf("island=")+7,window.location.href.toString().length);
        island=decodeURI(island);
    }

    $.getJSON('../json/discover.json', function (emp) {
        if($('#info').children("article").length != emp[data].length-1) {
            $('#info').children("article").remove();
            $('#info').children("p").remove();
            $('#info').append('<p>' + emp[data][0].title + '</p>');
            for (var i = 1; i < emp[data].length; i++) {
                if (island == emp[data][i].island || island == "Todas") {
                    $('#info').append('<article class="card">\n' +
                        '<div class="card-body">\n' +
                        '<img src="' + emp[data][i].img + '">\n' +
                        '<h5 class="card-title">' + emp[data][i].title + '</h5>\n' +
                        '<a class="btn btn-primary" href="' + emp[data][i].url + '$id=' + emp[data][i].id + '">Más información</a>\n' +
                        '</div>\n' +
                        '</article>');
                }
            }
        }
    });
}

function discover_info(){
    var data="restaurants";
    if(window.location.href.toString().includes("restaurant")){
        data="restaurants";
    }else if(window.location.href.toString().includes("party")){
        data="partys";
    }else if(window.location.href.toString().includes("sites")){
        data="sites";
    }
    var id="null";
    if(window.location.href.toString().includes("id")){
        id= window.location.href.toString().substr(window.location.href.toString().indexOf("id=")+3,window.location.href.toString().length);
    }

    $.getJSON('../json/discover.json', function (emp) {
        console.log($('#discover_info').children("img").length)
        if($('#discover_info').children("img").length ==0) {
            $('#info').append('<p >' + emp[data][0].title + '</p>');
            for (var i = 1; i < emp[data].length; i++) {
                if (id == emp[data][i].id) {
                    $('#discover_info').append('<p class="title">' + emp[data][i].title + '</p>');
                    $('#discover_info').append('<img src="' + emp[data][i].img + '">');
                    $('#discover_info').append('<p class="info"> ' + emp[data][i].info + '</p>');
                    $('#discover_info').append('<a href="' + emp[data][i].exturl + '" class="more_info">Más información</a>');
                    $('#discover_info').append('<p class="coment_title">Comentarios</p>\n' +
                        '                            <section class="coments">\n' +
                        '                                <div class="modal" id="addcoment" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"\n' +
                        '                                     aria-hidden="true">\n' +
                        '                                    <div class="modal-dialog cascading-modal modal-sm" role="document">\n' +
                        '                                        <div class="modal-content" style="background: var(--yellow)">\n' +
                        '                                            <div class="modal-header" style="justify-content: center;border: none;flex-wrap: wrap">\n' +
                        '                                                <img src="../assets/profile.png" alt="avatar" class="rounded-square img-responsive mt-0" style="width: 43%" >\n' +
                        '                                                <h5 class="mt-1 mb-2 w-100 text-center d-block" >User Test 1</h5>\n' +
                        '                                            </div>\n' +
                        '                                            <div class="modal-body text-center mb-1">\n' +
                        '\n' +
                        '                                                <div class="md-form ml-0 mr-0">\n' +
                        '                                                    <label for="coment">Valoración:</label>\n' +
                        '                                                    <div class="star-rating" style="position: unset; margin:auto"><a href="#">★</a><a href="#">★</a><a href="#">★</a><a href="#">★</a><a href="#">★</a></div>\n' +
                        '                                                    <input type="hidden" name="stars" id="stars">\n' +
                        '                                                    <label for="coment">Comentario:</label>\n' +
                        '                                                    <textarea rows="4" style="width: 100%;padding: 5px; resize: none"  id="coment" class="ml-0"></textarea>\n' +
                        '                                                </div>\n' +
                        '\n' +
                        '                                                <div class="text-center mt-4">\n' +
                        '                                                    <button class="btn btn-cyan mt-1">Comentar</button>\n' +
                        '                                                </div>\n' +
                        '                                            </div>\n' +
                        '\n' +
                        '                                        </div>\n' +
                        '                                    </div>\n' +
                        '                                </div>\n' +
                        '                                <button class="addbutton" data-toggle="modal" data-target="#addcoment">Añadir comentario</button>\n' +
                        '                                <article>\n' +
                        '                                    <img src="../assets/profile.png">\n' +
                        '                                    <p class="username"> Usuario test 1</p>\n' +
                        '                                    <div class="star-rating"><a href="#">★</a><a href="#">★</a><a href="#">★</a><a href="#">★</a><a href="#">★</a></div>\n' +
                        '                                    <p class="text"> Este sitio es increible, buenos precios y buena calidad.</p>\n' +
                        '                                </article>\n' +
                        '                                <article>\n' +
                        '                                    <img src="../assets/profile.png">\n' +
                        '                                    <p class="username"> Usuario test 1</p>\n' +
                        '                                    <div class="star-rating"><a href="#">★</a><a href="#">★</a><a href="#">★</a><a href="#">★</a><a href="#">★</a></div>\n' +
                        '                                    <p class="text"> Este sitio es increible, buenos precios y buena calidad.</p>\n' +
                        '                                </article>\n' +
                        '                                <article>\n' +
                        '                                    <img src="../assets/profile.png">\n' +
                        '                                    <p class="username"> Usuario test 1</p>\n' +
                        '                                    <div class="star-rating"><a href="#">★</a><a href="#">★</a><a href="#">★</a><a href="#">★</a><a href="#">★</a></div>\n' +
                        '                                    <p class="text"> Este sitio es increible, buenos precios y buena calidad.</p>\n' +
                        '                                </article>\n' +
                        '                            </section>');
                    break;
                }
            }
        }
    });
}