function concatReversed(input) {
    input = input.join('');
    let revInput = input.split('').reverse().join('');
    console.log(revInput);
}
concatReversed(['I', 'am', 'student']);