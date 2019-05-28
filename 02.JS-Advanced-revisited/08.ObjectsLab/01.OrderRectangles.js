function solve(arr) {
    let res = arr
        .map(innerArr => {
            let width = innerArr[0];
            let height = innerArr[1];

            return {
                width,
                height,
                area: function () { return this.width * this.height },
                compareTo: function (other) { return other.area() - this.area() || other.width - this.width }
            }
        })
        .sort((a, b) => b.area() - a.area() || b.width - a.width);

    return res;
}

console.log(solve([[10, 5], [5, 12]]));