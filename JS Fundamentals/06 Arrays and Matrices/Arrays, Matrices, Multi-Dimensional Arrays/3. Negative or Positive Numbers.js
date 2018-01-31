function negativePositiveNumber(args) {

    let arr = [];

    for (let element of args) {
        element < 0 ? arr.unshift(element) : arr.push(element);
    }
    //OR OR SHORT SOLUTION
    //args.forEach(element => element < 0 ? arr.unshift(element) : arr.push(element));

    return arr.join('\n');
}

negativePositiveNumber([7, -2, 8, 9]);
negativePositiveNumber([3, -2, 0, -1]);
