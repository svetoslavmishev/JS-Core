function inheritanceObj(input) {
    let exec = (function () {
        let objects = {};
        function create(arr) {
            if (arr.length > 2) {
                objects[arr[0]] = Object.create(objects[arr[2]]);
            } else {
                objects[arr[0]] = {};
            }
        }
        function set(arr) {
            objects[arr[0]][arr[1]] = arr[2];
        }
        function print(arr) {
            let result =[];
            for (let key in objects[arr[0]]) {
                result.push(key+':'+objects[arr[0]][key]);
            }
            console.log(result.join(', '));
        }
        return {create, set, print};
    })();

    for (let elem of input) {
        let args = elem.split(' ');
        let command = args.shift();
        exec[command](args);
    }
}

inheritanceObj([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);