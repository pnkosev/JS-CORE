function matchTheDates(input) {
    let pattern = /\b(\d{1,2})-([A-Z]{1}[a-z]{2})-(\d{4})\b/g;
    for (let date of input) {
        while (match = pattern.exec(date)) {
            console.log(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
        }
    }
}
matchTheDates(['I am born on 30-Dec-1994.',
'This is not date: 512-Jan-1996.',
'My father is born on the 29-Jul-1955.']
);