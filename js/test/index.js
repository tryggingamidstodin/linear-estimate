"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const __1 = require("../");
describe('linear estimate', function () {
    const points = [[50, -5], [52, 0], [108, 170], [104, 160]];
    describe('from array', function () {
        const examples = [[55, 9.23], [52, 0], [104, 160], [50, -5]];
        examples.map(function (example) {
            it('should calculate y', function () {
                chai_1.expect(__1.default(points)(example[0])).to.be.closeTo(example[1], 0.001);
            });
        });
        describe('should check array for duplicates', () => {
            it('and throw error if duplicate has different Y value', () => {
                try {
                    __1.default([[1, 1], [1, 2]]);
                    throw new Error('Should not have been able to create linear estimate function');
                }
                catch (error) {
                    chai_1.expect(error).to.deep.eq(new Error('Cannot create linear estimate when array has two points with same x and different y'));
                }
            });
            it('and not care if it has the same Y value', () => {
                chai_1.expect(__1.default([[1, 1], [1, 1], [3, 3]])(2)).to.eq(2);
            });
        });
    });
    describe('from two arrays', function () {
        const points2 = [[50, 5], [52, 4], [51, 0.5]];
        const examples = [[51, -1], [50, 0], [52, 2]];
        examples.map(function (example) {
            it('should calculate y', function () {
                chai_1.expect(__1.default(points, points2)(example[0])).to.eq(example[1]);
            });
        });
        const demoExamples = [[0, 0], [0.5, 1], [1.5, 4]];
        demoExamples.map(function (de) {
            it('should calculate demo example y', function () {
                chai_1.expect(__1.default([[0, 0], [1, 1], [2, 4]], [[0, 0], [1, 3], [2, 8]])(de[0])).to.eq(de[1]);
            });
        });
        it('should check both arrays for duplicates', () => {
            try {
                __1.default([[1, 1]], [[1, 1], [1, 2]]);
                throw new Error('Should not have been able to create linear estimate function');
            }
            catch (error) {
                chai_1.expect(error).to.deep.eq(new Error('Cannot create linear estimate when array has two points with same x and different y'));
            }
        });
    });
    it('should flatten out the boundaries of the function', function () {
        chai_1.expect(__1.default(points)(45)).to.equal(-5);
        chai_1.expect(__1.default(points)(210)).to.equal(170);
    });
    it('should not except points with only 1 value', () => {
        try {
            __1.default([[1]]);
            throw new Error('Should not have been able to create linear estimate function');
        }
        catch (error) {
            chai_1.expect(error).to.deep.eq(new Error('Point 1 is invalid'));
        }
    });
});
//# sourceMappingURL=index.js.map