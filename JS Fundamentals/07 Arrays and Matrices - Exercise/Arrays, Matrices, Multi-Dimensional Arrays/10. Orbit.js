"use strict";

function orbit(arr) {
    let [rows, cols, targetRow, targetCol] = arr;
    let matrix = fillZeros(rows, cols);

    let num = 1;
    matrix[targetRow][targetCol] = num;
    let count = 1;

    while (!isFilled(matrix)) {
        num++;

        for (let row = Math.max(0, targetRow - count); row <= Math.min(matrix.length - 1, targetRow + count); row++) {
            for (let col = Math.max(0, targetCol - count); col <= Math.min(matrix[0].length - 1, targetCol + count); col++) {
                if (matrix[row][col] === 0) {
                    matrix[row][col] = num
                }
            }
        }
        count++
    }

    console.log(matrix.map(el => el.join(" ")).join('\n'));

    function isFilled(matrix) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (matrix[row][col] === 0) {
                    return false
                }
            }
        }

        return true
    }

    function fillZeros(rows, cols) {
        let matrix = [];
        for (let i = 0; i < rows; i++) {
            matrix.push('0'.repeat(cols).split('').map(Number))
        }
        return matrix
    }
}

orbit([4, 4, 0, 0]);