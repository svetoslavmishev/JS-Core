function nextDay(year, month, day) {

    let date = new Date(year, month - 1, day);
    let oneDayInMillisecond = 86400000;
    let oneDayAfter = new Date(date.getTime() + oneDayInMillisecond);

    console.log(oneDayAfter.getFullYear() + "-" + (oneDayAfter.getMonth() + 1) + "-" +oneDayAfter.getDate());

}
nextDay(2016, 9, 30);
nextDay(2016, 12, 31);