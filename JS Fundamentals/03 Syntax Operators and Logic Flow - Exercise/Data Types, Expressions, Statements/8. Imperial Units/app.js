function imperialUnits(inches) {

    let toFeet = Math.floor(inches / 12);
    let toInches = inches % 12;

    console.log(`${toFeet}'-${toInches}"`);
}
imperialUnits(36);
imperialUnits(55);
imperialUnits(11);