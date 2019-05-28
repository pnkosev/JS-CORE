function attachEventsListeners() {
    let inputDistance = document.getElementById('inputDistance');
    let outputDistance = document.getElementById('outputDistance');
    let inputUnits = document.getElementById('inputUnits');
    let outputUnits = document.getElementById('outputUnits');

    document.getElementById('convert').addEventListener('click', convert);

    function convert() {
        let rate = {
            km: 1000,
            m: 1,
            cm: 0.01,
            mm: 0.001,
            mi: 1609.34,
            yrd: 0.9144,
            ft: 0.3048,
            in: 0.0254,
        }

        let value = inputDistance.value;

        if (value === '') {
            return;
        }
        if (isNaN(Number(value))) {
            return;
        }

        outputDistance.disabled = 'false';
        outputDistance.readOnly = 'true';
        outputDistance.value = +value * rate[inputUnits.value] / rate[outputUnits.value];
    }
}
