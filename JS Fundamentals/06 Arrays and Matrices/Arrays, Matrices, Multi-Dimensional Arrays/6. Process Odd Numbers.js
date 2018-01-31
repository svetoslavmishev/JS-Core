function oddNumbers(args) {

    let oddSequence = args
        .filter((element, i) => i % 2 != 0)
        .map(x => x * 2)
        .reverse().join(' ');

    console.log(oddSequence);
}

oddNumbers([10, 15, 20, 25]);
oddNumbers([3, 0, 10, 4, 7, 3]);