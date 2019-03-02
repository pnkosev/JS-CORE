class Rat {
    constructor(name) {
        this.name = name;
        this.ratsReunited = [];
    }
    unite(otherRat) {
        if (otherRat instanceof Rat) {
            this.ratsReunited.push(otherRat);
        }
    }
    getRats() {
        return this.ratsReunited;
    }
    toString() {
        let string = `${this.name}\n`;
        for (let rat of this.ratsReunited) {
            string += `##${rat.name}\n`;
        }
        return string;
    }
}
let test = new Rat("Peshi");
test.unite(new Rat("Geshi"));
test.unite(new Rat("Monchi"));
console.log(test.getRats());
console.log(test.toString());