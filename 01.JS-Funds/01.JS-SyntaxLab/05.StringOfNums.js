function stringOfNums(n) {
    let sum = '';
    for (let index = 1; index <= +n; index++) {
        sum += index;        
    }
    console.log(sum)
}
stringOfNums('11');