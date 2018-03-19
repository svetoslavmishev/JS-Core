const lookupChar = require('../3. Char Lookup.js');
let expect = require('chai').expect;
let mocha = require('mocha');

describe('Test lookupChar', function () {
    it('first parameter is non-string, should return undefined ', function () {
        expect(lookupChar(1, "string")).to.equal(undefined);
    });
    it('both parameter are non-strings, should return undefined ', function () {
        expect(lookupChar(1, 1)).to.equal(undefined);
    });
    it('second parameter is non-integer, should return undefined ', function () {
        expect(lookupChar("string", 1.1)).to.equal(undefined);
    });
    it('second parameter is non-number, should return undefined ', function () {
        expect(lookupChar("string", "string")).to.equal(undefined);
    });
    it('Index is less then string length, should return Incorrect index ', function () {
        expect(lookupChar("string", -1)).to.equal('Incorrect index');
    });
    it('Index is equal to string length, should return Incorrect index ', function () {
        expect(lookupChar("string", 5)).to.equal('Incorrect index');
    });
    it('Index is bigger than string length, should return Incorrect index ', function () {
        expect(lookupChar("string", 6)).to.equal('Incorrect index');
    });
    it('Index is inside string length, should return Incorrect index ', function () {
        expect(lookupChar("string", 3)).to.equal('i');
    });
});
