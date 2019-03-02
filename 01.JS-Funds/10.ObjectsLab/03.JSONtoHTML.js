function jsonToHTML(input) {
    let objArr = JSON.parse(input);

    let html = '<table>\n';
    html += '  <tr>';
    Object.keys(objArr[0]).forEach(k => html += `<th>${k}</th>`);
    html += '</tr>\n';

    for (let obj of objArr) {
        html += '  <tr>';
        Object.keys(obj).forEach(k => html += `<td>${htmlEscape(obj[k].toString())}</td>`);
        html += '</tr>\n';
    }

    html += '</table>';

    console.log(html);

    function htmlEscape(text) {
        let map = {
            '"' : '&quot;',
            '&' : '&amp;',
            "'": '&#39;',
            '<': '&lt;',
            '>': '&gt;'
        };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}
jsonToHTML(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);