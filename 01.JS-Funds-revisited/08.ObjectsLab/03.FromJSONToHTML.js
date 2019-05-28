function solve(data) {
    let objArr = JSON.parse(data);
    let result = `<table>\n`;
    let objKeys = Object.keys(objArr[0]);

    result += `\t<tr>`;
    objKeys.forEach(key => {
        result += `<th>${key}</th>`;
    });
    result += `</tr>\n`;

    objArr.forEach(obj => {
        result += `\t<tr>`;
        Object.keys(obj).forEach(key => {
            result += `<th>${escapeChars((obj[key]).toString())}</th>`;
        });
        result += `</tr>\n`;
    });

    result += `</table>\n`;
    console.log(result);

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
}

solve(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);
solve(['[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"}, {"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]']);