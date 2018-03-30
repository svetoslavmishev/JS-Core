function attachEvents() {
    const baseUrl = 'https://baas.kinvey.com/appdata/kid_Hye32-Sqz/biggestCatches/';
    const base64 = btoa('guest:guest');
    const authorization = {
        "Authorization": "Basic " + base64,
        "Content-type": "application/json"};

    $('.load').on('click', loadCatches);
    $('.add').on('click', createCatches);

    function loadCatches() {
        $.ajax({
            method: 'GET',
            url: baseUrl,
            headers: authorization
        }).then(displayCatches)
            .catch(handleError)
    }

    function displayCatches(data) {
        $('#catches').empty();
        for (let el of data) {
            $('#catches').append($(`<div class="catch" data-id="${el._id}">`)
                .append($('<label>').text('Angler'))
                .append($(`<input type="text" class="angler" value="${el['angler']}"/>`))
                .append($('<label>').text('Weight'))
                .append($(`<input type="number" class="weight" value="${el['weight']}"/>`))
                .append($('<label>').text('Species'))
                .append($(`<input type="text" class="species" value="${el['species']}"/>`))
                .append($('<label>').text('Location'))
                .append($(`<input type="text" class="location" value="${el['location']}"/>`))
                .append($('<label>').text('Bait'))
                .append($(`<input type="text" class="bait" value="${el['bait']}"/>`))
                .append($('<label>').text('Capture Time'))
                .append($(`<input type="number" class="captureTime" value="${el['captureTime']}"/>`))
                .append($('<button class="update">Update</button>').on('click', updateCatch))
                .append($('<button class="delete">Delete</button>').on('click', deleteCatch)))
        }
    }

    function updateCatch() {
        let catchId = $(this).parent().attr('data-id');
        let inputs = $(this).parent();
        let dataObj = createObject(inputs);

        $.ajax({
            method: 'PUT',
            url: baseUrl + `${catchId}`,
            headers: authorization,
            data: JSON.stringify(dataObj)
        }).then(loadCatches)
            .catch(handleError)
    }

    function createCatches() {
        let inputs = $(this).parent();
        let dataObj = createObject(inputs);

        $.ajax({
            method: 'POST',
            url: baseUrl,
            headers: authorization,
            data: JSON.stringify(dataObj)
        }).then(loadCatches)
            .catch(handleError);

        inputs.find('.angler').val('');
        inputs.find('.weight').val('');
        inputs.find('.species').val('');
        inputs.find('.location').val('');
        inputs.find('.bait').val('');
        inputs.find('.captureTime').val('');
    }

    function createObject(inputs) {
        return {
            "angler": inputs.find('.angler').val(),
            "weight": Number(inputs.find('.weight').val()),
            "species": inputs.find('.species').val(),
            "location": inputs.find('.location').val(),
            "bait": inputs.find('.bait').val(),
            "captureTime": Number(inputs.find('.captureTime').val())
        };
    }

    function deleteCatch() {
        let catchId = ($(this).parent().attr('data-id'));
        $.ajax({
            method: 'DELETE',
            url: baseUrl + `${catchId}`,
            headers: authorization
        }).then(loadCatches)
            .catch(handleError)
    }

    function handleError(error) {
        console.log(`Error(${error.status}) ${error.statusText}`);
    }
}