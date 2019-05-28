const assert = require('chai').assert;
const rgbToHexColor = require('../03.RGBtoHEX').rgbToHexColor;

describe("rgbToHexColor(red, green, blue)", () => {
    describe("valid cases", () => {
        it("should return #000000 if input is (0, 0, 0)", () => {
            let result = rgbToHexColor(0, 0, 0);
            assert.equal(result, '#000000');
        });

        it("should return #FFFFFF if input is (255, 255, 255)", () => {
            let result = rgbToHexColor(255, 255, 255);
            assert.equal(result, '#FFFFFF');
        });

        it("should return '#0080C0 if input is (0, 128, 192)", () => {
            let result = rgbToHexColor(0, 128, 192);
            assert.equal(result, '#0080C0');
        });
    });

    describe("invalid cases", () => {
        it("should return undefined if first num is out of range- 0 to 255", () => {
            let result = rgbToHexColor(256, 255, 255);
            assert.isUndefined(result);
        });

        it("should return undefined if second num is out of range- 0 to 255", () => {
            let result = rgbToHexColor(255, -255, 255);
            assert.isUndefined(result);
        });

        it("should return undefined if third num is out of range- 0 to 255", () => {
            let result = rgbToHexColor(255, 255, -255);
            assert.isUndefined(result);
        });

        it("should return undefined if a num is double", () => {
            let result = rgbToHexColor(200.5, 255, 255);
            assert.isUndefined(result);
        });

        it("should return undefined if the input contains a string", () => {
            let result = rgbToHexColor('255', 255, 255);
            assert.isUndefined(result);
        });

        it("should return undefined if the input is empty", () => {
            let result = rgbToHexColor();
            assert.isUndefined(result);
        });
    });
});