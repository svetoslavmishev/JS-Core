function showMenuLinks() {
    if (sessionStorage.getItem('authtoken') === null) {
        showView('welcome-section');
        $('#profile').hide();
    } else {
        showView('viewHome');
        $('#cashier a').text(sessionStorage.getItem('username'));
        $('#profile').show();
    }
}

function showView(viewName) {
    $('#container section').hide();
    $('#' + viewName).show();
}

function createRecieptView() {
    showView('create-receipt-view');
}


$(document).on({
    ajaxStart: function () {
        $("#loadingBox").show()
    },
    ajaxStop: function () {
        $("#loadingBox").hide()
    }
});

function showInfo(message) {
    $('#infoBox').text(message);
    $('#infoBox').show();
    setTimeout(function () {
        $('#infoBox').fadeOut();
    }, 3000);
}

