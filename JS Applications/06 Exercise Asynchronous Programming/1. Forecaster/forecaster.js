function attachEvents() {
    const url = 'https://judgetests.firebaseio.com/';
    $('#submit').on('click', getForecast);

    function getForecast() {
        $.ajax({
            url: url + 'locations.json'
        }).then(getLocations)
            .catch(handleError)
    }

    function getLocations(res) {
        let code = res.filter(l => l.name === $('#location').val()).map(l => l.code)[0];
        let todayForecast = $.get({
            url: url + `forecast/today/${code}.json`
        });
        let upcomingForecast = $.get({
            url: url + `forecast/upcoming/${code}.json`
        });

        Promise.all([todayForecast, upcomingForecast])
            .then(allLocations)
            .catch(handleError);

        if (code === undefined) {
            handleError();
        }

        $('#location').val('');


    }

    function allLocations([todayForecast, upcomingForecast]) {
        let symbols = {
            'Sunny': '&#x2600',         // ☀
            'Partly sunny': '&#x26C5',  // ⛅
            'Overcast': '&#x2601',      // ☁
            'Rain': '&#x2614',          // ☂
            'Degrees': '&#176'          // °
        };
        $('#forecast').css('display', 'block');
        showTodayForecast(todayForecast, symbols);
        showUpcomingForecast(upcomingForecast, symbols);
    }

    function showTodayForecast(todayForecast, symbols) {
        let currentDiv = $('#current');
        currentDiv.empty();
        currentDiv.append($('<div class="label">Current conditions</div>'));
        currentDiv
            .append(`<span class="condition symbol">${symbols[todayForecast['forecast'].condition]}</span>`)
            .append($(`<span class="condition"></span>`)
                .append(`<span class="forecast-data">${todayForecast['name']}</span>`)
                .append(`<span class="forecast-data">${todayForecast['forecast']['low']}&#176;/${todayForecast['forecast']['high']}&#176;</span>`)
                .append(`<span class="forecast-data">${todayForecast['forecast']['condition']}</span>`));
    }

    function showUpcomingForecast(upcomingForecast, symbols) {
        let upcomingDiv = $('#upcoming');
        upcomingDiv.empty();
        upcomingDiv.append($('<div class="label">Three-day forecast</div>'));
        let upcomingData = upcomingForecast['forecast'];
        for (let data of upcomingData) {
            upcomingDiv
                .append($(`<span class="upcoming"></span>`)
                    .append(`<span class="symbol">${symbols[data['condition']]}</span>`)
                    .append(`<span class="forecast-data">${data['low']}&#176;/${data['high']}&#176;</span>`)
                    .append(`<span class="forecast-data">${data['condition']}</span>`));
        }
    }

    function handleError(error) {
        $('#forecast').text("Error");
    }
}
