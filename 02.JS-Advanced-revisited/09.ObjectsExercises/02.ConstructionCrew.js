function solve(obj) {
    if (obj.handsShaking) {
        obj.bloodAlcoholLevel += obj.weight * 0.1 * obj.experience;
        obj.handsShaking = false;
    }
    return obj;
}

solve({
    weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true
});