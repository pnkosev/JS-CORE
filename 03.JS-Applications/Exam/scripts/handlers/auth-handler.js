handlers.getWelcomePage = function (ctx) {
    ctx.isLoggedIn = auth.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function () {
        this.partial('./templates/home.hbs');
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

    if (username.length === 0) {
        notify.showError('Username field is mandatory');
    } else if (username.length < 3) {
        notify.showError('Username must be at least 3 symbols long!');
    } else if (password.length === 0) {
        notify.showError('Password field is mandatory!');
    } else if (password.length < 6) {
        notify.showError('Password must be at least 6 symbols long!');
    } else {
        auth.register(username, password)
            .then((userData) => {
                auth.saveSession(userData);
                notify.showInfo('User registration successful.');
                ctx.redirect('#/dashboard');
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
        notify.showError('Username field is mandatory');
    } else if (username.length < 3) {
        notify.showError('Username must be at least 3 symbols long!');
    } else if (password.length === 0) {
        notify.showError('Password field is mandatory!');
    } else if (password.length < 6) {
        notify.showError('Password must be at least 6 symbols long!');
    } else {
        auth.login(username, password)
            .then((userData) => {
                auth.saveSession(userData);
                notify.showInfo('Login successful.');
                ctx.redirect('#/dashboard');
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