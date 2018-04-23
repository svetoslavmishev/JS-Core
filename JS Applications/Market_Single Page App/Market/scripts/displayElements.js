function showView(viewName) {
    $('main > section').hide(); // Hide all views
    $('#view' + viewName).show() // Show the selected view only
}

function showHideMenuLinks() {
    $('#infoBox').hide();
    $('#errorBox').hide();
    $('#loadingBox').hide();
    if (sessionStorage.getItem('authtoken') === null) { // No logged in user
        $('#menu a[class="useronly"]').hide();
        $('#menu a[class="anonymous"]').show();
        $('#spanMenuLoggedInUser').hide();
    } else { // We have logged in user
        $('#menu a[class="useronly"]').show();
        $('#menu a[class="anonymous"]').hide();
        $('#spanMenuLoggedInUser').text(`Welcome, ${sessionStorage.getItem('username')}!`);
        $('#spanMenuLoggedInUser').show();
    }
}

function showHomeView() {
    showView('AppHome');
}

function showLoginView() {
    showView('Login');
}

function showRegisterView() {
    showView('Register');
}

function showUserHomeView() {
    showView('UserHome');
}

function showShopView() {
    showView('Shop');
}

function showCartView() {
    showView('Cart');
}

