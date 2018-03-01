function solve(commands) {
    let processor = (function () {
        let result = '';

        return function commandProcessor(strArray) {
            let tokens = strArray.split(' ');
            let command = tokens[0];
            let argument = tokens[1];
            switch (command) {
                case 'append':
                    result += argument;
                    break;
                case 'removeStart':
                    result = result.slice(Number(argument));
                    break;
                case 'removeEnd':
                    result = result.slice(0, Number(argument.length - 1 - argument));
                    break;
                case 'print':
                    console.log(result);
                    break;
            }
        }
    })();

    for (let command of commands) {
        processor(command);
    }
}

solve([
    'append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']
);