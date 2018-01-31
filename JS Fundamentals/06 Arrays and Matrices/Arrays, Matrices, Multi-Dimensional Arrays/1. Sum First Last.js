function sumFirstLast(input) {
    input = input.map(Number);

    return input[0] + input[input.length - 1];
}

console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));