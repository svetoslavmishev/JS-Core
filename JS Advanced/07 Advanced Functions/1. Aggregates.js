"use strict";

function aggregate(arr) {

    function reducer(arr, func) {
        let result = arr[0];
        for (let nextElement of arr.slice(1))
            result = func(result, nextElement);
        return result;
    }

    console.log(`Sum = ` + reducer(arr, (a, b) => Number(a) + Number(b)));
    console.log(`Min = ` + reducer(arr, (a, b) => Math.min(a, b)));
    console.log(`Max = ` + reducer(arr, (a, b) => Math.max(a, b)));
    console.log(`Product  = ` + reducer(arr, (a, b) => a * b));
    console.log(`Join  = ` + reducer(arr, (a, b) => '' + a + b));
}

//aggregate([2, 3, 10, 5]);
aggregate([5, -3, 20, 7, 0.5]);