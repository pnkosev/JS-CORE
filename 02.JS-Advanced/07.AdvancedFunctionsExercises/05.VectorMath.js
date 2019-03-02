let solution = (function () {

    return {
        add: (vec1, vec2) => [vec1[0] + vec2[0], vec1[1] + vec2[1]],
        multiply: (vec1, scalar) => [vec1[0] * scalar, vec1[1] * scalar],
        length: (vec) => Math.sqrt(Math.pow(vec[0], 2) + Math.pow(vec[1], 2)),
        dot: (vec1, vec2) => vec1[0] * vec2[0] + vec1[1] * vec2[1],
        cross: (vec1, vec2) => vec1[0] * vec2[1] - vec1[1] * vec2[0]
    };

})();
console.log(solution.add([1, 1], [1, 0]));