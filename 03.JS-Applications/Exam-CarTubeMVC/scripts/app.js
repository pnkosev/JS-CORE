const handlers = {};

$(() => {
    // Define routes here using Sammy.js
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        this.get('index.html', handlers.getWelcomePage);
        this.get('#/', handlers.getWelcomePage);

        this.get('#/register', handlers.getRegister)
        this.post('#/register', handlers.postRegister);

        this.get('#/login', handlers.getLogin);
        this.post('#/login', handlers.postLogin);
        this.get('#/logout', handlers.logout);

        this.get('#/create', handlers.getCreate);
        this.post('#/create', handlers.postCreate);

        this.get('#/allListings', handlers.getListings);

        this.get('#/myListings', handlers.getMyListings)

        this.get('#/edit/:id', handlers.getEdit);
        this.post('#/edit/:id', handlers.postEdit);

        this.post('#/delete', handlers.deleteCar);

        this.get('#/details/:id', handlers.getDetails);
    });

    app.run();
});