function timer() {
    $('#start-timer').on('click', startTimer);
    $('#stop-timer').on('click', stopTimer);
    let timer;
    let time = 0;
    
    function startTimer() {
        let seconds = $('#seconds');
        let minutes = $('#minutes');
        let hours = $('#hours');
        timer = setInterval(() => {
            time += 1;
            $(seconds).text(('0' + Math.trunc(time % 60)).slice(-2));
            $(minutes).text(('0' + Math.trunc(time / 60)).slice(-2));
            $(hours).text(('0' + Math.trunc(time / 3600)).slice(-2));
        }, 200);
    }

    function stopTimer() {
        clearInterval(timer);
    }
}