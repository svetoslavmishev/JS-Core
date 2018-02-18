function search() {
    let input = $('#searchText').val();
    let counter = 0;
    let modified = $('#towns li').each((i, el) => {
        if (el.textContent.includes(input)) {
            $(el).css('font-weight', 'bold');
            counter++;
        } else {
            $(el).css('font-weight', '');
        }
    });

    $('#result').text(`${counter} matches found.`);
}