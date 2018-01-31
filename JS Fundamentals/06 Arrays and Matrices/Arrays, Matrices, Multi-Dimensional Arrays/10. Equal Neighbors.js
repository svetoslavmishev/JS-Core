function equalNeighbors(matrix) {
    let equalPairs = 0;

    function checkPairs(row, col) {
        //CHECK BY HORIZONTALS
        if (matrix[row][col] == matrix[row][col + 1]) {
            equalPairs++;
        }
        //CHECK BY VERTICALS
        if (matrix[row][col] == matrix[row + 1][col]) {
            equalPairs++;
        }
        //IF THE LAST ROW IS INSIDE THE MATRIX CHECK BY VERTICALS
        if (row == matrix.length - 2) {
            if (matrix[row + 1][col] == matrix[row + 1][col + 1]) {
                equalPairs++;
            }
        }
    }

    for (let row = 0; row < matrix.length - 1; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            checkPairs(row, col);
        }
    }
    console.log(equalPairs);
}

equalNeighbors([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
);
equalNeighbors([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
);