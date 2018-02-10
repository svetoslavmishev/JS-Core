"use strict";

function checkStringStart(text, word) {
    let start = text.substr(0, word.length);
    return word === start ? 'true' : 'false';
}

checkStringStart('How have you been?', 'how');
checkStringStart('The quick brown fox…', 'The quick brown fox…');
checkStringStart('Marketing Fundamentals, starting 19/10/2016', 'Marketing Fundamentals, sta');


