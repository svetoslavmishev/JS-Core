"use strict";

function capitalizeWords(text) {

    return text.toLowerCase()
        .split(' ')
        .map(w => w[0].toUpperCase() + w.substring(1)).join(' ');

}

console.log(capitalizeWords('Capitalize these words'));
console.log(capitalizeWords('Was that Easy? tRY thIs onE for SiZe!'));;