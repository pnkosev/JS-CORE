const assert = require('chai').assert;
const lookupChar = require('../02.CharLookup').lookupChar;

describe("lookupChar(str, i)", () => {
    describe("valid cases", () => {
        it("should return 2 for lookupChar('123', 1)", () => {
            let result = lookupChar('123', 1);
            assert.equal(result, 2);
        });
        it("should return 3 for lookupChar('123', 2)", () => {
            let result = lookupChar('123', 2);
            assert.equal(result, 3);
        });
    });

    describe("invalid cases", () => {
        it("should undefined for a non-string first parameter", () => {
            let result = lookupChar(123, 1);
            assert.isUndefined(result);
        });

        it("should undefined for a non-number second parameter", () => {
            let result = lookupChar('123', '1');
            assert.isUndefined(result);
        });

        it("should undefined for a floating-point second parameter", () => {
            let result = lookupChar('123', 2.5);
            assert.isUndefined(result);
        });

        it("should return 'Incorrect index' for an out-of-range index- (-1)", () => {
            let error = 'Incorrect index';
            let result = lookupChar('123', -1);
            assert.equal(result, error);
        });

        it("should return 'Incorrect index' for an out-of-range index- (str.length or higher)", () => {
            let error = 'Incorrect index';
            let result = lookupChar('123', 3);
            assert.equal(result, error);
        });
    });
});