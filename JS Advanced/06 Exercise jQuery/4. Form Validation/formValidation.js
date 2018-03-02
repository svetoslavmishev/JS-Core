function validate() {
    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPass = $('#confirm-password');
    let checkboxBtn = $('#company');
    let companyInfo = $('#companyInfo');
    let companyNumber = $('#companyNumber');
    let submitButton = $('#submit');
    let validNotification = $('#valid');
    let isValid = false;

    checkboxBtn.on('change', function () {
        if (checkboxBtn.is(":checked")) {
            companyInfo.css('display', 'block');
        } else {
            companyInfo.css('display', 'none');
        }
    });

    submitButton.on('click', function (event) {
        event.preventDefault();
        validateAllForm();

        if (isValid) {
            validNotification.css('display', 'block');
        } else {
            validNotification.css('display', 'none');
        }

        isValid = true;
    });

    function validateAllForm() {
        let usernameRgx = /^[A-Za-z0-9]{3,20}$/g;
        let passwordRgx = /^\w{5,15}$/g;
        let confirmPasswordRgx = /^\w{5,15}$/g;
        let emailRgx = /^.*@.*\..*$/g;

        validateFields(username, usernameRgx);
        validateFields(email, emailRgx);

        if (password.val() === confirmPass.val()) {
            validateFields(password, passwordRgx);
            validateFields(confirmPass, confirmPasswordRgx);
        } else {
            password.css('border', 'solid red');
            confirmPass.css('border', 'solid red');
            isValid = false;
        }

        if (checkboxBtn.is(':checked')) {
            let comValue = Number(companyNumber.val());
            if (comValue >= 1000 && comValue <= 9999) {
                companyNumber.css('border', 'none');
            } else {
                companyNumber.css('border', 'solid red');
                isValid = false;
            }
        }
    }

    function validateFields(input, regex) {
        if (regex.test(input.val())) {
            input.css('border', 'none');
            isValid = true;
        } else {
            input.css('border', 'solid red');
            isValid = false;
        }
    }
}