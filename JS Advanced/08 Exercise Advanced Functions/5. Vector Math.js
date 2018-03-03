let vectorMath = (function () {
    let vectors = {
        add: function (vector1, vector2) {
            return [vector1[0] + vector2[0], vector1[1] + vector2[1]];
        },
        multiply: function (vector1, scalar) {
            return [vector1[0] * scalar, vector1[1] * scalar];
        },
        length: function (vector1) {
            return Math.sqrt(vector1[0] * vector1[0] + vector1[1] * vector1[1]);
        },
        dot: function (vector1, vector2) {
            return vector1[0] * vector2[0] + vector1[1] * vector2[1];
        },
        cross: function (vector1, vector2) {
            return vector1[0] * vector2[1] - vector1[1] * vector2[0];
        }
    };

    return vectors;
}());

console.log(vectorMath.add([1, 1], [1, 0]));
console.log(vectorMath.multiply([3.5, -2], 2));
console.log(vectorMath.length([3, -4]));
console.log(vectorMath.dot([1, 0], [0, -1]));
console.log(vectorMath.cross([3, 7], [1, 0]));
console.log(vectorMath.dot([2, 3], [2, -1]));