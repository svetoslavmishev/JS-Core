"use strict";

function capitalizeWords(text) {
    // let arr = text.toLowerCase().split(' ');
    // let result = '';
    //
    // for (let word of arr) {
    //     result += word[0].toUpperCase() + word.substring(1) + ' ';
    // }
    // console.log(result);

    //OR ONE ROW CODE
    return text.toLowerCase()
        .split(' ')
        .map(w => w[0].toUpperCase() + w.substring(1)).join(' ');

}

console.log(capitalizeWords('Capitalize these words'));
console.log(capitalizeWords('Was that Easy? tRY thIs onE for SiZe!'));;