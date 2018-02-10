"use strict";

function captureNumbers(text) {
    let regex = /\d+/g;
    let match = regex.exec(text);
    let result = [];

    while (match) {
        result.push(match);
        match = regex.exec(text);
    }

    console.log(result.join(' '));
}

captureNumbers('The300\n' +
    'What is that?\n' +
    'I think it’s the 3rd movie.\n' +
    'Lets watch it at 22:45\n');
captureNumbers('123a456\n' +
    '789b987\n' +
    '654c321\n' +
    '0\n');
captureNumbers('Let’s go11!!!11!\n' +
    'Okey!1!\n');