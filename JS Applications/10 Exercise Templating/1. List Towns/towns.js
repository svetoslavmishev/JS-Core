function attachEvents() {
    $('#btnLoadTowns').on('click', function () {
        let townsArr = $('#towns').val()
            .split(', ')
            .map(t => ({name: t}));

        let source = $('#towns-template').html();
        let template = Handlebars.compile(source);
        let townsObj = {
            towns: townsArr
        };
        let html = template(townsObj);
        $('#root').empty();
        $('#root').append(html);
    });
}
