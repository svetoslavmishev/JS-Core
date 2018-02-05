function printElement(input) {
    let n = Number(input.pop());

    let result = input
        .filter((elem, i) => i % n == 0)
        .join('\n');

    // for (let i = 0; i < input.length; i += n) {
    //     console.log(input[i]);
    // }

    console.log(result);
}

printElement(['5', '20', '31', '4', '20', '2']);
printElement(['dsa', 'asd', 'test', 'test', '2']);
printElement(['1', '2', '3', '4', '5', '6']);
