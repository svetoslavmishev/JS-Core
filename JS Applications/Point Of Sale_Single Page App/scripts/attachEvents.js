function attachAllEvents() {
    $("#register-form").on('submit',registerUser);
    $("#login-form").on('submit',loginUser);

    //ATTACH BUTTONS
    $('.logout').on('click',logoutUser);


    ///ATTACH LINKS
    $('#nav a[data-id="editor"]').on('click',getActiveReceipt);
    // $('#nav a[data-id="overview"]').on('click',logoutUser);
    // $('#nav a[data-id="logout"]').on('click',logoutUser);

}