function solve(arr) {
    let end = arr.pop();
    let obj = arr
        .reduce((acc, cur) => {
            if (!cur.includes(' vs ') && cur !== 'Ave Cesar') {
                let line = cur.split(' -> ');
                let warrior = line[0];
                let technique = line[1];
                let power = line[2];
                if (!acc[warrior]) {
                    acc[warrior] = {
                        techniques: {},
                        totalSkill: 0
                    };
                }
                if (!acc[warrior]['techniques'][technique] || acc[warrior]['techniques'][technique] < power) {
                    acc[warrior]['techniques'][technique] = +power;
                    acc[warrior]['totalSkill'] += +power;
                }
                return acc;
            } else if (cur.includes(' vs ')) {
                let line = cur.split(' vs ');
                let warriorOne = line[0];
                let warriorTwo = line[1];
                if (!acc[warriorOne] || !acc[warriorTwo]) {
                    return acc;
                }
                let techOne = Object.keys(acc[warriorOne].techniques);
                let techTwo = Object.keys(acc[warriorTwo].techniques);
                let intersections = techOne.filter(element => techTwo.includes(element));
                if (intersections.length) {
                    if (acc[warriorOne].totalSkill > acc[warriorTwo].totalSkill) {
                        delete acc[warriorTwo];
                    } else {
                        delete acc[warriorOne];
                    }
                }
                return acc;
            }
            return acc;
        }, {});
    
    let sorted = Object.entries(obj).sort((a, b) => b[1].totalSkill - a[1].totalSkill);
    Object.entries(sorted).forEach(([e1, e2]) => {
        console.log(`${e2[0]}: ${e2[1].totalSkill} skill`);
        let skills = Object.keys(e2[1].techniques).sort((a, b) => e2[1].techniques[b] - e2[1].techniques[a]);
        skills.forEach(skill => {
            console.log(`- ${skill} <!> ${e2[1].techniques[skill]}`);
        })
    })
}

solve([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar'
]);

// solve([
//     'Pesho -> BattleCry -> 400',
//     'Gosho -> PowerPunch -> 300',
//     'Stamat -> Duck -> 200',
//     'Stamat -> Tiger -> 250',
//     //'Ave Cesar'
// ]);