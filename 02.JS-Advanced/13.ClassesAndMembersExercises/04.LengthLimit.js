class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    increase(num) {
        this.innerLength += num;
    }

    decrease(num) {
        this.innerLength -= num;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        let string = this.innerString;
        let substring = this.innerLength;

        // if (string.length === 0) {
        //     return "...";
        // }
        if (substring < string.length) {
            string = string.substring(0, substring);
            string += "...";
        }
        return string;
    }
}
let test = new Stringer("Victor", 6);
console.log(test.toString());