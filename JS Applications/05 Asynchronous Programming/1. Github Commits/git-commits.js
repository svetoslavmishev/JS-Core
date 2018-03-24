function loadCommits() {
    let username = $('#username').val();
    let repo = $('#repo').val();
    $('#commits').empty();

    $.ajax({
        url: `https://api.github.com/repos/${username}/${repo}/commits`
    }).then(function (response) {
        for (let key of response) {
            $('#commits')
                .append($(`<li>${key.commit.author.name}: ${key.commit.message}</li>`));
        }
    }).catch(function (error) {
        $('#commits')
            .append($(`<li>Error: ${error.status} (${error.statusText})</li>`));
        console.log(error);
    });
}