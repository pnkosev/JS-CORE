function attachEventsListeners() {
    // let btns = document.querySelectorAll('input[type=\'button\']');

    // for (let btn of btns) {
    //     if (btn.id === 'daysBtn') {
    //         btn.addEventListener('click', convertFromDays);
    //     } else if (btn.id === 'hoursBtn') {
    //         btn.addEventListener('click', convertFromHours);
    //     } else if (btn.id === 'minutesBtn') {
    //         btn.addEventListener('click', convertFromMinutes);
    //     } else if (btn.id === 'secondsBtn') {
    //         btn.addEventListener('click', convertFromSeconds);
    //     }
    // }

    document.getElementById('daysBtn').addEventListener('click', convertFromDays);
    document.getElementById('hoursBtn').addEventListener('click', convertFromHours);
    document.getElementById('minutesBtn').addEventListener('click', convertFromMinutes);
    document.getElementById('secondsBtn').addEventListener('click', convertFromSeconds);

    function convertFromDays(event) {
        //let value = Number(event.target.parentElement.children[1].value);
        let value = Number(document.getElementById('days').value);
        document.getElementById('hours').value = value * 24;
        document.getElementById('minutes').value = value * 24 * 60;
        document.getElementById('seconds').value = value * 24 * 60 * 60;
    }
    function convertFromHours(event) {
        //let value = Number(event.target.parentElement.children[1].value);
        let value = Number(document.getElementById('hours').value);
        document.getElementById('days').value = value / 24;
        document.getElementById('minutes').value = value * 60;
        document.getElementById('seconds').value = value * 60 * 60
    }
    function convertFromMinutes(event) {
        //let value = Number(event.target.parentElement.children[1].value);
        let value = Number(document.getElementById('minutes').value);
        document.getElementById('days').value = value / 24 / 60;
        document.getElementById('hours').value = value / 60;
        document.getElementById('seconds').value = value * 60;
    }
    function convertFromSeconds(event) {
        //let value = Number(event.target.parentElement.children[1].value);
        let value = Number(document.getElementById('seconds').value);
        document.getElementById('days').value = value / 24 / 60 / 60;
        document.getElementById('hours').value = value / 60 / 60;
        document.getElementById('minutes').value = value / 60;
    }
}