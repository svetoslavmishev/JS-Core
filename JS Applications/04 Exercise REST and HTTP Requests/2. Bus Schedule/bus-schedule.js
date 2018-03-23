function busData() {
    let stopId = "depot";
    let stopName = '';
    let url = `https://judgetests.firebaseio.com/schedule/`;
    let info = $('#info');
    let departBtn = $('#depart');
    let arriveBtn = $('#arrive');

    function depart() {
        $.get(url + stopId + '.json').then(display);
        departBtn.attr('disabled', "disabled");
        arriveBtn.removeAttr('disabled');
    }

    function arrive(response) {
        info.append($('.info').text(`Arriving at ${stopName}`));
        arriveBtn.attr('disabled', "true");
        departBtn.removeAttr('disabled');
    }

    function display(response) {
        info.append($('.info').text(`Next stop ${response.name}`));
        stopId = response.next;
        stopName = response.name;
    }

    return {depart, arrive};
}

let result = busData();