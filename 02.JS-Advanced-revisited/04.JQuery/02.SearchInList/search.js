function search() {
    let searchedText = $('#searchText').val();

    let matches = $(`#towns li:contains('${searchedText}')`);
    $('#towns li').css('font-weight', '');
    matches.css('font-weight', 'bold');
    // let matches = $('#towns li')
    //     .css('font-weight', '')
    //     .filter((i, e) => $(e).text().toLowerCase().startsWith(searchedText) && $(e).text() === '')
    //     .css('font-weight', 'bold');

    $('#result').text(`${matches.length} matches found.`);
}
