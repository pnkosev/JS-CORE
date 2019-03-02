function classHierarchy() {
    class Figure {
        constructor() {
            if (new.target === Figure) {
                throw new Error("Cannot instantiate an abstract class.");
            }
        }
        get area() {
            return undefined;
        }
        toString() {
            return this.constructor.name;
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }
        get area() {
            return Math.PI * Math.pow(this.radius, 2);
        }
        toString() {
            return super.toString() + ` - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
        }
        get area() {
            return this.width * this. height;
        }
        toString() {
            return super.toString() + ` - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}
let classes = classHierarchy();
let Figure = classes.Figure;
let Rectangle = classes.Rectangle;
let Circle = classes.Circle;
let r = new Rectangle(3,4);
console.log(r.toString());