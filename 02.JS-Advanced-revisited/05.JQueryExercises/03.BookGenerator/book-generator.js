let createBook;

createBook = (function createBook() {
    let id = 1;
    return function generate(selector, title, author, isbn) {
        let div = $(`
            <div class=book${id}>
                <p class="title">${title}</p>
                <p class="author">${author}</p>
                <p class="isbn">${isbn}</p>
                <button>Select</button>
                <button>Deselect</button>
            </div>
        `);
        div.appendTo($(selector));
        let selectBtn = $(`div[class="book${id}"]`).find('button:contains("Select")');
        let deselectBtn = $(`div[class="book${id}"]`).find('button:contains("Deselect")');
        $(selectBtn).on('click', select);
        $(deselectBtn).on('click', deselect);
        id ++;
    };

    function select() {
        $(this).parent().css('border', '2px solid blue');
    }

    function deselect() {
        $(this).parent().css('border', '');
    }
}());
