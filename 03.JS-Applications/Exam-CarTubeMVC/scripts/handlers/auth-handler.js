handlers.getWelcomePage = function (ctx) {
    ctx.isLoggedIn = auth.isAuth();
    ctx.username = sessionStorage.getItem('username');
    ctx.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function () {
        this.partial('./templates/welcome.hbs');
    })
};

handlers.getRegister = function (ctx) {
    ctx.isLoggedIn = auth.isAuth();

    ctx.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function () {
        this.partial('./templates/user/register.hbs');
    })

};

handlers.postRegister = function (ctx) {
    ctx.isLoggedIn = auth.isAuth();

    const username = ctx.params.username;
    const password = ctx.params.password;
    const repeatPass = ctx.params.repeatPass;

    if (username.length < 5) {
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

handlers.getLogin = function (ctx) {
    ctx.isLoggedIn = auth.isAuth();

    ctx.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function () {
        this.partial('./templates/user/login.hbs');
    })
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
                ctx.redirect('#/allListings');
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