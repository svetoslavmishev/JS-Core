$(() => {
    renderCatTemplate();

    function renderCatTemplate() {
        let source = $('#cat-template').html();
        let template = Handlebars.compile(source);
        let catsObj = {cats: window.cats};
        let render = template(catsObj);
        $('#allCats').html(render);

        $('.btn.btn-primary').on('click', function () {
            $(this).parent().find('div').toggle();
            $(this).text() === 'Show status code'
                ? $(this).text('Hide Status Code')
                : $(this).text('Show status code');
        });
    }
});
