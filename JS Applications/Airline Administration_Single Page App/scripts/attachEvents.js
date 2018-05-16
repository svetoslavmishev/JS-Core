function attachAllEvents() {
    //Navigation menu links
    $('.left-container li:nth-child(3)').on('click', showLoginView);
    $('.left-container li:last-child').on('click', showRegisterView);
    $('.right-container a').on('click', logoutUser);
    $('.left-container li:first-child').on('click', displayAllPublishedFlights);
    $('.left-container li:nth-child(2)').on('click', myFlights);
    //$('.left-container li:nth-child(2)').on('click', );

    // Bind buttons
    $("#formRegister").on('submit', registerUser);
    $("#formLogin").on('submit', loginUser);
    $(".create").on('click', addFlights);
    $('.save-changes').on('click', editFlight);


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