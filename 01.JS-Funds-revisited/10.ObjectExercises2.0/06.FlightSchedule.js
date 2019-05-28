function solve([arr1, arr2, arr3]) {
    let obj = arr1
        .reduce((acc, cur) => {
            let line = cur.split(' ');
            let flight = line[0];
            let destination = line[1];
            
            if (!acc[flight]) {
                acc[flight] = {
                    'Destination': destination,
                    'Status': 'Ready to fly'
                }
            }
            return acc;
        }, {});
    
    arr2.forEach(info => {
        let flightInfo = info.split(' ');
        let flight = flightInfo[0];
        let status = flightInfo[1];
        if (obj[flight]) {
            obj[flight]['Status'] = status;
        }
    });
    let flights = Object.keys(obj).filter(f => obj[f]['Status'] === arr3[0]);
    flights.forEach(flight => {
        console.log(obj[flight]);
    });
}

solve([["WN269 Delaware","FL2269 Oregon","WN498 Las vegas","WN3145 Ohio","WN612 Alabama","WN4010 New York","WN1173 California","DL2120 Texas","KL5744 Illinois","WN678 Pennsylvania"],["DL2120 Cancelled","WN612 Cancelled","WN1173 Cancelled","SK330 Cancelled"],["Ready to fly"]]);

// solve([[
//     'WN269 Delaware',
//     'FL2269 Oregon',
//     'WN498 Las Vegas',
//     'WN3145 Ohio',
//     'WN612 Alabama',
//     'WN4010 New York',
//     'WN1173 California',
//     'DL2120 Texas',
//     'KL5744 Illinois',
//     'WN678 Pennsylvania'
// ],
// [
//     'DL2120 Cancelled',
//     'WN612 Cancelled',
//     'WN1173 Cancelled',
//     'SK430 Cancelled'
// ],
// ['Cancelled']
// ]);