"use strict";

function nonDecreasingSubsequence(input) {
    let max = input[0];
    let result = [];

    for (let element of input) {
        if (element >= max) {
            max = element;
            result.push(max);
        }
    }
    return result.join('\n');

}

console.log(nonDecreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]));