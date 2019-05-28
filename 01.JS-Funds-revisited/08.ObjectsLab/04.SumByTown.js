function solve(arr) {
    let result = {};
    arr
        .forEach((element, i) => {
            if (i % 2 === 0) {
                let town = element;
                if (result.hasOwnProperty(town)) {
                    return result[town] += +arr[i + 1];
                }
                return result[town] = +arr[i + 1];
            }
        });

    console.log(JSON.stringify(result));
}

solve(['Sofia','20','Varna','3','Sofia','5','Varna','4']);
solve(['Sofia','20','Varna','3','sofia','5','varna','4']);