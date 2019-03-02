let expect = require("chai").expect;
let mathEnforcer = require("../03.MathEnforcer").mathEnforcer;

describe("mathEnforcer", function () {
    describe("addFive(num)", function () {
        it("should return undefined for non-numeric input", function () {
            expect(mathEnforcer.addFive("1")).equal(undefined);
        });
        it("should return 10 if input is 5", function () {
            expect(mathEnforcer.addFive(5)).equal(10);
        });
        it("should return correct answer for negative input", function () {
            expect(mathEnforcer.addFive(-5)).equal(0);
        });
        it("should return correct answer for floating-point input", function () {
            expect(mathEnforcer.addFive(3.14)).closeTo(8.14, 0.01);
        });
    });
    describe("subtractTen(num)", function () {
        it("should return undefined for non-numeric input", function () {
            expect(mathEnforcer.subtractTen("1")).equal(undefined);
        });
        it("should return 5 if input is 15", function () {
            expect(mathEnforcer.subtractTen(15)).equal(5);
        });
        it("should return correct answer for negative input", function () {
            expect(mathEnforcer.subtractTen(-5)).equal(-15);
        });
        it("should return correct answer for floating-point input", function () {
            expect(mathEnforcer.subtractTen(1.5)).equal(-8.5);
        });
    });
    describe("sum(num)", function () {
        it("should return undefined for non-numeric input", function () {
            expect(mathEnforcer.sum("1", 1)).equal(undefined);
        });
        it("should return undefined for non-numeric input", function () {
            expect(mathEnforcer.sum(1, "1")).equal(undefined);
        });
        it("should return 10 if input is (5, 5)", function () {
            expect(mathEnforcer.sum(5, 5)).equal(10);
        });
        it("should return correct answer for negative input", function () {
            expect(mathEnforcer.sum(-5, -5)).equal(-10);
        });
        it("should return correct answer for floating-point input", function () {
            expect(mathEnforcer.sum(1.5, 1.5)).equal(3);
        });
    });
});