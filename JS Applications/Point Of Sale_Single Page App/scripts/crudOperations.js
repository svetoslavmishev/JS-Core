function registerUser(ev) {
    ev.preventDefault();
    let username = $('#username-register').val();
    let password = $('#password-register').val();
    let repeatPassword = $('#password-register-check').val();

    if (RegExp('^[a-zA-Z0-9]{5,}$').test(username)) {
        if (password !== '') {
            if (password === repeatPassword) {
                auth.register(username, password)
                    .then(function (res) {
                        auth.saveSession(res);
                        showMenuLinks();
                        createRecieptView();
                        auth.showInfo('User registration successful.');
                        $('#username-register').val('');
                        $('#password-register').val('');
                        $('#password-register-check').val('');
                    }).catch(auth.handleAjaxError)
            } else {
                auth.showError('Passwords do not match.')
            }
        } else {
            auth.showError('A password should contain only english alphabet letters and digits.')
        }
    } else {
        auth.showError('A username should be at least 5 characters long and should contain only english alphabet letters.')
    }
}

function loginUser(ev) {
    ev.preventDefault();
    let username = $('#username-login').val();
    let password = $('#password-login').val();

    if (RegExp('^[a-zA-Z0-9]{5,}$').test(username)) {
        if (password !== '') {
            auth.login(username, password)
                .then(function (res) {
                    auth.saveSession(res);
                    showMenuLinks();
                    createRecieptView();
                    auth.showInfo('User login successful.');
                    $('#username-login').val('');
                    $('#password-login').val('');
                }).catch(auth.handleAjaxError)
        } else {
            auth.showError('A password should contain only english alphabet letters and digits.')
        }
    } else {
        auth.showError('A username should be at least 5 characters long and should contain only english alphabet letters.')
    }
}

function logoutUser() {
    auth.logout()
        .then(function (res) {
            sessionStorage.clear();
            showMenuLinks();
            auth.showInfo('Logout successful.');
        }).catch(auth.handleAjaxError);
}

//function getActiveReceipt() {
//    let urlParts = `appdata/${kinveyAppKey}/receipts?query={"_acl.creator":"${sessionStorage.getItem('userId')}","active":true}`;
//    request('GET', urlParts, getKinveyAuthorization(), '')
//        .then(function (res) {
//
//        })
//        .catch(handleAjaxError);
//    createRecieptView();
//}
