function startApp() {
    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppKey = "kid_HyGRvep5G";
    const kinveyAppSecret = "799ecfdd33a345efbc14ba5d3c39c779";
    const kinveyAuthHeaders = {
        'Authorization': "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret),
    };

    $('#viewHome').show();
    showAndHideMenuLinks();

    $('#linkHome').on('click', showHomeView);
    $('#linkLogin').on('click', showLoginView);
    $('#linkRegister').on('click', showRegisterView);
    $('#linkListAds').on('click', showAdsList);
    $('#linkCreateAd').on('click', showCreateAdsView);
    $('#linkLogout').on('click', logoutUser);

    $(document).on({
        ajaxStart: function () {
            $("#loadingBox").show()
        },
        ajaxStop: function () {
            $("#loadingBox").hide()
        }
    });

    function showView(view) {
        $('main section').hide();
        $('#' + view).show();
    }

    function showHomeView() {
        showView('viewHome');
    }

    function showLoginView() {
        $('#formLogin').trigger('reset');
        showView('viewLogin');
    }

    function showRegisterView() {
        $('#formRegister').trigger('reset');
        showView('viewRegister');
    }

    function showAdsList() {
        $('#formRegister').trigger('reset');
        showView('viewAds');
    }

    function showCreateAdsView() {
        showView('viewCreateAd');
    }

    function showInfo(message) {
        $('#infoBox').text(message);
        $('#infoBox').show();
        setTimeout(function () {
            $('#infoBox').fadeOut();
        }, 2000);
    }

    function showAndHideMenuLinks() {
        $("#linkHome").show();
        if (sessionStorage.getItem('authToken')) {
            $("#linkLogin").hide();
            $("#linkRegister").hide();
            $("#linkListAds").show();
            $("#linkCreateAd").show();
            $("#linkLogout").show();
        } else {
            $("#linkLogin").show();
            $("#linkRegister").show();
            $("#linkListAds").hide();
            $("#linkCreateAd").hide();
            $("#linkLogout").hide();
        }
    }

    $('#buttonLoginUser').on('click', loginUser);
    $('#buttonRegisterUser').on('click', registerUser);
    $("#buttonCreateAd").on('click', createAds);
    $("#buttonEditAd").on('click', editAds);

    function registerUser() {
        let username = $('#formRegister input[name=username]').val();
        let password = $('#formRegister input[name=passwd]').val();
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + `user/${kinveyAppKey}/`,
            headers: kinveyAuthHeaders,
            data: {username, password}
        }).then(function (res) {
            Success(res, 'User registration successful.');
        }).catch(handleAjaxError);
    }

    function loginUser() {
        let username = $('#formLogin input[name=username]').val();
        let password = $('#formLogin input[name=passwd]').val();
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + `user/${kinveyAppKey}/login`,
            headers: kinveyAuthHeaders,
            data: {username, password}
        }).then(function (res) {
            Success(res, 'Login successful.');
        }).catch(handleAjaxError);
    }

    function logoutUser() {
        sessionStorage.clear();
        showView('viewHome');
        showAndHideMenuLinks();
        showInfo('Logout successful.');
    }

    function Success(res, text) {
        saveSessionData(res);
        showAndHideMenuLinks();
        showAdsList();
        showInfo(text);
    }

    function saveSessionData(userData) {
        sessionStorage.setItem("username", userData.username);
        sessionStorage.setItem("authToken", userData._kmd.authtoken);
        sessionStorage.setItem("userId", userData._id);
    }

    function showAdsList() {
        $('#ads').empty();
        showView('viewAds');

        $.ajax({
            method: "GET",
            url: kinveyBaseUrl + `appdata/${kinveyAppKey}/ads`,
            headers: {'Authorization': "Kinvey " + sessionStorage.getItem('authToken')}
        }).then(function  (res) {
            displayAllAds(res);
        }).catch(handleAjaxError);

        function displayAllAds(adverts) {

            let advertsTable = $('<table>')
                .append($('<tr>').append(
                    '<th>Title</th>',
                    '<th>Description</th>',
                    '<th>Publisher</th>',
                    '<th>Date Published</th>',
                    '<th>Price</th>',
                    '<th>Actions</th>')
                );

            for (let ad of adverts) {
                let links = [];
                let readMoreLink = $(`<a href="#">[Read More]</a>`)
                    .on('click', function () {
                        displayAds(ad);
                    });
                links = [readMoreLink];

                if (ad._acl.creator == sessionStorage['userId']) {
                    let deleteLink = $(`<a href="#">[Delete]</a>`)
                        .on('click', function () {
                            deleteAds(ad._id);
                        });
                    let editLink = $(`<a href="#">[Edit]</a>`)
                        .on('click', function () {
                            loadAdsEdit(ad._id);
                        });
                    links = [readMoreLink, ' ', deleteLink, ' ', editLink];
                }

                advertsTable.append($('<tr>').append(
                    $('<td>').text(ad.title),
                    $('<td>').text(ad.description),
                    $('<td>').text(ad.publisher),
                    $('<td>').text(ad.publishdate),
                    $('<td>').text(ad.price),
                    $('<td>').append(links)
                ));
            }

            $('#ads').append(advertsTable);
        }
    }

    function displayAds(ad) {
        $.ajax({
            method: "GET",
            url: kinveyBaseUrl + `appdata/${kinveyAppKey}/ads/${ad._id}`,
            headers: {'Authorization': "Kinvey " + sessionStorage.getItem('authToken')}
        }).then(function (res) {
            displaySuccess(res);
        }).catch(handleAjaxError);

        function displaySuccess(ad) {
            $('#viewAdsDetails').empty();
            let adDetails = $('<div>').append(
                $('<img>').attr("src", ad.image),
                $('<br>'),
                $('<label>').text('Title:'),
                $('<h1>').text(ad.title),
                $('<label>').text('Description:'),
                $('<p>').text(ad.description),
                $('<label>').text('Publisher:'),
                $('<div>').text(ad.publisher),
                $('<label>').text('Date:'),
                $('<div>').text(ad.publishdate));

            $('#viewAdsDetails').append(adDetails);
            showView('viewAdsDetails');
        }
    }

    function createAds() {
        let adData = {
            title: $('#formCreateAd input[name=title]').val(),
            description: $('#formCreateAd textarea[name=description]').val(),
            publisher: sessionStorage.getItem('username'),
            publishdate: $('#formCreateAd input[name=datePublished]').val(),
            price: Number($('#formCreateAd input[name=price]').val())
        };

        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + `appdata/${kinveyAppKey}/ads`,
            data: adData,
            headers: {'Authorization': "Kinvey " + sessionStorage.getItem('authToken')}
        }).then(function (res) {
            showAdsList(res);
            showInfo('Advertisement created.');
        }).catch(handleAjaxError);
    }

    function loadAdsEdit(id) {
        $.ajax({
            method: "GET",
            url: kinveyBaseUrl + `appdata/${kinveyAppKey}/ads/${id}`,
            headers: {'Authorization': "Kinvey " + sessionStorage.getItem('authToken')}
        }).then(function (res) {
            editSuccess(res);
            showView('viewEditAd');
        }).catch(handleAjaxError);

        function editSuccess(ad) {
            $('#formEditAd input[name=id]').val(ad._id);
            $('#formEditAd input[name=title]').val(ad.title);
            $('#formEditAd input[name=publisher]').val(ad.publisher);
            $('#formEditAd textarea[name=description]').val(ad.description);
            $('#formEditAd input[name=datePublished]').val(ad.publishdate);
            $('#formEditAd input[name=price]').val(ad.price);
        }
    }

    function editAds() {
        let id = $('#formEditAd input[name=id]').val();
        let adData = {
            title: $('#formEditAd input[name=title]').val(),
            description: $('#formEditAd textarea[name=description]').val(),
            publisher: sessionStorage.getItem('username'),
            publishdate: $('#formEditAd input[name=datePublished]').val(),
            price: Number($('#formEditAd input[name=price]').val())
        };

        $.ajax({
            method: "PUT",
            url: kinveyBaseUrl + `appdata/${kinveyAppKey}/ads/${id}`,
            data: adData,
            headers: {'Authorization': "Kinvey " + sessionStorage.getItem('authToken')}
        }).then(function (res) {
            showAdsList(res);
            showView('viewAds');
            showInfo('Advertisement edited.');
        }).catch(handleAjaxError);
    }

    function deleteAds(id) {
        $.ajax({
            method: "DELETE",
            url: kinveyBaseUrl + `appdata/${kinveyAppKey}/ads/${id}`,
            headers: {'Authorization': "Kinvey " + sessionStorage.getItem('authToken')}
        }).then(function (res) {
            showAdsList(res);
            showInfo('Advertisement deleted.');
        }).catch(handleAjaxError);
    }

    function handleAjaxError(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON && response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        $('#errorBox').text("Error: " + errorMsg);
        $('#errorBox').show();
    }
}