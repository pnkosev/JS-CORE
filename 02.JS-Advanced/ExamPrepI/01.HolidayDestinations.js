function addDestination() {
    // let divInput = $('#input').children();
    // let city = divInput[1].value;
    // let country = divInput[3].value;
    let season = $('#seasons option:selected').text();
    let inputs = $('input.inputData');
    let city = inputs[0].value;
    let country = inputs[1].value;
    let summerInput = $('#summer');
    let autumnInput = $('#autumn');
    let winterInput = $('#winter');
    let springInput = $('#spring');

    if (city != "" && country != "") {
        let tr = $('<tr>')
            .append($('<td>').text(`${city}, ${country}`))
            .append($('<td>').text(season));

        tr.appendTo($('#destinations'));
        inputs[0].value = "";
        inputs[1].value = "";

        switch (season) {
            case "Summer":
                summerInput.val(+summerInput.val() + 1)
                break;
            case "Autumn":
                autumnInput.val(+autumnInput.val() + 1)
                break;
            case "Winter":
                winterInput.val(+winterInput.val() + 1)
                break;
            case "Spring":
                springInput.val(+springInput.val() + 1)
                break;
        }
    }
    // if (season === "autumn") {
    //     autumnInput.val(+ autumnInput.val() + 1);
    // }
    
}