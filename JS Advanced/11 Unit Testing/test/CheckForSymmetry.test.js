let isSymmetric = require('../5. Check for Symmetry.js');
let expect = require('chai').expect;

describe('Symmetry Tests', function () {
    describe('General test', function () {
        it('should be a function', function () {
            expect(typeof isSymmetric).to.equal('function')
        });
    });

    describe('Symmetry test', function () {
        it('should return true for []', function () {
            expect(isSymmetric([])).to.be.true;
        });
        it('should return true for [1]', function () {
            expect(isSymmetric([1])).to.be.true;
        });
        it('should return true for [1, 1]', function () {
            expect(isSymmetric([1, 1])).to.be.true;
        });
        it('should return true for [1, 2, 1]', function () {
            expect(isSymmetric([1, 2, 1])).to.be.true;
        });
        it('should return true for [1, 2, 3, 3, 2, 1]', function () {
            expect(isSymmetric([1, 2, 3, 3, 2, 1])).to.be.true;
        });
        it('should return true for [5, hi, {a: 5}, new Date(), {a: 5}, hi, 5]', function () {
            expect(isSymmetric([5, 'hi', {a: 5}, new Date(), {a: 5}, 'hi', 5])).to.be.true;
        });
    });

    describe('Non-symmetry test', function () {
        it('should return false for [1, 2]', function () {
            expect(isSymmetric([1, 2])).to.be.false;
        });
        it('should return false for [1, 2, 3]', function () {
            expect(isSymmetric([1, 2, 3])).to.be.false;
        });
        it('should return false for [1, 2, 3, 3, 8, 1]', function () {
            expect(isSymmetric([1, 2, 3, 3, 8, 1])).to.be.false;
        });
        it('should return false for [-1, text, {a: first}, new Date(), {a: first}, text, -1]', function () {
            expect(isSymmetric([-1, 'text', {a: 'first'}, new Date(), {B: 'Second'}, 'text', 1])).to.be.false;
        });
        it('should return false for 1, 2, 2, 1', function () {
            expect(isSymmetric('1', '2', '2', '1')).to.be.false;
        });
        it('should return false for [5, hi, {a:5}, new Date(), {X:5}, hi, 5]', function () {
            expect(isSymmetric([5, 'hi', {a: 5}, new Date(), {X: 5}, 'hi', 5])).to.be.false;
        });
    });
});