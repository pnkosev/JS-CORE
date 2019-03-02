let expect = require("chai").expect;
let sum = require("../01.SumOfNums.js").sum;

describe("sum(arr)", function () {
    it("should return 3 for [1, 2]", function () {
        expect(sum([1, 2])).to.be.equal(3);
    });
    it("should return 1 for [1]", function () {
        expect(sum([1])).to.be.equal(1);
    });
    it("should return 0 for an empty array", function () {
        expect(sum([])).to.be.equal(0);
    });
    it("should return NaN for invalid data", function () {
        expect(sum("invalid data")).to.be.NaN;
    });
    it("should return 5 for [10, -5]", function () {
        expect(sum([10, -5])).to.be.equal(5);
    });
});