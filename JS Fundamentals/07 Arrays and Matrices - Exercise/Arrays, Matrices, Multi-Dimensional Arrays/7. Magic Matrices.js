function magicMatrices(matrix) {
    let sumRow = 0;
    let sumCol = 0;
    let startSum = 0;
    let isMagic = true;

    matrix[0].map(a => startSum += a);

    for (let row = 1; row < matrix.length; row++) {
        matrix[row].map(r => sumRow += r);
        if (sumRow !== startSum) {
            return false;
        }
        sumRow = 0;
    }

    for (let col = 0; col < matrix[0].length; col++) {
        for (let row = 0; row < matrix.length; row++) {
            sumCol += matrix[col][row];
        }
        if (sumCol !== startSum) {
            return false;
        }
        sumCol = 0;
    }
    return isMagic;
}

console.log(magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));
console.log(magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
));
console.log(magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
));