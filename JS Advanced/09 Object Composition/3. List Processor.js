function processor(commands) {
    let solve = (function () {
        let list = [];

        function add(input) {
            list.push(input)
        }

        function remove(input) {
            list = list.filter(el => el !== input)
        }

        function print() {
            console.log(list.join(','));
        }

        return {add, remove, print}
    })();

    for (let command of commands) {
        let [action, string] = command.split(' ');
        solve[action](string);
    }
}

processor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
