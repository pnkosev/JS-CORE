function timer() {
    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');
    let time = 0;
    let seconds = $('#seconds');
    let minutes = $('#minutes');
    let hours = $('#hours');
    let isRunning = false;
    let timer;

    startBtn.on('click', startTimer);
    stopBtn.on('click', stopTimer);


    function startTimer() {
        if (!isRunning) {
            timer = setInterval(incrementTimer, 1000);
            isRunning = true;
        }
    }

    function stopTimer() {
        clearInterval(timer);
        isRunning = false;
    }

    function incrementTimer() {
        time++;
        hours.text(("0" + Math.trunc(time / 3600)).slice(-2));
        minutes.text(("0" + Math.trunc((time / 60) % 60)).slice(-2));
        seconds.text(("0" + Math.trunc(time % 60)).slice(-2));
    }
}

// function timer() {
//     let time=0, intervalId, isRunning = false;
//     $('#start-timer').on('click', function () {
//         if(! isRunning){
//             intervalId = setInterval(incrementTime, 1000);
//             isRunning = true;
//         }
//     });

//     $('#stop-timer').on('click', function () {
//         clearInterval(intervalId);
//         isRunning = false;
//     });

//     function incrementTime() {
//         time++;
//         $('#hours').text(("0" + Math.trunc(time/3600)).slice(-2));
//         $('#minutes').text(("0" + Math.trunc((time/60)%60)).slice(-2));
//         $('#seconds').text(("0" + Math.trunc(time%60)).slice(-2));
//     }
// }