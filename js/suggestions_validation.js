$(document).ready(function() {

    const form = document.getElementById('suggestions');
    const inputs = document.querySelectorAll('#suggestions');


    const mapPattern = new Map()
    mapPattern.set("name", "^[a-zA-ZÀ-ÿ\\s]{4,29}$")
    mapPattern.set("mail", "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,10}$")
    mapPattern.set("text", "^[a-zA-Z0-9.,À-ÿ\\s]{12,250}$")

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


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        Swal.fire({
            icon: 'success',
            title: '¡Su sugerencia ha sido enviada correctamente!',
            showConfirmButton: false,
            timer: 1500
        })

    });



});

