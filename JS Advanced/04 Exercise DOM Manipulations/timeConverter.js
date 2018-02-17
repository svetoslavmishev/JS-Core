function attachEventsListeners() {
    let days = document.getElementById('days');
    let daysBtn = document.getElementById('daysBtn');
    let hours = document.getElementById('hours');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutes = document.getElementById('minutes');
    let minutesBtn = document.getElementById('minutesBtn');
    let seconds = document.getElementById('seconds');
    let secondsBtn = document.getElementById('secondsBtn');

    //One day is equal to 24 hours/1440 minutes/86400 seconds
    daysBtn.addEventListener('click', function () {
        hours.value = Number(days.value) * 24;
        minutes.value = Number(days.value) * 1440;
        seconds.value = Number(days.value) * 86400;
    });

    hoursBtn.addEventListener('click', function () {
        days.value = Number(hours.value) / 24;
        minutes.value = 60 * Number(hours.value);
        seconds.value = 3600 * Number(hours.value);
    });

    minutesBtn.addEventListener('click', function () {
        days.value = Number(minutes.value) / 1440;
        hours.value = Number(minutes.value) / 60;
        seconds.value = Number(minutes.value) * 60;
    });

    secondsBtn.addEventListener('click', function () {
        days.value = Number(seconds.value) / 86400;
        hours.value = Number(seconds.value) / 3600;
        minutes.value = Number(seconds.value) / 60 ;
    });
}