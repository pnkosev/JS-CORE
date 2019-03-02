function rotateArray(input) {
    let NumberOfRotations = input.pop();
    NumberOfRotations %= input.length;

    for (let i = 0; i < +NumberOfRotations; i++) {
        let current = input.pop();
        input.unshift(current);
    }
    console.log(input.join(" "));
}
rotateArray(['1', 
'2', 
'3', 
'4', 
'2']
);