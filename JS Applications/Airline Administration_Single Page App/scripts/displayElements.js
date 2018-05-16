function showView(viewName) {
    $('#container section').hide(); // Hide all views
    $('#view' + viewName).show() // Show the selected view only
}

function showHideMenuLinks() {
    if (sessionStorage.getItem('authtoken') === null) { // No logged in user
        $('#container section').hide();
        $('#container .right-container').hide();
        $('#container li:first-child').hide();
        $('#container li:nth-child(2)').hide();
        $('#container li:nth-child(3)').show();
        $('#container li:last-child').show();
    } else { // We have logged in user
        $('#container section').hide();
        $('#container .right-container').show();
        $('#container li:first-child').show();
        $('#container li:nth-child(2)').show();
        $('#container li:nth-child(3)').hide();
        $('#container li:last-child').hide();
        $('.right-container span').text("Welcome, " + sessionStorage.getItem('username') + "!");
    }
}

function showRegisterView() {
    showView('Register');
}

function showLoginView() {
    showView('Login');
}

function showCatalogView() {
    showView('Catalog');
}

function showAddFlightView() {
    showView('AddFlight');
}

function showFlightDetailsView() {
    showView('FlightDetails');//
}

function showEditFlightView() {
    showView('EditFlight');
}

function showMyFlightsView() {
    showView('MyFlights');
}

