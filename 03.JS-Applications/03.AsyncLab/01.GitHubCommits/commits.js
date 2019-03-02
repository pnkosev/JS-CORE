function loadCommits() {
    $('#commits').empty();

    let baseUrl = "https://api.github.com/repos/";
    let url = baseUrl + $('#username').val() + '/' + $('#repo').val() + '/' + 'commits';

    $.get(url)
        .then(displayCommits)
        .catch(handelError);

    function displayCommits(data) {
        data.forEach((commit) => {
            $('#commits').append($('<li>').text(`${commit.commit.author.name}: ${commit.commit.message}`));
        });
    }

    function handelError(err) {
        $('#commits').append($('<li>').text(`Error: ${err.status} (${err.statusText}))`));
    }
}