$(document).ready(function() {

    const form = document.getElementById('registers');
    const inputs = document.querySelectorAll('#registers input');
    const pattern = {
        psw: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}/,
        email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,10}$/,
        name: /^[a-zA-ZÀ-ÿ\s]{2,29}$/
    }

    const validateForm = (e) => {
        switch (e.target.name) {
            case "mail":
                validateField(pattern.email, e.target, 'mail-register');
                break;
            case "psw":
                validateField(pattern.psw, e.target, 'password-register');
                break;
            case "psw2":
                validateField(pattern.psw, e.target, 'password-confirm');
                break;
            case "name":
                validateField(pattern.name, e.target, 'name-register');
                break;
        }
    }

    const validateField = (pattern, input, field) => {
        if (pattern.test(input.value)) {
            document.getElementById(field).classList.remove('is-invalid');
            document.getElementById(field).classList.add('is-valid');
            if (field == "password-register") {
                document.getElementById('psw-error').style.display = "none";
                if (document.getElementById('password-register').value != "" && document.getElementById('password-confirm').value != "") {
                    if (document.getElementById('password-register').value != document.getElementById('password-confirm').value) {
                        document.getElementById(field).classList.remove('is-valid');
                        document.getElementById(field).classList.add('is-invalid');
                        document.getElementById('psw-error').innerHTML = "Las contraseñas no coinciden";
                        document.getElementById('psw-error').style.display = "block";
                    }
                }
            } else if(field == "password-confirm"){
                document.getElementById('psw2-error').style.display = "none";
                if (document.getElementById('password-register').value != "" && document.getElementById('password-confirm').value != "") {
                    if (document.getElementById('password-register').value != document.getElementById('password-confirm').value) {
                        document.getElementById(field).classList.remove('is-valid');
                        document.getElementById(field).classList.add('is-invalid');
                        document.getElementById('psw2-error').innerHTML = "Las contraseñas no coinciden";
                        document.getElementById('psw2-error').style.display = "block";
                    }
                }
            }else if (field == "name-register") {
                var noValido = /\s/;
                if (noValido.test(document.getElementById('name-register').value)) {
                    document.getElementById(field).classList.remove('is-valid');
                    document.getElementById(field).classList.add('is-invalid');
                    document.getElementById('error').innerHTML = "El nombre de usuario no puede contener espacios";
                    document.getElementById('error').style.display = "block";
                }
            }else if (field == "mail-register") {
                document.getElementById('maillogin-error').style.display="none";
            }
        } else {
            document.getElementById(field).classList.remove('is-valid');
            document.getElementById(field).classList.add('is-invalid');
            if (field == "password-register") {
                document.getElementById('psw-error').innerHTML = "La contraseña debe contener al menos un número, una letra mayúscula y minúscula y más de 6 carácteres";
                document.getElementById('psw-error').style.display = "block";
            } else if(field == "password-confirm"){
                document.getElementById('psw2-error').innerHTML = "La contraseña debe contener al menos un número, una letra mayúscula y minúscula y más de 6 carácteres";
                document.getElementById('psw2-error').style.display = "block";
            } else if (field == "mail-register") {
                document.getElementById('maillogin-error').innerHTML = "La dirección de correo no es válida. Ej: example@ulpgc.es";
                document.getElementById('maillogin-error').style.display = "block";
            }
        }
    }

    inputs.forEach((input) => {
        input.addEventListener('keyup', validateForm);
        input.addEventListener('blur', validateForm);
    });
});

