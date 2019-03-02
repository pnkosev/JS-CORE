function jsonHTML(arr) {
    let objArr = JSON.parse(arr);

    let html = `<table>\n`;

    let keys = Object.keys(objArr[0]);
    let values = [...objArr];

    html += `  <tr>`;
    keys
        .forEach((key) => {
            html += `<th>${key}</th>`;
        });

    html += `</tr>\n`;


    values
        .forEach((item) => {
            html += `  <tr>`;
            Object.keys(item)
                .forEach((key) => {
                    html += `<td>${htmlizing(item[key])}</td>`;
                });
            html += `</tr>\n`;
        });

    html += `</table>`;

    function htmlizing(text) {
        let map = {
            '"' : '&quot;',
            '&' : '&amp;',
            "'": '&#39;',
            '<': '&lt;',
            '>': '&gt;'
        };
        return text.replace(/["&'<>]/g, c => map[c]);
    }
    console.log(html);
}
jsonHTML(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);