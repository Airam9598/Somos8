const form = document.getElementById('suggestions');
const inputs = document.querySelectorAll('#suggestions input');
const pattern = {
    name: /^[a-zA-ZÀ-ÿ\s]{4,29}$/,
    email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,10}$/
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

        break;
    }
}

const validateField = (pattern, input, field) => {
    if(pattern.test(input.value)){
        document.getElementById(field).classList.remove('is-invalid');
        document.getElementById(field).classList.add('is-valid');
    } else{
        document.getElementById(field).classList.remove('is-valid');
        document.getElementById(field).classList.add('is-invalid');
    }
}


inputs.forEach((input) =>{
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);
});

form.addEventListener('submit', (e) =>{

});


