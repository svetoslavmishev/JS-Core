function showHideMenuLinks() {
    $('main > div').hide();
    if (sessionStorage.getItem('authtoken') === null) {
        $('.anonymous').show();
        $('.useronly').hide();
    } else {
        $('.anonymous').hide();
        $('.useronly').show();
    }
}

function showInfo(message) {
    $('#infoBox').text(message);
    $('#infoBox').show();
    setTimeout(function () {
        $('#infoBox').fadeOut();
    }, 3000);
}

function showError(message) {
    $('#errorBox').text("Error: " + message);
    $('#errorBox').show();
    setTimeout(function () {
        $('#errorBox').fadeOut();
    }, 3000);
}

function showViews(viewId) {
    $('main > section').hide();
    $('#view' + viewId).show();
}