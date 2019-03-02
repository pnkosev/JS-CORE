function domSearch(selector, isCaseSensitive) {

    let element = $(selector);

    let addDiv = $("<div class='add-controls'>")
        .append($("<label>Enter text:<input id='input'></label>"))
        .append($("<a class='button'>Add</a>")
            .on('click', addText));

    let searchDiv = $("<div class='search-controls'>")
        .append($("<label>Search:</label>")
            .append($("<input id='searched'>")
                .on('input', searchText)));

    let resultDiv = $("<div class='result-controls'>")
        .append($("<ul class='items-list'></ul>"));

    element.append(addDiv);
    element.append(searchDiv);
    element.append(resultDiv);

    function addText() {
        let text = $("#input").val();

        let li = $("<li>")
            .addClass('list-item')
            .append($("<a>")
                .addClass('button')
                .text('X')
                .on('click', function () {
                    $(this).parent().remove()
                }))
            .append($('<strong>')
                .text(text));

        $(".items-list").append(li);
        $("#input").val("");
    }

    function searchText() {
        let searched = $("#searched").val();

        if (searched === undefined) {
            searched = "";
        }

        let list = $(".items-list").children();

        for (let li of list) {
            let curLi = li.textContent.slice(1);
            let isMatched = isCaseSensitive ?
                curLi.match(searched) :
                curLi.toLowerCase().match(searched);

            let displayValue = isMatched ?
                'block' :
                'none';

            $(li).css('display', displayValue)
        }
    }
}

// function domSearch(selector, isCaseSensitive) {
//     // Result
//     let listItems = $('<ul>')
//         .addClass('items-list');

//     let resultClontainer = $('<div>')
//         .addClass('result-controls')
//         .append(listItems)

//     // Add
//     let addInputBox = $('<input>');
//     let addContainer = $('<div>')
//         .addClass('add-controls')
//         .append($('<label>')
//             .text('Enter text:')
//             .append(addInputBox))
//         .append($('<a>')
//             .addClass('button')
//             .css('display', 'inline-block')
//             .text('Add')
//             .on('click', function () {
//                 // Input validation
//                 let text = addInputBox.val().trim();
//                 if (text === '' || text.length === 0) {
//                     return;
//                 }

//                 // Item creation
//                 listItems.append($('<li>')
//                     .addClass('list-item')
//                     .append($('<a>') // Delete Button
//                         .addClass('button')
//                         .text('X')
//                         .on('click', function () {
//                             $(this).parent().remove()
//                         }))
//                     .append($('<strong>') // Item Text
//                         .text(text)));
//             }));

//     // Search
//     let searchInputBox = $('<input>');
//     let searchContainer = $('<div>')
//         .addClass('search-controls')
//         .append($('<label>')
//             .text('Search:')
//             .append(searchInputBox)
//             .on('change keyup paste cut', processSearch));

//     $(selector)
//         .append(addContainer)
//         .append(searchContainer)
//         .append(resultClontainer);

//     function processSearch() {
//         let key = isCaseSensitive ?
//             searchInputBox.val() :
//             searchInputBox.val().toLowerCase();

//         let children = listItems.children();

//         if (key === '') {
//             children.css('display', 'block');
//         } else {

//             for (let i = 0; i < children.length; i++) {
//                 let isMatched = isCaseSensitive ?
//                     children[i].textContent.includes(key) :
//                     children[i].textContent.toLowerCase().includes(key);

//                 let displayValue = isMatched ?
//                     'block' :
//                     'none';

//                 $(children[i]).css('display', displayValue);
//             }
//         }
//     }
// }

// function domSearch(selector, isCaseSensitive) {
//     $(selector).append($('<div>').addClass('add-controls').append($('<label>').text("Enter text: ").append($('<input>')))
//         .append($('<a>').addClass('button').text('Add').on('click', addItem)));

//     $(selector).append($('<div>').addClass('search-controls').append($('<label>').text("Search:").append($('<input>').on('input', search))));

//     $(selector).append($('<div>').addClass('result-controls').append($('<ul>').addClass('items-list')));

//     function addItem() {
//         let text = $('.add-controls label input').val();
//         $('.items-list').append($('<li>').addClass('list-item').append($('<a>').addClass('button').text('X').on('click', deleteItem)).append($('<strong>').text(text)));
//         $('.add-controls label input').val("");
//     }

//     function deleteItem() {
//         $(this).parent().remove();
//     }

//     function search() {
//         let text = $(this).val();

//         $('.list-item').each((index, li) => matches(li, text))
//     }

//     function matches(li, text) {
//         $(li).css('display', 'inline-block');
//         if (isCaseSensitive) {
//             if ($(li).find('strong').text().indexOf(text) == -1) {
//                 $(li).css('display', 'none');
//             }
//         } else {
//             if ($(li).find('strong').text().toLowerCase().indexOf(text.toLowerCase()) == -1) {
//                 $(li).css('display', 'none');
//             }
//         }
//     }
// }