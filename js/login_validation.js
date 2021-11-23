$(document).ready(function() {
    const form = document.getElementById('logins');
    const inputs = document.querySelectorAll('#logins input');

    const mapPattern = new Map()
    mapPattern.set("mail", '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,10}$')
    mapPattern.set("psw", '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}')

    const validateForm = (e) => {
        var prop = e.target.name
        if(document.getElementById(e.target.id).value.length >0) {
            validateField(mapPattern.get(prop), e.target, e.target.id)
        }
    }

    const validateField = (pattern, input, field) => {
        if(new RegExp(pattern).test(input.value)) {
            document.getElementById(field).classList.remove("is-invalid","text-danger", "border" ,"border-danger");
            document.getElementById(field).classList.add("is-valid", "text-success", "border", "border-success");
            document.getElementById(`${field}-error`).style.display = 'none';

        } else {
            document.getElementById(field).classList.remove('is-valid', 'text-success', "border", "border-success");
            document.getElementById(field).classList.add('is-invalid', 'text-danger', "border", "border-danger");
            document.getElementById(`${field}-error`).style.display = 'block';
        }
    }

    inputs.forEach((input) => {
        input.addEventListener('keyup', validateForm);
        input.addEventListener('blur', validateForm);
    });
});


