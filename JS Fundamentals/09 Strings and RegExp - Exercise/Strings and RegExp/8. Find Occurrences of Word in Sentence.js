"use strict";

function findOccurrencesInSentence(sentence, word) {
    let regex = new RegExp('\\b' + word + '\\b', 'gi');
    let count = 0;
    let match = regex.exec(sentence);

    while (match) {
        count++;
        match = regex.exec(sentence);
    }
    console.log(count);
}

findOccurrencesInSentence('The waterfall was so high, that the child couldn’t see its peak.', 'the');
findOccurrencesInSentence('How do you plan on achieving that? How? How can you even think of that?', 'how');
findOccurrencesInSentence('There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there');