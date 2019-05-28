function solve(data) {
    let objArr = JSON.parse(data);

    let result = '<table>\n';
    result += `\t<tr><th>name</th><th>score</th></tr>\n`;

    objArr.forEach(obj => {
        result += `\t<tr><td>${escapeChars(obj.name)}</td><td>${obj.score}</td></tr>\n`;
    });

    result += '</table>\n';

    function escapeChars(str) {
        let map = {
            '"': '&quot;',
            '&': '&amp;',
            "'": '&#39;',
            '<': '&lt;',
            '>': '&gt;'
        };
        return str.replace(/[\"&'<>]/g, ch => map[ch]);
    }

    console.log(result);
}

solve(['[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]']);
solve(['[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]']);