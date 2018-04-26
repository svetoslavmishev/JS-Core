function showView(viewName) {
    $('#main section').hide(); // Hide all views
    $('#view' + viewName).show() // Show the selected view only
}

function showHideMenuLinks() {
    showLoginView();
    if (sessionStorage.getItem('authtoken') === null) { // No logged in user
        $('.menu').hide();
    } else { // We have logged in user
        $('.menu').show();
        $('#viewLogin').hide();
    }
}

function showLoginView() {
    showView('Login');
}

function showRegisterView() {
    showView('Register');
}

function showDiscoverView() {
    showView('Discover');
}

function showFeedView() {
    showView('Feed');
}

function showMeView() {
    showView('Me');
}

function showProfileView() {
    showView('Profile');
}

