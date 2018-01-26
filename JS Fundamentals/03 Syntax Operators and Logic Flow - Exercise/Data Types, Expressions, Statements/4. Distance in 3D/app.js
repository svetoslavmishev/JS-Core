function distanceIn3D(coord) {

    let [x1, y1, z1, x2, y2, z2] = coord.map(Number);

    let deltaX = Math.pow(Math.abs(x1 - x2), 2);
    let deltaY = Math.pow(Math.abs(y1 - y2), 2);
    let deltaZ = Math.pow(Math.abs(z1 - z2), 2);

    let distance = Math.sqrt(deltaX + deltaY + deltaZ);
    console.log(distance);
}
distanceIn3D([1, 1, 0, 5, 4, 0]);
distanceIn3D([3.5, 0, 1, 0, 2, -1]);