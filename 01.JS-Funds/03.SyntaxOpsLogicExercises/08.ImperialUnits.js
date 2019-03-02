function imperialUnits(inches) {
    if (inches < 12) {
        console.log(`0'-${inches}"`);
    } else {
        let feet = Math.floor(inches / 12);
        let remainder = inches % 12;
        console.log(`${feet}'-${remainder}"`);
    }
}
imperialUnits(35);