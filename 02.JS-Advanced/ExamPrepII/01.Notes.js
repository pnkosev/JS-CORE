function addSticker() {
    let title = $('input.title');
    let text = $('input.content');
    let ul = $('#sticker-list');

    if (title.val() !== "" && text.val() !== "") {
        let li = $('<li class="note-content">');
        let closeBtn = $('<a class="button">x</a>').on('click', function () {$(this).parent().remove()});
        closeBtn.appendTo(li);
        $('<h2>' + title.val() + '</h2>').appendTo(li);
        $('<hr>').appendTo(li);
        $('<p>' + text.val() + '</p>').appendTo(li);
        $('</li>').appendTo(li);
        li.appendTo(ul);
        title.val("");
        text.val("");
    }
}