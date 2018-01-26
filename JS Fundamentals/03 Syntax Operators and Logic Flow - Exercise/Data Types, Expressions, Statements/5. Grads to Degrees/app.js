function gradsToDegree(grads) {

    grads %= 400;
    if (grads < 0) {
        grads += 400;
    }

    console.log((grads / 400) * 360);
}
gradsToDegree(100);
gradsToDegree(400);
gradsToDegree(850);
gradsToDegree(-50);