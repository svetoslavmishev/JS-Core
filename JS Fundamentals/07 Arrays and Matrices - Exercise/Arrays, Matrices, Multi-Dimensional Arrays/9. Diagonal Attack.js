function diagonalAttack(inputMatrix) {
    let matrix = inputMatrix.map(
        row => row.split(' ').map(Number));
    let firstDiagonal = 0;
    let secondDiagonal = 0;

    function equalSumOfDiagonals(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            firstDiagonal += matrix[i][i];
            secondDiagonal += matrix[i][matrix.length - 1 - i];
        }
        return firstDiagonal == secondDiagonal ? true : false;
    }

    if (equalSumOfDiagonals(matrix)) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                if (row != col && row != matrix.length - 1 - col) {
                    matrix[row][col] = firstDiagonal;
                }
            }
        }
    } else {
        console.log(matrix.map(row => row.join(' ')).join('\n'));
        return;
    }

    console.log(matrix.map(row => row.join(' ')).join('\n'));
}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);
diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0']
);