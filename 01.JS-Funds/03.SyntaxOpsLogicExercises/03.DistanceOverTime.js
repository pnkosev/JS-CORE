function distanceOverTime(input) {
    let speedA = input[0];
    let speedB = input[1];
    let time = input[2] / 3600;
    let distance = Math.abs((speedA * time) - (speedB * time)) * 1000;
    console.log(distance);
}
distanceOverTime([5, -5, 40]);