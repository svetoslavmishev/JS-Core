"use strict";

function matchDates(text) {
    let regex = /\b(\d{1,2})-([A-Z][a-z]{2})-(\d{4})\b/g;
    let match = regex.exec(text);
    let arr = [];

    while (match) {
        arr.push(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
        match = regex.exec(text);
    }
    console.log(arr.join('\n'));
}

matchDates([`I am born on 30-Dec-1994.
This is not date: 512-Jan-1996.
My father is born on the 29-Jul-1955.`]);
matchDates([`1-Jan-1999 is a valid date.
So is 01-July-2000.
I am an awful liar, by the way – Ivo, 28-Sep-2016.`]);