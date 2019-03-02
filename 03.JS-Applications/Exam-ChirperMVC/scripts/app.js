const handlers = {};

$(() => {
    // Define routes here using Sammy.js
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        this.get('index.html', handlers.getWelcomePage);
        this.get('#/', handlers.getWelcomePage);

        this.get('#/allChirps', handlers.getAllChirps);

        this.post('#/register', handlers.postRegister);

        this.post('#/login', handlers.postLogin);

        this.get('#/logout', handlers.logout);

        this.post('#/create', handlers.postChirp);

        this.get('#/myProfile', handlers.getMyProfile);

        this.post('#/delete', handlers.removeChrip);

        this.get('#/discover', handlers.getDiscover);

        this.get('#/user/:id', handlers.getUser);

        this.get('#/follow/:id', handlers.followUser);
    });

    app.run();
});