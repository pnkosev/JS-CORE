function solve(arr) {
    let escapeHTML = (str) => {
        let map = {
            '"': '&quot;',
            '&': '&amp;',
            "'": '&#39;',
            '<': '&lt;',
            '>': '&gt;'
        };
        return str.replace(/[\"&'<>]/g, ch => map[ch]);
    }

    let obj = arr
        .reduce((acc, cur) => {
            cur = JSON.parse(cur);
            acc.push(cur);
            return acc;
        }, []);

    let result = '<table>\n';
    obj.forEach(person => {
        result += '\t<tr>\n';
        result += `\t<td>${escapeHTML(person.name)}</td>\n`;
        result += `\t<td>${escapeHTML(person.position)}</td>\n`;
        result += `\t<td>${escapeHTML(person.salary.toString())}</td>\n`;
        result += `\t</tr>\n`;
    });
    result += '</table>\n';

    console.log(result);
}

solve([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
]);