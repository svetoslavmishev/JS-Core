function attachAllEvents() {
    //BIND FORM FUNCTIONALITY
    $("#register-form").on('submit', registerUser);
    $("#login-form").on('submit', loginUser);

    //ATTACH BUTTONS
    $('#addItemBtn').on('click', addEntry);
    $('#checkoutBtn').on('click', checkoutReceipt);//SET FALSE TO ACTIVE RECEIPT

    ///ATTACH MENU LINKS
    $('.editor').on('click', getActiveReceipt);
    $('.overview').on('click', overView);//SHOULD DISPLAY ALL RECEIPTS OF CURRENT LOGGED USER
    $('.logout').on('click', logoutUser);
}