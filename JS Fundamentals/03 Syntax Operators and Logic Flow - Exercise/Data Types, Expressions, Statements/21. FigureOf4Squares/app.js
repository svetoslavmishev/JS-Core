function figureOfSquares(n) {

    if (n == 2) {
        plusRow();
    } else if (n % 2 == 0) {
        plusRow();
        spaceRow();
        plusRow();
        spaceRow();
        plusRow();
    } else {
        plusRow();
        spaceRow();
        plusRow();
        spaceRow();
        plusRow();
    }


    function plusRow() {
        console.log('+' + "-".repeat(n - 2) + '+' + "-".repeat(n - 2) + '+');
    }

    function spaceRow() {
        for (i = 0; i < Math.ceil(n / 2 - 2); i++) {
            console.log('|' + " ".repeat(n - 2) + '|' + " ".repeat(n - 2) + '|');
        }
    }
}
figureOfSquares(2);
figureOfSquares(4);
figureOfSquares(5);
figureOfSquares(6);
figureOfSquares(7);
