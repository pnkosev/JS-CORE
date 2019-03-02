function printWithDelimiter(input) {
    let delimiter = input.pop();
    console.log(input.join(delimiter));
}
printWithDelimiter(['One', 'Two', 'Three', 'Four', 'Five', '-']);