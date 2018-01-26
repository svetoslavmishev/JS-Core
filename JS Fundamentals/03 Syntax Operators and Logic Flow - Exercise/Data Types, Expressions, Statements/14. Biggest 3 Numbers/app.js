function biggestNumber(arrayNumber) {
    //let num1 = arrayNumber[0];
    //let num2 = arrayNumber[1];
    //let num3 = arrayNumber[2];

    let [num1, num2, num3] = arrayNumber;

    console.log(Math.max(num1, num2, num3));
}
biggestNumber([5, -2, 7]);
biggestNumber([130, 5, 99]);
biggestNumber([5, -2, 7]);
biggestNumber([-10, -20, -30]);