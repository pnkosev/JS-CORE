function increment(string) {
    let textArea = $('<textarea>');
    textArea.addClass('counter');
    textArea.val(0);
    textArea.attr('disabled', true);

    let incrementBtn = $('<button>Increment</button>');
    incrementBtn.addClass('btn');
    incrementBtn.attr('id', 'incrementBtn');

    let addBtn = $('<button>Add</button>');
    addBtn.addClass('btn');
    addBtn.attr('id', 'addBtn');

    let list = $('<ul>');
    list.addClass('results');

    let div = $(string);

    div.append(textArea);
    div.append(incrementBtn);
    div.append(addBtn);
    div.append(list);

    $('#incrementBtn').on('click', function () {
        textArea.val(+textArea.val() + 1);
    });

    $('#addBtn').on('click', function () {
        let li = $(`<li>${textArea.val()}</li>`);
        list.append(li);
    });
}