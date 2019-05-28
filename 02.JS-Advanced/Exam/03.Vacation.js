class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    registerChild(name, grade, budget) {
        let kid = `${name}-${budget}`;
        if (!this.kids[grade]) {
            this.kids[grade] = [];
        }
        if (this.kids[grade].length > 0) {
            let msg = '';
            this.kids[grade].forEach(element => {
                let el = element.split('-');
                let student = el[0];
                if (student === name) {
                    msg = `${name} is already in the list for this ${this.destination} vacation.`;
                }
            });
            if (!msg) {
                if (budget < this.budget) {
                    msg = `${name}'s money is not enough to go on vacation to ${this.destination}.`;
                } else {
                    this.kids[grade].push(kid);
                }
            }
            return msg === '' ? this.kids[grade] : msg;
        } else {
            if (budget >= this.budget) {
                this.kids[grade].push(kid);
                return this.kids[grade];
            } else {
                return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
            }
        }
    }

    removeChild(name, grade) {
        let msg = '';
        if (this.kids[grade]) {
            this.kids[grade].forEach((element, index) => {
                let el = element.split('-');
                if (el[0] === name) {
                    this.kids[grade] = this.kids[grade].filter((e, innerIndex) => innerIndex !== index);
                }
            });
        } else {
            msg = `We couldn't find ${name} in ${grade} grade.`
        }
        return msg === '' ? this.kids[grade] : msg;
    }

    toString() {
        let string = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`;

        let sorted = Object.keys(this.kids).sort((a, b) => a - b);

        sorted.forEach(grade => {
            if (this.kids[grade].length > 0) {
                string += `Grade: ${grade}\n`;
            }
            let counter = 1;
            this.kids[grade].forEach(element => {
                string += `${counter++}. ${element}\n`
            })
        });
        return this.numberOfChildren === 0 ? `No children are enrolled for the trip and the organization of ${this.organizer} falls out...` : string;
    }

    get numberOfChildren() {
        let number = Object.keys(this.kids)
            .map(g => {
                return this.kids[g];
            })
            .reduce((acc, cur) => {
                return acc + cur.length;
            }, 0);
        return number;
    }
}

let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);

console.log(vacation.registerChild('Gosho', 5, 3000));
console.log(vacation.registerChild('Lilly', 6, 1500));
console.log(vacation.registerChild('Pesho', 7, 4000));
console.log(vacation.registerChild('Tanya', 5, 5000));
console.log(vacation.registerChild('Mitko', 10, 5500));

console.log(vacation.toString());


// let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
// vacation.registerChild('Gosho', 5, 2000);
// vacation.registerChild('Lilly', 6, 2100);

// console.log(vacation.removeChild('Gosho', 9));

// vacation.registerChild('Pesho', 6, 2400);
// vacation.registerChild('Gosho', 5, 2000);

// console.log(vacation.removeChild('Lilly', 6));
// console.log(vacation.registerChild('Tanya', 5, 6000));



// let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
// console.log(vacation.registerChild('Gosho', 5, 2000));
// console.log(vacation.registerChild('Lilly', 6, 2100));
// console.log(vacation.registerChild('Pesho', 6, 2400));
// console.log(vacation.registerChild('Gosho', 5, 2000));
// console.log(vacation.registerChild('Tanya', 5, 6000));
// console.log(vacation.registerChild('Mitko', 10, 1590));
// console.log(vacation.numberOfChildren);