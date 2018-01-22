"use strict";

function dnaHelix(n) {
    let str = 'ATCGTTAGGG';
    let result = '';
    let index = 0;

    for (let i = 0; i < n; i++) {
        if (i % 4 == 0) {
            result += `**${str[index % 10]}${str[index % 10 + 1]}**\n`;
        } else if (i % 4 == 1 || i % 4 == 3) {
            result += `*${str[index % 10]}--${str[index % 10 + 1]}*\n`;
        } else if (i % 4 == 2) {
            result += `${str[index % 10]}----${str[index % 10 + 1]}\n`;
        }
        index += 2;
    }

    return result;
}

dnaHelix(4);
dnaHelix(10);