function timer() {
    let hours = $('#hours');
    let minutes = $('#minutes');
    let seconds = $('#seconds');
    let time = 0;

    let startButton = $('#start-timer').on('click', function () {
        clearInterval(timer);
        hours.text('00');
        minutes.text('00');
        seconds.text('00');
        time = 0;
        timer = setInterval(step, 1000);
    });

    let pauseButton = $('#stop-timer').on('click', function () {
        clearInterval(timer);
    });

    function step() {
        time++;
        hours.text(("0" + Math.trunc(time / 3600)).slice(-2));
        minutes.text(("0" + Math.trunc(time / 60) % 60).slice(-2));
        seconds.text(("0" + Math.trunc(time % 60)).slice(-2));
    }
}