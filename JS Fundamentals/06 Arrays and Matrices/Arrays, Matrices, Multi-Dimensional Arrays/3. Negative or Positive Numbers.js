function negativePositiveNumber(args) {

    let arr = [];

    args.forEach(element => element < 0 ? arr.unshift(element) : arr.push(element));

    return arr.join('\n');
}

console.log(negativePositiveNumber([7, -2, 8, 9]));
negativePositiveNumber([3, -2, 0, -1]);
