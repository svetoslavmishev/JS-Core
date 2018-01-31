function lastNumbersSequence(n, k) {
    let arr = [1];
    let sum = 0;

    for (let i = 1; i < n; i++) {
        let start = i - k < 0 ? 0 : i - k;
        let end = i - 1;
        getSum(start, end);
        arr.push(sum);
        sum = 0;
    }

    function getSum(start, end) {
        for (let j = start; j <= end; j++) {
            sum += arr[j];
        }
    }

    console.log(arr.join(' '));

}

lastNumbersSequence(6, 3);
lastNumbersSequence(8, 2);