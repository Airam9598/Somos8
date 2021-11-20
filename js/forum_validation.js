$(document).ready(function() {
    const form = document.getElementById('forumform');
    const inputs = document.querySelectorAll('#forumform');

    const pattern = {
        place: /^[a-zA-Z.,À-ÿ\s]{4,30}$/,
        date: /^\d{2}[/]\d{2}[/]\d{4}$/,
        time: /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/,
        material: /^[a-zA-Z.,0-9À-ÿ\s]{5,150}$/,
        description: /^[a-zA-Z0-9.,À-ÿ\s]{10,320}$/
    }


    const validateForm = (e) => {
        switch (e.target.name) {
            case "place":
                validateField(pattern.place, e.target, 'place');
            break;
            case "date":
                validateField(pattern.date, e.target, 'date');
            break;
            case "time":
                validateField(pattern.time, e.target, 'time');
            break;
            case "material":
                validateField(pattern.material, e.target, 'material');
            break;
            case "description":
                validateField(pattern.description, e.target, 'description');
            break;
        }
    }

    const validateField = (pattern, input, field) => {
        if(pattern.test(input.value)){
            document.getElementById(field).classList.remove('is-invalid');
            document.getElementById(field).classList.add('is-valid');
            document.getElementById(field).classList.remove('text-danger');
            document.getElementById(field).classList.add('text-success');
            if (field == "place") {
                document.getElementById('place-error').innerHTML = "";
            } else if (field == "date") {
                document.getElementById('date-error').innerHTML = "";
            } else if (field == "time") {
                document.getElementById('time-error').innerHTML = "";
            } else if (field == "material") {
                document.getElementById('material-error').innerHTML = "";
            } else if (field == "description") {
                document.getElementById('description-error').innerHTML = "";
            }
        } else{
            document.getElementById(field).classList.remove('is-valid');
            document.getElementById(field).classList.add('is-invalid');
            document.getElementById(field).classList.remove('text-success');
            document.getElementById(field).classList.add('text-danger');
            if (field == "place") {
                document.getElementById('place-error').innerHTML = "El lugar no debe contener caracteres especiales. Máx. de 4-29 caracteres.";
                document.getElementById('place-error').style.display = "block";
            } else if (field == "date") {
                document.getElementById('date-error').innerHTML = "Campo obligatorio*";
                document.getElementById('date-error').style.display = "block";
            } else if (field == "time") {
                document.getElementById('time-error').innerHTML = "Campo obligatorio*";
                document.getElementById('time-error').style.display = "block";
            } else if (field == "material") {
                document.getElementById('material-error').innerHTML = "No debe contener caracteres especiales. Máx. de 5-150 caracteres.";
                document.getElementById('material-error').style.display = "block";
            } else if (field == "description") {
                document.getElementById('description-error').innerHTML = "La descripción no debe contener caracteres especiales. Máx. de 10-320 caracteres.";
                document.getElementById('description-error').style.display = "block";
            }
        }
    }

    inputs.forEach((input) =>{
        input.addEventListener('keyup', validateForm);
        input.addEventListener('blur', validateForm);
    });

    function updateimage(e){
        var file=e.target.files[0];
        var reader  = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e)  {
            document.getElementById('forum_image').src = e.target.result;
        }
    }

    document.getElementById('img-change2').addEventListener("change", updateimage);

});