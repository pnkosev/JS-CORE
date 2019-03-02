function firstLastKNums(input) {
    let k = input.shift();
    console.log(input.slice(0, k).join(" "));
    console.log(input.slice(input.length - k, input.length).join(" "));
}
firstLastKNums([2, 7, 8, 9]);