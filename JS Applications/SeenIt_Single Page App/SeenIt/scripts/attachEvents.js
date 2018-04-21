function attachAllEvents() {
    //Navigation menu links
    $('#logout').on('click', logoutUser);
    $('#linkListPosts').on('click', listPosts);
    $('#linkCreatePost').on('click', showCreatePostView);
    $('#linkMyPosts').on('click', loadMyPosts);

    //Form submit buttons
    $("#loginForm").on('submit', loginUser);
    $("#registerForm").on('submit', registerUser);
    $('#submitForm').on('submit', createPost);

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