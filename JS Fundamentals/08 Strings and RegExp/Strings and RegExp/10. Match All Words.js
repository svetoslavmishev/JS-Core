"use strict";

function matchAllWords(text) {
    let pattern = /\W+/g;
    console.log(text
        .split(pattern)
        .filter(x => x != "")
        .join('|'));
}

matchAllWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text');
matchAllWords('_(Underscores) are also word characters');