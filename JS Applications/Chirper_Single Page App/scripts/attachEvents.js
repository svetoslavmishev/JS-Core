function attachAllEvents() {
    //Navigation menu links
    $('.menu a:nth-child(1)').on('click', displayAllChirps);
    $('.menu a:nth-child(2)').on('click', displayDiscover);
    $('.menu a:nth-child(3)').on('click', myChirps);
    $('.menu a:nth-child(4)').on('click', logoutUser);

    //switch login logout links
    $('#switchToRegister').on('click', showRegisterView);
    $('#switchToLogin').on('click', showLoginView);

    //Form submit buttons
    $("#formRegister").on('submit', registerUser);
    $("#formLogin").on('submit', loginUser);


    // Bind the info / error boxes
    $("#infoBox, #errorBox").on('click', function () {
        $(this).fadeOut()
    });

    // Attach AJAX "loading" event listener
    $(document).on({
        ajaxStart: function () {
            $("#loadingBox").show()
        },
        ajaxStop: function () {
            $("#loadingBox").hide()
        }
    })
}