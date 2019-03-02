function attachEventsListeners() {
    let btn = document.getElementById('convert');

    let inputVal = document.getElementById('inputDistance');
    let result = document.getElementById('outputDistance');
    let fromUnits = document.getElementById('inputUnits');
    let toUnits = document.getElementById('outputUnits');

    btn.addEventListener('click', convert);

    function convert() {
        let rate = {
            km: 1000,
            m: 1,
            cm: 0.01,
            mm: 0.001,
            mi: 1609.34,
            yrd: 0.9144,
            ft: 0.3048,
            in: 0.0254
        }

        let value = inputVal.value;

        if (value === "") {
            return false;
        }
        if (isNaN(Number(value))) {
            return false;
        }

        result.disabled = false;
        result.readOnly = true;
        result.value = +value * rate[fromUnits.value] / rate[toUnits.value];
    }
}