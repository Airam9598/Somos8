$(document).ready(function() {
    const form = document.getElementById('profiles');
    const inputs = document.querySelectorAll('#profiles input');
    const pattern = {
        psw: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}/
    }

    const validateForm = (e) => {
        switch (e.target.name) {
            case "psw":
                validateField(pattern.psw, e.target, 'current-password');
                break;
            case "psw2":
                validateField(pattern.psw, e.target, 'new-password');
                break;
        }
    }

    const validateField = (pattern, input, field) => {
        if (pattern.test(input.value)) {
            document.getElementById(field).classList.remove('is-invalid');
            document.getElementById(field).classList.add('is-valid');
            if (field == "current-password" || field == "new-password") {
                document.getElementById('error').style.display = "none";
                if (document.getElementById('current-password').value != "" && document.getElementById('new-password').value != "") {
                    if (document.getElementById('current-password').value == document.getElementById('new-password').value) {
                        document.getElementById(field).classList.remove('is-valid');
                        document.getElementById(field).classList.add('is-invalid');
                        document.getElementById('error').innerHTML = "Las contraseñas no pueden coincidir";
                        document.getElementById('error').style.display = "block";
                    }
                }
            }
        } else {
            document.getElementById(field).classList.remove('is-valid');
            document.getElementById(field).classList.add('is-invalid');
            if (field == "current-password" || field == "new-password") {
                document.getElementById('error').innerHTML = "La contraseña debe contener al menos un número, una letra mayúscula y minúscula y más de 6 carácteres";
                document.getElementById('error').style.display = "block";
            }
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
});