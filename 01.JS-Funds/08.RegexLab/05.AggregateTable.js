function aggregateTable(text) {
    let sum = 0;
    let list = [];

    for (let line of text) {
        let townData = line.split('|');
        list.push(townData[1].trim());
        sum += +townData[2].trim();
    }
    console.log(list.join(', ') + '\n' + sum);
}
aggregateTable(['| Sofia           | 300',
                '| Veliko Tarnovo  | 500',
                '| Yambol          | 275']);