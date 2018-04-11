function attachAllEvents() {
    function showViews(viewId) {
        $('main > section').hide();
        $('#view' + viewId).show();
    }

    $('#linkMenuAppHome').on('click', () => {
        showViews('AppHome');
    });
    $('#linkMenuLogin').on('click', () => {
        $('#formLogin').trigger('reset');
        showViews('Login');
    });
    $('#linkMenuRegister').on('click', () => {
        $('#formRegister').trigger('reset');
        showViews('Register');
    });
    $('#linkMenuUserHome').on('click', () => {
        showViews('UserHome');
    });

    $('#linkMenuLogout').on('click', logout);
    $('#formRegister').on('submit', registerUser);
    $('#formLogin').on('submit', loginUser);
    $('#formSendMessage').on('submit', sendMessage);

    $('#linkUserHomeMyMessages, #linkMenuMyMessages').on('click', showMyMessages);
    $('#linkUserHomeArchiveSent, #linkMenuArchiveSent').on('click', showArchiveMsg);
    $('#linkUserHomeSendMessage, #linkMenuSendMessage').on('click', showSendMsgAndUsers);

    $(document).on({
        ajaxStart: function() { $("#loadingBox").show() },
        ajaxStop: function() { $("#loadingBox").hide() }
    })
}