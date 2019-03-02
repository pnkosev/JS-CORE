class Vacationer {
    constructor(fullName, creditCard) {
        this.fullName = fullName;
        this.idNumber = this.generateIDNumber();
        this.creditCard = {
            cardNumber: 1111,
            expirationDate: "",
            securityNumber: 111
        };
        if (creditCard !== undefined) {
            this.addCreditCardInfo(creditCard);
        }
        this.wishList = [];
    }

    get fullName() {
        return this._fullName;
    }

    set fullName(name) {
        let nameRegex = /\b[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+\b/g;
        if (name.length !== 3) {
            throw new Error("Name must include first name, middle name and last name");
        }
        if (!nameRegex.test(name.join(" "))) {
            throw new Error("Invalid full name");
        }
        let fullName = {};
        fullName.firstName = name[0];
        fullName.middleName = name[1];
        fullName.lastName = name[2];
        this._fullName = fullName;
    }

    generateIDNumber() {
        let vowel = ["a", "e", "o", "i", "u"];
        let formula = (231 * this.fullName.firstName.charCodeAt(0) + 139 * this.fullName.middleName.length).toString();
        let idNumber = vowel.includes(this.fullName.lastName.charAt(this.fullName.lastName.length - 1)) ? formula + 8 : formula + 7;
        return idNumber;
    }

    addCreditCardInfo(input) {
        if (input.length !== 3) {
            throw new Error("Missing credit card information");
        }
        if (typeof input[0] !== 'number' || typeof input[2] !== 'number') {
            throw new Error("Invalid credit card details");
        }
        this.creditCard.cardNumber = input[0];
        this.creditCard.expirationDate = input[1];
        this.creditCard.securityNumber = input[2];
    }

    addDestinationToWishList(destination) {
        if (this.wishList.includes(destination)) {
            throw new Error("Destination already exists in wishlist");
        }
        this.wishList.push(destination);
        this.wishList.sort((a, b) => a.length - b.length);
    }

    getVacationerInfo() {
        return "Name: " + this.fullName.firstName + " " + this.fullName.middleName + " " + this.fullName.lastName + "\n" +
        "ID Number: " + this.idNumber + "\n" +
        "Wishlist:\n" + (this.wishList.length === 0 ? "empty" : this.wishList.join(", ")) + "\n" +
        "Credit Card:\n" +
        "Card Number: " + this.creditCard.cardNumber + "\n" +
        "Expiration Date: " + this.creditCard.expirationDate + "\n" +
        "Security Number: " + this.creditCard.securityNumber;
    }
    // Name: {firstName} {middleName} {lastName}
    // ID number: {idNumber}
    // Wishlist: 
    // empty/destinations, joined with ‘, ’
    // Credit Card:
    // Card Number: {cardNumber}
    // Expiration Date: {expirationDate}
    // Security Number: {securityNumber}

}
//let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"], 
[123456789, "10/01/2018", 777]);
//console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());