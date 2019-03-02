function f1ChamnionshipOBJ(input) {
    let book = {};

    for (let line of input) {
        let tokens = line.split(' -> ');
        let teamName = tokens[0];
        let pilotName = tokens[1];
        let pilotPoints = +tokens[2];

        if (!book[teamName]) {
            book[teamName] = {
                totalPoints : 0,
                pilots : {}
            };
        }

        if (!book[teamName]["pilots"][pilotName]) {                 // може и с .pilots
            book[teamName]["pilots"][pilotName] = 0;                // може и с .pilots
        }

        book[teamName]["pilots"][pilotName] += pilotPoints;         // може и с .pilots
        book[teamName]["totalPoints"] += pilotPoints;               // може и с .totalPoints
    }

    let winners = Object.entries(book)
        .sort((a, b) => b[1]["totalPoints"] - a[1]["totalPoints"])  // може и с .totalPoints
        .slice(0, 3);


    for (let winnerTeam of winners) {
        console.log(`${winnerTeam[0]}: ${winnerTeam[1]["totalPoints"]}`);   // може и с .totalPoints

        let pilots = Object.entries(winnerTeam[1]["pilots"]).sort((a, b) => b[1]- a[1]);    // може и с .pilots

        for (let [pilot, points] of pilots) {
            console.log(`-- ${pilot} -> ${points}`)
        }
    }
}
f1ChamnionshipOBJ([
    "Ferrari -> Kimi Raikonnen -> 25",
    "Ferrari -> Sebastian Vettel -> 18",
    "Mercedes -> Lewis Hamilton -> 100",
    "Mercedes -> Valteri Bottas -> 108",
    "Red Bull -> Max Verstapen -> 6",
    "Red Bull -> Daniel Ricciardo -> 4"
]);