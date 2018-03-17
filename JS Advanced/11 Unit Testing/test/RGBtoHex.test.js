let rgbToHexColor = require('../6. RGB to Hex.js');
let expect = require('chai').expect;

describe('RGBHex Tests', function () {
    describe('Test with valid inputs',function () {
        it('should return #000000 for (0, 0, 0)', function () {
            expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
        });
        it('should return #FFFFFF for (255, 255, 255)', function () {
            expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
        });
        it('should return #6496C8 for (100, 150, 200)', function () {
            expect(rgbToHexColor(100, 150, 200)).to.equal('#6496C8');
        });
    });

    describe('Test with invalid inputs',function () {
        it('should return undefined', function () {
            expect(rgbToHexColor(-1, 150, 200)).to.equal(undefined);
        });
        it('should return undefined', function () {
            expect(rgbToHexColor(100, -1, 200)).to.equal(undefined);
        });
        it('should return undefined', function () {
            expect(rgbToHexColor(100, 150, -1)).to.equal(undefined);
        });
        it('should return undefined', function () {
            expect(rgbToHexColor(256, 150, 200)).to.equal(undefined);
        });
        it('should return undefined', function () {
            expect(rgbToHexColor(100, 256, 200)).to.equal(undefined);
        });
        it('should return undefined', function () {
            expect(rgbToHexColor(100, 150, 256)).to.equal(undefined);
        });
        it('should return undefined', function () {
            expect(rgbToHexColor(1.5, 150, 200)).to.equal(undefined);
        });
        it('should return undefined', function () {
            expect(rgbToHexColor(100, 1.5, 200)).to.equal(undefined);
        });
        it('should return undefined', function () {
            expect(rgbToHexColor(100, 150, 1.5)).to.equal(undefined);
        });
        it('should return undefined', function () {
            expect(rgbToHexColor('test', {}, [])).to.equal(undefined);
        });
    });
});