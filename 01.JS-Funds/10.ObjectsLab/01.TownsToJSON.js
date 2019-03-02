function townsToJSON(input) {

    input = input.slice(1, input.length);

    let townObj = input.map(item => {
        let townInfo = item.split(/\s*\|\s*/);

        return {
            Town : townInfo[1],
            Latitude : +townInfo[2],
            Longitude : +townInfo[3]
        };
    });

    console.log(JSON.stringify(townObj));
}
townsToJSON(['| Town | Latitude | Longitude |',
            '| Sofia | 42.696552 | 23.32601 |',
            '| Beijing | 39.913818 | 116.363625 |'
]);