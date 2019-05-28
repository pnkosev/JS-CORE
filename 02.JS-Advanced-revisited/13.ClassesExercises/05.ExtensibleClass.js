let Result = (() => {
    let id = 0;

    class ExtensibleClass {
        constructor() {
            this.id = id++;
        }
        extend(obj) {
            for (const prop in obj) {
                if (typeof obj[prop] === 'function') {
                    ExtensibleClass.prototype[prop] = obj[prop];
                } else {
                    this[prop] = obj[prop];
                }
            }
        }
    }

    return ExtensibleClass;
})();

let obj1 = new Result();
let obj2 = new Result();
let obj3 = new Result();
obj1.extend({
    speeding: function() { console.log(`${this.model} is fast`); },
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});
console.log(obj1);
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);
