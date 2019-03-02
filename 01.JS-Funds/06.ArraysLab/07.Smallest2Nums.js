function smallest2Nums(input) {
    console.log(input.sort((a, b) => a - b).slice(0, 2).join(" "));
}
smallest2Nums([30, 15, 50, 5]);