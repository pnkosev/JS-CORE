const assert = require('chai').assert;
const mathEnforcer = require('../03.MathEnfoncer').mathEnforcer;

describe("mathEnforcer", () => {
    describe("mathEnforcer", () => {
        it("should be an object", () => {
            assert.isObject(mathEnforcer);
        });

        it("should be contain [addFive, subtractTen, sum]", () => {
            let props = ['addFive', 'subtractTen', 'sum'];
            assert.containsAllDeepKeys(mathEnforcer, props);
        });
    });

    describe("valid cases", () => {
        describe("addFive(num)", () => {
            it("should return correct answer for a positive input", () => {
                let result = mathEnforcer.addFive(5);
                assert.equal(result, 10);
            });

            it("should return correct answer for a floating-point input", () => {
                let result = mathEnforcer.addFive(1.5);
                assert.equal(result, 6.5);
            });

            it("should return correct answer for a negative input", () => {
                let result = mathEnforcer.addFive(-10);
                assert.equal(result, -5);
            });
        });

        describe("subtractTen(num)", () => {
            it("should return correct answer for a positive input", () => {
                let result = mathEnforcer.subtractTen(5);
                assert.equal(result, -5);
            });

            it("should return correct answer for a floating-point input", () => {
                let result = mathEnforcer.subtractTen(-1.5);
                assert.equal(result, -11.5);
            });

            it("should return correct answer for a negative input", () => {
                let result = mathEnforcer.subtractTen(-5);
                assert.equal(result, -15);
            });
        });

        describe("sum(num, num)", () => {
            it("should return correct answer for a positive input", () => {
                let result = mathEnforcer.sum(1, 1);
                assert.equal(result, 2);
            });

            it("should return correct answer for a floating-point input", () => {
                let result = mathEnforcer.sum(1.4, 2.2);
                assert.equal(result, 3.6);
            });

            it("should return correct answer for a negative input", () => {
                let result = mathEnforcer.sum(-1, -1);
                assert.equal(result, -2);
            });

            it("should return correct answer for a mixed input", () => {
                let result = mathEnforcer.sum(-1, 3);
                assert.equal(result, 2);
            });
        });
    });

    describe("invalid cases", () => {
        it("should return undefined for add('non-number input')", () => {
            let result = mathEnforcer.addFive('0');
            assert.isUndefined(result);
        });

        it("should return undefined for subtractTen('non-number input')", () => {
            let result = mathEnforcer.subtractTen('0');
            assert.isUndefined(result);
        });

        it("should return undefined for sum('non-number input' * 2)", () => {
            let result = mathEnforcer.subtractTen('1', '1');
            assert.isUndefined(result);
        });
    });
});