class SortedList {
    constructor() {
        this.list = [];
        this.size = 0;
    }
    add(element) {
        this.list.push(element);
        this.size++;
        this.list.sort((a, b) => a - b);
    }
    remove(index) {
        if (index >= 0 && index < this.list.length) {
            this.list.splice(index, 1);
            this.size--;
        };
    }
    get(index) {
        if (index >= 0 && index < this.list.length) {
            return this.list[index];
        };
    }
}
let test = new SortedList;
test.add(3);
test.add(1);
test.add(2);
console.log(test.list);