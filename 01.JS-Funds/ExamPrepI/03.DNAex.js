function DNAex(arr) {
    let genes = {};

    for (let line of arr) {
        if (line === 'Stop') {
            break;
        }

        let pattern = /^([a-z!@#$?]+)=([\d]+)--([\d]+)<<([\w]+)$/;

        let result = pattern.exec(line);

        //let result = line.match(pattern);         // може и този запис (с тази функция)

        if (result) {
            let name = result[1];
            let nameLength = parseInt(result[2]);
            name = name.replace(/[!@#$?]/g,'');
            if (name.length == nameLength) {
                let geneCount = parseInt(result[3]);
                let organism = result[4];
                if (!genes[organism]) {
                    genes[organism] = 0;
                }
                genes[organism] += geneCount;
            }
        }
    }
    let keysSorted = Object.keys(genes).sort(function(a,b){return genes[b]-genes[a]});
    for (let key of keysSorted) {
        console.log(key + ' has genome size of ' + genes[key]);
    }  
}
DNAex([
    "!@ab?si?di!a@=7--152<<human",
    "b!etu?la@=6--321<<dog",
    "!curtob@acter##ium$=14--230<<dog",
    "!some@thin@g##=9<<human",
    "Stop!"
]);