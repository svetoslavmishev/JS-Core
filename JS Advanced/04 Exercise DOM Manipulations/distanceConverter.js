function attachEventsListeners() {
    let units = {
        'km': 1000,
        'm': 1,
        'cm': 0.01,
        'mm': 0.001,
        'mi': 1609.34,
        'yrd': 0.9144,
        'ft': 0.3048,
        'in': 0.0254
    };

    document.getElementById('convert').addEventListener('click', function () {
        let distance = Number(document.getElementById('inputDistance').value);
        let fromUnit = document.getElementById('inputUnits').value;
        let toUnit = document.getElementById('outputUnits').value;
        let result = distance * units[fromUnit] / units[toUnit];
        document.getElementById('outputDistance').value = result;
    });
}