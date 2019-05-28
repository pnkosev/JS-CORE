function solve() {
    let obj = (() => {
        let arr = [];
        let size = 0;
        let sorting = (a, b) => a - b;
        return {
            add: function (el) {
                arr.push(el);
                arr.sort(sorting);
                this.size++;
                return arr;
            },
            remove: function (index) {
                if (index >= 0 && index <= arr.length - 1) {
                    arr = arr.filter((e, i) => i !== index);
                    arr.sort(sorting);
                    this.size--;
                    return arr;
                }
            },
            get: function (index) {
                if (index >= 0 && index <= arr.length - 1) {
                    return arr[index];
                }
            },
            size,
        }
    })();
    return obj;
}

let lol = solve();
lol.add(5);
lol.add(1);
lol.add(15);
lol.add(55);
console.log(lol.size)
lol.remove(1);
console.log(lol.size)
console.log(lol.get(2))