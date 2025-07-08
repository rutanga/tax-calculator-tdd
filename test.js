const assert = require('chai').assert;
const calculateTax = require('./tax-calculator');

describe('Tax Calculator', function () {
    it('should return 0 tax for earnings of £0', function () {
        assert.equal(calculateTax(0), 0);
    });

    it('should return 0 tax for earnings of £5000', function () {
        assert.equal(calculateTax(5000), 0);
    });

    it('should return 0 tax for earnings of £11999', function () {
        assert.equal(calculateTax(11999), 0);
    });

    it('should return 0 tax for earnings of £12000', function () {
        assert.equal(calculateTax(12000), 0);
    });

    it('should return 200 tax for earnings of £13000', function () {
        // £13000 - £12000 = £1000 taxable at 20% = £200
        assert.equal(calculateTax(13000), 200);
    });
});