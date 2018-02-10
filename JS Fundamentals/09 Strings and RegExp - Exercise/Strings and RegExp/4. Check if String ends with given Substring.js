"use strict";

function checkStringEnd(text, word) {
    let end = text.substring(text.length - word.length);
    return word === end ? 'true' : 'false';
}

checkStringEnd('This sentence ends with fun?', 'fun?');
checkStringEnd('This is Houston, we have…', 'We have…?');
checkStringEnd('The new iPhone has no headphones jack.', 'o headphones jack.');