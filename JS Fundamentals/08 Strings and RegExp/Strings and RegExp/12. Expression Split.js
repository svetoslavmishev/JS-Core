"use strict";

function expressionSplit(func) {

    let regex = /[\s.();,]+|\\t+/g;
    return func.split(regex).join('\n');

}

console.log(expressionSplit('let sum = 4 * 4,b = "wow";'));
console.log(expressionSplit('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}'));