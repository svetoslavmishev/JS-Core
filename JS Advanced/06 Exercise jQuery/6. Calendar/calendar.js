function calendar([day, month, year]) {
    let currentDate = new Date(year, month - 1, day);
    let monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    let header = monthNames[currentDate.getMonth()] + " " + currentDate.getFullYear();

    $('#content').append($('<table>').append($('<caption>').text(header)).append($('<tbody>')));

    $('tbody').append($('<tr>').append($('<th>').text("Mon")).append($('<th>').text("Tue")).append($('<th>').text("Wed")).append($('<th>').text("Thu")).append($('<th>').text("Fri")).append($('<th>').text("Sat")).append($('<th>').text("Sun")));

    let previousMonthLastDay = new Date(year, month - 1, 0);
    let currentMonthLastDay = new Date(year, month, 0);
    let daysCount = 1 - previousMonthLastDay.getDay();
    let maxDays = previousMonthLastDay.getDay() + currentMonthLastDay.getDate() + currentMonthLastDay.getDay() - 1;

    console.log(previousMonthLastDay.getDay());
    console.log(currentMonthLastDay.getDate());
    console.log(currentMonthLastDay.getDay());

    console.log(maxDays);

    for (let i = 0; i < maxDays / 7; i++) {
        $('tbody').append($('<tr>'));
        for (let j = 0; j < 7; j++) {
            let day;
            if (daysCount < 1 || daysCount > currentMonthLastDay.getDate()) {
                day = "";
            } else {
                day = daysCount;
            }

            if (day == currentDate.getDate()) {
                $('tbody tr:last-child').append($('<td>').addClass('today').text(day));
            } else {
                $('tbody tr:last-child').append($('<td>').text(day));
            }

            daysCount++;
        }
    }
}

