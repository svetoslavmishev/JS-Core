function getSortedList() {
    let list = (function () {
        let sortedList = [];

        function add(elemenent) {
            sortedList.push(elemenent);
            sortedList.sort((a, b) => a - b);
            this.size++;
            return sortedList;
        }

        function remove(index) {
            if (index >= 0 && index < sortedList.length) {
                this.size--;
                return sortedList.splice(index, 1);
            }
        }

        function get(index) {
            if (index >= 0 && index < sortedList.length) {
                return sortedList[index];
            }
        }

        let size = 0;
        return {add, remove, get, size};
    })();

    return list;
}

let myList = getSortedList();
myList.add(5);
myList.add(15);
myList.add(-5);
console.log(myList.add(-155));
console.log(myList.size);

console.log(myList.remove(2));
console.log(myList.toString());
console.log(myList.size);

// list.get(5);
console.log(myList.get(0));