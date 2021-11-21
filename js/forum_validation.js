$(document).ready(function() {
    const form = document.getElementById('forumform');
    const inputs = document.querySelectorAll('#forumform');

    const mapPattern = new Map()
    mapPattern.set("place", "^[a-zA-Z.,À-ÿ\\s]{4,30}$")

    mapPattern.set("time", "^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$")
    mapPattern.set("material", "^[a-zA-Z.,0-9À-ÿ\\s]{5,150}$")
    mapPattern.set("description", "^[a-zA-Z0-9.,À-ÿ\\s]{10,320}$")


    const validateForm = (e) => {
        var prop = e.target.name
        validateField(mapPattern.get(prop), e.target, e.target.id)
    }

    const validateField = (pattern, input, field) => {
        if(new RegExp(pattern).test(input.value)) {
            document.getElementById(field).classList.remove("is-invalid","text-danger", "border" ,"border-danger");
            document.getElementById(field).classList.add("is-valid", "text-success", "border", "border-success");
            document.getElementById(`${field}-error`).style.display = 'none';

        } else{
            document.getElementById(field).classList.remove('is-valid', 'text-success', "border", "border-success");
            document.getElementById(field).classList.add('is-invalid', 'text-danger', "border", "border-danger");
            document.getElementById(`${field}-error`).style.display = 'block';
        }
    }

    inputs.forEach((input) =>{
        input.addEventListener('keyup', validateForm);
        input.addEventListener('blur', validateForm);
    });

    function updateimage(e){
        const file = e.target.files[0];
        const reader  = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e)  {
            document.getElementById('forum_image').src = e.target.result;
        }
    }

    document.getElementById('img-change2').addEventListener("change", updateimage);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        Swal.fire({
            icon: 'success',
            title: '¡Su excursión ha sido publicada correctamente!',
            showConfirmButton: false,
            timer: 1500
        })

    });

});