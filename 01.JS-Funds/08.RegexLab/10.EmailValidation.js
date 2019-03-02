function emailValidation(input) {
    let validation = /^[A-Za-z0-9]+@[a-z]+.[a-z]+$/;
    if (validation.test(input)) {
        console.log("Valid");
    } else {
        console.log("Invalid");
    }
}
emailValidation('invalid@emai1.bg');