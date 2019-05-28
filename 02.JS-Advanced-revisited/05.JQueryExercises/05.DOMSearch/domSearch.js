function domSearch(selector, isCaseSensitive) {
    let addControlsDiv = $(`
        <div class="add-controls">
            <label>Enter text:</label>
            <input>
            <a class="button">Add</a>
        </div>
    `);

    let searchControlsDiv = $(`
        <div class="search-controls">
            <label>Search:</label>
            <input>
        </div>
    `);

    let resultControlsDiv = $(`
        <div class="result-controls">
            <ul class="items-list">
            </ul>
        </div>
    `);

    addControlsDiv.appendTo($(selector));
    searchControlsDiv.appendTo($(selector));
    resultControlsDiv.appendTo($(selector));

    let addBtn = addControlsDiv.find('a:contains("Add")');
    addBtn.click(addItem);

    function addItem() {
        let itemValue = addControlsDiv.find('input').val();

        let li = $(`
            <li class="list-item">
                <a class="button">X</a>
                <strong>${itemValue}</strong>
            </li>
        `);

        let deleteBtn = $(li).find('a:contains("X")');
        deleteBtn.click(deleteItem);
        li.appendTo($('.items-list'));
        addControlsDiv.find('input').val('');
    }

    function deleteItem() {
        $(this).parent().remove();
    }

    searchControlsDiv.find('input').on('input', search);

    function search() {
        let searchValue = $(this).val();

        let lis = $('ul.items-list li');
        lis.css('display', 'block');
        let missMathes 
        if (isCaseSensitive) {
            missMathes = lis.find('strong').filter((i, e) => !$(e).text().includes(searchValue));
        } else {
            missMathes = lis.find('strong').filter((i, e) => !$(e).text().toLowerCase().includes(searchValue.toLowerCase()));
        }
        missMathes.parent().css('display', 'none');
    }
}

// function domSearch(selector, isCaseSensitive) {

//     let element = $(selector);

//     let addDiv = $("<div class='add-controls'>")
//         .append($("<label>Enter text:<input id='input'></label>"))
//         .append($("<a class='button'>Add</a>")
//             .on('click', addText));

//     let searchDiv = $("<div class='search-controls'>")
//         .append($("<label>Search:</label>")
//             .append($("<input id='searched'>")
//                 .on('input', searchText)));

//     let resultDiv = $("<div class='result-controls'>")
//         .append($("<ul class='items-list'></ul>"));

//     element.append(addDiv);
//     element.append(searchDiv);
//     element.append(resultDiv);

//     function addText() {
//         let text = $("#input").val();

//         let li = $("<li>")
//             .addClass('list-item')
//             .append($("<a>")
//                 .addClass('button')
//                 .text('X')
//                 .on('click', function () {
//                     $(this).parent().remove()
//                 }))
//             .append($('<strong>')
//                 .text(text));

//         $(".items-list").append(li);
//         $("#input").val("");
//     }

//     function searchText() {
//         let searched = $("#searched").val();

//         if (searched === undefined) {
//             searched = "";
//         }

//         let list = $(".items-list").children();

//         for (let li of list) {
//             let curLi = li.textContent.slice(1);
//             let isMatched = isCaseSensitive ?
//                 curLi.match(searched) :
//                 curLi.toLowerCase().match(searched);

//             let displayValue = isMatched ?
//                 'block' :
//                 'none';

//             $(li).css('display', displayValue)
//         }
//     }
// }