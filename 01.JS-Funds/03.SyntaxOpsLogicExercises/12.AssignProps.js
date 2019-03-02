function assignProp(input) {
    let person = {};
    person[input[0]] = input[1];
    person[input[2]] = input[3];
    person[input[4]] = input[5];
    console.log(person);
}
assignProp(['name', 'Pesho', 'age', '23', 'gender', 'male']);