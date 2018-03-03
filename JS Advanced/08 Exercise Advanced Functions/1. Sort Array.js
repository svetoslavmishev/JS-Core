function sortArray(inputArr, method) {

    let ascending = (a, b) => {
        return a - b;
    };
    let descending = (a, b) => {
        return b - a;
    };

    let sortCriterias = {
        'asc': ascending,
        'desc': descending
    };

    return inputArr.sort(sortCriterias[method]);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));