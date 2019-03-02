class AccountValidator {
    constructor (clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
    }

    get clientId() {
        return this._cliendId;
    }
    set clientId(newClientId) {
        let clientRegEx = /^\d{6}$/;
        if (!newClientId.match(clientRegEx)) {
            throw new TypeError("Client ID must be a 6-digit number");
        }
        this._cliendId = newClientId;
    }

    get email() {
        return this._email;
    }
    set email(newEmail) {
        let emailRegEx = /^\w+@[A-z.]+$/;
        if (!newEmail.match(emailRegEx)) {
            throw new TypeError("Invalid e-mail");
        }
        this._email = newEmail;
    }

    get firstName() {
        return this._firstName;
    }
    set firstName(newFirstName) {
        if (newFirstName.length < 3 || newFirstName.length > 20) {
            throw new TypeError("First name must be between 3 and 20 characters long");
        }
        let firstNameRegEx = /^[A-z]+$/;
        if (!newFirstName.match(firstNameRegEx)) {
            throw new TypeError("First name must contain only Latin characters");
        }
        this._firstName = newFirstName;
    }

    get lastName() {
        return this._lastName;
    }
    set lastName(newLastName) {
        if (newLastName.length < 3 || newLastName.length > 20) {
            throw new TypeError("Last name must be between 3 and 20 characters long");
        }
        let lastNameRegEx = /^[A-z]+$/;
        if (!newLastName.match(lastNameRegEx)) {
            throw new TypeError("Last name must contain only Latin characters");
        }
        this._lastName = newLastName;
    }
}
let test = new AccountValidator('131455', 'ivan@some.com', 'Ivan', 'Petrov');
console.log(test);