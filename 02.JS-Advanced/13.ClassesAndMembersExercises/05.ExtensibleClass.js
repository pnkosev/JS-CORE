(function () {
    let counter = 0;
    return class Extensible {
        constructor() {
            this.id = counter;
            counter++;
        }

        extend(template) {
            for (let prop of Object.keys(template)) {
                if (typeof template[prop] == "function") {
                    Extensible.prototype[prop] = template[prop];
                } else {
                    this[prop] = template[prop];
                }
            }
        }
    }
})();