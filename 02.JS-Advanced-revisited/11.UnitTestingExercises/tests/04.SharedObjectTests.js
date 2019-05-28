const assert = require('chai').assert;
const jsdom = require('jsdom-global')();
const $ = require('jquery');
const sharedObject = require('../04.SharedObject').sharedObject;

document.body.innerHTML =
    `<div id="wrapper">
        <input type="text" id="name" />
        <input type="text" id="income" />
    </div>`;


describe("sharedObject", () => {
    before(() => global.$ = $);

    it("should return an object with [name, income, changeName, changeIncome, updateName, updateIncome]", () => {
        let props = ['name', 'income', 'changeName', 'changeIncome', 'updateName', 'updateIncome'];

        assert.isObject(sharedObject);
        assert.hasAllKeys(sharedObject, props);
    });

    describe("initial name and income should be null", () => {
        it("should return null as initial name", () => {
            assert.isNull(sharedObject.name);
        });

        it("should return null as initial income", () => {
            assert.isNull(sharedObject.income);
        });
    });

    describe("sharedObject.changeName('name')", () => {
        it("should return the previous name for an empty input", () => {
            sharedObject.changeName('Pesh');
            sharedObject.changeName('');
            assert.equal(sharedObject.name, 'Pesh');
            assert.equal($('#name').val(), 'Pesh');
        });

        it("should return a num for a num input", () => {
            sharedObject.changeName(17);
            assert.equal(sharedObject.name, 17);
            assert.equal($('#name').val(), 17);
        });

        it("should return the new name on the second call", () => {
            sharedObject.changeName('Gesh');
            sharedObject.changeName('Pesh');
            assert.equal(sharedObject.name, 'Pesh');
            assert.equal($('#name').val(), 'Pesh');
        });
    });

    describe("sharedObject.changeIncome('income')", () => {
        it("should return an integer for an integer input", () => {
            sharedObject.changeIncome(30);
            assert.equal(sharedObject.income, 30);
            assert.equal($('#income').val(), 30);
        });

        it("should return the previous integer for a floating-point input", () => {
            sharedObject.changeIncome(30);
            sharedObject.changeIncome(20.5);
            assert.equal(sharedObject.income, 30);
            assert.equal($('#income').val(), 30);
        });

        it("should return the previous integer for an input of 0", () => {
            sharedObject.changeIncome(30);
            sharedObject.changeIncome(0);
            assert.equal(sharedObject.income, 30);
            assert.equal($('#income').val(), 30);
        });

        it("should return the previous income for a non-number input", () => {
            sharedObject.changeIncome(30);
            sharedObject.changeIncome('40');
            assert.equal(sharedObject.income, 30);
            assert.equal($('#income').val(), 30);
        });

        it("should return the previous income for a negative input", () => {
            sharedObject.changeIncome(30);
            sharedObject.changeIncome(-30);
            assert.equal(sharedObject.income, 30);
            assert.equal($('#income').val(), 30);
        });

        it("should return the new income on the second call", () => {
            sharedObject.changeIncome(30);
            sharedObject.changeIncome(40);
            assert.equal(sharedObject.income, 40);
            assert.equal($('#income').val(), 40);
        });
    });

    describe("updateName()", () => {
        it("should return the new name after a new input", () => {
            sharedObject.changeName('Pesh');
            $('#name').val('Gesh');
            sharedObject.updateName();
            assert.equal(sharedObject.name, 'Gesh');
            assert.equal($('#name').val(), 'Gesh');
        });

        it("should return the previous name if empty input", () => {
            sharedObject.changeName('Pesh');
            $('#name').val('');
            sharedObject.updateName();
            assert.equal(sharedObject.name, 'Pesh');
            assert.equal($('#name').val(), '');
        });
    });

    describe("updateIncome()", () => {
        it("should return the new income after a new integer input", () => {
            sharedObject.changeIncome(30);
            $('#income').val(40);
            sharedObject.updateIncome();
            assert.equal(sharedObject.income, 40);
            assert.equal($('#income').val(), '40');
        });

        it("should return the new income after an empty input", () => {
            sharedObject.changeIncome(30);
            $('#income').val('');
            sharedObject.updateIncome();
            assert.equal(sharedObject.income, 30);
            assert.equal($('#income').val(), '');
        });

        it("should return the new income after a new string-integer input", () => {
            sharedObject.changeIncome(30);
            $('#income').val('40');
            sharedObject.updateIncome();
            assert.equal(sharedObject.income, 40);
            assert.equal($('#income').val(), '40');
        });

        it("should not update for a negative input", () => {
            sharedObject.changeIncome(30);
            $('#income').val(-20);
            sharedObject.updateIncome();
            assert.equal(sharedObject.income, 30);
            assert.equal($('#income').val(), '-20');
        });

        it("should not update for an input of 0", () => {
            sharedObject.changeIncome(30);
            $('#income').val(0);
            sharedObject.updateIncome();
            assert.equal(sharedObject.income, 30);
            assert.equal($('#income').val(), '0');
        });

        it("should not update for a floating-point input", () => {
            sharedObject.changeIncome(30);
            $('#income').val(20.5);
            sharedObject.updateIncome();
            assert.equal(sharedObject.income, 30);
            assert.equal($('#income').val(), '20.5');
        });

        it("should not update for a string input", () => {
            sharedObject.changeIncome(30);
            $('#income').val('abv');
            sharedObject.updateIncome();
            assert.equal(sharedObject.income, 30);
            assert.equal($('#income').val(), 'abv');
        });
    });
});
