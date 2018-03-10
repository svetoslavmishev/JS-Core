function carFactory(carOrder) {
    let engine = {
        90: {power: 90, volume: 1800},
        120: {power: 120, volume: 2400},
        200: {power: 200, volume: 3500}
    };

    let carriage = {
        hatchback: {type: 'hatchback', color: ''},
        coupe: {type: 'coupe', color: ''}
    };

    function pickEngine(carOrder) {
        let selectEngine = Object.keys(engine).filter(e => e >= carOrder.power)[0];
        return engine[selectEngine];
    }

    function pickCarriage(carOrder) {
        return {
            type: carOrder.carriage,
            color: carOrder.color
        }
    }

    function pickWheels(carOrder) {
        let result = [];
        let wheel = carOrder.wheelsize;
        for (let i = 0; i < 4; i++) {
            let obj = wheel[i];
            if (wheel % 2 === 0) {
                result.push(--wheel);
            } else {
                result.push(wheel);
            }
        }
        return result;
    }

    let needForSpeed = {
        model: carOrder.model,
        engine: pickEngine(carOrder),
        carriage: pickCarriage(carOrder),
        wheels: pickWheels(carOrder)
    };

    return needForSpeed;
}

console.log(carFactory({
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
));