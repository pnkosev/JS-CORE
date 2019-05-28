function solve(arr) {
    let arrCopy = arr.slice(1);

    let obj = arrCopy
        .map(arr => {
            let item = arr.split(/\s*\|\s*/).filter(e => e !== '');
            return {
                Town: item[0],
                Latitude: +item[1],
                Longitude: +item[2]
            }
        });
    console.log(JSON.stringify(obj));
}

solve([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);