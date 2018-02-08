"use strict";

function simpleEmailValidation(email) {

    let regex = /^([A-Za-z0-9]+)@([A-Za-z]+\.[a-z]+)$/g;

    if (regex.test(email)) {
        return 'Valid';
    } else {
        return 'Invalid';
    }
}

console.log(simpleEmailValidation('valid@email.bg'));
console.log(simpleEmailValidation('invalid@emai1.bg'));
console.log(simpleEmailValidation('invalid@email.BG'));
console.log(simpleEmailValidation('invalid@email.bg.com'));