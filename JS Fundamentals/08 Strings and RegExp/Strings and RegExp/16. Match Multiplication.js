"use strict";

function matchMultiplication(input) {
    let regex = /(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g;
    let result = input.replace(regex,
        (match, a, b) => Number(a) * Number(b));
    console.log(result);
}

matchMultiplication('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).');