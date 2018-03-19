let mathEnforcer = require('../4. Math Enforcer.js');
let expect = require('chai').expect;

describe('Test mathEnforcer', function () {
    describe('addFive', function () {
        it('should return correct for positive integer parameter', function () {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });
        it('should return correct for negative integer parameter', function () {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });
        it('should should return correct for fractions', function () {
            expect(mathEnforcer.addFive(5.13)).to.closeTo(10.13, 0.01);
        });
        it('should should return correct for non-number parameter', function () {
            expect(mathEnforcer.addFive('param')).to.equal(undefined);
        });
    });
    describe('subtractTen', function () {
        it('should return correct for positive integer parameter', function () {
            expect(mathEnforcer.subtractTen(5)).to.equal(-5);
        });
        it('should return correct for negative integer parameter', function () {
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
        });
        it('should should return correct for fractions', function () {
            expect(mathEnforcer.subtractTen(5.13)).to.closeTo(-4.87, 0.01);
        });
        it('should should return correct for non-number parameter', function () {
            expect(mathEnforcer.subtractTen('param')).to.equal(undefined);
        });
    });
    describe('sum', function () {
        it('should return correct for positive integer parameter', function () {
            expect(mathEnforcer.sum(5, 2)).to.equal(7);
        });
        it('should return correct for negative integer parameter', function () {
            expect(mathEnforcer.sum(-5, -2)).to.equal(-7);
        });
        it('should should return correct for fractions', function () {
            expect(mathEnforcer.sum(5.13, 4.12)).to.closeTo(9.25, 0.01);
        });
        it('should should return correct for non-number parameter', function () {
            expect(mathEnforcer.sum('param', 2)).to.equal(undefined);
        });
        it('should should return correct for non-number parameter', function () {
            expect(mathEnforcer.sum(2, 'param')).to.equal(undefined);
        });
    });
});