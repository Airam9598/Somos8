$(document).ready(function() {
    const form = document.getElementById('logins');
    const inputs = document.querySelectorAll('#logins input');
    const pattern = {
        psw: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}/,
        email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,10}$/
    }

    const validateForm = (e) => {
        switch (e.target.name) {
            case "mail":
                validateField(pattern.email, e.target, 'email-login');
                break;
            case "psw":
                validateField(pattern.psw, e.target, 'password-login');
                break;
        }
    }

    const validateField = (pattern, input, field) => {
        if (pattern.test(input.value)) {
            document.getElementById(field).classList.remove('is-invalid');
            document.getElementById(field).classList.add('is-valid');
            document.getElementById(field).classList.remove('text-danger');
            document.getElementById(field).classList.add('text-success');
            if (field == "email-login") {
                document.getElementById('maillogin-error').innerHTML = "";
            }

        } else {
            document.getElementById(field).classList.remove('is-valid');
            document.getElementById(field).classList.add('is-invalid');
            document.getElementById(field).classList.remove('text-success');
            document.getElementById(field).classList.add('text-danger');
            if (field == "email-login") {
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


