"use strict";

function countOccurrences(word, text) {
    let count = 0;
    let currentIndex = text.indexOf(word);

    while (currentIndex != -1) {
        count++;
        currentIndex = text.indexOf(word, currentIndex + 1);
    }

    console.log(count);

}

countOccurrences('the', 'The quick brown fox jumps over the lay dog.');
countOccurrences('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.');
