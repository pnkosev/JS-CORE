function solve(arr) {
    let html = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    html += `<quiz>\n`;

    function addFaQ(q, a) {
        html += `\t<question>\n\t\t${q}\n\t</question>\n`;
        html += `\t<answer>\n\t\t${a}\n\t</answer>\n`;
    }

    for (let i = 0; i < arr.length; i += 2) {
        const question = arr[i];
        const answer = arr[i + 1];
        addFaQ(question, answer);
    }
    html += `</quiz>`;
    console.log(html);
}

solve([
    "Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"
]);