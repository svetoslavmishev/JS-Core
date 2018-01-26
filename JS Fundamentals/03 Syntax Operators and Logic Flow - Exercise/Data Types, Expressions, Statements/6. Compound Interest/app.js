function compoundInterest(params) {

    let principalSum = Number(params[0]);
    let interestRateInPercent = Number(params[1]) / 100;
    let frequency = Number(params[2]);
    let period = Number(params[3]);

    let interest = principalSum * Math.pow(1 + (interestRateInPercent / (12 / frequency)),
        (12 / frequency) * period);

    console.log(interest.toFixed(2));

}
compoundInterest([1500, 4.3, 3, 6]);
compoundInterest([100000, 5, 12, 25]);
