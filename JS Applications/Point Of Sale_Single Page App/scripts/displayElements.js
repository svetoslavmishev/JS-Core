function showView(viewName) {
    $('#container section').hide();
    $('#' + viewName).show();
}

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

function createRecieptView() {
    showView('create-receipt-view');
}

function myReceiptView() {
    showView('all-receipt-view');
}

function showReceiptDetails() {
    showView('all-receipt-view');
}

$(document).on({
    ajaxStart: function () {
        $("#loadingBox").show()
    },
    ajaxStop: function () {
        $("#loadingBox").hide()
    }
});
