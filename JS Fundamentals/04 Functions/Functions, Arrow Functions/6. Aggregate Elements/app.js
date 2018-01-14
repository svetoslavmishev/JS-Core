function aggregateElements(input) {

    let aggregate = function (input, initial, func) {

        for (let element of input) {
            initial = func(initial, element);
        }
        return initial;
    }

    console.log(aggregate(input, 0, (a, b) => a + b));
    console.log(aggregate(input, 0, (a, b) => a + 1 / b));
    console.log(aggregate(input, '', (a, b) => a + b));
}
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);