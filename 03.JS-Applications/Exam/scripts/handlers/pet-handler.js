handlers.getCreate = function (ctx) {
    ctx.isLoggedIn = auth.isAuth();

    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function () {
        this.partial('./templates/pets/create.hbs');
    })
};

handlers.postCreate = function (ctx) {
    ctx.isLoggedIn = auth.isAuth();
    ctx.username = sessionStorage.getItem('username');

    const name = ctx.params.name;
    const description = ctx.params.description;
    const imageURL = ctx.params.imageURL;

    const dropdownElement = document.getElementById("category");
    const category = dropdownElement.options[dropdownElement.selectedIndex].value;

    const likes = "0";

    petService.createPet(name, description, imageURL, category, likes)
        .then(() => {
            notify.showInfo('Pet added successfully!');
            ctx.redirect('#/myPets');
        })
        .catch(notify.handleError);
};

handlers.getMyPets = async function (ctx) {
    ctx.isLoggedIn = auth.isAuth();

    ctx.username = sessionStorage.getItem('username');
    const userId = sessionStorage.getItem('userId');

    let pets = await petService.listMyPets(userId);

    ctx.pets = pets;

    ctx.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs',
        pet: './templates/pets/partials/pet.hbs'
    }).then(function () {
        this.partial('./templates/pets/myPets.hbs');
    })
};

handlers.deletePet = function (ctx) {
    const petId = ctx.params.id.substring(1);

    petService.removePet(petId)
        .then(function () {
            notify.showInfo('Pet has been successfully deleted!');
            ctx.redirect('#/myPets');
        }).catch(notify.handleError);
};

handlers.getDetailsPet = function (ctx) {

    ctx.isLoggedIn = auth.isAuth();

    let petId = ctx.params.id.substring(1);

    ctx.username = sessionStorage.getItem('username');

    petService.getById(petId)
        .then(function (pet) {
            ctx.isAuthor = pet._acl.creator === sessionStorage.getItem('userId') ? true : false;
            ctx.pet = pet;
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/pets/editPet.hbs');
            })
        }).catch(notify.handleError);
};

handlers.postEditPet = function (ctx) {
    ctx.username = sessionStorage.getItem('username');
    ctx.isLoggedIn = auth.isAuth();
    let petId = ctx.params.id.substring(1);

    const name = ctx.params.name;
    const description = ctx.params.description;
    const imageURL = ctx.params.imageURL;
    const category = ctx.params.category;
    const likes = ctx.params.likes;

    petService.editPet(petId, name, description, imageURL, category, likes)
        .then(function () {
            notify.showInfo('Updated successfully');
            ctx.redirect('#/myPets');
        }).catch(notify.handleError);
};

handlers.petPet = function (ctx) {
    ctx.username = sessionStorage.getItem('username');
    ctx.isLoggedIn = auth.isAuth();

    let petId = ctx.params.id.substring(1);

    petService.getById(petId)
        .then(function (pet) {
            let name = pet.name;
            let description = pet.description;
            let imageURL = pet.imageURL;
            let category = pet.category;
            let likesOld = Number(pet.likes);
            let likes = ++likesOld;

            petService.editPet(petId, name, description, imageURL, category, likes.toString())
                .then(function () {
                    ctx.redirect('#/dashboard');
                }).catch(notify.handleError);
        })
};

handlers.getAllPets = function (ctx) {
    ctx.isLoggedIn = auth.isAuth();
    ctx.username = sessionStorage.getItem('username');

    petService.listAllPets()
        .then(function (allPets) {
            let pets = allPets.filter(p => p._acl.creator !== sessionStorage.getItem('userId'));

            // let category = {
            //     cats: "Cats"
            // };
            // ctx.category = category;
            ctx.pets = pets;
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                otherPet: './templates/pets/partials/otherPet.hbs'
            }).then(function () {
                this.partial('./templates/pets/dashboard.hbs');
            })
        }).catch(notify.handleError)
};

handlers.getPetByCategory = function (ctx) {
    ctx.isLoggedIn = auth.isAuth();
    ctx.username = sessionStorage.getItem('username');
    const category = ctx.params.Cats.substring(1, ctx.params.Cats.length - 1); //<<<< Това става на магия ЛОЛ

    petService.getByCategory(category)
        .then(function (allPets) {
            let pets = allPets.filter(p => p._acl.creator !== sessionStorage.getItem('userId'));

            ctx.pets = pets;
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                otherPet: './templates/pets/partials/otherPet.hbs'
            }).then(function () {
                this.partial('./templates/pets/dashboard.hbs');
            })
        })
}