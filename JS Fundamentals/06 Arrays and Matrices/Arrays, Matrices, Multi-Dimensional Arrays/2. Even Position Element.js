function evenPositionElement(args) {

    let result = '';

    for (let i = 0; i < args.length; i += 2) {
        result += args[i] + ' ';
    }

    console.log(result);

    // short lambda solution
    //return args.filter((element, i) => i % 2 == 0).join(' ');
}

evenPositionElement(['20', '30', '40']);
evenPositionElement(['5', '10']);