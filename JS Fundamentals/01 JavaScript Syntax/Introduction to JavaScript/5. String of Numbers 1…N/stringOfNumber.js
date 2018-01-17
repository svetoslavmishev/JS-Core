function stringOfNumber(arg) {
    let n = Number(arg);
    let result = '';

    for (let i = 1; i <= n; i++) {
        result += i;
    }
    console.log(result);
}
stringOfNumber('11');