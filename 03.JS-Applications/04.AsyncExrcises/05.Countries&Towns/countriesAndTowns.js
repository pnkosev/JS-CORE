function countriesAndTowns() {
    let baseURL = "https://baas.kinvey.com/appdata/kid_By2OlpMkE/";
    let base64 = btoa("guest:guest");
    const authHeaders = {
        "Authorization": "Basic " + base64
    };

    attachEvents();
    loadCountries();

    function attachEvents() {
        $('#addCountry').click(function () {
            $('.add:first').fadeIn();
        });
        $('#addTown').click(function () {
            $('.add:last').fadeIn();
        });
        $('#editCountry').click(editCountry);
        $('#addingCountry').click(addCountry);
        $('#deleteCountry').click(deleteCountry);
        $('#listTowns').click(listTowns);
        $('#addingTown').click(addTown);
        $('#editingTown').click(editTown);
    }

    function loadCountries() {
        $.ajax({
                method: "GET",
                url: baseURL + "countries",
                headers: authHeaders
            }).then(displayCountries)
            .catch(handleError);
    }

    function displayCountries(countries) {
        $('#countries').empty();
        [...countries].forEach((item) => {
            $('#countries')
                .append($('<option>').val(item._id).text(item.name));
        });
    }

    function addCountry(ev) {
        ev.preventDefault();
        ev.stopPropagation();

        let country = $('#newCountry').val();

        if (!$('#countries option').toArray().some(c => $(c).text() === country)) {

            $.ajax({
                method: "POST",
                url: baseURL + "countries",
                headers: authHeaders,
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    name: country
                })
            }).then(function () {
                $('.add:first').fadeOut();
                loadCountries();
                $('#newCountry').val('');
            });
        } else {
            $('#errorDiv').empty();
            $('#errorDiv').text('This country already exist in the list');
            $('#errorDiv').fadeIn();
            $('#newCountry').val('');
            $('.add:first').fadeOut();
            setTimeout(function () {
                $('#errorDiv').fadeOut();
            }, 3000);
        }
    }

    function editCountry() {
        let countryToEdit = $('#countries option:selected').val();

        $('.edit:first').fadeIn();

        $('#editedCountry').val($('#countries option:selected').text());

        $('#editingCountry').click(editingCountry);

        function editingCountry(ev) {
            ev.preventDefault();
            ev.stopPropagation();
            $.ajax({
                method: "PUT",
                url: baseURL + "countries/" + countryToEdit,
                headers: authHeaders,
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    name: $('#editedCountry').val()
                })
            }).then(function () {
                loadCountries();
                $('#editedCountry').val('');
                $('.edit:first').fadeOut();
            }).catch(handleError);
        }
    }

    function deleteCountry(ev) {
        ev.preventDefault();
        ev.stopPropagation();

        let countryToEdit = $('#countries option:selected').val();

        $.ajax({
            method: "DELETE",
            url: baseURL + "countries/" + countryToEdit,
            headers: authHeaders
        }).then(function () {
            loadCountries();
        });
    }

    function listTowns() {
        let country = $('#countries option:selected').text();
        $.ajax({
                method: "GET",
                url: baseURL + "towns",
                headers: authHeaders
            }).then(displayTowns)
            .catch(handleError);

        function displayTowns(towns) {
            $('#towns').empty();
            towns = towns.filter(t => t.country === country);

            towns.forEach(town => {
                $('#towns').append($('<option>').val(town._id).text(town.name));
            })
        }
    }

    function addTown(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        let town = $('#newTown').val();
        let country = $('#newTownCountry').val();

        $.ajax({
                method: "GET",
                url: baseURL + "towns",
                headers: authHeaders
            }).then(checkingTowns)
            .catch(handleError);

        function checkingTowns(towns) {
            if (!towns[town] && $('#countries option').toArray().some(c => $(c).text() === country)) {
                $.ajax({
                    method: "POST",
                    url: baseURL + "towns",
                    headers: authHeaders,
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify({
                        name: town,
                        country: country
                    })
                })
            } else {

            }
        }
    }

    function handleError(err) {
        console.log(err);
    }
}