function squareOfStars(num = 5) { //the rectangle should always be of size 5

    function stars(n = num) {
        console.log("* ".repeat(n));
    }

    for (let i = 1; i <= num; i++) {
        stars(num);
    }

}
squareOfStars(1);
squareOfStars(2);
squareOfStars(5);
squareOfStars();
