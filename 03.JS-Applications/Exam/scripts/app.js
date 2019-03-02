const handlers = {};

$(() => {
    // Define routes here using Sammy.js
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        this.get('index.html', handlers.getWelcomePage);
        this.get('#/', handlers.getWelcomePage);

        this.get('#/register', handlers.getRegister)
        this.post('#/register', handlers.postRegister);

        this.get('#/login', handlers.getLogin);
        this.post('#/login', handlers.postLogin);
        this.get('#/logout', handlers.logout);

        this.get('#/createPet', handlers.getCreate);
        this.post('#/createPet', handlers.postCreate);

        this.get('#/myPets', handlers.getMyPets);
        this.get('#/deletePet/:id', handlers.deletePet);

        this.get('#/editPet/:id', handlers.getDetailsPet);
        this.post('#/editPet/:id', handlers.postEditPet);

        this.get('#/pet/:id', handlers.petPet);

        this.get('#/dashboard', handlers.getAllPets);

        this.get('#/:Cats', handlers.getPetByCategory);
        this.get('#/:Dogs', handlers.getPetByCategory);
        this.get('#/:Parrots', handlers.getPetByCategory);
        this.get('#/:Reptiles', handlers.getPetByCategory);
        this.get('#/:Others', handlers.getPetByCategory);
    });

    app.run();
});