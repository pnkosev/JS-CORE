function schedule() {
    let info = $('.info');
    let nextStopId = 'depot';
    let currentStop = null;

    function depart() {
        $('#depart').prop('disabled', true);

        $.get(`https://judgetests.firebaseio.com/schedule/${nextStopId}.json`)
            .then(nextStop)
            .catch(displayError);
    }

    function arrive() {
        $('#arrive').prop('disabled', true);
        info.text(`Arriving at ${currentStop}`);
        $('#depart').prop('disabled', false);
    }

    function nextStop(data) {
        info.text(`Next stop ${data.name}`);
        currentStop = data.name;
        nextStopId = data.next;
        $('#arrive').prop('disabled', false);
    }

    function displayError() {
        info.text('Error');
        $('#depart').prop('disabled', true);
        $('#arrive').prop('disabled', true);
    }

    return {
        depart,
        arrive
    }
}