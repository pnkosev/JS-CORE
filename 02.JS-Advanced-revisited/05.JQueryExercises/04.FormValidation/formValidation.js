function validate() {
    $('#company').change(checkedBox);

    function checkedBox() {
        if (this.checked) {
            $('#companyInfo').css('display', 'block');
        } else {
            $('#companyInfo').css('display', 'none');
        }
    }

    $('#submit').click(submitForm);

    function submitForm(e) {
        e.preventDefault();

        const username = $('#username').val();
        const email = $('#email').val();
        const password = $('#password').val();
        const repeatPass = $('#confirm-password').val();
        const company = $('#company');
        let isAllValid = true;

        if (validateForm()) {
            $('#valid').css('display', 'block');
        } else {
            $('#valid').css('display', 'none');
        }

        function validateForm() {

            if (username.length < 3 || username.length > 20) {
                $('#username').css('border', '2px solid red');
                isAllValid = false;
            } else {
                $('#username').css('border', 'none');
            }

            if (!email.includes('@') && !email.includes('.')) {
                $('#email').css('border', '2px solid red');
                isAllValid = false;
            } else {
                $('#email').css('border', 'none');
            }

            if (password.length < 5 || password.length > 15) {
                $('#password').css('border', '2px solid red');
                isAllValid = false;
            } else {
                $('#password').css('border', 'none');
            }

            if (repeatPass.length < 5 || repeatPass.length > 15) {
                $('#confirm-password').css('border', '2px solid red');
                isAllValid = false;
            } else {
                $('#confirm-password').css('border', 'none');
            }

            if (password !== repeatPass) {
                $('#password').css('border', '2px solid red');
                $('#confirm-password').css('border', '2px solid red');
                isAllValid = false;
            }

            if (company.is(':checked')) {
                if ($('#companyNumber').val() < 1000 || $('#companyNumber').val() > 9999) {
                    $('#companyNumber').css('border', '2px solid red');
                    isAllValid = false;
                } else {
                    $('#companyNumber').css('border', 'none');
                }
            }
            return isAllValid;
        }
    }
}
