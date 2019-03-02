function search() {
    let text = $('#searchText').val();
    let towns = $('#towns li').toArray();
    let matches = 0;

    for (let town of towns) {
        if (town.textContent.indexOf(text) != -1) {
            $(town).css('font-weight', 'bold');
            matches++;
        } else {
            $(town).css('font-weight', '');
        }
    }

    $('#result').text(matches + ' matches found.');

}