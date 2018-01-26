function distanceOoverTime([v1, v2, time]) {
    
    let timeInHours = Number(time) / 3600;
    let distance1 = v1 * timeInHours;
    let distance2 = v2 * timeInHours;

    let differenceInMeters = Math.abs(distance1 - distance2) * 1000;

    console.log(differenceInMeters);
}
distanceOoverTime([0, 60, 3600]);
distanceOoverTime([11, 10, 120]);
distanceOoverTime([5, -5, 40]);