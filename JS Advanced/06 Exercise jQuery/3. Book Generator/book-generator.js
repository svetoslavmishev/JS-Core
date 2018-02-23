function createBook(selector, titleName, authorName, isbn) {
    let bookData = (function bookGenerator() {
        let id = 1;
        return function (selector, titleName, authorName, isbn) {
            let container = $(selector);
            let div = $('<div>').attr('id', `book${id}`).appendTo(container);
            let title = $('<p>').addClass('title').text(titleName).appendTo(div);
            let author = $('<p>').addClass('author').text(authorName).appendTo(div);
            let isbnCode = $('<p>').addClass('isbn').text(isbn).appendTo(div);
            let selectButton = $('<button>Select</button>').appendTo(div);
            let deselectButton = $('<button>Deselect</button>').appendTo(div);

            selectButton.on('click', function () {
                div.css('border', '2px solid blue');
            }).appendTo(div);
            deselectButton.on('click', function () {
                div.css('border', 'none');
            }).appendTo(div);

            id++;
        };
    }());
    bookData(selector, titleName, authorName, isbn);
}

