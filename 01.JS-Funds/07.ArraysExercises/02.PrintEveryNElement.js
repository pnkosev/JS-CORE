function printEveryNElement(input) {
    let step = input.pop();
    // for (let i = 0; i < input.length; i += +step) {
    //     console.log(input[i]);
    // }
    input.filter((element, index) => {
        return index % +step === 0;
        })
        .forEach(element => {
            console.log(element);
        });
}
printEveryNElement(['5', '20', '31', '4', '20', '2']);