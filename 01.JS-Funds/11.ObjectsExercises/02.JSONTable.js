function jsonTable(input) {
    let html = "<table>\n";

    for (let line of input) {
        let data = JSON.parse(line);
        html += "    <tr>\n";
        html += `        <td>${data.name}</td>\n`
        html += `        <td>${data.position}</td>\n`
        html += `        <td>${data.salary}</td>\n`
        html += "    </tr>\n"
    }
    html += "</table>";

    //function htmlEscape(text) {
    //     let map = { '"': '&quot;', '&': '&amp;',
    //         "'": '&#39;', '<': '&lt;', '>': '&gt;' };
    //     return text.replace(/[\"&'<>]/g, ch => map[ch]);
    // }

    console.log(html);
}
jsonTable([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
]);