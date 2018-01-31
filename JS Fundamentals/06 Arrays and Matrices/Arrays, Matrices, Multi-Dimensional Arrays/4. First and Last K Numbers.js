function firstLastK(input) {
    let k = input.shift();
    let firstLine = '';
    let secondLine = '';

    // for (let i = 0; i < k; i++) {
    //     firstLine += input[i] + ' ';
    //     secondLine += input[input.length - k + i] + ' ';
    // }
    // console.log(firstLine);
    // console.log(secondLine);

    let firstLine = input.slice(0, k);
    let secondLine = input.slice(input.length - k, input.length);
    console.log(firstLine.join(' ') + '\n' + secondLine.join(' '));
}

firstLastK([2, 7, 8, 9]);
firstLastK([3, 6, 7, 8, 9]);
