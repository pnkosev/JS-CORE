function helix(input) {
    input = +input;
    let sequence = "ATCGTTAGGG";
    let index = 0;

    for (let i = 0; i < input; i++) {
        if (index == sequence.length) {
            index = 0;
        }

        if (i % 4 === 0) {
            console.log("**" + sequence[index++] + sequence[index++] + "**");
        } else if (i % 4 === 1 || i % 4 === 3) {
            console.log("*"+ sequence[index++] + "--" + sequence[index++] + "*");
        } else if (i % 4 === 2) {
            console.log(sequence[index++] + "----" + sequence[index++]);
        }
    }
}
helix(10);