function score(arr) {
    let objArr = JSON.parse(arr);

    let html = `<table>\n`;
    html += `  <tr><th>name</th><th>score</th></tr>\n`;

    objArr
        .map((obj) => {
            html += `  <tr><td>${htmlizing(obj.name)}</td><td>${obj.score}</td></tr>\n`;
        });

    html += `</table>`;

    function htmlizing(text) {
        let map = {
            '"': '&quot;',
            '&': '&amp;',
            "'": '&#39;',
            '<': '&lt;',
            '>': '&gt;'
        }
        return text.replace(/["&'<>]/g, ch => map[ch]);
    }

    console.log(html);
}
score(['[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]']);