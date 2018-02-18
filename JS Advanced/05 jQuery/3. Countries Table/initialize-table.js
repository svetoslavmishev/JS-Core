function initializeTable() {
    $('#createLink').click(addCountry);

    createData("Bulgaria", "Sofia");
    createData("Germany", "Berlin");
    createData("Russia", "Moscow");
    fixRowLinks();

    function addCountry() {
        let country = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();
        createData(country, capital);
        $('#newCountryText').val('');
        $('#newCapitalText').val('');
        fixRowLinks();
    }

    function createData(country, capital) {
        let row = $('<tr>')
            .append($('<td>').text(country))
            .append($('<td>').text(capital))
            .append($('<td>')
                .append($("<a href='#'>[Up]</a>").click(moveUp))
                .append($("<a href='#'>[Down]</a>").click(moveDown))
                .append($("<a href='#'>[Delete]</a>").click(deleteRow)));
        row.css('display', 'none');
        $('#countriesTable').append(row);
        row.fadeIn(1000);
    }

    function moveUp() {
        let row = $(this).parent().parent();
        row.fadeOut(() => {
            row.insertBefore(row.prev());
            row.fadeIn();
            fixRowLinks();
        });
    }

    function moveDown() {
        let row = $(this).parent().parent();
        row.fadeOut(() => {
            row.insertAfter(row.next());
            row.fadeIn();
            fixRowLinks();
        });

    }

    function deleteRow() {
        let row = $(this).parent().parent();
        row.fadeOut(() => {
            row.remove();
            fixRowLinks();
        });
    }

    function fixRowLinks() {
        $('#countriesTable tr')
            .find('a:contains("Up")').css('display', 'inline');
        $('#countriesTable tr')
            .find('a:contains("Down")').css('display', 'inline');

        let first = $('#countriesTable tr')[2];
        $(first).find('a:contains("Up")').css('display', 'none');
        let last = $('#countriesTable tr:last');
        $(last).find('a:contains("Down")').css('display', 'none');
    }
}

