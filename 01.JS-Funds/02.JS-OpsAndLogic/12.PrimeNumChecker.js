function primeNumChecker(num) {
    let prime = true;
    for (let index = 2; index <= Math.sqrt(num); index++) {
        if (num % index === 0) {
            prime = false;
            break;
        }
    }
    if (num > 1) {
        console.log(prime);
    } else {
        console.log("false");
    }
}
primeNumChecker(0);