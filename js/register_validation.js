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
    if(pattern.test(input.value)){
        document.getElementById(field).classList.remove('is-invalid');
        document.getElementById(field).classList.add('is-valid');
        if(field =="password-register" || field =="password-confirm"){
            document.getElementById('error').style.display="none";
            if(document.getElementById('password-register').value !="" && document.getElementById('password-confirm').value !=""){
                if (document.getElementById('password-register').value != document.getElementById('password-confirm').value) {
                    document.getElementById(field).classList.remove('is-valid');
                    document.getElementById(field).classList.add('is-invalid');
                    document.getElementById('error2').style.display="block";
                }else{
                    document.getElementById('error2').style.display="none";
                }
            }
        }
    } else{
        document.getElementById(field).classList.remove('is-valid');
        document.getElementById(field).classList.add('is-invalid');
        if(field =="password-register" || field =="password-confirm" ){
            document.getElementById('error').style.display="block";
            document.getElementById('error2').style.display="none";
        }
    }
}


inputs.forEach((input) =>{
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);
});

