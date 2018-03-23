function attachEvents() {
    $('#submit').on('click', postSubmit);
    $('#refresh').on('click', postRefresh);
    let text = $('#messages');
    let baseUrl = 'https://messenger-b3411.firebaseio.com/.json';

    function postSubmit() {
        let authorInput = $('#author');
        let contentInput = $('#content');
        let postObj = {
            author: $('#author').val(),
            content: $('#content').val(),
            timestamp: Date.now()
        };
        $.post(baseUrl, JSON.stringify(postObj)).then(postRefresh);
        text.append(`${authorInput.val()}: ${contentInput.val()}\n`);
        authorInput.val('');
        contentInput.val('');
    }

    function postRefresh() {
        text.empty();
        $.get(baseUrl).then(loadPosts);
    }

    function loadPosts(response) {
        for (let post in response) {
            text.append(`${response[post].author}: ${response[post].content}\n`);
        }
    }
}