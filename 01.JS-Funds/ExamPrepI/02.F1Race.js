function f1Race(input) {
    let pilots = input.shift().split(' ');

    for (let line of input) {
        let [event, pilot] = line.split(' ');

        switch (event) {
            case "Join" :
                if (!pilots[pilot]) {
                    pilots.push(pilot);
                }
                break;
            case "Crash" : 
                if (pilots.includes(pilot)) {
                    let index = pilots.indexOf(pilot);
                    pilots.splice(index, 1);
                }
                break;
            case "Pit" :
                if (pilots.includes(pilot)) {
                    let index = pilots.indexOf(pilot);
                    if (index !== pilots.length - 1) {
                        pilots.splice(index, 1);
                        pilots.splice(index + 1, 0, pilot);
                    }
                }
                break;
            case "Overtake" :
            if (pilots.includes(pilot)) {
                let index = pilots.indexOf(pilot);
                if (index !== 0) {
                    pilots.splice(index, 1);
                    pilots.splice(index - 1, 0, pilot);
                }
            }
            break;
        }
    }
    console.log(pilots.join(' ~ '));
}
f1Race(["Vetel Hamilton Slavi",
"Pit Hamilton",
"Overtake Vetel",
"Crash Slavi"]
);