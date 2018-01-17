function sumAndVat(arr) {

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    console.log("sum = " + sum);
    console.log("VAT = " + sum * 0.20);
    console.log("total = " + sum * 1.20);
    
}
sumAndVat([1.20, 2.60, 3.50]);
sumAndVat([3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445]);

