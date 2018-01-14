function calculaor(a, b, operations) {

    let add = function (a, b) { return a + b };
    let subtract = function (a, b) { return a - b };
    let multiply = function (a, b) { return a * b };
    let divide = function (a, b) { return a / b };
    let claculate = function (a, b, op) { return op(a, b) };

    switch (operations) {
        case '+': return claculate(a, b, add);
        case '-': return claculate(a, b, subtract);
        case '*': return claculate(a, b, multiply);
        case '/': return claculate(a, b, divide);
        default:
            break;
    }
}
console.log(calculaor(2, 4, '+'));
console.log(calculaor(3, 3, '/'));
console.log(calculaor(18, -1, '*'));
console.log(calculaor(18, -1, '-'));