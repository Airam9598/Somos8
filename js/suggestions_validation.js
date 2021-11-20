$(document).ready(function() {
    const form = document.getElementById('suggestions');
    const inputs = document.querySelectorAll('#suggestions');

    const pattern = {
        name: /^[a-zA-ZÀ-ÿ\s]{4,29}$/,
        email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,10}$/,
        text: /^[a-zA-Z0-9.,À-ÿ\s]{12,250}$/
    }


    const validateForm = (e) => {
        switch (e.target.name) {
            case "name":
                validateField(pattern.name, e.target, 'name');
                break;
            case "mail":
                validateField(pattern.email, e.target, 'mail-suggestion');
                break;
            case "text":
                validateField(pattern.text, e.target, 'textarea');
                break;
        }
    }

    const validateField = (pattern, input, field) => {
        if (pattern.test(input.value)) {
            document.getElementById(field).classList.remove('is-invalid');
            document.getElementById(field).classList.add('is-valid');
            document.getElementById(field).classList.remove('text-danger');
            document.getElementById(field).classList.add('text-success');
            if (field == "name") {
                document.getElementById('name-error').innerHTML = "";
            } else if (field == "mail-suggestion") {
                document.getElementById('mail-error').innerHTML = "";
            } else if (field == "textarea") {
                document.getElementById('suggestion-error').innerHTML = "";
            }

        } else {
            document.getElementById(field).classList.remove('is-valid');
            document.getElementById(field).classList.add('is-invalid');
            document.getElementById(field).classList.remove('text-success');
            document.getElementById(field).classList.add('text-danger');
            if (field == "name") {
                document.getElementById('name-error').innerHTML = "Solo puede contener letras y espacios. De 4-29 caracteres.";
                document.getElementById('name-error').style.display = "block";
            } else if (field == "mail-suggestion") {
                document.getElementById('mail-error').innerHTML = "La dirección de correo no es válida. Ej: example@ulpgc.es";
                document.getElementById('mail-error').style.display = "block";
            } else if (field == "textarea") {
                document.getElementById('suggestion-error').innerHTML = "Texto no válido. Inserte de 12-250 caracteres.";
                document.getElementById('suggestion-error').style.display = "block";
            }
        }
    }


    inputs.forEach((input) => {
        input.addEventListener('keyup', validateForm);
        input.addEventListener('blur', validateForm);
    });
});


