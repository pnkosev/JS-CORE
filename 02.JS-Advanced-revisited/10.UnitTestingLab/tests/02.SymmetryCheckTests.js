const assert = require('chai').assert;
const isSymmetric = require('../02.SymmetryCheck').isSymmetric;

describe("isSymmetric()", () => {
    it("should return false if input is not an array", () => {
        let input = 'someString';
        let result = isSymmetric(input);
        assert.isFalse(result);
    });

    it("should return true if array contains only 1 value", () => {
        let input = ['someString'];
        let result = isSymmetric(input);
        assert.isTrue(result);
    });

    it("should return true if array contains objects", () => {
        let input = [{ a: 1 }, 'someString', { a: 1 }];
        let result = isSymmetric(input);
        assert.isTrue(result);
    });

    it("should return true if array is empty", () => {
        let input = [];
        let result = isSymmetric(input);
        assert.isTrue(result);
    });

    it("should return true if array contains other arrays", () => {
        let input = [[{ a: 1 }], 'someString', [{ a: 1 }]];
        let result = isSymmetric(input);
        assert.isTrue(result);
    });
});