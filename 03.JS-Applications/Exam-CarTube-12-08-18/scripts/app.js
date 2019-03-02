$(() => {
    showView('main');

    function showView(viewName) {
        $('main > div').hide();
        $('#' + viewName).show();
    }

    function navigateTo() {
        let target = $(this).attr('data-target');
        showView(target);
    }

    function saveSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authtoken', userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem('id', userId);
        let username = userInfo.username;
        sessionStorage.setItem('username', username);
        userLoggedIn();
    }

    if (sessionStorage.getItem('authtoken') === null) {
        userLogedOut();
    } else {
        userLoggedIn();
    }

    function userLogedOut() {
        $('.anonymous').show();
        $('.userOnly').hide();
        showView('main');
    }

    function userLoggedIn() {
        $('.anonymous').hide();
        $('.userOnly').show();
        let username = sessionStorage.getItem('username');
        $('#welcomeMsg').text('');
        $('#welcomeMsg').text(`Welcome, ${username}!`);
        showView('main');
        listMyAds();
    }

    $(document).on({
        ajaxStart: () => $("#loadingBox").show(),
        ajaxStop: () => $('#loadingBox').fadeOut()
    });

    function handleError(reason) {
        showError(reason.responseJSON.description);
    }

    function showInfo(message) {
        let infoBox = $('#infoBox');
        infoBox.text(message);
        infoBox.show();
        setTimeout(() => infoBox.fadeOut(), 3000);
    }

    function showError(message) {
        let errorBox = $('#errorBox');
        errorBox.text(message);
        errorBox.show();
        setTimeout(() => errorBox.fadeOut(), 3000);
    }

    // Attach events
    (() => {
        $('a[data-target]').click(navigateTo);
        $('#registerBtn').click(registerUser);
        $('#loginBtn').click(loginUser);
        $('#logout').click(logoutUser);
        $('#carList').click(listAllCars);
        $('#createAd').submit(createAd);
        $('#editBtnPost').click(editAdPost);
        $('#myBalls').click(function () {
            showView('main');
            listMyAds();
        })
        $('.notifications').click(function () {
            $(this).hide();
        });
    })();

    function registerUser(ev) {
        ev.preventDefault();

        let username = $('#register input[name=username]').val();
        let password = $('#register input[name="password"]').val();
        let repeatPass = $('#register input[name="repeatPass"]').val();

        auth.register(username, password)
            .then(function (userInfo) {
                saveSession(userInfo);
                showInfo('Successfully registered!');
                $('#register input[name=username]').val('');
                $('#register input[name="password"]').val('');
                $('#register input[name="repeatPass"]').val('');
            }).catch(handleError);
    }

    function loginUser(ev) {
        ev.preventDefault();

        let username = $('#login input[name=username]').val();
        let password = $('#login input[name=password]').val();

        auth.login(username, password)
            .then(function (userInfo) {
                $('#login input[name=username]').val('');
                $('#login input[name=password]').val('');
                saveSession(userInfo);
                showInfo('Successfully logged in!');
            }).catch(handleError)
    }

    function logoutUser() {
        auth.logout()
            .then(function () {
                showInfo('Successfully logged out!');
                sessionStorage.clear();
                userLogedOut();
            }).catch(handleError);
    }

    function listAllCars() {
        let container = $('#listings');
        container.empty();

        requester.get('appdata', 'cars')
            .then(function (cars) {

                if (cars.length === 0) {
                    container.append('<p class="no-cars">No cars in database.</p>');
                } else {
                    for (let car of cars) {
                        let listing = $(`<div class="listing">`);
                        listing.append($(`<p>${car.title}</p>`));
                        listing.append($(`<img src="${car.imageUrl}">`));
                        listing.append($(`<h2>Brand: ${car.brand}</h2>`));

                        let infoDiv = $('<div class="info">');

                        let dataInfoDiv = $('<div id="data-info">');
                        dataInfoDiv.append($(`<h3>Seller: ${car.seller}</h3>`));
                        dataInfoDiv.append($(`<h3>Fuel: ${car.fuel}</h3>`));
                        dataInfoDiv.append($(`<h3>Year: ${car.year}</h3>`));
                        dataInfoDiv.append($(`<h3>Price: ${car.price} $</h3>`));

                        infoDiv.append(dataInfoDiv);

                        let buttonsDiv = $('<div id="data-buttons"></div>');

                        let ulDiv = $('<ul id="userOnlyBtns"></ul>');

                        // data-id="${car._id}"

                        let detailsBtn = $(`<a href="#" class="button-carDetails">Details</a>`).click(() => detailsAd(car));
                        ulDiv.append($('<li>')
                            .append(detailsBtn));

                        if (car._acl.creator === sessionStorage.getItem('id')) {

                            let editBtn = $('<a href="#" data-id="${car._id}" class="button-carDetails">Edit</a>').click(() => editAd(car));
                            let deleteBtn = $('<a href="#" data-id="${car._id}" class="button-carDetails">Delete</a>').click(() => deleteAd(car._id));

                            ulDiv.append($('<li>')
                                .append(editBtn));
                            ulDiv.append($('<li>')
                                .append(deleteBtn));
                        }

                        buttonsDiv.append(ulDiv);
                        infoDiv.append(buttonsDiv);
                        listing.append(infoDiv);
                        container.append(listing);
                    }
                }
            }).catch(handleError);
    }

    function createAd(ev) {
        ev.preventDefault();

        let title = $('input[name=title]').val();
        let description = $('input[name=description]').val();
        let brand = $('input[name=brand]').val();
        let model = $('input[name=model]').val();
        let year = $('input[name=year]').val();
        let imageUrl = $('input[name=imageUrl]').val();
        let fuel = $('input[name=fuelType]').val();
        let price = $('input[name=price]').val();
        let seller = sessionStorage.getItem('username');

        let data = {
            title,
            description,
            brand,
            model,
            year,
            imageUrl,
            fuel,
            price,
            seller
        }

        requester.post('appdata', 'cars', data)
            .then(function (res) {
                document.getElementById('createAd').reset();
                showInfo('Ad created successfully!');
                showView('car-listings');
                listAllCars();
            }).catch(handleError);
    }

    function deleteAd(carId) {
        requester.remove('appdata', 'cars/' + carId)
            .then(function () {
                showInfo('Ad deleted successfully!');
                showView('car-listings');
                listAllCars();
            }).catch(handleError);
    }

    function editAd(car) {
        let container = $('#edit-listing');

        container.empty();

        let editAdForm = $('<form id="editAd">');
        let divContainer = $('<div class="container">');

        divContainer.append($(`<h1>Edit Car Listing</h1>
        <p>Please fill in this form to edit an listing.</p>
        <hr>
        <input type="hidden" name="carId" value="${car._id}">

        <p>Title</p>
        <input type="text" placeholder="Enter Title" name="title" value="${car.title}">

        <p>Description</p>
        <input type="text" placeholder="Enter Description" name="description" value="${car.description}">

        <p>Car Brand</p>
        <input type="text" placeholder="Enter Car Brand" name="brand" value="${car.brand}">

        <p>Car Model</p>
        <input type="text" placeholder="Enter Car Model" name="model" value="${car.model}">

        <p>Car Year</p>
        <input type="number" placeholder="Enter Car Year" name="year" value="${car.year}">

        <p>Car Image</p>
        <input type="text" placeholder="Enter Car Image" name="imageUrl" value="${car.imageUrl}">

        <p>Car Fuel Type</p>
        <input type="text" placeholder="Enter Car Fuel Type" name="fuelType" value="${car.fuel}">

        <p>Car Price</p>
        <input type="number" placeholder="Enter Car Price" name="price" value="${car.price}">

        <hr>`));
        divContainer.append($('<button class="registerbtn">Edit Listing</button>').click(editAdPost));

        editAdForm.append(divContainer);

        container.append(editAdForm);

        showView('edit-listing');
    }

    function editAdPost(ev) {
        ev.preventDefault();

        let id = $('#editAd input[name=carId]').val();
        let title = $('#editAd input[name=title]').val();
        let description = $('#editAd input[name=description]').val();
        let brand = $('#editAd input[name=brand]').val();
        let model = $('#editAd input[name=model]').val();
        let year = $('#editAd input[name=year]').val();
        let imageUrl = $('#editAd input[name=imageUrl]').val();
        let fuel = $('#editAd input[name=fuelType]').val();
        let price = $('#editAd input[name=price]').val();
        let seller = sessionStorage.getItem('username');

        let data = {
            title,
            description,
            brand,
            model,
            year,
            imageUrl,
            fuel,
            price,
            seller
        }

        requester.update('appdata', 'cars/' + id, data)
            .then(function () {
                showInfo('Ad updated successfully');
                showView('car-listings');
                listAllCars();
            }).catch(handleError);


    }

    function detailsAd(car) {

        let container = $('#listing-details');

        container.empty();

        let div = $('<div class="my-listing-details">');
        div.append($(`<p id="auto-title">${car.title}</p>`))
            .append($(`<img src="${car.imageUrl}">`));

        let detailsDiv = $('<div class="listing-props">');
        detailsDiv.append($(`<h2>Brand: ${car.brand}</h2>`))
            .append($(`<h3>Model: ${car.model}</h3>`))
            .append($(`<h3>Year: ${car.year}</h3>`))
            .append($(`<h3>Fuel: ${car.fuel}</h3>`))
            .append($(`<h3>Price: ${car.price}</h3>`));

        div.append(detailsDiv);

        if (car._acl.creator === sessionStorage.getItem('id')) {
            let divBtns = $('<div class="listings-buttons">');

            let editBtn = $(`<a href="#" class="button-list edit" data-id="${car._id}">Edit</a>`).on('click', editMyAd);
            let deleteBtn = $(`<a href="#" class="button-list edit" data-id="${car._id}">Delete</a>`).on('click', deleteMyAd);

            divBtns.append(editBtn);
            divBtns.append(deleteBtn);

            div.append(divBtns);
        }

        let descriptionDiv = $('<p id="description-title">Description:</p>');
        descriptionDiv.append($(`<p id="description-para">${car.description}</p>`));

        div.append(descriptionDiv);

        container.append(div);

        showView('listing-details');
    }

    function listMyAds() {

        let username = sessionStorage.getItem('username');

        let endpoint = `cars?query={"seller":"${username}"}&sort={"_kmd.ect": -1}`

        requester.get('appdata', endpoint)
            .then(function (myCars) {
                if (myCars.length === 0) {
                    $('#my-listings').empty();
                    $('#my-listings').append('<p class="no-cars"> No cars in database.</p>');
                } else {
                    $.get('./templates/myListings.hbs')
                        .then((hbs) => {
                            let template = Handlebars.compile(hbs);
                            $('#my-listings').html(template({
                                myCars
                            }));
                            $('.details').on('click', detailsMyAd);
                            $('.edit').on('click', editMyAd);
                            $('.delete').on('click', deleteMyAd);
                        }).catch(handleError);
                }
            }).catch(handleError);
    }

    function detailsMyAd() {
        let id = $(this).attr('data-id');

        requester.get('appdata', 'cars/' + id)
            .then(function (ad) {
                showView('listing-details');
                detailsAd(ad);
            }).catch(handleError);
    }

    function editMyAd() {
        let id = $(this).attr('data-id');

        requester.get('appdata', 'cars/' + id)
            .then(function (ad) {
                editAd(ad);
            }).catch(handleError);
    }

    function deleteMyAd() {
        let id = $(this).attr('data-id');

        requester.remove('appdata', 'cars/' + id)
            .then(function () {
                showInfo('Ad successfully deleted!');
                showView('main');
                listMyAds();
            }).catch(handleError);
    }
});