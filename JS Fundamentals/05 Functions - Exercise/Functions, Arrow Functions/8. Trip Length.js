function tripLength([x1, y1, x2, y2, x3, y3]) {

    function getDistance(x1, y1, x2, y2) {
        let a = Math.abs(x2 - x1);
        let b = Math.abs(y2 - y1);
        return Math.sqrt(a * a + b * b);
    }

    let distance12 = getDistance(x1, y1, x2, y2);
    let distance13 = getDistance(x1, y1, x3, y3);
    let distance23 = getDistance(x2, y2, x3, y3);

    if (distance12 <= distance13 && distance13 >= distance23) {
        console.log(`1->2->3: ${distance12 + distance23}`);
    } else if (distance12 <= distance23 && distance23 >= distance13) {
        console.log(`2->1->3: ${distance13 + distance12}`);
    } else {
        console.log(`1->3->2: ${distance13 + distance23}`);
    }
}

tripLength([0, 0, 2, 0, 4, 0]);
tripLength([5, 1, 1, 1, 5, 4]);
tripLength([-1, -2, 3.5, 0, 0, 2]);