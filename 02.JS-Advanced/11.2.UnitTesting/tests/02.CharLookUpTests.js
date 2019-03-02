let expect = require("chai").expect;
let lookupChar = require("../02.CharLookUp").lookupChar;

describe("lookupChar", function () {
    it("should return undefined for a numeric input at the string field", function() {
        expect(lookupChar(123, 1)).equal(undefined);
    });
    it("should return undefined for an object input at the string field", function() {
        expect(lookupChar({name: "Pesh"}, 1)).equal(undefined);
    });
    it("should return undefined for a non-numeric input for index", function() {
        expect(lookupChar("yoyo", "no")).equal(undefined);
    });
    it("should return undefined for a floating-point input for index", function() {
        expect(lookupChar("yoyo", 1.5)).equal(undefined);
    });
    it("should return \"Incorrect index\" for an index > the length of the string", function () {
        expect(lookupChar("yoyo", 10)).equal("Incorrect index");
    });
    it("should return \"Incorrect index\" for an index < 0", function () {
        expect(lookupChar("yoyo", -10)).equal("Incorrect index");
    });
    it("should return \"y\" for an index 0", function () {
        expect(lookupChar("yoyo", 0)).equal("y");
    });
    it("should return \"o\" for an index 3", function () {
        expect(lookupChar("yoyo", 3)).equal("o");
    });
});