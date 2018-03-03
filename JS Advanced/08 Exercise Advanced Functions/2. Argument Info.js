function argumentsInfo() {
    let summary = {};
    for (let i = 0; i < arguments.length; i++) {
        let argumentType = typeof(arguments[i]);
        let argumentValue = arguments[i];
        console.log(`${argumentType}: ${argumentValue}`);

        if (!summary.hasOwnProperty(argumentType)) {
            summary[argumentType] = 1;
        } else {
            summary[argumentType]++;
        }
    }
    let result = Object.keys(summary).sort((a, b) => summary[b] - summary[a])
        .forEach(key => console.log(key + " = " + summary[key]));
}

argumentsInfo('cat', 42, function () {
    console.log('Hello world!');
});

