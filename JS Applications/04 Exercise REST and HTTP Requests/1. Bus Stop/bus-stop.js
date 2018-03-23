function getInfo() {
    let url = `https://judgetests.firebaseio.com/businfo/${$('#stopId').val()}.json`;

    $.ajax({
        url: url,
        method: "GET",
        success: busSuccess,
        error: busError
    });

    function busSuccess(response) {
        for (let key in response.buses) {
            $('#buses')
                .append($(`<li>${`"Bus ${key} arrives in ${response.buses[key]} minutes"`}</li>`));
            $('#stopName').text(`${response.name}`);
        }
    }

    function busError(response) {
        $('#stopName').text(`Error`);
    }
}