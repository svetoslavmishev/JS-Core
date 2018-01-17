function distanceBetweenPoints(x1, y1, x2, y2) {

    let point1 = { x: x1, y: y1 };
    let point2 = { x: x2, y: y2 };
    let diffX = Math.pow((point2.x - point1.x), 2);
    let diffY = Math.pow((point2.y - point1.y), 2);

    console.log(Math.sqrt(diffX + diffY));
}
distanceBetweenPoints(2, 4, 5, 0);
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);