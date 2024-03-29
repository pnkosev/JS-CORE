let solve = (function () {
    return {
        add: (v1, v2) => [v1[0] + v2[0], v1[1] + v2[1]],
        multiply: (v, s) => [v[0] * s, v[1] * s],
        length: (v) => Math.sqrt(v[0] * v[0] + v[1] * v[1]),
        dot: (v1, v2) => v1[0] * v2[0] + v1[1] * v2[1],
        cross: (v1, v2) => v1[0] * v2[1] - v1[1] * v2[0],
    }
}());

console.log(solve.add([1, 1], [1, 0]));
console.log(solve.multiply([3.5, -2], 2));
console.log(solve.length([3, -4]));
console.log(solve.dot([1, 0], [0, -1]));
console.log(solve.cross([3, 7], [1, 0]));
