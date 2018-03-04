let manager = (function () {
    let robot = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };
    let products = {
        apple: {protein: 0, carbohydrate: 1, fat: 0, flavour: 2},
        coke: {protein: 0, carbohydrate: 10, fat: 0, flavour: 20},
        burger: {protein: 0, carbohydrate: 5, fat: 7, flavour: 3},
        omelet: {protein: 5, carbohydrate: 0, fat: 1, flavour: 1},
        cheverme: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    };

    let commands = {
        restock: restockStorage,
        prepare: prepareMeal,
        report: report
    };

    return function (instruction) {
        instruction = instruction.split(' ');
        let args = instruction.slice(1);
        return commands[instruction[0]](args[0],args[1]);
    };

    function restockStorage(microelement, quantity) {
        robot[microelement] += Number(quantity);
        return "Success";
    }

    function prepareMeal(recipe, quantity) {
        let meal = products[recipe];
        let isSuccess = true;
        for (let microElement in meal) {
            let microElementOnStock = robot[microElement];
            let neededMicroElement = Number(quantity) * meal[microElement];
            if (microElementOnStock < neededMicroElement) {
                isSuccess = false;
                return `Error: not enough ${microElement} in stock`;
            }
        }

        if (isSuccess) {
            for (let microElement in meal) {
                robot[microElement] -= Number(quantity) * meal[microElement];
            }
            return "Success";
        }
    }

    function report() {
        return `protein=${robot.protein} carbohydrate=${robot.carbohydrate} fat=${robot.fat} flavour=${robot.flavour}`;
    }
})();

console.log(manager('prepare cheverme 1'));


