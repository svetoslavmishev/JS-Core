"use strict";

function spiralMatrix(rows, cols) {
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = 0;
        }
    }

    let element = 1;
    let startRow = 0;
    let endRow = rows - 1;
    let startCol = 0;
    let endCol = cols - 1;
    let rotations = 0;

    while (element <= rows * cols) {
        for (let col = startCol; col <= endCol; col++) {
            matrix[startRow][col] = element++;
        }
        startRow++;

        for (let row = startRow; row <= endRow; row++) {
            matrix[row][endCol] = element++;
        }
        endCol--;

        for (let col = endCol; col >= startCol; col--) {
            matrix[endRow][col] = element++;
        }
        endRow--;

        for (let row = endRow; row >= startRow; row--) {
            matrix[row][startCol] = element++;
        }
        startCol++;
    }

    console.log(matrix.map(x => x.join(' ')).join('\n'));
}

spiralMatrix(5, 5);
spiralMatrix(3, 3);