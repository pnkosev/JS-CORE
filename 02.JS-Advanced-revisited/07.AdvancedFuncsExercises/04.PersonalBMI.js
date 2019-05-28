function solve(name, age, weight, height) {
    let person = {
        name,
        personalInfo: {
            age,
            weight,
            height
        },
    }
    let bmi = Math.round(weight / (height * height) * 10000);
    person['BMI'] = bmi;

    if (bmi < 18.5) {
        person['status'] = 'underweight';
    } else if (bmi < 25) {
        person['status'] = 'normal';
    } else if (bmi < 30) {
        person['status'] = 'overweight';
    } else if (bmi >= 30) {
        person['status'] = 'obese';
        person['recommendation'] = 'admission required';
    }
    return person;
}

console.log(solve('Honey Boo Boo', 9, 57, 137));