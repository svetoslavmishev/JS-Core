"use strict";

function рepeatString(text, n) {
    //return text.repeat(n);

    //Hint in Exercises: Strings and Regular Expressions document
    let result = '';
    for (let i = 0; i < n; i++) {
        result += text;
    }
    return result;
}

console.log(рepeatString('repeat', 5));
console.log(рepeatString('magic is real', 3));