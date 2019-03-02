function gradsToDegree(grads) {
    let degree = 0;
    if (grads < 0) {
        if (grads < -400) {
            grads %= 400;
        }
        degree = 360 + (360 / (400 / grads));
        console.log(degree);
    } else {
        if (grads >= 400) {
            grads %= 400;
        }
        degree = 360 / (400 / grads);
        console.log(degree);
    }
}
gradsToDegree(850);