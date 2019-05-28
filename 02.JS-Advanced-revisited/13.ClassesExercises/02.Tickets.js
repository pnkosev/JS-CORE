function solve(arr, sortCriteria) {
    let result = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    arr.forEach(line => {
        let [destination, price, status] = line.split("|");
        result.push(new Ticket(destination, +price, status));
    })

    let sorted = result.sort((a, b) => {
        if (sortCriteria === 'price') {
            return a[sortCriteria] - b[sortCriteria];
        } else {
            return a[sortCriteria].localeCompare(b[sortCriteria]);
        }
    });

    return sorted;
}

console.log(solve([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));