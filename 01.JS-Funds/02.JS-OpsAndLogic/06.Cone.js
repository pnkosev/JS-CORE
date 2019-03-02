function cone(radius, height) {
    let volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
    let latArea = Math.PI * radius * Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
    let baseArea = Math.PI * Math.pow(radius, 2);
    let totalArea = latArea + baseArea;
    console.log(volume.toFixed(4));
    console.log(totalArea.toFixed(4));
}
cone(5, 3);