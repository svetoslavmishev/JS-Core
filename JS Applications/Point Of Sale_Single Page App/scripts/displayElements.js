function showView(viewName) {
    $('#container section').hide();
    $('#' + viewName).show();
}

$('#profile').hide();

function showMenuLinks() {
    if (sessionStorage.getItem('authtoken')) {       
        showView('viewHome');
        $('#cashier a').text(sessionStorage.getItem('username'));
        $('#profile').show();
    } else {
        showView('welcome-section');
        $('#profile').hide();
    }
}

function createRecieptView() {
    showView('create-receipt-view');
}

function myReceiptView() {
    showView('all-receipt-view');
}

function showReceiptDetails() {
    showView('receipt-details-view');
}

$(document).on({
    ajaxStart: function () {
        $("#loadingBox").show();
    },
    ajaxStop: function () {
        $("#loadingBox").hide();
    }
});
