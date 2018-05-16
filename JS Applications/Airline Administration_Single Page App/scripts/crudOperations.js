function registerUser(ev) {
    ev.preventDefault();
    let username = $('#formRegister input[name="username"]').val();
    let password = $('#formRegister input[name="pass"]').val();
    let repeatPassword = $('#formRegister input[name="checkPass"]').val();

    if (RegExp('^[a-zA-Z0-9]{5,}$').test(username)) {
        if (password !== '') {
            if (password === repeatPassword) {
                auth.register(username, password)
                    .then(function (res) {
                        auth.saveSession(res);
                        showHideMenuLinks();

                        //REDIRECT TO HOME SCREEN
                        displayAllPublishedFlights();

                        auth.showInfo('User registration successful.');
                        $('#formRegister').trigger('reset');
                    }).catch(auth.handleAjaxError)
            } else {
                auth.showError('Passwords do not match.');
            }
        } else {
            auth.showError('A password should contain english alphabet letters.');
        }
    } else {
        auth.showError('A username should be at least 5 characters long and should contain only english alphabet letters.');
    }
}

function loginUser(ev) {
    ev.preventDefault();
    let username = $('#formLogin input[name="username"]').val();
    let password = $('#formLogin input[name="pass"]').val();

    if (RegExp('^[a-zA-Z0-9]{5,}$').test(username)) {
        if (password !== '') {
            auth.login(username, password)
                .then(function (res) {
                    auth.saveSession(res);
                    showHideMenuLinks();

                    //REDIRECT TO HOME SCREEN
                    displayAllPublishedFlights();

                    auth.showInfo('User login successful.');
                    $('#formLogin').trigger('reset');
                }).catch(auth.handleAjaxError);
        } else {
            auth.showError('A password should contain english alphabet letters.');
        }
    } else {
        auth.showError('A username should be at least 5 characters long and should contain only english alphabet letters.');
    }
}

function logoutUser(ev) {
    ev.preventDefault();

    auth.logout()
        .then(function (res) {
            sessionStorage.clear();
            showHideMenuLinks();
            showLoginView();
            auth.showInfo('Logout successful.');
        }).catch(auth.handleAjaxError);
}

function displayAllPublishedFlights() {
    requester.get('appdata', 'flights?query={"isPublished":"true"}', 'kinvey')
        .then(function (res) {
            renderFlights(res);
        }).catch(auth.handleAjaxError);

    showCatalogView();
}

function renderFlights(res) {
    let flightContainer = $('.added-flights');
    flightContainer.empty();

    (async function () {
        res.forEach(el => {
            el.formatDate = formatDate(el.departure);
        });

        let listFlights = await $.get('templates/all-flights.hbs');
        let template = Handlebars.compile(listFlights);
        let context = {
            flight: res
        };
        let templateToHtml = template(context);
        flightContainer.append(templateToHtml);

        $('.add-flight').on('click', showAddFlightView);
        $(".added-flight").on('click', showDetails);
    })();
}

function addFlights(ev) {
    ev.preventDefault();

    let destination = $('#formAddFlight input[name="destination"]');
    let origin = $('#formAddFlight input[name="origin"]');
    let departureDate = $('#formAddFlight input[name="departureDate"]');
    let departureTime = $('#formAddFlight input[name="departureTime"]');
    let seats = $('#formAddFlight input[name="seats"]');
    let cost = $('#formAddFlight input[name="cost"]');
    let image = $('#formAddFlight input[name="img"]');
    let isPublic = 'false';

    if ($('#formAddFlight input[name="public"]').is(':checked')) {
        isPublic = 'true';
    }

    let data;
    if (destination.val() !== "" && origin.val() !== "" && Number(seats.val()) > 0 && Number(cost.val()) > 0) {
        data = {
            "destination": destination.val(),
            "origin": origin.val(),
            "departure": departureDate.val(),
            "departureTime": departureTime.val(),
            "seats": seats.val(),
            "cost": cost.val(),
            "image": image.val(),
            "isPublished": isPublic
        };
    }

    if (data !== undefined) {
        requester.post('appdata', 'flights', 'kinvey', data)
            .then(function (res) {
                displayAllPublishedFlights();
                auth.showInfo('Created flight.');
                $('#formAddFlight').trigger('reset');
            }).catch(auth.handleAjaxError);
    }

    showAddFlightView();
}

