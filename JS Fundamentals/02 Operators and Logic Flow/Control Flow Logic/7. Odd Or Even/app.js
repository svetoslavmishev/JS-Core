function evenOrOdd(n) {

    if (n % 2 == 0) {
        console.log("even");
    } else if (n % 2 == Math.round(n % 2 )) {
        console.log("odd");
    } else {
        console.log("invalid");
    }

}
evenOrOdd(5);
evenOrOdd(8);
evenOrOdd(1.5);