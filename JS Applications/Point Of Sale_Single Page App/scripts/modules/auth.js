let auth = (() => {

    // user/login
    function login(username, password) {
        let userData = {
            username,
            password
        };

        return requester.post('user', 'login', 'basic', userData);
    }

    // user/register
    function register(username, password) {
        let userData = {
            username,
            password
        };

        return requester.post('user', '', 'basic', userData);
    }

    // user/logout
    function logout() {
        let logoutData = {
            authtoken: sessionStorage.getItem('authtoken')
        };

        return requester.post('user', '_logout', 'kinvey', logoutData);
    }

    function saveSession(userInfo) {
        let id = userInfo['_id'];
        let username = userInfo['username'];
        let name = userInfo['name'];
        let authtoken = userInfo['_kmd']['authtoken'];

        sessionStorage.setItem('id', id);
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('authtoken', authtoken);
    }

    function handleAjaxError(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON && response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        showError(errorMsg);
    }

    function showInfo(message) {
        let infoBox = $('#infoBox');
        infoBox.find('span').text(message);
        infoBox.fadeIn();
        setTimeout(() => infoBox.fadeOut(), 3000);
    }

    function showError(message) {
        let errorBox = $('#errorBox');
        errorBox.find('span').text(message);
        errorBox.fadeIn();
        setTimeout(() => errorBox.fadeOut(), 3000);
    }

    return {
        login,
        register,
        logout,
        saveSession,
        showInfo,
        showError,
        handleAjaxError,
    }
})();