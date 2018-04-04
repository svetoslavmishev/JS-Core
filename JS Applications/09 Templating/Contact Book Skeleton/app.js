$(() => {
    let detailsData;
    let data;

    async function getData() {
        let contactsData = await $.get("templates/contacts.html");
        detailsData = await $.get("templates/details.html");
        data = await $.get("data.json");

        let contactTemplate = Handlebars.compile(contactsData);
        let contactsObj =
            {
                contacts: data
            };
        let htmlContact = contactTemplate(contactsObj);
        $('#list').append(htmlContact);
        attachEvent();
    }

    function attachEvent() {
        $('.contact').on('click', function () {
            showDetails($(this).attr('data-id'));
            $('.contact').removeClass('active');
            $(this).addClass('active');
        });
    }

    function showDetails(index) {
        let detailsTemplate = Handlebars.compile(detailsData);
        let htmlDetail = detailsTemplate(data[index]);
        $('#details').empty();
        $('#details').append(htmlDetail);
    }

    getData();

});