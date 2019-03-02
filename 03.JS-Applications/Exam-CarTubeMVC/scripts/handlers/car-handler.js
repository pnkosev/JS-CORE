handlers.getCreate = function (ctx) {
    ctx.isLoggedIn = auth.isAuth();

    ctx.username = sessionStorage.getItem('username');
    ctx.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function () {
        this.partial('./templates/cars/create.hbs');
    })
};

handlers.postCreate = function (ctx) {
    ctx.username = sessionStorage.getItem('username');

    const seller = sessionStorage.getItem('username');
    const title = ctx.params.title;
    const description = ctx.params.description;
    const brand = ctx.params.brand;
    const model = ctx.params.model;
    const year = ctx.params.year;
    const fuel = ctx.params.fuelType;
    const price = ctx.params.price;
    const imageUrl = ctx.params.imageUrl;

    if (title.length > 33) {
        notify.showError('blabla');
    } else {
        carService.create(seller, title, description, imageUrl, brand, model, fuel, year, price)
            .then(() => {
                notify.showInfo('Car added successfully!');
                ctx.redirect('#/');
            })
            .catch(notify.handleError);
    }
};

handlers.getListings = async function (ctx) {
    ctx.isLoggedIn = auth.isAuth();

    ctx.username = sessionStorage.getItem('username');

    let cars = await carService.getAllListings();

    cars.forEach(c => c.isAuthor = c._acl.creator === sessionStorage.getItem('userId') ? true : false);

    ctx.cars = cars;

    ctx.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs',
        car: './templates/cars/partials/car.hbs'
    }).then(function () {
        this.partial('./templates/cars/listAllCars.hbs');
    })
};

handlers.getMyListings = function (ctx) {
    ctx.isLoggedIn = auth.isAuth();

    ctx.username = sessionStorage.getItem('username');
    let username = sessionStorage.getItem('username');

    carService.getMyCarsListings(username)
        .then(function (myCars) {
            ctx.myCars = myCars;

            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                myCar: './templates/cars/partials/myCar.hbs'
            }).then(function () {
                this.partial('./templates/cars/myCars.hbs');
            })
        }).catch(notify.handleError);
};

handlers.getEdit = function (ctx) {
    ctx.isLoggedIn = auth.isAuth();
    let carId = ctx.params.id.substring(1);

    ctx.username = sessionStorage.getItem('username');

    carService.getById(carId)
        .then(function (car) {
            console.log(car);
            ctx.car = car;
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/cars/editCar.hbs');
            })
        }).catch(notify.handleError);
};

handlers.postEdit = function (ctx) {
    ctx.username = sessionStorage.getItem('username');

    const carId = ctx.params.carId;
    const seller = sessionStorage.getItem('username');
    const title = ctx.params.title;
    const description = ctx.params.description;
    const brand = ctx.params.brand;
    const model = ctx.params.model;
    const year = ctx.params.year;
    const fuel = ctx.params.fuelType;
    const price = ctx.params.price;
    const imageUrl = ctx.params.imageUrl;

    carService.editCar(carId, seller, title, description, imageUrl, brand, model, fuel, year, price)
        .then(function () {
            notify.showInfo('Car has been successfully edited!');
            ctx.redirect('#/allListings');
        }).catch(notify.handleError);
};

handlers.deleteCar = function (ctx) {
    const carId = ctx.params.carId;

    carService.remove(carId)
        .then(function () {
            notify.showInfo('Car has been successfully deleted!');
            ctx.redirect('#/allListings');
        }).catch(notify.handleError);
};

handlers.getDetails = function (ctx) {
    ctx.isLoggedIn = auth.isAuth();
    ctx.username = sessionStorage.getItem('username');

    const carId = ctx.params.id.substring(1);

    carService.getById(carId)
        .then(function (car) {
            ctx.isAuthor = car._acl.creator === sessionStorage.getItem('userId') ? true : false;
            ctx.car = car;
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/cars/details.hbs');
            })
        }).catch(notify.handleError);
};