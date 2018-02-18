function extractText() {
    let result = [];
    $('#items li').each((i, el) => result.push(el.textContent));
    $('#result').text(result.join(', '));
}