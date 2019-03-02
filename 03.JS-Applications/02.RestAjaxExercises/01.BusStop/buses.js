function getInfo() {
    let baseURL = "https://judgetests.firebaseio.com/businfo/";
    $('#stopName').text('');
    $('#buses').empty();

    let id = $('#stopId').val();
    let targetURL = baseURL + id + ".json";
    let stopName = $('#stopName');
    let buses = $('#buses');

    $.get(baseURL + id + ".json") // or target
        .then(loadBuses)
        .catch(displayError);

    function loadBuses(data) {
        stopName.text(data.name);

        Object.keys(data.buses)
            .forEach((key) => {
                buses.append($('<li>').text(`Bus ${key} arrives in ${data.buses[key]} minutes`));
            });

        // for (let bus in data.buses) {
        //     buses.append($(`<li>`).text(`Bus ${bus} arrives in ${data['buses'][bus]} minutes`));
        // }
    }

    function displayError() {
        stopName.text('Error');
    }
}