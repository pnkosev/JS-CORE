const assert = require('chai').assert;
const isOddOrEven = require('../01.RequestValidator').isOddOrEven;

describe("isOddOrEven(str)", () => {
    describe("invalid cases", () => {
        it("should return undefined if input !== string", () => {
            let result = isOddOrEven(123);
            assert.isUndefined(result);
        });

        it("should return undefined if called without input", () => {
            let result = isOddOrEven();
            assert.isUndefined(result);
        });
    })

    describe("valid cases", () => {
        it("should return even if input'length is even", () => {
            let result = isOddOrEven('stri');
            assert.equal(result, 'even');
        });

        it("should return odd if input'length is odd", () => {
            let result = isOddOrEven('str');
            assert.equal(result, 'odd');
        });
    })
});