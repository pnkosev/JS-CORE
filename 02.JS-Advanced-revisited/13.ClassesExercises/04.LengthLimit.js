class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    increase(len) {
        this.innerLength += +len;
    }

    decrease(len) {
        if (this.innerLength < len) {
            this.innerLength = 0;
        } else {
            this.innerLength -= +len;
        }
    }

    toString() {
        if (this.innerString.length <= this.innerLength) {
            return this.innerString;
        }
        if (this.innerString.length - this.innerLength === 0) {
            return '...';
        }
        return this.innerString.substring(0, this.innerLength) + '...';
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...
