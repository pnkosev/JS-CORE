function solve(arr) {
    let arrCopy = arr.slice(0).join().split(/\W+/).filter(w => w !== '');

    let obj = arrCopy
        .reduce((acc, cur) => {
            if (acc.hasOwnProperty(cur)) {
                acc[cur]++;
                return acc;
            }
            acc[cur] = 1;
            return acc;
        }, {});
    
    console.log(JSON.stringify(obj));
}

solve(['Far too slow, you\'re far too slow.']);