function attachEventsListeners() {
    document.getElementById('daysBtn').addEventListener('click', dayConverter);
    document.getElementById('hoursBtn').addEventListener('click', hoursConverter);
    document.getElementById('minutesBtn').addEventListener('click', minutesConverter);
    document.getElementById('secondsBtn').addEventListener('click', secondsConverter);
    
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    function dayConverter() {
        hours.value = 24 * +days.value;
        minutes.value = 60 * +hours.value;
        seconds.value = 60 * +minutes.value;
    }

    function hoursConverter() {
        days.value = +hours.value / 24;
        minutes.value = 60 * +hours.value;
        seconds.value = 60 * +minutes.value;
    }

    function minutesConverter() {
        days.value = +hours.value / 24;
        hours.value = +minutes.value / 60;
        seconds.value = 60 * +minutes.value;
    }

    function secondsConverter() {
        days.value = +hours.value / 24;
        hours.value = +minutes.value / 60;
        minutes.value = +seconds.value / 60;
    }
}
