
//Pair:Phionah Mumararungu and Nakintu Martha

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

    it('should return 4800 tax for earnings of £36000', function () {
        // £36000 - £12000 = £24000 taxable at 20% = £4800
        assert.equal(calculateTax(36000), 4800);
    });

    it('should return 5200 tax for earnings of £37000', function () {
        // First £12000: £0 tax
        // Next £24000 (£12000-£36000): £4800 tax (20%)
        // Next £1000 (£36000-£37000): £400 tax (40%)
        // Total: £0 + £4800 + £400 = £5200
        assert.equal(calculateTax(37000), 5200);
    });

    it('should return 9200 tax for earnings of £47000', function () {
        // First £12000: £0 tax
        // Next £24000 (£12000-£36000): £4800 tax (20%)
        // Next £11000 (£36000-£47000): £4400 tax (40%)
        // Total: £0 + £4800 + £4400 = £9200
        assert.equal(calculateTax(47000), 9200);
    });
});