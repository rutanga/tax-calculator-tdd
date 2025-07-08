function calculateTax(earnings) {
    if (earnings <= 12000) {
        return 0;
    }

    // 20% tax on earnings above £12000
    const taxableAmount = earnings - 12000;
    return taxableAmount * 0.20;
}

module.exports = calculateTax;