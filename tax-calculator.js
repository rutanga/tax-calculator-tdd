
//Pair:Phionah Mumararungu and Nakintu Martha

function calculateTax(earnings) {
    if (earnings <= 12000) {
        return 0;
    }

    if (earnings <= 36000) {
        // 20% tax on earnings above £12000
        const taxableAmount = earnings - 12000;
        return taxableAmount * 0.20;
    }

    // 40% bracket: earnings > £36000
    const taxAt20Percent = (36000 - 12000) * 0.20; // £4800
    const taxAt40Percent = (earnings - 36000) * 0.40;
    return taxAt20Percent + taxAt40Percent;
}

module.exports = calculateTax;