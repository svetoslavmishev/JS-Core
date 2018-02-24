function wikiParser(selector) {
    let encodedText = $(selector).text();

    encodedText = encodedText
        .replace(/'''(.*?)'''/g, (match, group) => `<b>${group}</b>`)
        .replace(/''(.*?)''/g, (match, group) => `<i>${group}</i>`)
        .replace(/===(.*?)===/g, (match, group) => `<h3>${group}</h3>`)
        .replace(/==(.*?)==/g, (match, group) => `<h2>${group}</h2>`)
        .replace(/=(.*?)=/g, (match, group) => `<h1>${group}</h1>`)
        .replace(/\[\[([^'=\[\|]*?)]]/g, (match, group) => `<a href="/wiki/${group}">${group}</a>`)
        .replace(/\[\[([^'=\[\]]+?)\|([^'=\[\]]+?)]]/g, (match, group1, group2) => `<a href="/wiki/${group1}">${group2}</a>`);

    //The html(content) method sets the content of the selected elements.
    $(selector).html(encodedText);
}