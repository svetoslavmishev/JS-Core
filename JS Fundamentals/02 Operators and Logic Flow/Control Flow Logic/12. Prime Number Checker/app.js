function primeChecker(num) {

    let isPrime = true;

    if (num < 2) {
        isPrime = false;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
    }

    console.log(isPrime ? "true" : "false");

}
primeChecker(7);
primeChecker(8);
primeChecker(81);