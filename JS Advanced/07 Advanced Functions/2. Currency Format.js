//Define an initial function
function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) {
        return symbol + ' ' + result;
    } else {
        return result + ' ' + symbol;
    }
}

//The initial function is parameter
function getDollar(formatter) {
    //Reduce number of parameters
    return function (value) {
        return formatter(',', '$', true, value);
    };
}

let dollars = getDollar(currencyFormatter);
console.log(dollars(5000));