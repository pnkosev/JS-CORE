class Rat {
    constructor(name) {
        this.name = name;

        this.unitedWith = [];
    }

    unite(otherRat) {
        if(otherRat instanceof Rat) {
            this.unitedWith.push(otherRat);
        }
    }

    getRats() {
        return this.unitedWith;
    }

    toString() {
        let string = `${this.name}\n`;
        this.unitedWith.forEach(rat => {
            string += `##${rat.name}\n`;
        });
        return string;
    }
}

let test = new Rat("Pesho");
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));

console.log(test.getRats());

console.log(test.toString()); //Pesho

