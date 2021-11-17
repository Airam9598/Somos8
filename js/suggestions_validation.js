
$(function() {


    $("form[name='suggestion-form']").validate({
        rules: {
            name: "required",

            email: {

                required: true,

                email: true

            },

            propose: "required",

        },

        messages: {

            name: "Por favor, introduzca un nombre de usuario válido",

            email: "Por favor, introduzca una dirección de correo electrónico válida",


            propose: "Por favor, añada una propuesta válida"

        },

        submitHandler: function(form) {

            form.submit();

        }

    });

});