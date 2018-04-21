function loginUser(ev) {
    ev.preventDefault();
    let username = $('#loginForm input[name="username"]').val();
    let password = $('#loginForm input[name="password"]').val();
    auth.login(username, password)
        .then(function (res) {
            auth.saveSession(res);
            listPosts();
            showHideMenuLinks();
            auth.showInfo('Login successful.');
            $('#loginForm input[name="username"]').val('');
            $('#loginForm input[name="password"]').val('');
        }).catch(auth.handleAjaxError);
}

function registerUser(ev) {
    ev.preventDefault();
    let username = $('#registerForm input[name="username"]').val();
    let password = $('#registerForm input[name="password"]').val();
    auth.register(username, password)
        .then(function (res) {
            auth.saveSession(res);
            showHideMenuLinks();
            listPosts();
            auth.showInfo('User registration successful.');
            $('#registerForm input[name="username"]').val('');
            $('#registerForm input[name="password"]').val('');
        }).catch(auth.handleAjaxError);
}

function logoutUser() {
    auth.logout();
    sessionStorage.clear();
    showView('Welcome');
    showHideMenuLinks();
    auth.showInfo('Logout successful.');
}

function listPosts() {
    requester.get('appdata', 'posts?query={}&sort={"_kmd.ect": -1}', 'kinvey')
        .then(function (res) {
            displayPosts(res);
        }).catch(auth.handleAjaxError);

    function displayPosts(res) {
        showCatalog();
        let postContainer = $('#viewCatalog .posts');
        postContainer.empty();

        (async function () {
            res.forEach(el => {
                el.submitted = calcTime(el._kmd.ect);
                if (el.author === sessionStorage.getItem('username')) {
                    el.isAuthor = true;
                } else {
                    el.isAuthor = false;
                }
            });

            let listPosts = await $.get('templates/postCatalog.html');
            let template = Handlebars.compile(listPosts);
            let context = {
                posts: res
            };
            let templateToHtml = template(context);
            postContainer.append(templateToHtml);
            attachEvents();
        })();

        function attachEvents() {
            $('.commentsLink').on('click', loadPostDetails);
            $('.editLink').on('click', loadEditPost);
            $('.deleteLink').on('click', deletePost);
        }
    }
}

function createPost(ev) {
    ev.preventDefault();
    let author = sessionStorage.getItem('username');
    let url = $('#submitForm input[name="url"]').val();
    let title = $('#submitForm input[name="title"]').val();
    let imageUrl = $('#submitForm input[name="image"]').val();
    let description = $('#submitForm textarea[name="comment"]').val();
    let data = {author, url, title, imageUrl, description};

    requester.post('appdata', 'posts', 'kinvey', data)
        .then(function (res) {
            auth.showInfo('Post created.');
            listPosts();
            $('#submitForm input[name="url"]').val('');
            $('#submitForm input[name="title"]').val('');
            $('#submitForm input[name="image"]').val('');
            $('#submitForm textarea[name="comment"]').val('');
        }).catch(auth.handleAjaxError)
}

function loadEditPost() {
    showEditPostView();
    $('#editPostForm input[name="url"]').val('');
    $('#editPostForm input[name="title"]').val('');
    $('#editPostForm input[name="image"]').val('');
    $('#editPostForm textarea[name="description"]').text('');

    let id = $(this).closest('article').attr('data-id');
    requester.get('appdata', 'posts/' + id, 'kinvey')
        .then(function (res) {
            $('#editPostForm input[name="url"]').val(res.url);
            $('#editPostForm input[name="title"]').val(res.title);
            $('#editPostForm input[name="image"]').val(res.imageUrl);
            $('#editPostForm textarea[name="description"]').text(res.description);

            $('#editPostForm').on('submit', editPost);
        }).catch(auth.handleAjaxError);

    function editPost(ev) {
        ev.preventDefault();
        let author = sessionStorage.getItem('username');
        let url = $('#editPostForm input[name="url"]').val();
        let title = $('#editPostForm input[name="title"]').val();
        let imageUrl = $('#editPostForm input[name="image"]').val();
        let description = $('#editPostForm textarea[name="description"]').val();

        let postObj = {url, title, imageUrl, description, author};
        requester.update('appdata', 'posts/' + id, 'kinvey', postObj)
            .then(function (res) {
                listPosts();
                auth.showInfo(`Post ${title} updated`);
            })
            .catch(auth.handleAjaxError);
    }
}


function deletePost(ev) {
    ev.preventDefault();
    let id = $(this).closest('article').attr('data-id');
    console.log(id);
    requester.remove('appdata', 'posts/' + id, 'kinvey')
        .then(function () {
            listPosts();
            auth.showInfo('Post deleted.');
        })
        .catch(auth.handleAjaxError)
}

