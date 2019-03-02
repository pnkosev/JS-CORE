let expect = require("chai").expect;
let jsdom = require("jsdom-global")();
let $ = require("jquery");
let nuke = require("../05.ArmageDOM").nuke;

describe("nuke()", function () {

    beforeEach(() => {
        document.body.innerHTML = `<body>
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
    </body>`
    });

    before(() => {
        global.$ = $;
    });

    it("should do nothing for an invalid selector", function () {
        let beforeNuke = $('body').html();
        nuke('.target', '5');
        let afterNuke = $('body').html();
        expect(beforeNuke).equal(afterNuke);
    });
    it("should do nothing for same selectors", function () {
        let beforeNuke = $('body').html();
        nuke('.target', '.target');
        let afterNuke = $('body').html();
        expect(beforeNuke).equal(afterNuke);
    });
    it("should do nothing for two valid selectors", function () {
        let beforeNuke = $('body').html();
        nuke('.inside', '.nested');
        let afterNuke = $('body').html();
        expect(beforeNuke).equal(afterNuke);
    });
    it("should do nothing for one omitted selector", function () {
        let beforeNuke = $('body').html();
        nuke('.inside', '');
        let afterNuke = $('body').html();
        expect(beforeNuke).equal(afterNuke);
    });
    it("should remove for valid selectors", function () {
        let beforeNuke = $('body').html();
        nuke('.target', '.nested');
        let afterNuke = $('body').html();
        expect(beforeNuke).not.equal(afterNuke);
    });
});
