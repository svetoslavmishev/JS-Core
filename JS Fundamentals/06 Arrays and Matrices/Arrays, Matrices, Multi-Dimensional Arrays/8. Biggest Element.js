function biggestElement(matrix) {

    let biggestNum = Number.NEGATIVE_INFINITY;

    matrix.forEach(e => e.forEach(a => biggestNum = Math.max(biggestNum, a)));

    console.log(biggestNum);
}

biggestElement([[20, 50, 10], [8, 33, 145]]);
biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);