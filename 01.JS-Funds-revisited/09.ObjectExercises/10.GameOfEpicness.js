function solve([...data], [...battles]) {
    let obj = data
        .reduce((acc, cur) => {
            if (!acc[cur.kingdom]) {
                acc[cur.kingdom] = {
                    generals: {},
                    wins: 0,
                    losses: 0
                };
            }
            if (!acc[cur.kingdom]['generals'][cur.general]) {
                acc[cur.kingdom]['generals'][cur.general] = {
                    army: Math.floor(+cur.army),
                    wins: 0,
                    losses: 0
                };
            } else {
                acc[cur.kingdom]['generals'][cur.general]['army'] += +cur.army;
            }
            return acc;
        }, {});

    battles.forEach(battle => {
        let attackingKingdom = battle[0];
        let attackingGeneral = battle[1];
        let defendingKingdom = battle[2];
        let defendingGeneral = battle[3];
        if (attackingKingdom !== defendingKingdom) {
            let attackingArmy = obj[attackingKingdom]['generals'][attackingGeneral]['army'];
            let defendingArmy = obj[defendingKingdom]['generals'][defendingGeneral]['army'];
            if (attackingArmy > defendingArmy) {
                obj[attackingKingdom]['generals'][attackingGeneral]['army'] += +attackingArmy * 0.1;
                obj[defendingKingdom]['generals'][defendingGeneral]['army'] -= +defendingArmy * 0.1;
                obj[attackingKingdom]['generals'][attackingGeneral]['army'] = Math.floor(obj[attackingKingdom]['generals'][attackingGeneral]['army']);
                obj[defendingKingdom]['generals'][defendingGeneral]['army'] = Math.floor(obj[defendingKingdom]['generals'][defendingGeneral]['army']);
                obj[attackingKingdom]['wins'] += 1;
                obj[attackingKingdom]['generals'][attackingGeneral]['wins'] += 1;
                obj[defendingKingdom]['generals'][defendingGeneral]['losses'] += 1;
                obj[defendingKingdom]['losses'] += 1;
            } else if (attackingArmy < defendingArmy){
                obj[defendingKingdom]['generals'][defendingGeneral]['army'] += +defendingArmy * 0.1;
                obj[attackingKingdom]['generals'][attackingGeneral]['army'] -= +attackingArmy * 0.1;
                obj[defendingKingdom]['generals'][defendingGeneral]['army'] = Math.floor(obj[defendingKingdom]['generals'][defendingGeneral]['army']);
                obj[attackingKingdom]['generals'][attackingGeneral]['army'] = Math.floor(obj[attackingKingdom]['generals'][attackingGeneral]['army']);
                obj[defendingKingdom]['generals'][defendingGeneral]['wins'] += 1;
                obj[defendingKingdom]['wins'] += 1;
                obj[attackingKingdom]['generals'][attackingGeneral]['losses'] += 1;
                obj[attackingKingdom]['losses'] += 1;
            } else {
                return;
            }
        } else {
            return;
        }
    });
    // for (let kingdom in obj) {
    //     for (let general in obj[kingdom]['generals']) {
    //         console.log(obj[kingdom]['generals'][general])
    //     }
    // }
    // Object.entries(obj).forEach(a => Object.keys(a[1]['generals']).forEach(general => console.log(a[1]['generals'][general])));
    const sorted = Object.entries(obj).sort((a, b) => b[1].wins - a[1].wins || a[1].losses - b[1].losses || a[0].localeCompare(b[0]));
    const winner = sorted[0];
    console.log(`Winner: ${winner[0]}`);
    let generals = Object.entries(winner[1]['generals']).sort((a, b) => b[1].army - a[1].army);
    generals.forEach(general => {
        console.log(`/\\general: ${general[0]}`);
        console.log(`---army: ${general[1].army}`);
        console.log(`---wins: ${general[1].wins}`);
        console.log(`---losses: ${general[1].losses}`);
    });
}

// solve(
//     [{ kingdom: "Stonegate", general: "Ulric", army: 5000 },
//     { kingdom: "YorkenShire", general: "Quinn", army: 5000 },
//     { kingdom: "Maiden Way", general: "Berinon", army: 1000 }],
//     [["YorkenShire", "Quinn", "Stonegate", "Ulric"],
//     ["Maiden Way", "Berinon", "YorkenShire", "Quinn"]]
// );

solve(
    [{ kingdom: "Maiden Way", general: "Merek", army: 5000 },
    { kingdom: "Stonegate", general: "Ulric", army: 4900 },
    { kingdom: "Stonegate", general: "Doran", army: 70000 },
    { kingdom: "YorkenShire", general: "Quinn", army: 0 },
    { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
    { kingdom: "Maiden Way", general: "Berinon", army: 100000 }],
    [["YorkenShire", "Quinn", "Stonegate", "Ulric"],
    ["Stonegate", "Ulric", "Stonegate", "Doran"],
    ["Stonegate", "Doran", "Maiden Way", "Merek"],
    ["Stonegate", "Ulric", "Maiden Way", "Merek"],
    ["Maiden Way", "Berinon", "Stonegate", "Ulric"]]
);