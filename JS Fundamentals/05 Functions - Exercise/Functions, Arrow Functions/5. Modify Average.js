function modifyAverage(num) {
    let str = String(num);

    //calculate Sum of digits
    function average(str) {
        let sum = 0;
        for (let digits of str) {
            sum += Number(digits);
        }
        return sum / str.length;
    }

    let averageValue = average(str);

    while (averageValue <= 5) {
        str += 9;
        averageValue = average(str);
    }
    console.log(str);
}

modifyAverage(101);
modifyAverage(5835);