function loadPostDetails(ev) {
    ev.preventDefault();
    let id = $(this).closest('article').attr('data-id');

    requester.get('appdata', 'posts/' + id, 'kinvey')
        .then(function (res) {
            displayDetails(res);
            displayComments(id);
        })
        .catch(auth.handleAjaxError);

    function displayDetails(res) {
        showPostDetails();
        let postDetailContainer = $('#viewComments');
        postDetailContainer.empty();

        (async function () {
            let listDetail = await $.get('templates/postDetails.html');
            let template = Handlebars.compile(listDetail);
            let context = {
                url: res.url,
                imageUrl: res.imageUrl,
                title: res.title,
                author: res.author,
                description: res.description,
                id: id,
                submitted: calcTime(res._kmd.ect)
            };
            let templateToHtml = template(context);
            postDetailContainer.append(templateToHtml);
            attachEvents();
        }());

        function attachEvents() {
            $('.editLink').on('click', loadEditPost);
            $('.deleteLink').on('click', deletePost);
            $('#btnPostComment').on('click', createComment);
        }
    }

    function displayComments(id) {
        let postCommentContainer = $('#viewComments');
        $('#viewComments').empty();

        requester.get('appdata', `comments?query={"postId":"${id}"}&sort={"_kmd.ect": -1}`, 'kinvey')
            .then(function (res) {

                (async function () {
                    res.forEach(el => {
                        el.submitted = calcTime(el._kmd.ect);
                        if (el.author === sessionStorage.getItem('username')) {
                            el.isAuthor = true;
                        } else {
                            el.isAuthor = false;
                        }
                    });

                    let listComments = await $.get('templates/comments.html');
                    let template = Handlebars.compile(listComments);
                    let context = {
                        comments: res
                    };
                    let templateToHtml = template(context);
                    postCommentContainer.append(templateToHtml);

                    $('#delComment').on('click', deleteComment)
                }());
            })
            .catch(auth.handleAjaxError);
    }
}


function createComment(ev) {
    ev.preventDefault();
    let author = sessionStorage.getItem('username');
    let content = $('#commentForm textarea[name="content"]').val();
    let postId = $('#viewComments div').attr('data-id');
    let data = {author, content, postId};

    requester.post('appdata', 'comments', 'kinvey', data)
        .then(function () {
            listPosts();
            auth.showInfo('Comment created.');
            let content = $('#commentForm textarea[name="content"]').val('');
        })
        .catch(auth.handleAjaxError);
}

function deleteComment() {
    let postId = $('#viewComments > div').attr('data-id');
    let commentId = $(this).closest('article').attr('data-id');

    requester.remove('appdata', 'comments/' + commentId, 'kinvey')
        .then(function () {
            listPosts();
            auth.showInfo('Comment deleted.');
        })
        .catch(auth.handleAjaxError);
}

function loadMyPosts() {
    requester.get('appdata', `posts?query={"author":"${sessionStorage.getItem('username')}"}&sort={"_kmd.ect": -1}`, 'kinvey')
        .then(function (res) {
            displayMyPosts(res);
        })
        .catch(auth.handleAjaxError);

    function displayMyPosts(res) {
        showMyPosts();
        let postContainer = $('#viewMyPosts .posts');
        postContainer.empty();

        (async function () {
            res.forEach(el => {
                el.submitted = calcTime(el._kmd.ect)
            });

            let listPosts = await $.get('templates/postCatalog.html');
            let template = Handlebars.compile(listPosts);
            let context = {
                posts: res
            };
            let templateToHtml = template(context);
            postContainer.append(templateToHtml);
        })()
    }
}

function calcTime(dateIsoFormat) {
    let diff = new Date - (new Date(dateIsoFormat));
    diff = Math.floor(diff / 60000);
    if (diff < 1) return 'less than a minute';
    if (diff < 60) return diff + ' minute' + pluralize(diff);
    diff = Math.floor(diff / 60);
    if (diff < 24) return diff + ' hour' + pluralize(diff);
    diff = Math.floor(diff / 24);
    if (diff < 30) return diff + ' day' + pluralize(diff);
    diff = Math.floor(diff / 30);
    if (diff < 12) return diff + ' month' + pluralize(diff);
    diff = Math.floor(diff / 12);
    return diff + ' year' + pluralize(diff);

    function pluralize(value) {
        if (value !== 1) return 's';
        else return '';
    }
}

Handlebars.registerHelper("counter", function (index) {
    return index + 1;
});


