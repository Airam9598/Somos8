$(document).ready(function() {

    const form = document.getElementById('registers');
    const inputs = document.querySelectorAll('#registers input');

    const mapPattern = new Map()
    mapPattern.set("mail", '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,10}$')
    mapPattern.set("psw2", '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}')
    mapPattern.set("psw", '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}')
    mapPattern.set("name", '^[a-zA-ZÀ-ÿ\\s]{2,29}$')
    mapPattern.set("name2", '\\s+')

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
            if (field.includes("psw")) {
                if (document.getElementById('psw').value != "" && document.getElementById('psw2').value != "") {
                    if (document.getElementById('psw').value != document.getElementById('psw2').value) {
                        document.getElementById(field).classList.remove('is-valid', 'text-success', "border", "border-success");
                        document.getElementById(field).classList.add('is-invalid', 'text-danger', "border", "border-danger");
                        document.getElementById(`${field}-error`).innerHTML = "Las contraseñas no coinciden";
                        document.getElementById(`${field}-error`).style.display = "block";
                    }else{
                        document.getElementById(`psw-error`).style.display = "none";
                        document.getElementById(`psw2-error`).style.display = "none";
                    }
                }
            }else if (field.includes("name")) {
                if (new RegExp(mapPattern.get("name2")).test(input.value)) {
                    document.getElementById(field).classList.remove('is-valid', 'text-success', "border", "border-success");
                    document.getElementById(field).classList.add('is-invalid', 'text-danger', "border", "border-danger");
                    document.getElementById(`${field}-error`).style.display = "block";
                }
            }
        } else {
            document.getElementById(field).classList.remove('is-valid', 'text-success', "border", "border-success");
            document.getElementById(field).classList.add('is-invalid', 'text-danger', "border", "border-danger");
            if (field.includes("psw")) {
                document.getElementById(`${field}-error`).innerHTML = "La contraseña debe contener al menos un número, una letra mayúscula y minúscula y más de 6 carácteres";
            }
            document.getElementById(`${field}-error`).style.display = 'block';
        }
    }

    inputs.forEach((input) => {
        input.addEventListener('keyup', validateForm);
        input.addEventListener('blur', validateForm);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        Swal.fire({
            icon: 'success',
            title: '¡Bienvenid@ a somos8!',
            showConfirmButton: false,
            timer: 1500
        })

    });
});

