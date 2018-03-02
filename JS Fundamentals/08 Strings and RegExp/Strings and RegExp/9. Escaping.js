"use strict";

function htmlEscape(input) {

    let symbols = {'"': '&quot;', '&': '&amp;', '<': '&lt;', '>': '&gt;'};
    let replaced = input.map(x => x.replace(/[\"&'<>]/g, y => symbols[y]));
    let html = `<ul>\n` + replaced.map(i => `  <li>${i}</li>`).join('\n') + '\n' + `</ul>`;

    console.log(html);
}

htmlEscape(['<b>unescaped text</b>', 'normal text']);
