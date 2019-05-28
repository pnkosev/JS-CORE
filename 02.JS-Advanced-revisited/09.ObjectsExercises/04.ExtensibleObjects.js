function copyObj() {
    let objCopy = {
        extend: function (obj) {
            for (const prop in obj) {
                if (typeof obj[prop] === 'function') {
                    Object.getPrototypeOf(objCopy)[prop] = obj[prop];
                } else {
                    objCopy[prop] = obj[prop];
                }
            }
        }
    }
    return objCopy;
}

let lol = copyObj();
lol.extend({
    speeding: function() { console.log(`${this.model} is fast`); },
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});
console.log(lol);