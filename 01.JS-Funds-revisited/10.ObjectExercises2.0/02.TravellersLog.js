function solve(arr) {
    let obj = arr
        .reduce((acc, cur) => {
            if (cur.includes('gets')) {
                let line = cur.split(' ');
                let traveller = line[0];
                let money = line[2];
                if (!acc[traveller]) {
                    acc[traveller] = {
                        totalMoney: +money,
                        totalCountries: 0,
                        countries: {}
                    }
                } else {
                    acc[traveller].totalMoney += +money;
                }
            } else {
                let line = cur.split(' ');
                let traveller = line[0];
                let country = line[5];
                let landmark = line[3];
                let money = line.pop();

                if (!acc[traveller]) {
                    acc[traveller] = {
                        totalMoney: 0,
                        totalCountries: 0,
                        countries: {}
                    }
                }

                if (acc[traveller].totalMoney < money) {
                    console.log(`Not enough money to visit ${landmark}`);
                }
                
                if (acc[traveller].totalMoney >= money && !acc[traveller].countries[country]) {
                    acc[traveller].totalMoney -= +money;
                    acc[traveller].totalCountries += 1;
                    acc[traveller].countries[country] = [];
                    acc[traveller].countries[country].push(landmark);
                } else if(acc[traveller].totalMoney >= money && !acc[traveller].countries[country].includes(landmark)) {
                    acc[traveller].totalMoney -= +money;
                    acc[traveller].countries[country].push(landmark);
                }
            }
            return acc;
        }, {});
    let sorted = Object.entries(obj).sort((a, b) => b[1].totalCountries - a[1].totalCountries);
    sorted.forEach(([e1, e2]) => {
        console.log(`${e1} visited ${e2.totalCountries} countries and has ${e2.totalMoney} money left`);
        let sortedCountries = Object.entries(e2.countries).sort((a, b) => b[1].length - a[1].length);
        let countries = Object.entries(sortedCountries);
        countries.forEach(([c1, c2]) => {
            console.log(`- ${c2[0]} -> ${e2.countries[c2[0]].length} landmarks`);
            let landmarks = e2.countries[c2[0]].sort((a, b) => a.localeCompare(b));
            landmarks.forEach(landmark => {
                console.log(`-- ${landmark}`);
            })
        })
    })
}

solve([
    'Peter gets 100',
    'Peter visited the StatueOfLiberty in USA - 50',
    'Bill gets 250',
    'Tim visited the ChristTheRedeemer in Brazil - 150',
    'Bill gets 400',
    'Bill visited the MountFuji in Japan - 600',
    'Bill visited the TeatroAmazonas in Brazil - 50',
    'Bill gets 150',
    'Bill visited the ChristTheRedeemer in Brazil - 150',
    'Tim gets 500',
    'Bill visited the StatueOfLiberty in USA - 440',
    'Tim visited the StatueOfLiberty in USA - 440',
    'Maria gets 650',
    'Maria visited the StatueOfLiberty in USA - 440',
    'Maria visited the CapeCod in USA - 100'
]);