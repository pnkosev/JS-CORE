let expect = require("chai").expect;
let jsdom = require("jsdom-global")();
let $ = require("jquery");

document.body.innerHTML = `<div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>`;

let sharedObject = require("../04.SharedObjects").sharedObject;

describe("sharedObect", function () {
    before(()=>global.$ = $);

    describe("initial name and income should be null", function () {
        it("should return null for the inital name", function () {
            expect(sharedObject.name).equal(null);
        });
        it("should return null for the inital income", function () {
            expect(sharedObject.income).equal(null);
        });
    });
    
    describe("changeName function", function () {
        it("should return a number if numeric input", function () {
            sharedObject.changeName(15);
            expect(sharedObject.name).equal(15);
            expect($('#name').val()).equal('15');
        });
        it("should return the previous name for an empty input", function () {
            sharedObject.changeName("Pesh");
            sharedObject.changeName("");
            expect(sharedObject.name).equal('Pesh');
            expect($('#name').val()).equal('Pesh');
        });
        it("should return the new name if function called more than once", function () {
            sharedObject.changeName("Pesh");
            sharedObject.changeName("Gesh");
            expect(sharedObject.name).equal('Gesh');
            expect($('#name').val()).equal('Gesh');
        });
    });
    
    describe("changeIncome function", function () {
        it("should return integer for an integer input", function () {
            sharedObject.changeIncome(10);
            expect(sharedObject.income).equal(10);
            expect($('#income').val()).equal('10');
        });
        it("should return previos integer for a floating-point input", function () {
            sharedObject.changeIncome(10);
            sharedObject.changeIncome(1.5);
            expect(sharedObject.income).equal(10);
            expect($('#income').val()).equal('10');
        });
        it("should return previous value for a negative input", function () {
            sharedObject.changeIncome(10);
            sharedObject.changeIncome(-10);
            expect(sharedObject.income).equal(10);
            expect($('#income').val()).equal('10');
        });
        it("should return previous value for an input of 0", function () {
            sharedObject.changeIncome(10);
            sharedObject.changeIncome(0);
            expect(sharedObject.income).equal(10);
            expect($('#income').val()).equal('10');
        });
    });

    describe("updateName function", function() {
        it("should successfully update the name for a non-empty input", function () {
            sharedObject.changeName("Pesh");
            $('#name').val('Gesh');
            sharedObject.updateName();
            expect(sharedObject.name).equal('Gesh');
            expect($('#name').val()).equal('Gesh');
        });
        it("should not update the name for an empty input", function () {
            sharedObject.changeName("Pesh");
            $('#name').val('');
            sharedObject.updateName();
            expect(sharedObject.name).equal('Pesh');
            expect($('#name').val()).equal('');
        });
    });
    
    describe("updateIncome function", function () {
        it("should successfully update the income for an integer input", function () {
            sharedObject.changeIncome(10);
            $('#income').val(20);
            sharedObject.updateIncome();
            expect(sharedObject.income).equal(20);
            expect($('#income').val()).equal('20');
        });
        it("should not update for an empty input", function () {
            sharedObject.changeIncome(10);
            $('#income').val('');
            sharedObject.updateIncome();
            expect(sharedObject.income).equal(10);
            expect($('#income').val()).equal('');
        });
        it("should not update for a negative input", function () {
            sharedObject.changeIncome(10);
            $('#income').val(-10);
            sharedObject.updateIncome();
            expect(sharedObject.income).equal(10);
            expect($('#income').val()).equal('-10');
        });
        it("should not update for an input of 0", function () {
            sharedObject.changeIncome(10);
            $('#income').val(0);
            sharedObject.updateIncome();
            expect(sharedObject.income).equal(10);
            expect($('#income').val()).equal('0');
        });
        it("should not update for a floating-point input", function () {
            sharedObject.changeIncome(10);
            $('#income').val(1.5);
            sharedObject.updateIncome();
            expect(sharedObject.income).equal(10);
            expect($('#income').val()).equal('1.5');
        });
        it("should not update for a string input", function () {
            sharedObject.changeIncome(10);
            $('#income').val('abv');
            sharedObject.updateIncome();
            expect(sharedObject.income).equal(10);
            expect($('#income').val()).equal('abv');
        });
    });
});