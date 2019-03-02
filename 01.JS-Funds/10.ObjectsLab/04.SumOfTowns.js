function sumOfTowns(input) {
    let townData = {};

    for (let i = 0; i < input.length; i += 2) {
        let town = input[i];
        let income = +input[i + 1];

        if (!townData[town]) {
            townData[town] = income;
        } else {
            townData[town] += income;
        }
    }

    console.log(JSON.stringify(townData));



    // for(let i=0; i<input.length; i+=2) {
    //     if(!townData.hasOwnProperty(input[i])) {
    //         towns[input[i]] = 0;
    //     }

    //     towns[input[i]] += Number(input[i+1]);
    // }

}
sumOfTowns([
    'Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4'
]);