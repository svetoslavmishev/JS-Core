function attachEvents() {
    $('#items').on('click', 'li', selectTown);

    function selectTown() {
        let li = $(this);
        if (li.attr('data-selected')) {
            li.removeAttr('data-selected');
            li.css('background', '');
        } else {
            li.attr('data-selected', 'true');
            li.css('background', '#DDD');
        }

        $('#showTownsButton').on('click', function () {
            let result = [];
            $('#items li[data-selected="true"]').each((i, element) => result.push(element.textContent));
            $('#selectedTowns').text("Selected towns: " + result.join(', '));
        });
    }
}