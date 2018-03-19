let nuke = function nuke(selector1, selector2) {
    if (selector1 === selector2) return;
    $(selector1).filter(selector2).remove();
};
let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

describe('Test armageDOM', function () {
    let target;
    beforeEach('initial html', function () {
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
</body>
`;
        target = $('#target');
    });

    it('should modify html with two valid selectors but not remove elements', function () {
        let selector1 = $('.nested');
        let selector2 = $('.inside');
        let unmodifiedHtml = target.html();
        nuke(selector1, selector2);
        expect(target.html()).to.equal(unmodifiedHtml);
    });

    it('should modify html with two valid selectors', function () {
        let selector1 = $('.nested');
        let selector2 = $('.target');
        let unmodifiedHtml = target.html();
        nuke(selector1, selector2);
        expect(target.html()).to.not.equal(unmodifiedHtml);
    });

    it('should do nothing with invalid selector', function () {
        let selector1 = $('#target');
        let selector2 = 100;
        let unmodifiedHtml = target.html();
        nuke(selector1, selector2);
        expect(target.html()).to.equal(unmodifiedHtml);
    });

    it('should do nothing,when one selector is omitted', function () {
        let selector1 = $('#target');
        let unmodifiedHtml = target.html();
        nuke(selector1);
        expect(target.html()).to.equal(unmodifiedHtml);
    });

    it('should do nothing, when both selectors are same', function () {
        let selector1 = $('.inside');
        let unmodifiedHtml = target.html();
        nuke(selector1, selector1);
        expect(target.html()).to.equal(unmodifiedHtml);
    });
});