"use strict";

function splitWithDelimiter(text, delimiter) {

    return text.split(delimiter).join('\n');

}

console.log(splitWithDelimiter('One-Two-Three-Four-Five', '-'));
console.log(splitWithDelimiter('http://platform.softuni.bg', '.'));