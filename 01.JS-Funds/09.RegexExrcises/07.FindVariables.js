function findVariables(input) {
    let result = input.match(/\b_[A-Za-z0-9]+\b/g);
    result = result.join('').split('_').filter(x => x!= '');
    console.log(result.join(','));

    // let regEx = /\b_([A-Za-z0-9]+)\b/g;  // \b - разстояние преди думата и след думата

    // let empty = [];
    // let match;

    // while ( match = regEx.exec(input)) {
    //     empty.push(match[1]); // вземаме първия член защото така работи match
    // }
    // console.log(empty.join(','));
}
findVariables('The _id and _age variables are both integers.');