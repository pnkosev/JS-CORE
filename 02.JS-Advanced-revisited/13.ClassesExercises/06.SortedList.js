class Sorted {
    constructor() {
        this.size = 0;
        this.arr = [];
    }

    add(el) {
        this.arr.push(el);
        this.arr.sort((a, b) => a - b);
        this.size++;
        return this.arr;
    }

    remove(index) {
        if (index >= 0 && index <= this.arr.length - 1) {
            this.arr = this.arr.filter((e, i) => i !== index);
            this.arr.sort((a, b) => a - b);
            this.size--;
            return this.arr;
        }
    }

    get(index) {
        if (index >= 0 && index <= this.arr.length - 1) {
            return this.arr[index];
        }
    }
}

let myList = new Sorted();
myList.add(5);
myList.add(3);
myList.remove(0);
console.log(myList.get(0));
console.log(myList.size);