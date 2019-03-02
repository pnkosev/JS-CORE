let expect = require('chai').expect;
let isSymmetric = require('../02.CheckForSymmetry.js').isSymmetric;

describe("isSymmetric(arr)", function () {
    it("should return true for symmetric array", function () {
        expect(isSymmetric([1, 2, 2, 2, 2, 1])).to.be.equal(true);
    });
    it("should return false for non-symmetric array", function () {
        expect(isSymmetric([1, 2, 3, 4, 5, 6])).to.be.equal(false);
    });
    it("should return false for invalid input(non-array)", function () {
        expect(isSymmetric("invalid input")).to.be.equal(false);
    });
    it("should return trur for 1 argument array", function () {
        expect(isSymmetric([1])).to.be.equal(true);
    });
    it("should return true for [-1,2,2,-1]", function () {
        expect(isSymmetric([-1, 2, 2, -1])).to.be.equal(true);
    });
    it("should return true for [-1,2,-1]", function () {
        expect(isSymmetric([-1, 2, -1])).to.be.equal(true);
    });
    it("should return false for [-1,2,1]", function () {
        expect(isSymmetric([-1, 2, 1])).to.be.equal(false);
    });
    it("should return true for [5,'hi',{a:5}, new Date(),{a:5},'hi',5]", function () {
        expect(isSymmetric([5,'hi',{a:5}, new Date(),{a:5},'hi',5])).to.be.equal(true);
    });
    it("should return true for [5,'hi',{a:5}, new Date(),{x:5},'hi',5]", function () {
        expect(isSymmetric([5,'hi',{a:5}, new Date(),{x:5},'hi',5])).to.be.equal(false);
    });
});