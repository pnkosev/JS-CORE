$(() => {

    $('main > div').hide();

    //User controls//
    if (sessionStorage.getItem('authtoken') === null) {
        userLoggedOut();
    } else {
        userLoggedIn();
    }

    function userLoggedIn() {
        $('.userOnly').show();
        $('.both').show();
        $('.anonymous').hide();
        $('#wlcmMsg').text('');
        let username = sessionStorage.getItem('username');
        $('#wlcmMsg').text(`'Welcome, ${username}!`);
        listAllMemes();
        userProfile();
    }

    function userLoggedOut() {
        $('.userOnly').hide();
        $('main > div').hide();
        $('.both').show();
        $('.anonymous').show();
    }
    //------------//

    //Navigation - Show/Hide views//
    function showView(viewName) {
        $('main > div').hide();
        $('#' + viewName).show();
    }

    function navigateTo() {
        let target = $(this).attr('data-target');
        showView(target);
    }
    //---------------------------//

    //SessionStorage control//
    function saveSession(userInfo) {
        let username = userInfo.username;
        sessionStorage.setItem('username', username);
        let id = userInfo._id;
        sessionStorage.setItem('id', id);
        let authtoken = userInfo._kmd.authtoken;
        sessionStorage.setItem('authtoken', authtoken);
        let avatarUrl = userInfo.avatarUrl;
        sessionStorage.setItem('avatarUrl', avatarUrl);
        sessionStorage.setItem('email', userInfo.email);
        userLoggedIn();
    }
    //----------------------//

    //Notifications//
    $(document).on({
        ajaxStart: () => $("#loadingBox").show(),
        ajaxStop: () => $('#loadingBox').fadeOut()
    });

    function handleError(reason) {
        showError(reason.responseJSON.description);
    }

    function showInfo(message) {
        let infoBox = $('#infoBox');
        $('#infoBox1').text(message);
        infoBox.show();
        setTimeout(() => infoBox.fadeOut(), 3000);
    }

    function showError(message) {
        let errorBox = $('#errorBox');
        $('#errorBox1').text(message);
        errorBox.show();
        setTimeout(() => errorBox.fadeOut(), 3000);
    }
    //-------------//

    //Attach events//
    (() => {
        $('.notification').click(function () {
            $(this).hide();
        })
        $('a[data-target]').click(navigateTo);
        $('#logout').click(logout);
        $('#registerBtn').click(registerPost);
        $('#loginBtn').click(loginPost);
        $('#createMemeBtn').click(createMeme);
        $('#myProfile').click(userProfile);
        $('#editMemeBtn').click(editMemePost);
    })();
    //------------//

    //Register//
    function registerPost(ev) {
        ev.preventDefault();

        let form = $('#registerForm');

        let username = form.find('input[name=username]').val();
        let password = form.find('input[name=password]').val();
        let repeatPass = form.find('input[name=repeatPass]').val();
        let email = form.find('input[name=email]').val();
        let avatarUrl = form.find('input[name=avatarUrl]').val();


        auth.register(username, password, email, avatarUrl)
            .then(function (userInfo) {
                document.getElementById('registerForm').reset();
                saveSession(userInfo);
                showInfo('User registered successfully!');
                listAllMemes();
                showView('meme-feed');
            }).catch(handleError);
    }

    //Login//
    function loginPost(ev) {
        ev.preventDefault();

        let form = $('#loginForm');
        let username = form.find('input[name="username"]').val();
        let password = form.find('input[name="password"]').val();

        auth.login(username, password)
            .then(function (userInfo) {
                document.getElementById('loginForm').reset();
                saveSession(userInfo);
                showInfo('Login successfully!');
                listAllMemes();
                showView('meme-feed');
            }).catch(handleError);
    }

    //Logout//
    function logout() {
        auth.logout()
            .then(function () {
                sessionStorage.clear();
                userLoggedOut();
                showInfo('You successfully logged out!');
                showView('main');
            })
    }


    function listAllMemes() {
        let container = $('#memes');

        requester.get('appdata', 'memes?query={}&sort={"_kmd.ect": -1}')
            .then(function (memes) {
                if (memes.length === 0) {
                    container.empty();
                    container.append('<p class="no-memes">No memes in database.</p>');
                } else {
                    $.get('./templates/memes.hbs')
                        .then((hbs) => {
                            let template = Handlebars.compile(hbs);
                            memes.forEach(meme => meme.isAuthor = meme._acl.creator === sessionStorage.getItem('id') ? true : false);
                            container.html(template({
                                memes
                            }));
                            $('.details').click(checkOutMeme);
                            $('.edit').click(editMeme);
                            $('.delete').click(deleteMeme);
                        }).catch(handleError);
                }
            }).catch(handleError);
    }

    function editMeme() {
        let id = $(this).attr('data-id');

        requester.get('appdata', 'memes/' + id)
            .then(function (meme) {
                let form = $('#editForm');

                form.find('input[name="memeId"]').val(id);
                form.find('input[name="title"]').val(meme.title);
                form.find('input[name="description"]').val(meme.description);
                form.find('input[name="imageUrl"]').val(meme.imageUrl);

                showView('edit-meme');
            }).catch(handleError);
    }

    function editMemePost(ev) {
        ev.preventDefault();

        let form = $('#editForm');

        let id = form.find('input[name="memeId"]').val();

        let creator = sessionStorage.getItem('username');
        let title = form.find('input[name="title"]').val();
        let description = form.find('input[name="description"]').val();
        let imageUrl = form.find('input[name="imageUrl"]').val();

        let data = {
            creator,
            title,
            description,
            imageUrl
        }

        requester.update('appdata', 'memes/' + id, data)
            .then(function () {
                document.getElementById('editForm').reset();
                showInfo('Meme updated successfully!');
                listAllMemes();
                showView('meme-feed');
            }).catch(handleError);
    }

    function deleteMeme() {
        let id = $(this).attr('data-id');

        requester.remove('appdata', 'memes/' + id)
            .then(function () {
                showInfo('Meme deleted successfully!');
                listAllMemes();
                showView('meme-feed');
            }).catch(handleError);
    }

    function createMeme(ev) {
        ev.preventDefault();

        let form = $('#createForm');

        let creator = sessionStorage.getItem('username');
        let title = form.find('input[name="title"]').val();
        let description = form.find('input[name="description"]').val();
        let imageUrl = form.find('input[name="imageUrl"]').val();

        let data = {
            creator,
            title,
            description,
            imageUrl
        }

        requester.post('appdata', 'memes', data)
            .then(function () {
                document.getElementById('createForm').reset();
                showInfo('Meme created.');
                listAllMemes();
                showView('meme-feed');
            }).catch(handleError);
    }

    function userProfile() {
        let container = $('.user-profile');

        $.get('./templates/partials/meme.hbs')
            .then(function (hbs) {
                Handlebars.registerPartial('meme', hbs);
            }).catch(handleError);

        let user = {
            username: sessionStorage.getItem('username'),
            avatarUrl: sessionStorage.getItem('avatarUrl'),
            email: sessionStorage.getItem('email')
        }

        requester.get('appdata', 'memes?query={}&sort={"_kmd.ect": -1}')
            .then(function (allMemes) {
                let memes = allMemes.filter(m => m._acl.creator === sessionStorage.getItem('id'));
                $.get('./templates/user-profile.hbs')
                    .then((hbs) => {
                        let template = Handlebars.compile(hbs);
                        container.html(template({
                            user,
                            memes
                        }))
                        $('#deleteUserButton').click(deleteUser);
                        $('.edit').click(editMeme);
                        $('.delete').click(deleteMeme);
                    }).catch(handleError);
            }).catch(handleError);
    }

    function deleteUser() {
        auth.remove()
            .then(function () {
                sessionStorage.clear();
                userLoggedOut();
                showView('main');
            })
    }

    function checkOutMeme(ev) {
        ev.preventDefault();

        let id = $(this).attr('data-id');

        let container = $('.meme-details');

        requester.get('appdata', 'memes/' + id)
            .then(function (meme) {
                $.get('./templates/memeDetails.hbs')
                    .then(function (hbs) {
                        let template = Handlebars.compile(hbs);
                        meme.isAuthor = meme._acl.creator === sessionStorage.getItem('id') ? true : false;
                        container.html(template({
                            meme
                        }));
                        showView('meme-details');
                        $('.edit').click(editMeme);
                        $('.delete').click(deleteMeme);
                        showView('meme-details');
                    })
            }).catch(handleError);
    }
});