function quadratEquation(a, b, c) {

    let x1 = 0;
    let x2 = 0;
    let discriminant = Math.pow(b, 2) - 4 * a * c;

    if (discriminant > 0) {
        x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log(x1 < x2 ? x1 + '\n' + x2 : x2 + '\n' + x1);
    } else if (discriminant == 0) {
        x1 = -b / (2 * a);
        console.log(x1);
    } else {
        console.log('No');
    }
}
quadratEquation(6, 11, -35);
quadratEquation(1, -12, 36);
quadratEquation(5, 2, 1);