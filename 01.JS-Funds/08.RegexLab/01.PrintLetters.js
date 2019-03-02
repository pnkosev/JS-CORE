function printLetters(input) {
    for (let index in input) {
        console.log(`str[${index}] -> ${input[index]}`);
    }
}
printLetters('Hello, World!');