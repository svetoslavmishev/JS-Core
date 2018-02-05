function addRemoveElements(arguments) {
    let arrayResult = [];
    let initial = 0;

    for (let i = 0; i < arguments.length; i++) {
        let word = arguments[i];
        initial++;
        addOrRemoveElements(word, initial);
    }

    function addOrRemoveElements(word, initial) {
        switch (word) {
            case 'add':
                return arrayResult.push(initial);
            case 'remove':
                return arrayResult.pop();
        }
    }

    if (arrayResult.length > 0) {
        console.log(arrayResult.join('\n'));
    } else if (arrayResult.length == 0) {
        console.log('Empty');
    }
}

addRemoveElements(['add', 'add', 'add', 'add']);
addRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addRemoveElements(['remove', 'remove', 'remove']);