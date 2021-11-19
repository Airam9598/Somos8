$(document).ready(function() {

    function action(e){
        document.getElementById('title').innerText=this.childNodes[1].textContent;
    }
    const items = Object.values(document.getElementsByClassName('isla'));
    items.forEach(item => {
        console.log(item.childNodes[1]);
        item.addEventListener("click", action);
    });

});