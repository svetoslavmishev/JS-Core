function registerUser(ev) {
    ev.preventDefault();
    let username = $('#formRegister input[name="username"]').val();
    let password = $('#formRegister input[name="password"]').val();
    let repeatPassword = $('#formRegister input[name="repeatPass"]').val();

    if (username.length < 5) {
        auth.showError('Username should be more at least 5 characters long.');
        return;
    }
    if (password !== repeatPassword) {
        auth.showError('Passwords must match!');
        return;
    }

    auth.register(username, password)
        .then(function (res) {
            auth.saveSession(res);
            showHideMenuLinks();
            displayAllChirps();
            auth.showInfo('User registration successful.');
            $('#formRegister').trigger('reset');
        }).catch(auth.handleAjaxError);
}

function loginUser(ev) {
    ev.preventDefault();
    let username = $('#formLogin input[name="username"]').val();
    let password = $('#formLogin input[name="password"]').val();

    auth.login(username, password)
        .then(function (res) {
            auth.saveSession(res);
            showHideMenuLinks();
            displayAllChirps();
            auth.showInfo('Login successful.');
            $('#formLogin').trigger('reset');
        }).catch(auth.handleAjaxError);
}

function logoutUser() {
    auth.logout();
    sessionStorage.clear();
    showLoginView();
    showHideMenuLinks();
    auth.showInfo('Logout successful.');
}

function displayAllChirps() {
    let subs;
    if (sessionStorage.getItem('subscriptions') !== null) {
        subs = JSON.parse(sessionStorage.getItem('subscriptions'));
        subs = subs.map(e => `"${e}"`);

        let endpoint = `chirps?query={"author":{"$in": [${subs}]}}&sort={"_kmd.ect": 1}`;

        countChirps();
        followers();
        following();

        requester.get('appdata', endpoint, 'kinvey')
            .then(function (res) {
                let chirperContainer = $('#viewFeed .chirper');
                let chirpContainer = $('#chirps');
                render(chirpContainer, chirperContainer, res);
            }).catch(auth.handleAjaxError);
    } else {
        $('#chirps').append($('<p>No chirps in database</p>'));
    }

    showFeedView();
}

function render(chirpContainer, chirperContainer, res) {
    chirperContainer.empty();
    chirpContainer.empty();

    (async function () {
        //RENDER CHIRPS BY FOLLOWERS
        let chirpHbs = await $.get('templates/chirp.hbs');
        let templateChirp = Handlebars.compile(chirpHbs);

        res.forEach(el => {
            el.days = calcTime(el._kmd.ect);

            if (el.author === sessionStorage.getItem('username')) {
                el.isAuthor = true;
            }
        });

        let contextChirp = {
            chirps: res
        };

        let templateChirpToHtml = templateChirp(contextChirp);
        chirpContainer.append(templateChirpToHtml);

        //RENDER CHIRPS/FOLLOWING/FOLLOWERS
        let chirperHbs = await $.get('templates/chirper.hbs');
        let templateChirper = Handlebars.compile(chirperHbs);

        let contextChirper = {
            userchirps: sessionStorage.getItem('userchirps'),
            following: sessionStorage.getItem('following'),
            followers: sessionStorage.getItem('followers'),
            name: sessionStorage.getItem('username')
        };

        let templateChirperToHtml = templateChirper(contextChirper);
        chirperContainer.append(templateChirperToHtml);

        $('.chirp-author').on('click', getFollowUser)
    })();
}

function countChirps() {
    let endpoint = `chirps?query={"author":"${sessionStorage.getItem('username')}"}`;
    requester.get('appdata', endpoint, 'kinvey')
        .then(function (res) {
            sessionStorage.setItem('userchirps', res.length);
        }).catch(auth.handleAjaxError)
}

function following() {
    let endpoint = `?query={"username":"${sessionStorage.getItem('username')}"}`;
    requester.get('user', endpoint, 'kinvey')
        .then(function (res) {
            sessionStorage.setItem('following', res[0].subscriptions.length);
        }).catch(auth.handleAjaxError)
}

function followers() {
    let endpoint = `?query={"subscriptions":"${sessionStorage.getItem('username')}"}`;
    requester.get('user', endpoint, 'kinvey')
        .then(function (res) {
            sessionStorage.setItem('followers', res.length);
        }).catch(auth.handleAjaxError)
}

function displayDiscover() {
    requester.get('user', '', "kinvey")
        .then(function (res) {
            let discoverContainer = $('#userlist');
            discoverContainer.empty();

            (async function () {

                let discoverHbs = await $.get('templates/discover.hbs');
                let templateDiscover = Handlebars.compile(discoverHbs);

                res.forEach(el => {
                    el.name = el.username;
                    el.followers = el.subscriptions.length;
                });
                let sorted = res.filter(user => user.name !== sessionStorage.getItem('username'))
                    .sort((a, b) => b.followers - a.followers);

                let contextDiscover = {
                    users: sorted
                };

                let templateDiscoverToHtml = templateDiscover(contextDiscover);
                discoverContainer.append(templateDiscoverToHtml);
            }())
        }).catch(auth.handleAjaxError);

    showDiscoverView();
}

function myChirps() {
    let endpoint = `chirps?query={"author":"${sessionStorage.getItem('username')}"}&sort={"_kmd.ect": 1}`;
    requester.get('appdata', endpoint, 'kinvet')
        .then(function (res) {

            countChirps();
            followers();
            following();

            let chirperContainer = $('#viewMe .chirper');
            chirperContainer.empty();

            let chirpContainer = $('#myChirps');
            chirpContainer.empty();
            render(chirpContainer, chirperContainer, res);

        }).catch(auth.handleAjaxError);

    showMeView();
}

function createChirp(ev) {
    ev.preventDefault();
    let text = $('#formSubmitChirp textarea[name="text"]');
    if (text.length > 0 && text.length <= 150) {
        let data = {
            "text": text.val(),
            "author": sessionStorage.getItem('username')
        };
        requester.post('appdata', 'chirps', 'kinvey', data)
            .then(function (res) {
                myChirps();
                auth.showInfo('Chirp published.');
                text.val('');
            }).catch(auth.handleAjaxError);
    }
}

 function deleteChirp(ev) {
    ev.preventDefault();
    let id = $('#deleteBtn').closest('article').attr('data-id');

     requester.remove('appdata', `chirps/${id} `, 'kinvey')
        .then(function (res) {
            auth.showInfo('Chirp deleted.');
            myChirps();
        }).catch(auth.handleAjaxError);
}

function getFollowUser() {


    showProfileView();
}

function calcTime(dateIsoFormat) {
    let diff = new Date - (new Date(dateIsoFormat));
    diff = Math.floor(diff / 60000);
    if (diff < 1) return 'less than a minute';
    if (diff < 60) return diff + ' minute' + pluralize(diff);
    diff = Math.floor(diff / 60);
    if (diff < 24) return diff + ' hour' + pluralize(diff);
    diff = Math.floor(diff / 24);
    if (diff < 30) return diff + ' day' + pluralize(diff);
    diff = Math.floor(diff / 30);
    if (diff < 12) return diff + ' month' + pluralize(diff);
    diff = Math.floor(diff / 12);
    return diff + ' year' + pluralize(diff);

    function pluralize(value) {
        if (value !== 1) return 's';
        else return '';
    }
}






