function getLastMonthDay([day, month, year]) {

    let lastDay = new Date(year, month - 1, 0); //months are zero-based(0-11), days are (1-31)

    console.log(lastDay.getDate());
}
getLastMonthDay([17, 3, 2002]);
getLastMonthDay([13, 12, 2004]);
getLastMonthDay([01, 01, 2004]);