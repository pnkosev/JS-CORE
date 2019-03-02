function attachEvents() {
    let kinveyId = "kid_Sy-_eUdR7";
    let serviceUrl = "https://baas.kinvey.com/appdata/" + kinveyId;
    let kinveyUsername = "peter";
    let kinveyPassword = "1";
    let base64auth = btoa(kinveyUsername + ":" + kinveyPassword);
    let authHeaders = {
        "Authorization": "Basic " + base64auth
    };

    $('#btnLoadPosts').on('click', loadPostsClick);
    $('#btnViewPost').on('click', viewPostClick);

    function loadPostsClick() {
        let loadPostsRequest = {
            url: serviceUrl + "/posts",
            headers: authHeaders
        };

        $.ajax(loadPostsRequest)
            .then(displayPosts)
            .catch(displayError);

    }

    function displayPosts(posts) {
        $('#posts').empty();

        for (let post of posts) {
            $('#posts').append($('<option>').text(post.title).val(post._id));
        }
    }

    function displayError(err) {
        let errorDiv = $('<div>').text("Error " + err.status + ' (' + err.statusText + ')');
        $(document.body).prepend(errorDiv);

        setTimeout(function () {
            $(errorDiv).fadeOut(function () {
                $(errorDiv).remove();
            })
        }, 3000);
    }

    function viewPostClick() {
        let selectedPostId = $('#posts').val();

        if (!selectedPostId) {
            return;
        }

        let requestPosts = $.ajax({
            url: serviceUrl + "/posts/" + selectedPostId,
            headers: authHeaders
        });

        let requestComments = $.ajax({
            url: serviceUrl + `/comments/?query={"post_id":"${selectedPostId}"}`,
            headers: authHeaders
        });

        Promise.all([requestPosts, requestComments]) 
            .then(displayPostWithComments)
            .catch(displayError);

        function displayPostWithComments([post, comments]) {
            $('#post-title').text(post.title);
            $('#post-body').text(post.body);
            $('#post-comments').empty();

            for (let comment of comments) {
                $('#post-comments').append($('<li>').text(comment.text));
            }
        }
    }
}