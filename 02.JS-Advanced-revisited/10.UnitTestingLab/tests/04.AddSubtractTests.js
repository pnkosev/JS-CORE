const assert = require('chai').assert;
const createCalculator = require('../04.AddSubtract').createCalculator;

describe("createCalculator()", () => {
    let calc;
    beforeEach(() => {
        calc = createCalculator();
    });

    describe("valid cases", () => {
        it("should return a module object", () => {
            assert.isObject(calc);
        });

        it("should have [add, subtract, get] props", () => {
            let props = ['add', 'subtract', 'get'];
            assert.hasAllDeepKeys(calc, props);
        });

        it("should equal 0 if get() without any previous actions", () => {
            let result = calc.get();
            assert.equal(result, 0);
        });

        it("should equal 5 if double add(2 then 3)", () => {
            calc.add(2);
            calc.add(3);
            let result = calc.get();
            assert.equal(result, 5);
        });

        it("should equal -5 if double add(-2 then -3)", () => {
            calc.add(-2);
            calc.add(-3);
            let result = calc.get();
            assert.equal(result, -5);
        });

        it("should equal 5.5 if double add(2.25 then 3.25)", () => {
            calc.add(2.25);
            calc.add(3.25);
            let result = calc.get();
            assert.equal(result, 5.5);
        });

        it("should return 4.2 for add(5.3) + subtract(1.1)", () => {
            calc.add(5.3);
            calc.subtract(1.1);
            let result = calc.get();
            assert.equal(result, 4.2);
        });

        it("should equal -5 if double subtract(2 then 3)", () => {
            calc.subtract(2);
            calc.subtract(3);
            let result = calc.get();
            assert.equal(result, -5);
        });

        it("should equal 5 if double subtract(-2 then -3)", () => {
            calc.subtract(-2);
            calc.subtract(-3);
            let result = calc.get();
            assert.equal(result, 5);
        });

        it("should equal -5.5 if double subtract(2.25 then 3.25)", () => {
            calc.subtract(2.25);
            calc.subtract(3.25);
            let result = calc.get();
            assert.equal(result, -5.5);
        });

        it("should return 2 for add(10) + subtract(7) + add(-2) + subtract(-1)", () => {
            calc.add(10);
            calc.subtract('7');
            calc.add('-2');
            calc.subtract('-1');
            let result = calc.get();
            assert.equal(result, 2);
        });


        it("should equal 10 if we add('10')", () => {
            calc.add('10');
            let result = calc.get();
            assert.equal(result, 10);
        });
    });

    describe("invalid cases", () => {
        it("should return NaN if add('string')", () => {
            calc.add('pesh');
            let result = calc.get();
            assert.isNaN(result);
        });

        it("should return NaN if subtract('string')", () => {
            calc.subtract('pesh');
            let result = calc.get();
            assert.isNaN(result);
        });

        it("should equal undefined if we try to access the inner value variable", () => {
            let result = calc.value;
            assert.isUndefined(result);
        });
    });
});
