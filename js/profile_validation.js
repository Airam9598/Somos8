$(document).ready(function() {
    const form = document.getElementById('profiles');
    const inputs = document.querySelectorAll('#profiles input');
    const mapPattern = new Map()
    mapPattern.set("psw2", '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}')
    mapPattern.set("psw", '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}')

    const validateForm = (e) => {
        let prop = e.target.name
        if(document.getElementById(e.target.id).value.length >0) {
            validateField(mapPattern.get(prop), e.target, e.target.id)
        }
    }

    const validateField = (pattern, input, field) => {
        if(new RegExp(pattern).test(input.value)) {
            document.getElementById(field).classList.remove("is-invalid","text-danger", "border" ,"border-danger");
            document.getElementById(field).classList.add("is-valid", "text-success", "border", "border-success");
            document.getElementById(`${field}-error`).style.display = 'none';
            if (document.getElementById('psw').value != "" && document.getElementById('psw2').value != "") {
                if (document.getElementById('psw').value == document.getElementById('psw2').value) {
                    document.getElementById(field).classList.remove('is-valid', 'text-success', "border", "border-success");
                    document.getElementById(field).classList.add('is-invalid', 'text-danger', "border", "border-danger");
                    document.getElementById(`${field}-error`).innerHTML = "La contraseñas no pueden coincidir";
                    document.getElementById(`${field}-error`).style.display = 'block';
                }else{
                    document.getElementById(`psw-error`).style.display = "none";
                    document.getElementById(`psw2-error`).style.display = "none";
                }
            }
        } else {
            document.getElementById(field).classList.remove('is-valid', 'text-success', "border", "border-success");
            document.getElementById(field).classList.add('is-invalid', 'text-danger', "border", "border-danger");
            document.getElementById(`${field}-error`).innerHTML="La contraseña debe contener al menos un número, una letra mayúscula y minúscula y más de 6 carácteres";
            document.getElementById(`${field}-error`).style.display = 'block';
        }
    }


    inputs.forEach((input) => {
        input.addEventListener('keyup', validateForm);
        input.addEventListener('blur', validateForm);
    });

    function updateimage(e){
        var file=e.target.files[0];
        var reader  = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e)  {
            document.getElementById('profile_image').src = e.target.result;
        }
    }

    document.getElementById('img-change').addEventListener("change", updateimage);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        Swal.fire({
            icon: 'success',
            title: '¡Su contraseña se ha cambiado!',
            showConfirmButton: false,
            timer: 1500
        })

    });
});