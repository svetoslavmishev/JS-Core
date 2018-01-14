function coockingNumbers(arguments) {
    let startPoint = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        let operation = arguments[i];

        startPoint = coocking(startPoint, operation);

        console.log(startPoint);
    }

    function coocking(startPoint, operation) {
        switch (operation) {
            case 'chop' : return startPoint / 2;
            case 'dice': return Math.sqrt(startPoint);
            case 'spice': return startPoint + 1;
            case 'bake': return startPoint * 3;
            case 'fillet': return startPoint * 0.8;
        }
    }
}

coockingNumbers([32, 'chop', 'chop', 'chop', 'chop', 'chop']);
coockingNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);