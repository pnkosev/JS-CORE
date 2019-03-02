function warehouse(input) {
    let map = new Map();

    for (let line of input) {
        let [command, brand, coffeeName, date, quantity] = line.split(', ');

        if (command === "IN") {
            if (!map.has(brand)) {
                map.set(brand, new Map());
            }
            
            if (!map.get(brand).has(coffeeName)) {
                map.get(brand).set(coffeeName, new Map());
            } else {
                map.get(brand).get(coffeeName).set(date, quantity);
            }
        }
        // } else if (command === "OUT") {
            
        // }
    }

    function dateCompare(date1, date2) {
        let d1 = new Date(date1);
        let d2 = new Date(date2);
        return d1 < d2;
    }
}
warehouse([
    "IN, Batdorf & Bronson, Espresso, 2025-05-25, 20",
    "IN, Folgers, Black Silk, 2023-03-01, 14",
    "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
    "IN, Lavazza, Crema e Gusto, 2023-05-02, 5",
    "IN, Folgers, Black Silk, 2022-01-01, 10",
    "IN, Lavazza, Intenso, 2022-07-19, 20",
    "OUT, Dallmayr, Espresso, 2022-07-19, 5",
    "OUT, Dallmayr, Crema, 2022-07-19, 5",
    "OUT, Lavazza, Crema e Gusto, 2020-01-28, 2",
    "REPORT",
    "INSPECTION",
]);