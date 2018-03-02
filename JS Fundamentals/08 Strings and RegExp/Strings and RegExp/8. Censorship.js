"use strict";

function censorship(text, words) {

    for (let w of words) {
        let newString = '-'.repeat(w.length);

        //We use endless while loop, which replace all matches in text until value is -1
        while (text.indexOf(w) > -1) {
            text = text.replace(w, newString);
        }
    }

    console.log(text);
}

censorship('roses are red, violets are blue', [', violets are', 'red']);