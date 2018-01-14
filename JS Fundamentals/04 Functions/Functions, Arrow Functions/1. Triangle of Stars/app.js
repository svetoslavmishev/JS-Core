function triangleOfStars(n) {

    function star(count) {
        console.log("*".repeat(count));
    }

    for (let i = 1; i <= n; i++) {
        star(i);
    }

    for (let i = n - 1; i > 0; i--) {
        star(i);
    }

}
triangleOfStars(1);
triangleOfStars(2);
triangleOfStars(5);