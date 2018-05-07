function formatDate(dateISO8601) {
    let date = new Date(dateISO8601);
    if (Number.isNaN(date.getDate()))
        return '';
    return date.getFullYear() + "-" + padZeros(date.getMonth() + 1) + "-" + padZeros(date.getDate()) +
        " " + date.getHours() + ":" + padZeros(date.getMinutes()) + ":" + padZeros(date.getSeconds());

    function padZeros(num) {
        return ('0' + num).slice(-2);
    }
}