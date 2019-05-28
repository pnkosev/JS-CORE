function extractText() {
    let content = $('#items li').toArray().map(el => $(el).text()).join(', ');
    $('#result').text(content);
}
