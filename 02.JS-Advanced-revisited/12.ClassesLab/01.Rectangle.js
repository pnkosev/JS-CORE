// with Class
// class Rectangle {
//     constructor(width, height, color) {
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }

//     calcArea() {
//         return this.width * this.height;
//     }
// }


// with Fn
function Rectangle(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.calcArea = function () {
        return this.width * this.height;
    }
}

// Rectangle.prototype.calcArea = function () {
//     return this.width * this.height;
// }

let rect = new Rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
