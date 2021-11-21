$(document).ready(function() {
    function action(e){
        document.getElementById('title').innerText=this.childNodes[1].textContent;
        for(var i=0; i< $('.card-body').children('a').length;i++){
            if($('.card-body').children('a')[i].href.includes("&")){
                $('.card-body').children('a')[i].href=$('.card-body').children('a')[i].href.substr(0,$('.card-body').children('a')[i].href.indexOf("&"));
            }
            $('.card-body').children('a')[i].href=$('.card-body').children('a')[i].href+"&island="+this.childNodes[1].textContent
        }
    }
    const items = Object.values(document.getElementsByClassName('isla'));
    items.forEach(item => {
        item.addEventListener("click", action);
    });

});