function attachAllEvents() {
    //Navigation menu links
    $('#linkMenuAppHome').on('click', showHomeView);
    $('#linkMenuLogin').on('click', showLoginView);
    $('#linkMenuRegister').on('click', showRegisterView);
    $('#linkMenuUserHome').on('click', displayUserHome);
    $('#linkMenuLogout').on('click', logoutUser);
    $('#linkMenuShop, #linkUserHomeShop').on('click', displayAllProducts);
    $('#linkMenuCart, #linkUserHomeCart').on('click', displayCart);

    //Form submit buttons
    $("#formLogin").on('submit', loginUser);
    $("#formRegister").on('submit', registerUser);

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