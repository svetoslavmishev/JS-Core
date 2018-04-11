function startApp() {
    sessionStorage.clear();
    showHideMenuLinks();
    showViews('viewHome');
    attachAllEvents();

    function showViews(viewId) {
        $('main > section').hide();
        $('#view' + viewId).show();
    }
}