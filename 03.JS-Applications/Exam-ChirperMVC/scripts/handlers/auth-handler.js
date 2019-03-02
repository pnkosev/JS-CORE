handlers.getWelcomePage = function (ctx) {
    ctx.isLoggedIn = auth.isAuth();

    ctx.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function () {
        this.partial('./templates/welcome.hbs');
    })
};

handlers.postRegister = function (ctx) {
    ctx.isLoggedIn = auth.isAuth();

    const username = ctx.params.username;
    const password = ctx.params.password;
    const repeatPass = ctx.params.repeatPass;

    if (username.length < 3) {
        notify.showError('Username must be at least 5 symbols long!');
    } else if (password.length === 0) {
        notify.showError('Password must be non-empty!');
    } else if (password !== repeatPass) {
        notify.showError('Both passwords must match!');
    } else {
        auth.register(username, password)
            .then((userData) => {
                auth.saveSession(userData);
                notify.showInfo('User registration successful.');
                ctx.redirect('#/');
            }).catch(notify.handleError)
    }
};

handlers.postLogin = function (ctx) {
    const username = ctx.params.username;
    const password = ctx.params.password;

    if (username.length === 0) {
        notify.showError('Username is requried!');
    } else if (password.length === 0) {
        notify.showError('Password is requried!');
    } else {
        auth.login(username, password)
            .then((userData) => {
                auth.saveSession(userData);
                notify.showInfo('Login successful.');
                ctx.redirect('#/allChirps');
            }).catch(notify.handleError);
    }
};

handlers.logout = function (ctx) {
    auth.logout()
        .then(() => {
            sessionStorage.clear();
            notify.showInfo('Logout successful.');
            ctx.redirect('#/');
        })
};

handlers.getMyProfile = function (ctx) {
    ctx.isLoggedIn = auth.isAuth();
    const username = sessionStorage.getItem('username');

    chirpService.getChirpsByUser(username)
        .then(function (chirps) {

            chirps.forEach((c) => {
                c.time = calcTime(c._kmd.lmt);
            });

            chirps.forEach((c) => {
                c.isAuthor = c._acl.creator === sessionStorage.getItem('userId') ? true : false;
            });

            ctx.username = sessionStorage.getItem('username');
            ctx.nbChirps = chirps.length;
            ctx.subing = (sessionStorage.getItem('subs')).length;
            ctx.chirps = chirps;

            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                chirp: './templates/partials/chirp.hbs'
            }).then(function () {
                this.partial('./templates/viewMyChirps.hbs');
            })
        }).catch(notify.handleError);
};

handlers.getDiscover = function (ctx) {
    ctx.isLoggedIn = auth.isAuth();
    const username = sessionStorage.getItem('username');

    auth.discover()
        .then(function (allUsers) {

            let users = allUsers.filter(u => {
                return u.username !== username;
            });
            users.forEach(u => {
                u.subings = u.subscriptions.length;
            });

            ctx.users = users;

            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                user: './templates/partials/user.hbs'
            }).then(function () {
                this.partial('./templates/viewDiscover.hbs');
            })
        }).catch(notify.handleError);
};

handlers.getUser = function (ctx) {
    ctx.isLoggedIn = auth.isAuth();

    const userId = ctx.params.id.substring(1);

    auth.getById(userId)
        .then(function (user) {
            const username = user.username;
            ctx.subings = user.subscriptions.length;
            ctx.id = user._id;
            chirpService.getChirpsByUser(username)
                .then(function (chirps) {

                    ctx.nbChirps = chirps.length;
                    ctx.chirps = chirps;
                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        chirp: './templates/partials/chirp.hbs'
                    }).then(function () {
                        this.partial('./templates/viewProfile.hbs');
                    })
                })

        }).catch(notify.handleError);
};

handlers.followUser = function (ctx) {
    const username = sessionStorage.getItem('username');

    const id = ctx.params.id.substring(1);

    auth.follow(id, username)
        .then(function () {
            ctx.redirect('#/');
        })
}