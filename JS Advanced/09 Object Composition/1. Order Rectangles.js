function orderRectangle(input) {
    function createRectangles(width, height) {
        let rects = {
            width: width,
            height: height,
            area: function () {
                return this.width * this.height;
            },
            compareTo: function (other) {
                let difference = other.area() - this.area();
                return difference || other.width - this.width;
            }
        };
        return rects;
    }

    //create array of objects for sorting
    let rectangles = [];
    for (let [width, height] of input) {
        let rect = createRectangles(width,height);
        rectangles.push(rect);
    }

    rectangles.sort((a, b) => a.compareTo(b));
    return rectangles;
}

console.log(orderRectangle([[10, 5], [3, 20], [5, 12]]));