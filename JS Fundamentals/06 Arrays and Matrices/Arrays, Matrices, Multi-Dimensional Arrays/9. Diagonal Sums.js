function sumDiagonal(matrix) {
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {
        mainDiagonal += matrix[i][i];
        secondaryDiagonal += matrix[i][matrix.length - 1 - i];
    }

    console.log(mainDiagonal + ' ' + secondaryDiagonal);
}

sumDiagonal([[20, 40], [10, 60]]);
sumDiagonal([[3, 5, 17,], [-1, 7, 14], [1, -8, 89]]);