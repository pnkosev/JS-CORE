function modifyAverage(num) {

    function getAverage(num) {
        let strNum = num.toString();
        let sum = 0;
        for (let digit of strNum) {
            sum += +digit;
        }
        return sum / strNum.length;
    }

    let average = getAverage(num);
    let addNines = () => num + '9';

    while (average <= 5) {
        num = addNines();
        average = getAverage(num);
    }
    console.log(num);
}
modifyAverage(1);
