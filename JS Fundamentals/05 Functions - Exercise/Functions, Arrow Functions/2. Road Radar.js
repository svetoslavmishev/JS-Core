function roadRadar([speed, area]) {

    //first function determine limit by giving zones
    function getLimit(area) {
        switch (area) {
            case 'motorway':
                return 130;
            case 'interstate':
                return 90;
            case 'city':
                return 50;
            case 'residential':
                return 20;
        }
    }

    let limit = getLimit(area);

    //second function determine speed exceedance by determinte value from first function
    function getInfraction(speed, limit) {
        let overSpeed = speed - limit;

        if (overSpeed > 0 && overSpeed <= 20) {
            return 'speeding';
        } else if (overSpeed > 20 && overSpeed <= 40) {
            return 'excessive speeding';
        } else if (overSpeed > 40) {
            return 'reckless driving';
        } else {
            return '';
        }
    }

    console.log(getInfraction(speed, limit));

}

roadRadar([40, 'city']);
roadRadar([21, 'residential']);
roadRadar([120, 'interstate']);
roadRadar([200, 'motorway']);
