function splitString(text, delimiter) {
    let splitElements = text.split(delimiter);
    console.log(splitElements.join('\n'));
}
splitString('One-Two-Three-Four-Five', '-');