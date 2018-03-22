function loadRepos() {
    $('#repos').empty();
    let url = "https://api.github.com/users/" +
        $("#username").val() + "/repos";
    let ajax = $.ajax({
            url,
            method: "GET",
            success: successResponse,
            error: errorResponse
        }
    );

    function successResponse(response) {
        for (let repo of response) {
            $('#repos')
                .append($('<li>')
                    .append(`<a href="${repo.html_url}">${repo.full_name}</a>`));
        }
    }

    function errorResponse(response) {
        $('#repos')
            .append($('<li>').textContent('Error'));
    }
}