function extractIncreasingElements(input) {
    let resultArr = [input[0]];

    for (let index = 0; index < input.length; index++) {
        let nextIndex = Math.min(index + 1, input.length);
        if (input[nextIndex] >= input[index]) {
            resultArr.push(input[nextIndex]);
        }
    }
    resultArr.forEach(item => console.log(item));
}
extractIncreasingElements([1, 3, 8, 4, 10, 12, 3, 2, 24]);