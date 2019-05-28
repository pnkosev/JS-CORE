function solve(arr) {
    let initialNum = 1;
    let result = [];

    arr.forEach(e => {
        e === 'add' ? result.push(initialNum) : result.pop();
        initialNum++;
    })

    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }
}

solve(['add', 'add', 'add', 'add']);
// solve(['add', 'add', 'remove', 'add', 'add']);
// solve(['remove', 'remove', 'remove']);