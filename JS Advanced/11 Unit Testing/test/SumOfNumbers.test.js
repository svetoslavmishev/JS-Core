let sum = require('../4. Sum of Numbers.js');
let expect = require('chai').expect;

describe('Sum Tests', function () {
    it('should return 3 for [1,2]', function () {
        let expected = 3;
        let actual = sum([1, 2]);
        expect(actual).to.be.equal(expected);
    });

    it('should return 0 for []', function () {
        expect(sum([])).to.be.equal(0);
    });

    it('should return 1 for [1]', function () {
        expect(sum([1])).to.be.equal(1);
    });

    it('should return 4.3 for [-1, 3.3, 2]', function () {
        expect(sum([-1, 3.3, 2])).to.be.equal(4.3);
    });

    it('should return NaN for string', function () {
        expect(sum('string')).to.be.NaN;
    });
});