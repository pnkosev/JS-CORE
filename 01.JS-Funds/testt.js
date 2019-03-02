let city1 = {
    population: 1000
};

let city2 = {
    population: 2000
};

let city3 = {
    population: 1000
};

let city4 = {
    population: 1000
};

let country1 = {
    city1,
    city2
};

let country2 = {
    city3,
    city4
};

let sortedArr = [country1, country2]
    .map((country) => {
        let totalPopulation = Object.keys(country)
            .map((key) => {
                return country[key].population;
            })
            .reduce((acc, cur) => {
                return acc + cur;
            })
        return {
            country,
            totalPopulation
        };
    })
    .sort((a, b) => {
        return a.totalPopulation - b.totalPopulation;
    });

console.log(sortedArr);