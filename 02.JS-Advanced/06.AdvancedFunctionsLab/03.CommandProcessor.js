function commandProcessorWithIfee(arr) {
    let commandProcessor = (function () {
        let result = '';
        return {
            append: (text) => result += text,
            removeStart: (n) => result = result.slice(Number(n)),
            removeEnd: (n) => result = result.slice(0, result.length - Number(n)),
            print: () => console.log(result)
        }
    })();

    for (let line of arr) {
        let tokens = line.split(' ');
        let command = tokens[0];
        let value = tokens[1];
        commandProcessor[command](value);
    }
}
commandProcessorWithIfee(
    ['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print'
]);