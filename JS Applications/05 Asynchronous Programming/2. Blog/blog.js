function attachEvents() {
    let select = $('#btnViewPost');
    const baseUrl = `https://baas.kinvey.com/appdata/kid_HkQZPsm9G/`;
    const username = 'guest';
    const password = 'guest';
    const base64 = btoa(username + ':' + password);
    const authorization = {"Authorization": "Basic " + base64};
    let postBody = {};

    $('#btnLoadPosts').on('click', loadPosts);
    $('#btnViewPost').on('click', viewPosts);

    function loadPosts() {
        $.ajax({
            url: baseUrl + `posts`,
            headers: authorization
        }).then(function (response) {
            $('#posts').empty();
            for (let key in response) {
                $('#posts')
                    .append($(`<option>`)
                        .text(response[key].title)
                        .val(response[key]._id));
                postBody[response[key]._id] = response[key].body;
            }
        }).catch(function (error) {
            console.log(error);
        });
    }

    function viewPosts() {
        let postId = $('#posts').val();
        let postTitle = $('#posts option:selected').text();

        $.ajax({
            url: baseUrl + `comments/?query={"post_id":"${postId}"}`,
            headers: authorization
        }).then(function (response) {
            $('#post-comments').empty();
            $('#post-title').text(postTitle);
            $('#post-body').text(postBody[postId]);
            for (let key in response) {
                $('#post-comments')
                    .append($(`<li>${response[key].text}</li>`))
            }
        }).catch(function (error) {
            console.log(error);
        });

        $('#post-title').text()
    }
}