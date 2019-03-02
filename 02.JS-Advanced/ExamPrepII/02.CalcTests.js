let expect = require('chai').expect;
let Calculator = require("./02.Calc").Calculator;

describe("Calculator class", function () {
    let calculator;
    beforeEach(function () {
        calculator = new Calculator;
    });

    // it("should have an empty \"expenses\" array upon init", function () {
    //     expect(calculator.expenses).to.be.an('array').that.is.empty;
    // });
    // it("should add data of string type when add(data)", function () {
    //     calculator.add("123");
    //     expect(calculator.expenses.length).equal(1);
    // });
    // it("should add data of number type when add(data)", function () {
    //     calculator.add(123);
    //     expect(calculator.expenses.length).equal(1);
    // });
    it("should throw an error if only non-numeric input", function () {
        calculator.add("123");
        calculator.add("321");
        expect(function () {
            calculator.divideNums()
        }).to.throw();
    });
    it("should return \"Cannot divide by zero\" if the second element = 0", function () {
        calculator.add(10);
        calculator.add(0);
        expect(calculator.divideNums()).equal("Cannot divide by zero");
    });
    it("should return 1 for 2x10.2 input", function () {
        calculator.add(10.2);
        calculator.add(-10.2);
        expect(calculator.divideNums()).closeTo(-1, 0.01);
    });
    it("should return \"empty array\" when toString() called with empty arr", function () {
        expect(calculator.toString()).equal("empty array");
    });
    // it("should return 10 -> Pesho -> 5 when toString() called with that input", function () {
    //     calculator.add(10);
    //     calculator.add('Pesho');
    //     calculator.add('5');
    //     expect(calculator.toString()).equal("10 -> Pesho -> 5");
    // });
    // it("should return \"empty\" when orderBy() called with an empty array", function () {
    //     expect(calculator.orderBy()).equal('empty');
    // });
    // it("should return \"1, 2, 3\" when orderBy() called for numeric input only", function () {
    //     calculator.add(3);
    //     calculator.add(2);
    //     calculator.add(1);
    //     expect(calculator.orderBy()).equal("1, 2, 3");
    // });
    it("should return \"10, Pesho, 5\" when orderBy() called for mixed input", function () {
        calculator.add(10);
        calculator.add('Pesho');
        calculator.add('5');
        expect(calculator.orderBy()).equal("10, 5, Pesho");
    });
});