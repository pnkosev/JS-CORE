function sumOfTowns1(arr) {
    let townData = {};
    let result = arr
        .map((el, index) => {
            let town;
            let income;
            if (index % 2 === 0) {
                town = el;
                if (!townData[town]) {
                    townData[town] = 0;
                }
            } else {
                town = arr[index - 1];
                income = el;
                townData[town] += +income;
            }
        })

    console.log(JSON.stringify(townData));
}
sumOfTowns1([
    'Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4'
]);