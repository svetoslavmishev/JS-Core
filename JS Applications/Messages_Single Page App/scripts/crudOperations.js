function showViews(viewId) {
    $('main > section').hide();
    $('#view' + viewId).show();
}

const kinveyBaseUrl = "https://baas.kinvey.com/";
const kinveyAppKey = "kid_rJMARiuoM";
const kinveyAppSecret = "e0b36ff1ec514aa8a797c1203fc7687b";
const kinveyAppAuthHeaders = {
    "Authorization": "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret)
};

function request(method, url, headers, data) {
    return $.ajax({
        method: method,
        url: kinveyBaseUrl + url,
        headers: headers,
        data: data
    });
}

function registerUser(ev) {
    ev.preventDefault();
    let username = $('#registerUsername').val();
    let password = $('#registerPasswd').val();
    let name = $('#registerName').val();
    let userData = {username, password, name};

    request('POST', `user/${kinveyAppKey}/`, kinveyAppAuthHeaders, userData)
        .then(function (res) {
            saveSessionData(res);
            showHideMenuLinks();
            showViews('UserHome');
            showInfo('User registration successful.');
        })
        .catch(handleAjaxError);
}

function loginUser(ev) {
    ev.preventDefault();
    let username = $('#loginUsername').val();
    let password = $('#loginPasswd').val();
    let userData = {username, password};

    request('POST', `user/${kinveyAppKey}/login`, kinveyAppAuthHeaders, userData)
        .then(function (res) {
            saveSessionData(res);
            showHideMenuLinks();
            showViews('UserHome');
            showInfo('Login successful.');
        })
        .catch(handleAjaxError);
}

function logout() {
    request('POST', `user/${kinveyAppKey}/_logout`, getKinveyAuthorization())
        .then(function (res) {
            sessionStorage.clear();
            showHideMenuLinks();
            showViews('AppHome');
            showInfo('Logout successful.');
        })
        .catch(handleAjaxError);
}

function formatDate(dateISO8601) {
    let date = new Date(dateISO8601);
    if (Number.isNaN(date.getDate()))
        return '';
    return date.getDate() + '.' + padZeros(date.getMonth() + 1) +
        "." + date.getFullYear() + ' ' + date.getHours() + ':' +
        padZeros(date.getMinutes()) + ':' + padZeros(date.getSeconds());

    function padZeros(num) {
        return ('0' + num).slice(-2);
    }
}

function formatSender(name, username) {
    if (!name)
        return username;
    else
        return username + ' (' + name + ')';
}


function getKinveyAuthorization() {
    return {
        "Authorization": "Kinvey " + sessionStorage.getItem('authtoken')
    };
}

function saveSessionData(userInfo) {
    sessionStorage.setItem('authtoken', userInfo._kmd.authtoken);
    sessionStorage.setItem('name', userInfo.name);
    sessionStorage.setItem('username', userInfo.username);
    let username = userInfo.username;
    $('#spanMenuLoggedInUser').text("Welcome, " + username + "!");
    $('#viewUserHomeHeading').text("Welcome, " + username + "!");
}

function showMyMessages() {
    let url = "appdata/" + kinveyAppKey +
        `/messages?query={"recipient_username":"${sessionStorage.getItem('username')}"}`;
    request('GET', url, getKinveyAuthorization(), '')
        .then(function (res) {
            renderInboxMessages(res);
        }).catch(handleAjaxError);
}

function renderInboxMessages(msgData) {
    let tbody = $('#myMessages table').find('tbody');
    $('#myMessages table').find('tbody').empty();

    for (let message of msgData) {
        $(tbody)
            .append($('<tr>')
                .append($('<td>').text(formatSender(message.sender_name, message.sender_username)))
                .append($('<td>').text(message.text))
                .append($('<td>').text(formatDate(message._kmd.lmt)))
            );
    }
    showViews('MyMessages');
}

function showArchiveMsg() {
    let url = "appdata/" + kinveyAppKey +
        `/messages?query={"sender_username":"${sessionStorage.getItem('username')}"}`;
    request('GET', url, getKinveyAuthorization(), '')
        .then(function (res) {
            renderSentMessages(res);
        }).catch(handleAjaxError);
}

function renderSentMessages(msgData) {
    let tbody = $('#sentMessages table').find('tbody');
    $('#sentMessages table').find('tbody').empty();

    for (let message of msgData) {
        $(tbody)
            .append($('<tr>')
                .append($('<td>').text(message.recipient_username))
                .append($('<td>').text(message.text))
                .append($('<td>').text(formatDate(message._kmd.lmt)))
                .append($('<td>').append($('<button>Delete</button>').on('click', () => {
                        deleteMessage(message._id);
                    }))
                ));
    }
    showViews('ArchiveSent');
}

function deleteMessage(id) {
    request('DELETE', `appdata/${kinveyAppKey}/messages/${id}`, getKinveyAuthorization(), '')
        .then(function (res) {
            showArchiveMsg();
            showInfo('Message deleted.');
        }).catch(handleAjaxError);
}

function showSendMsgAndUsers() {
    request('GET', `user/${kinveyAppKey}/`, getKinveyAuthorization(), '')
        .then(function (res) {
            renderSendMessageScreen(res);
        }).catch(handleAjaxError);

    function renderSendMessageScreen(userData) {
        $('#formSendMessage select').empty();

        for (let user of userData) {
            if (sessionStorage.getItem('username') !== user.username) {
                $('#formSendMessage select')
                    .append($(`<option val="${user.username}">${formatSender(user.name, user.username)}</option>`));
            }
        }

        showViews('SendMessage');
    }
}


function sendMessage(ev) {
    ev.preventDefault();
    let messageData = {
        "sender_username": sessionStorage.getItem('username'),
        "sender_name": sessionStorage.getItem('name'),
        "recipient_username": $('#formSendMessage select').val(),
        "text": $('#msgText').val()
    };

    request('POST', `appdata/${kinveyAppKey}/messages`, getKinveyAuthorization(), messageData)
        .then(function (res) {
            renderSendSuccess(res);
        }).catch(handleAjaxError);

    function renderSendSuccess() {
        showArchiveMsg();
        $('#msgText').val('');
        showInfo('Message sent.');
    }
}

function handleAjaxError(response) {
    let errorMsg = JSON.stringify(response);
    if (response.readyState === 0) {
        errorMsg = "Cannot connect due to network error.";
    }
    if (response.responseJSON && response.responseJSON.description) {
        errorMsg = response.responseJSON.description;
    }

    showError(errorMsg);
}