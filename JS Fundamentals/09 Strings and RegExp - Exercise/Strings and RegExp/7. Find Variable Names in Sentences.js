"use strict";

function findVariableNames(input) {
    let regex = /\b_([a-zA-Z]+)\b/g;
    let match = regex.exec(input);
    let result = [];

    while (match) {
        result.push(match[1]);
        match = regex.exec(input);
    }

    console.log(result.join(','));
}

findVariableNames('The _id and _age variables are both integers.');
findVariableNames('Calculate the _area of the _perfectRectangle object.');
findVariableNames('__invalidVariable _evenMoreInvalidVariable_ _validVariable');