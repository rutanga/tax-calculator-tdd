const assert = require('chai').assert;
const calculateTax = require('./tax-calculator');

describe('Tax Calculator', function () {
    it('should return 0 tax for earnings of £0', function () {
        assert.equal(calculateTax(0), 0);
    });

    it('should return 0 tax for earnings of £5000', function () {
        assert.equal(calculateTax(5000), 0);
    });
});