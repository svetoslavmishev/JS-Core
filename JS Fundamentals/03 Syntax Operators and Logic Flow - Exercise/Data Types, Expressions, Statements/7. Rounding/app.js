function rounding(input) {

    let value = Number(input[0]);
    let precision = Number(input[1]);
        
    if (precision > 15) {
        precision = 15;
    }
    
    console.log(parseFloat(value.toFixed(precision)));
    
}
rounding(["3.1415926535897932384626433832795", "2"]);
rounding(["10.5", "3"]);
rounding(["10.123456789123456789", "23"]);
rounding(["10.123456789123456789", "14"]);