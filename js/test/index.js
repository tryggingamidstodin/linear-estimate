'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const __1 = require("../");
describe('linear estimate', function () {
    var points = [[50, -5], [52, 0], [108, 170], [104, 160]];
    var examples = [[55, 9.23], [52, 0], [104, 160], [50, -5]];
    examples.map(function (example) {
        it('should calculate y', function () {
            chai_1.expect(__1.default(points)(example[0])).to.be.closeTo(example[1], 0.001);
        });
    });
    it('should flatten out the boundaries of the function', function () {
        chai_1.expect(__1.default(points)(45)).to.equal(-5);
        chai_1.expect(__1.default(points)(210)).to.equal(170);
    });
    it('should be able to make a combined estimate from two arrays', function () { });
});
//# sourceMappingURL=index.js.map