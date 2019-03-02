function popInTowns(arr) {
    let result = arr.reduce((acc, cur) => {
        let tokens = cur.split(" <-> ");
        let city = tokens[0];
        let population = tokens[1];
        if (!acc[city]) {
            acc[city] = 0;
        }
        acc[city] += +population;
        return acc;
    }, {});
    console.log(result);
}
popInTowns([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);