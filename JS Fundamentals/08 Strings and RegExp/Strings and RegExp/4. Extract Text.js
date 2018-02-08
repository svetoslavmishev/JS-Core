"use strict";

function extractText(text) {
    let startIndex = text.indexOf('(');
    let result = [];

    while (startIndex != -1) {
        let endIndex = text.indexOf(')', startIndex);
        if (endIndex != -1) {
            result.push(text.substring(startIndex + 1, endIndex));
        } else {
            break;
        }
        startIndex = text.indexOf('(', endIndex + 1);
    }

    console.log(result.join(', '));
}

extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');