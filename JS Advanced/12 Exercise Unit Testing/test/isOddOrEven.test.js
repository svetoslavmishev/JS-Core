let isOddOrEven = require('../2. Even or Odd.js');
let expect = require('chai').expect;

describe('Tests oddOrEven  function', function () {
    it('Number parameter, should return undefined', function () {
        expect(isOddOrEven(11)).to.equal(undefined);
    });
    it('Object parameter, should return undefined', function () {
        expect(isOddOrEven({})).to.equal(undefined);
    });
    it('Array parameter, should return undefined', function () {
        expect(isOddOrEven([])).to.equal(undefined);
    });
    it('Even string, should return even', function () {
        expect(isOddOrEven("even")).to.equal('even');
    });
    it('Odd string, should return odd', function () {
        expect(isOddOrEven("odd")).to.equal('odd');
    });
});