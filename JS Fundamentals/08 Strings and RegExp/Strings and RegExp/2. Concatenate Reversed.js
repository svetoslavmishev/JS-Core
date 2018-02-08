"use strict";

function concatenateAndReverse(input) {

    let arr = Array.from(input.join('')).reverse().join('');

    console.log(arr);
}

concatenateAndReverse(['I', 'am', 'student']);
concatenateAndReverse(['race', 'car']);