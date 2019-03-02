function ticketScan(input, command) {
    let namePattern = /( ([A-Z]+[a-z]*)-(([A-Z]{1}\.)?-)?([A-Z]+[a-z]*) )/gm;
    let airportPattern = /( ([A-Z]{3})\/([A-Z]{3}) )/gm;
    let flightPattern = /( ([A-Z]{1,3}[0-9]{1,5}) )/gm;
    let companyPattern = /(- ([A-Z]{1}[a-z]*?)\*([A-Z]{1}[a-z]*?) )/gm;

    if (command.toLowerCase() === "name") {

        let name = "";
        let nameGroups = namePattern.exec(input);
        if (nameGroups) {
            if (nameGroups[4] !== undefined) {
                name = nameGroups[2] + " " + nameGroups[4] + " " + nameGroups[5];
            } else {
                name = nameGroups[2] + " " + nameGroups[5];
            }
            console.log(`Mr/Ms, ${name}, have a nice flight!`);
        }
        
    } else if (command.toLowerCase()  === "flight") {

        let flight = "";
        let flightGR = flightPattern.exec(input);
        if (flightGR) {
            flight = flightGR[2];
        }

        let airportOfDeparture = "";
        let airportOfArrival = "";
        let airportGroups = airportPattern.exec(input);
        if (airportGroups) {
            airportOfDeparture = airportGroups[2];
            airportOfArrival = airportGroups[3];
        }

        console.log(`Your flight number ${flight} is from ${airportOfDeparture} to ${airportOfArrival}.`);

    } else if (command.toLowerCase()  === "company") {

        let companyGroups = companyPattern.exec(input);
        let company = "";
        
        if (companyGroups) {
            company = companyGroups[2] + " " + companyGroups[3];
        }

        console.log(`Have a nice flight with ${company}.`);

    } else if (command.toLowerCase()  === "all") {

        let name = "";
        let nameGroups = namePattern.exec(input);
        if (nameGroups) {

            if (nameGroups[3] !== undefined) {
                name = nameGroups[2] + " " + nameGroups[4] + " " + nameGroups[5];
            } else {
                name = nameGroups[2] + " " + nameGroups[5];
            }
        }
        let flight = "";
        let flightGR = flightPattern.exec(input);
        if (flightGR) {
            flight = flightGR[2];
        }

        let airportGroups = airportPattern.exec(input);
        let airportOfDeparture = "";
        let airportOfArrival = "";

        if (airportGroups) {
            airportOfDeparture = airportGroups[2];
            airportOfArrival = airportGroups[3];
        }

        let company = "";
        let companyGroups = companyPattern.exec(input);

        if (companyGroups) {

            company = companyGroups[2] + " " + companyGroups[3];
        }

        console.log(`Mr/Ms, ${name}, your flight number ${flight} is from ${airportOfDeparture} to ${airportOfArrival}. Have a nice flight with ${company}.`);
    }
}
ticketScan(' TEST-T.-TESTOV   SOF/VIE OS806 - Austrian*Airlines T24G55 STD11:15 STA11:50 ', 'name');