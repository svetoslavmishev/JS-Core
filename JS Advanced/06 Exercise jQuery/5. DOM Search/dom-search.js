function domSearch(selector, caseSensitive) {
    let div = $(selector).addClass('items-control');
    let divAddControl = $('<div>')
        .addClass('add-controls')
        .append($('<label>').text('Enter text: ')
            .append($('<input>')))
        .appendTo(div);

    let addButton = $('<a class="button">')
        .css('display', 'inline-block')
        .text('Add')
        .appendTo(divAddControl);

    let divSearchControl = $('<div class="search-controls">')
        .append($('<label>'))
        .text('Search:')
        .append($('<label>')
            .append($('<input>').on('input', search)))
        .appendTo(div);

    let divResultControl = $('<div class="result-controls">')
        .append($('<ul class="items-list">'))
        .appendTo(div);
    
    addButton.on('click', function () {
        let addInput = ($('.add-controls label input')).val();
        $('<li class="list-item">')
            .append($('<a class="button">X</a>')
                .on('click', deleteElement))
            .append($('<strong>')
                .text(`${addInput}`))
            .appendTo($('.items-list')).appendTo($('.items-list'));
        $('.add-controls label input').val('');
    });

    function deleteElement() {
        $(this).parent().remove();
    }

    function search() {
        let searchInput = $(this).val();
        $('.list-item').each((index, li) => matches(li, searchInput));
    }

    function matches(li, text) {
        $(li).css('display', 'block');
        if (caseSensitive) {
            if ($(li).find('strong').text().indexOf(text) == -1) {
                $(li).css('display', 'none');
            }
        } else {
            if ($(li).find('strong').text().toLowerCase().indexOf(text.toLowerCase()) == -1) {
                $(li).css('display', 'none');
            }
        }
    }
}