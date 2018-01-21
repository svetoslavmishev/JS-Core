function binary(args) {

    for (var i = 0; i < args.length; i++) {
        let currentNumber = args[i];
        if (currentNumber != 0) {
            console.log(Math.log2(currentNumber));
        }
    }
}
binary(['1024', '1048576', '256', '1', '2', '50', '100', 0]);