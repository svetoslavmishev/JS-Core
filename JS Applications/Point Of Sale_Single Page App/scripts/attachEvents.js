function attachAllEvents() {
    //AUTHENTICATION USERS
    $("#register-form").on('submit', registerUser);
    $("#login-form").on('submit', loginUser);
    $('.logout').on('click', logoutUser);

    //ATTACH BUTTONS
    $('#addItemBtn').on('click', addEntry);
    
    //SET FALSE TO ACTIVE RECEIPT
    $('#checkoutBtn').on('click', checkoutReceipt); 

    ///ATTACH MENU LINKS
    $('.editor').on('click', getActiveReceipt);

    //SHOULD DISPLAY ALL RECEIPTS OF CURRENT LOGGED USER
    $('.overview').on('click', overView);
    
}