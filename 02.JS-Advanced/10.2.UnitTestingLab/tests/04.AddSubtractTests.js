let expect = require("chai").expect;
let assert = require("chai").assert;
let createCalculator = require("../04.AddSubtract").createCalculator;

describe("createCalculator()", function () {

    let calc;

    this.beforeEach(function () {
        calc = createCalculator();
    });

    it("should return 0 for get", function () {
        let result = calc.get();
        expect(result).equal(0);
        //assert.equal(result, 0);
    });
    it("should return 5 for add(2) + add(3)", function () {
        calc.add(2);
        calc.add(3);
        let result = calc.get();
        expect(result).equal(5);
    });
    it("should return -5 for subtract(3) + subtract(2)", function () {
        calc.subtract(3);
        calc.subtract(2);
        let result = calc.get();
        assert.equal(result, -5);
    });
    it("should return 4.2 for add(5.3) + subtract(1.1)", function () {
        calc.add(5.3);
        calc.subtract(1.1);
        let result = calc.get();
        expect(result).equal(5.3 - 1.1);
    });
    it("should return 2 for add(10) + subtract(7) + add(-2) + subtract(-1)", function () {
        calc.add(10);
        calc.subtract('7');
        calc.add('-2');
        calc.subtract('-1');
        let result = calc.get();
        assert.equal(result, 2);
    });
    it("should return Nan for add(\"hello\")", function () {
        calc.add("hello");
        let result = calc.get();
        expect(result).NaN;
    });
    it("should return Nan for subtract(\"hello\")", function () {
        calc.subtract("hello");
        let result = calc.get();
        expect(result).NaN;
    });
})