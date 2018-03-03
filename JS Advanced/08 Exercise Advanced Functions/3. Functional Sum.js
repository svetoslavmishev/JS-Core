(function solve() {
    let sum = 0;

    function increment(num) {
        sum += num;
        return increment;
    }

    increment.toString = () => sum;
    return increment;
}());
