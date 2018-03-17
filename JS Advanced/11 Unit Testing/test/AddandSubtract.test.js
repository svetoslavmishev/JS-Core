let createCalculator = require('../7. Add and Subtract.js');
let expect = require('chai').expect;

describe('Calculator Tests', function () {
    let calculate;
    beforeEach(function () {
        calculate = createCalculator();
    });

    it('should return 7 for add(1, 6)', function () {
        calculate.add(1);
        calculate.add(6);
        expect(calculate.get()).to.equal(7);
    });
    it('should return 5 for add(11, -6)', function () {
        calculate.add(11);
        calculate.add(-6);
        expect(calculate.get()).to.equal(5);
    });
    it('should return 4.63 for fraction numbers', function () {
        calculate.add(10.15);
        calculate.subtract(5.52);
        expect(calculate.get()).closeTo(4.63, 0.001);
    });
    it('should return NaN for string', function () {
        calculate.add('string');
        expect(calculate.get()).to.be.NaN;
    });
    it('should return NaN for string', function () {
        calculate.subtract('string');
        expect(calculate.get()).to.be.NaN;
    });
    it('should return 5 for (5)', function () {
        calculate.add('5');
        expect(calculate.get()).to.equal(5);
    });
    it('should return -5 for (5)', function () {
        calculate.subtract('5');
        expect(calculate.get()).to.equal(-5);
    });
});