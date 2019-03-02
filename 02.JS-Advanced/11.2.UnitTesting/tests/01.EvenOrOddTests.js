let expect = require("chai").expect;
let assert = require("chai").assert;
let isOddOrEven = require("../01.EvenOrOdd").isOddOrEven;

describe("isOddOrEven", function () {
    it("should return undefined for a numeric input", function () {
        expect(isOddOrEven(123)).equal(undefined);
    });
    it("should return undefined for an object input", function () {
        expect(isOddOrEven({name: "Pesh"})).equal(undefined);
    });
    it("should return even if sting length is even", function () {
        expect(isOddOrEven("1234")).equal("even");
    });
    it("should return odd if sting length is odd", function () {
        expect(isOddOrEven("123")).equal("odd");
    });
    it("should return correct result for correct consecutive inputs", function () {
        expect(isOddOrEven("sup")).equal("odd");
        expect(isOddOrEven("wazzaaa")).equal("odd");
        expect(isOddOrEven("yoyo")).equal("even");
        expect(isOddOrEven("supson")).equal("even");
    });
});