let tabNam = 'general'
$(document).ready(function () {
    window.onload = function() {
        setInterval(checkData, 3000);
    }
    firstLoad()
});

/**First load for general section**/
function firstLoad(){
    loaddata(tabNam)
    console.log("firstLoad")
}

function checkData(){
    if (tabNam === 'my_excursions'){
        if(tabNam)
        console.log("Han pasado 3 segundos en mis excursiones...")
        loaddata(tabNam)
    }else if(tabNam === 'my_posts'){
        console.log("Han pasado 3 segundos en mis post...")
        loaddata(tabNam)
    }else{
        console.log("Han pasado 3 segundos en mi general checkData...")
        loaddata(tabNam)
    }
}
function openTab(evt, tabName) {
    if (tabName === 'my_excursions'){
        tabNam = tabName
        loaddata(tabName)
    }else if(tabName === 'my_post'){
        tabNam = tabName
        loaddata(tabName)
    }else{
        tabNam = tabName
        loaddata(tabName)
    }

    var i, x, tablinks;
    x = document.getElementsByClassName("city");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " w3-red";
    tab = document.getElementById(tabName);
    if (tab.className === 'w3-container w3-border city add') {
        document.getElementById("searcher").style.display = 'none';
    } else {
        document.getElementById("searcher").style.display = 'block';
    }
}

function loaddata(tabName) {
    $.getJSON('../json/forum.json', function (emp){
        if (tabName==='general' && $('#general-table').children("tr").length != emp["entry-general"].length)  {
            general(tabName)
        }else if(tabName==='my_excursions' && $('#myexcursions-table').children("tr").length != emp["entry-myExcursions"].length){
            myExcursions(tabName)
        }else if(tabName==='my_posts' && $('#myposts-table').children("tr").length != emp["entry-myPosts"].length) {
            console.log("esto es una prueba")
            myPost(tabName)
        }
    });
}


function general(tabName){
    $.getJSON('../json/forum.json', function (emp) {
        $('#general-table').children("tr").remove();
        for (var i = 0; i < emp["entry-general"].length; i++) {
            $('#general-table').append('   <tr>'+
                '       <td>'+
                '           <h3 class="h5 mb-0"><a href="forum_info.html">' + emp['entry-general'][i].name + '</a></h3>' +
                '           <p class="mb-0">' + emp['entry-general'][i].description + '</p>' +
                '       </td>' +
                '       <td>' + emp['entry-general'][i].comment  +'</td>' +
                '       <td>' +
                '           <h6 class="mb-0"><a href="#">' + emp['entry-general'][i].organizer + '</a></h6>'+
                '           <div>' + emp['entry-general'][i].date + '</div>'+
                '           <div>' + emp['entry-general'][i].time + '</div>\n'+
                '       </td>' +
                '       <td>' +
                '           <h6 class="mb-0"><a href="#">' + emp['entry-general'][i].lastComment + '</a></h6>'+
                '           <div>' + emp['entry-general'][i].dateComment + '</div>'+
                '           <div>' + emp['entry-general'][i].timeComment + '</div>'+
                '       </td>' +
                '   </tr>'
            );

        }
    });
}


function myExcursions(tabName){
    $.getJSON('../json/forum.json', function (emp) {
        $('#myexcursions-table').children("tr").remove();
        for (var i = 0; i < emp["entry-myExcursions"].length; i++) {
            $('#myexcursions-table').append('   <tr>'+
                '       <td>'+
                '           <h3 class="h5 mb-0"><a href="forum_info.html">' + emp['entry-myExcursions'][i].name + '</a></h3>' +
                '           <p class="mb-0">' + emp['entry-myExcursions'][i].description + '</p>' +
                '       </td>' +
                '       <td>' + emp['entry-myExcursions'][i].comment  +'</td>' +
                '       <td>' + emp['entry-myExcursions'][i].assistants  +'</td>' +
                '       <td>\n' +
                '           <h6 class="mb-0"><a href="#">' + emp['entry-myExcursions'][i].organizer + '</a></h6>'+
                '           <div>' + emp['entry-myExcursions'][i].date + '</div>'+
                '           <div>' + emp['entry-myExcursions'][i].time + '</div>\n'+
                '       </td>' +
                '   </tr>'
            );

        }
    });
}

function myPost(tabName){
    $.getJSON('../json/forum.json', function (emp) {
        $('#myposts-table').children("tr").remove();
        for (var i = 0; i < emp["entry-myPosts"].length; i++) {
            $('#myposts-table').append('   <tr>' +
                '       <td>'+
                '           <h3 class="h5 mb-0"><a href="forum_info.html">' + emp['entry-myPosts'][i].name + '</a></h3>' +
                '           <p class="mb-0">' + emp['entry-myPosts'][i].description + '</p>' +
                '       </td>' +
                '       <td>' + emp['entry-myPosts'][i].comment  +'</td>' +
                '       <td>' + emp['entry-myPosts'][i].assistants  +'</td>' +
                '       <td>' +
                '           <h6 class="mb-0"><a href="#">' + emp['entry-myPosts'][i].lastComment + '</a></h6>'+
                '           <div>' + emp['entry-myPosts'][i].dateComment + '</div>'+
                '           <div>' + emp['entry-myPosts'][i].timeComment + '</div>'+
                '       </td>' +
                '   </tr>'
            );

        }
    });
}
