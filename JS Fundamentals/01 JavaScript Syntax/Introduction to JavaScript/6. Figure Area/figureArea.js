function figureArea(w, h, W, H) {

    let firstFigure = w * h;
    let secondFigure = W * H;
    let thirdFigure = Math.min(w, W) * Math.min(h, H);

    console.log(firstFigure + secondFigure - thirdFigure);
}
figureArea(2, 4, 5, 3);
figureArea(13, 2, 5, 8);