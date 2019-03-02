function orderRectangles(input) {

    function createRect(width, height) {
        let rect = {
            width,
            height,
            area: function () {
                return rect.width * rect.height;
            },
            compareTo: function (other) {
                return other.area() - rect.area() || other.width - rect.width;
            }
        }
        return rect;
    }

    let rects = [];
    for (let [width, height] of input) {
        let rect = createRect(width, height);
        rects.push(rect);
    }
    let sortedRects = rects.sort((a, b) => a.compareTo(b));
    return sortedRects;
}

console.log(orderRectangles([
    [10, 5],
    [5, 12]
]));