function showDetails() {
    let datalId = $(this).closest('a').attr('data-id');

    if (datalId === undefined) {
        datalId = $(this).closest('div').attr('data-id');
    }

    requester.get('appdata', `flights/${datalId}`, 'kinvey')
        .then(function (res) {
            renderDetails(res);
            showFlightDetailsView();
        }).catch(auth.handleAjaxError);
}

function renderDetails(res) {
    let flightContainer = $('.ticket-area');
    flightContainer.empty();

    (async function () {
        let detailFlight = await $.get('templates/details.hbs');
        let template = Handlebars.compile(detailFlight);

        let context = {
            "_id": res._id,
            "destination": res.destination,
            "origin": res.origin,
            "formatDate": formatDate(res.departure),
            "departureTime": res.departureTime,
            "seats": res.seats,
            "cost": (Number(res.cost)).toFixed(2),
            "image": res.image,
            "isPublished": res.isPublic
        };

        let templateToHtml = template(context);
        flightContainer.append(templateToHtml);

        $('.edit-flight-detail').on('click', loadDetailsForEdit);
    })();
}

function loadDetailsForEdit() {
    let id = $(this).closest('div').attr('data-id');

    requester.get('appdata', `flights/${id}`, 'kinvey')
        .then(function (res) {
            let destination = $('#formEditFlight input[name="destination"]').val(res.destination);
            let origin = $('#formEditFlight input[name="origin"]').val(res.origin);
            let departureDate = $('#formEditFlight input[name="departureDate"]').val(res.departure);
            let departureTime = $('#formEditFlight input[name="departureTime"]').val(res.departureTime);
            let seats = $('#formEditFlight input[name="seats"]').val(res.seats);
            let cost = $('#formEditFlight input[name="cost"]').val((Number(res.cost).toFixed(2)));
            let image = $('#formEditFlight input[name="img"]').val(res.image);
            let isPublic = 'false';
            showEditFlightView();
        }).catch(auth.handleAjaxError);
}


function editFlight(ev) {
    ev.preventDefault();
    let id = $(this).closest('div').attr('data-id');

    let destination = $('#formEditFlight input[name="destination"]').val();
    let origin = $('#formEditFlight input[name="origin"]').val();
    let departureDate = $('#formEditFlight input[name="departureDate"]').val();
    let departureTime = $('#formEditFlight input[name="departureTime"]').val();
    let seats = $('#formEditFlight input[name="seats"]').val();
    let cost = $('#formEditFlight input[name="cost"]').val();
    let image = $('#formEditFlight input[name="img"]').val();
    let isPublic = 'false';

    if ($('#formEditFlight input[name="public"]').is(':checked')) {
        isPublic = 'true';
    }

    let data = {
        "destination": destination,
        "origin": origin,
        "departure": departureDate,
        "departureTime": departureTime,
        "seats": seats,
        "cost": cost,
        "image": image,
        "isPublished": isPublic
    };

    requester.update('appdata', `flights/${id}`, 'kinvey', data)
        .then(function (res) {

            console.log(res);

            showDetails();
            showFlightDetailsView();
            auth.showInfo('Successfully edited flight.');
        }).catch(auth.handleAjaxError);
}

function myFlights() {
    let myFlightsContainer = $('.flight-ticket');
    myFlightsContainer.empty();

    requester.get('appdata', `flights?query={"_acl.creator":"${sessionStorage.getItem('id')}"}`, 'kinvey')
        .then(function (res) {

            (async function () {
                let myFlight = await $.get('templates/my-flights.hbs');
                let template = Handlebars.compile(myFlight);

                res.forEach(el => {
                    el.formatDate = formatDate(el.departure);
                    el.cost = (Number(el.cost)).toFixed(2);
                });

                let context = {
                    airplane: res
                };

                let templateToHtml = template(context);
                myFlightsContainer.append(templateToHtml);

                $('.remove').on('click', deleteFlight);
                $('.details').on('click', showDetails);
            })();

        }).catch(auth.handleAjaxError);

    showMyFlightsView();

}

function deleteFlight() {
    let id = $(this).closest('div').attr('data-id');

    requester.remove('appdata', `flights/${id} `, 'kinvey')
        .then(function (res) {
            myFlights();
            auth.showInfo('Flight deleted.');
        }).catch(auth.handleAjaxError);
}
