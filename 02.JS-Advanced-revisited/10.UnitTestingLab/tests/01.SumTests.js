let assert = require("chai").assert;
let sum = require('../01.Sum').sum;

describe("sum(arr)", () => {
    it("should return positive number for positive input", () => {
        let input = [1, 2];
        let result = sum(input);
        assert.equal(result, 3);
    });

    it("should return negative number for negative input", () => {
        let input = [-1, -2];
        let result = sum(input);
        assert.equal(result, -3);
    });

    it("should return negative number for doubles", () => {
        let input = [1.5, 2.1];
        let result = sum(input);
        assert.equal(result, 3.6);
    });

    it("should return NaN if string values in the input", () => {
        let input = [1, 'str'];
        let result = sum(input);
        assert.isNaN(result);
    });

    it("should return 0 for empty array input", () => {
        let input = [];
        let result = sum(input);
        assert.equal(result, 0);
    });
});