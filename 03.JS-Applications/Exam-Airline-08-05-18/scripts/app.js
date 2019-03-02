$(() => {

    function showView(viewName) {
        $('#container > section').hide();
        $('#view' + viewName).show();
    }

    function navigateTo() {
        let target = $(this).attr('data-target');
        showView(target);
    }

    if (sessionStorage.getItem('authtoken') === null) {
        userLoggedOut();
    } else {
        userLoggedIn();
    }

    function saveSession(userInfo) {
        let username = userInfo.username;
        sessionStorage.setItem('username', username);
        let id = userInfo._id;
        sessionStorage.setItem('id', id);
        let authtoken = userInfo._kmd.authtoken;
        sessionStorage.setItem('authtoken', authtoken);
        userLoggedIn();
    }

    function userLoggedIn() {
        $('.userOnlyMenu').parent().show();
        $('.userOnly').show();
        $('.anonymousMenu').parent().hide();
        let username = sessionStorage.getItem('username');
        $('#wlcmMsg').empty();
        $('#wlcmMsg').text(`Welcome, ${username}!`);
        appendMyFlights();
        listAllFlights();
        showView('Catalog');
    }

    function userLoggedOut() {
        $('.userOnlyMenu').parent().hide();
        $('.userOnly').hide();
        $('.anonymousMenu').parent().show();
        $('#container > section').hide();
    }

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

    //Attach events
    (() => {
        $('.notification').click(function () {
            $(this).hide();
        })
        $('a[data-target]').click(navigateTo);
        $('#formRegister').submit(registerPost);
        $('#formLogin').submit(loginPost);
        $('#formAddFlight').submit(addFlightPost);
        $('#formEditFlight').submit(editFlightPost);
        $('.log-out').click(logout);
    })();

    function registerPost(ev) {
        ev.preventDefault();
        let form = $('#formRegister');
        let username = form.find('input[name=username]').val();
        let password = form.find('input[name=pass]').val();
        let repPass = form.find('input[name=checkPass]').val();

        auth.register(username, password)
            .then(function (userInfo) {
                document.getElementById('formRegister').reset();
                saveSession(userInfo);
                showInfo('User registered successfully!');
                showView('MyFlights');
            }).catch(handleError);
    }

    function loginPost(ev) {
        ev.preventDefault();

        let form = $('#formLogin');
        let username = form.find('input[name=username]').val();
        let password = form.find('input[name=pass]').val();

        auth.login(username, password)
            .then(function (userInfo) {
                document.getElementById('formLogin').reset();
                saveSession(userInfo);
                showInfo('Login successfully!');
                showView('Catalog');
            }).catch(handleError);
    }

    function logout() {
        auth.logout()
            .then(function () {
                sessionStorage.clear();
                userLoggedOut();
                showInfo('You successfully logged out!');
            })
    }

    function listAllFlights() {
        let container = $('.added-flights');

        requester.get('appdata', 'flights')
            .then(function (flights) {
                $.get('./templates/miniFlight.hbs')
                    .then((hbs) => {
                        let template = Handlebars.compile(hbs);
                        container.html(template({
                            flights
                        }));
                        $('.added-flight').click(showDetails);
                    }).catch(handleError);
            }).catch(handleError);
    }

    function addFlightPost(ev) {
        ev.preventDefault();

        let form = $('#formAddFlight');

        let destination = form.find('input[name="destination"]').val();
        let origin = form.find('input[name="origin"]').val();
        let departure = form.find('input[name="departureDate"]').val();
        //let departureTime = form.find('input[name="departureTime"]').val();
        let seats = form.find('input[name="seats"]').val();
        let cost = form.find('input[name="cost"]').val();
        let image = form.find('input[name="img"]').val();
        let isPublished;

        if (document.getElementById('isPublic').checked) {
            isPublished = true;
        } else {
            isPublished = false;
        }

        let data = {
            destination,
            origin,
            departure,
            seats,
            cost,
            image,
            isPublished
        }

        requester.post('appdata', 'flights', data)
            .then(function () {
                document.getElementById('formAddFlight').reset();
                showInfo('Created flight.');
                listAllFlights();
                appendMyFlights();
                showView('Catalog');
            }).catch(handleError);
    }

    function appendMyFlights() {
        let id = sessionStorage.getItem('id');
        let endpoint = `flights?query={"_acl.creator":"${id}"}`;
        requester.get('appdata', endpoint)
            .then(function (myFlights) {
                $('#viewMyFlights').empty();
                if (myFlights.length === 0) {
                    $('#viewMyFlights').append('<p>You don\'t currently have created flights</p>');
                } else {
                    $.get('./templates/myFlight.hbs')
                        .then(function (hbs) {
                            let template = Handlebars.compile(hbs);
                            $('#viewMyFlights').html(template({
                                myFlights
                            }));
                            $('.remove').click(deleteCurrentFlight);
                            $('.details').click(showDetails);
                        }).catch(handleError);
                }
            }).catch(handleError);
    }

    function deleteCurrentFlight() {
        let id = $(this).attr('data-id');

        requester.remove('appdata', 'flights/' + id)
            .then(function () {
                showInfo('Flight removed successfully!');
                listAllFlights();
                appendMyFlights();
                showView('MyFlights');
            }).catch(handleError);
    }

    function showDetails() {
        let id = $(this).attr('data-id');


        requester.get('appdata', 'flights/' + id)
            .then(function (flight) {
                $.get('./templates/flightDetails.hbs')
                    .then(function (hbs) {
                        let template = Handlebars.compile(hbs);
                        flight.isAuthor = flight._acl.creator === sessionStorage.getItem('id') ? true : false;
                        $('#viewFlightDetails').html(template({
                            flight
                        }));
                        $('.edit-flight-detail').click(() => editFlight(flight));
                        listAllFlights();
                        appendMyFlights();
                        showView('FlightDetails');
                    }).catch(handleError);
            }).catch(handleError);
    }

    function editFlight(flight) {
        let form = $('#formEditFlight');

        form.find('input[name="flightId"]').val(flight._id);
        form.find('input[name="destination"]').val(flight.destination);
        form.find('input[name="origin"]').val(flight.origin);
        form.find('input[name="departureDate"]').val(flight.departure);
        //let departureTime = form.find('input[name="departureTime"]').val();
        form.find('input[name="seats"]').val(flight.seats);
        form.find('input[name="cost"]').val(flight.cost);
        form.find('input[name="img"]').val(flight.image);

        $('.save-changes').attr('data-id', flight._id);


        if (flight.isPublished === true) {
            form.find('input[name=public]').prop('checked', true);
        } else {
            form.find('input[name=public]').prop('checked', false);
        }

        showView('EditFlight');

    }

    function editFlightPost(ev) {
        ev.preventDefault();

        let form = $('#formEditFlight');

        let id = form.find('input[name="flightId"]').val();
        let destination = form.find('input[name="destination"]').val();
        let origin = form.find('input[name="origin"]').val();
        let departure = form.find('input[name="departureDate"]').val();
        //let departureTime = form.find('input[name="departureTime"]').val();
        let seats = form.find('input[name="seats"]').val();
        let cost = form.find('input[name="cost"]').val();
        let image = form.find('input[name="img"]').val();
        let isPublished;

        if (document.getElementById('isPublicEdit').checked) {
            isPublished = true;
        } else {
            isPublished = false;
        }

        let data = {
            destination,
            origin,
            departure,
            seats,
            cost,
            image,
            isPublished
        }

        requester.update('appdata', 'flights/' + id, data)
            .then(function () {
                document.getElementById('formEditFlight').reset();
                showInfo('Updated flight.');
                listAllFlights();
                appendMyFlights();
                showView('Catalog');
            }).catch(handleError);
    }
});