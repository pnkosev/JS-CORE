function solve(arr) {
    let obj = arr
        .reduce((acc, cur) => {
            let line = cur.split(', ');
            let student = line[0].split(': ')[1];
            let grade = +line[1].split(': ')[1];
            let score = +line[2].split(': ')[1];

            if (score >= 3) {
                if (!acc[grade + 1]) {
                    acc[grade + 1] = {
                        students: [student],
                        scores: [score],
                        averageScore: 0
                    }
                } else {
                    acc[grade + 1].students.push(student);
                    acc[grade + 1].scores.push(score);
                }
            }
            
            return acc;
        }, {});
    let grades = Object.keys(obj);
    grades.forEach(grade => {
        let scores = obj[grade].scores.reduce((acc, cur) => +acc + +cur);
        let students = obj[grade].students;
        obj[grade].averageScore = (scores / students.length).toFixed(2);
        console.log(`\n${grade} Grade `);
        console.log(`List of students: ${students.join(', ')}`);
        console.log(`Average annual grade from last year: ${obj[grade].averageScore}`);
    });
}

solve([
    'Student name: Mark, Grade: 8, Graduated with an average score: 4.75',
    'Student name: Ethan, Grade: 9, Graduated with an average score: 5.66',
    'Student name: George, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Steven, Grade: 10, Graduated with an average score: 4.20',
    'Student name: Joey, Grade: 9, Graduated with an average score: 4.90',
    'Student name: Angus, Grade: 11, Graduated with an average score: 2.90',
    'Student name: Bob, Grade: 11, Graduated with an average score: 5.15',
    'Student name: Daryl, Grade: 8, Graduated with an average score: 5.95',
    'Student name: Bill, Grade: 9, Graduated with an average score: 6.00',
    'Student name: Philip, Grade: 10, Graduated with an average score: 5.05',
    'Student name: Peter, Grade: 11, Graduated with an average score: 4.88',
    'Student name: Gavin, Grade: 10, Graduated with an average score: 4.00'
]);