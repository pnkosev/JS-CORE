class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    registerChild(name, grade, budget) {
        if (!this.kids[grade]) {
            this.kids[grade] = {
                name,
                budget
            }
            if (this.kids[grade].name) {
                return `${this.kids[grade].name} is already in the list for this ${this.destination} vacation.`
            } else {
                return `['${this.kids[grade].name} - ${this.kids[grade].budget}']`;
            }
        }


        // if (this.kids[grade].name) {
        //     return `${this.kids[grade].name} is already in the list for this ${this.destination} vacation.`
        // }


        if (this.kids[grade].budget < this.budget) {
            return `${this.kids[grade].name}'s money is not enough to go on vacation to ${this.destination}.`
        } else {
            return `['${this.kids[grade].name} - ${this.kids[grade].budget}']`;
        }


    }

    removeChild(name, grade) {
        
    }

    get numberOfChildren() {
        return this.kids.length;
    }
}
let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
console.log(vacation.registerChild('Gosho', 5, 2000));
console.log(vacation.registerChild('Gosho', 5, 2000));
console.log(vacation.registerChild('Mimi', 5, 2000));