// function templating(input) {
//     console.log("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
//     console.log("<quiz>");

//     for (let i = 0; i < input.length; i++) {
//         if (i % 2 === 0) {
//             console.log("  <question>");
//             console.log(`    ${input[i]}`);
//             console.log("  </question>");
//         } else {
//             console.log("  <answer>");
//             console.log(`    ${input[i]}`);
//             console.log("  </answer>");
//         }
//     }

//     console.log("</quiz>")
// }
function templating(input) {
    function drawQuestion(question) {
        let html = "\t<question>\n";
        html += `\t\t${question}\n`;
        html += "\t</question>\n";

        return html;
    }

    function drawAnswer(answer) {
        let html = "\t<answer>\n";
        html += `\t\t${answer}\n`;
        html += "\t</answer>\n";

        return html;
    }

    let html = '<?xml version="1.0" encoding="UTF-8"?>\n';
    html += '<quiz>\n';

    for(let i=0; i<input.length; i++) {
        if(i % 2 == 0) {
            html += drawQuestion(input[i]);
        } else {
            html += drawAnswer(input[i]);
        }
    }

    html += '</quiz>\n';

    console.log(html);
}
templating(["Who was the forty-second president of the U.S.A.?", "William Jefferson Clinton"]);