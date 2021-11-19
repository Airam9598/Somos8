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
    if(pattern.test(input.value)){
        document.getElementById(field).classList.remove('is-invalid');
        document.getElementById(field).classList.add('is-valid');
        if(field =="password-login"){
            document.getElementById('error').style.display="none";
        }
    } else{
        document.getElementById(field).classList.remove('is-valid');
        document.getElementById(field).classList.add('is-invalid');
        if(field =="password-login"){
            document.getElementById('error').style.display="block";
        }
    }
}


inputs.forEach((input) =>{
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);
});



