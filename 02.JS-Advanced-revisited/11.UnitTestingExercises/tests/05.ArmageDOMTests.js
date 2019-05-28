const assert = require('chai').assert;
const jsdom = require('jsdom-global')();
const $ = require('jquery');
const nuke = require('../05.ArmageDOM').nuke;

describe("nuke()", () => {
    beforeEach(() => {
        document.body.innerHTML =
            `<body>
                <div id="target">
                    <div class="nested target">
                        <p>This is some text</p>
                    </div>
                    <div class="target">
                        <p>Empty div</p>
                    </div>
                    <div class="inside">
                        <span class="nested">Some more text</span>
                        <span class="target">Some more text</span>
                    </div>
                </div>
            </body>`;
    });

    before(() => global.$ = $);

    describe("valid cases", () => {
        it("should remove if input is correct", () => {
            let beforeNuke = $('body').html();
            nuke('.target', '.nested');
            let afterNuke = $('body').html();
            assert.notEqual(beforeNuke, afterNuke);
        });
    });

    describe("invalid cases", () => {
        it("should do nothing if both selectors are correct but not nested", () => {
            let beforeNuke = $('body').html();
            nuke('.inside', '.nested');
            let afterNuke = $('body').html();
            assert.equal(beforeNuke, afterNuke);
        });

        it("should do nothing if both selectors are incorrect", () => {
            let beforeNuke = $('body').html();
            nuke('#blabla1', '#blabla2');
            let afterNuke = $('body').html();
            assert.equal(beforeNuke, afterNuke);
        });

        it("should do nothing if one selector is incorrect", () => {
            let beforeNuke = $('body').html();
            nuke('.target1', '.nested');
            let afterNuke = $('body').html();
            assert.equal(beforeNuke, afterNuke);
        });

        it("should do nothing if one selector is omitted", () => {
            let beforeNuke = $('body').html();
            nuke('.target1', '');
            let afterNuke = $('body').html();
            assert.equal(beforeNuke, afterNuke);
        });

        it("should do nothing if both selectors are same", () => {
            let beforeNuke = $('body').html();
            nuke('.target', '.target');
            let afterNuke = $('body').html();
            assert.equal(beforeNuke, afterNuke);
        });

        it("should do nothing if the first selector is by ID", () => {
            let beforeNuke = $('body').html();
            nuke('#target', '.target');
            let afterNuke = $('body').html();
            assert.equal(beforeNuke, afterNuke);
        });
    });
});