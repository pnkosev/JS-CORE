function multiplicationTable(num) {
    let html = "";
    html += '<table border="1">\n';
    html += '\t<tr><th>x</th>';

    for (let i = 1; i <= num; i++) {
        html += `<th>${i}</th>`;
    }

    html += '</tr>\n';

    for (let row = 1; row <= num; row++) {
        html += `\t<tr><th>${row}</th>`

        for (let col = 1; col <= num; col++) {
            html += `<td>${row * col}</td>`;
        }
        html += '</tr>\n';
    }
    html += '</table>\n';

    console.log(html);
}
multiplicationTable(5);