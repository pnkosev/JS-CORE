function triangleArea(sideA, sideB, sideC) {
    let perimeter = (sideA + sideB + sideC) / 2;
    let area = Math.sqrt(perimeter * (perimeter - sideA) * (perimeter - sideB) * (perimeter - sideC));
    console.log(area);
}
triangleArea(2, 3.5, 4);