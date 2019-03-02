function townToJSON1(arr) {

    arr = arr.slice(1, arr.length);

    let result = arr
        .map((line) => {
            let tokens = line.split(/\s*\|\s*/);

            return {
                Town: tokens[1],
                Latitude: +tokens[2],
                Longitude: +tokens[3]
            };
        });
    
    
    console.log(JSON.stringify(result));
}

townToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);