function showView(viewName) {
    $('.content section').hide(); // Hide all views
    $('#view' + viewName).show() // Show the selected view only
}


function showHideMenuLinks() {
    if (sessionStorage.getItem('authtoken') === null) { // No logged in user
        $('#menu').hide();
        $('#profile').hide();
    } else { // We have logged in user
        $('#menu').show();
        $('#profile span').text(sessionStorage.getItem('username') + "!");
        $('#profile').show();
    }
}

function showHomeView() {
    showView('Welcome');
}
function showCatalog() {
    showView('Catalog');
}
function showPostDetails() {
    showView('Comments');
}

function showMyPosts() {
    showView('MyPosts');
}

function showEditPostView() {
    showView('Edit');
    $('#editPostForm').trigger('reset');
}
function showCreatePostView() {
    showView('Submit');
    $('#submitForm').trigger('reset');
}

