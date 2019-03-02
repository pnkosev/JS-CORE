function validate() {
    let userPattern = /^[A-Za-z\d]{3,20}$/g;
    let emailPattern = /^.*?@.*?\..*$/g;
    let passwordPattern = /^\w{5,15}$/g;

    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPass = $('#confirm-password');
    let companyBox = $('#company');
    let companyInfo = $('#companyInfo');
    let companyNum = $('#companyNumber');
    let submitBtn = $('#submit');
    let validDiv = $('#valid');

    let isAllValid = true;

    companyBox.on('change', showHide);

    submitBtn.on('click', function (ev) {
        ev.preventDefault();
        validateForm();
        validDiv.css('display', isAllValid ? 'block' : 'none');
        isAllValid = true;
    });

    function validateForm() {
        validateWithRegex(username, userPattern);
        validateWithRegex(email, emailPattern);

        if ($('#password').val() === $('#confirm-password').val()) {
            validateWithRegex(password, passwordPattern);
            validateWithRegex(confirmPass, passwordPattern);
        } else {
            password.css('border-color', 'red');
            confirmPass.css('border-color', 'red');
            isAllValid = false;
        }
        if (companyBox.is(':checked')) {
            validateCompanyNum();
        }
    }

    function validateCompanyNum() {
        let companyValue = Number(companyNum.val());
        if (companyValue >= 1000 && companyValue <= 9999) {
            companyNum.css('border', 'none');
        } else {
            companyNum.css('border-color', 'red');
            isAllValid = false;
        }
    }

    function validateWithRegex(input, pattern) {
        if (input.val().match(pattern)) {
            input.css('border', 'none');
        } else {
            input.css('border-color', 'red');
            isAllValid = false;
        }
    }

    function showHide() {
        if (companyBox.is(':checked')) {
            companyInfo.css('display', 'block');
        } else {
            companyInfo.css('display', 'none');
        }
    }
}

// function validate() {
//     $('#company').on('change', showHideCompany);

//     $('#submit').on('click', function (ev) {
//         ev.preventDefault();
//         let usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
//         let passwordRegex = /^\w{5,15}$/;
//         let emailRegex = /@.*\./;
//         let companyNumberRegex = /^[1-9]{1}[0-9]{3}$/;

//         let allFieldsValid = true;

//         if($('#username').val().match(usernameRegex)){
//             $('#username').css('border', 'none');
//         } else {
//             $('#username').css('border-color', 'red');
//             allFieldsValid = false;
//         }

//         if($('#password').val().match(passwordRegex)){
//             $('#password').css('border', 'none');
//         } else {
//             $('#password').css('border-color', 'red');
//             allFieldsValid = false;
//         }

//         if($('#email').val().match(emailRegex)){
//             $('#email').css('border', 'none');
//         } else {
//             $('#email').css('border-color', 'red');
//             allFieldsValid = false;
//         }

//         if($('#confirm-password').val().match(passwordRegex) && $('#confirm-password').val().localeCompare($('#password').val()) == 0){
//             $('#confirm-password').css('border', 'none');
//         } else {
//             $('#confirm-password').css('border-color', 'red');
//             allFieldsValid = false;
//         }

//         if($('#company').is(':checked')){
//             if($('#companyNumber').val().match(companyNumberRegex)){
//                 $('#companyNumber').css('border', 'none');
//             } else {
//                 $('#companyNumber').css('border-color', 'red');
//                 allFieldsValid = false;
//             }
//         }

//         if(allFieldsValid){
//             $('#valid').css('display', 'block');
//         } else {
//             $('#valid').css('display', 'none');
//         }

//     });

//     function showHideCompany() {
//             if($(this).is(':checked')){
//                 $('#companyInfo').css('display', 'block');
//             } else {
//                 $('#companyInfo').css('display', 'none')
//             }
//     }
// }