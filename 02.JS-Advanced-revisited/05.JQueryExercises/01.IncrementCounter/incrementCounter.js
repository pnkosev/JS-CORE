function increment(selector) {
    /*
    •	<textarea> with class="counter", value="0" and the disabled attribute.
    •	<button> with class="btn", id="incrementBtn" and text "Increment".
    •	<button> with class="btn", id="addBtn" and text "Add".
    •	Unordered list <ul> with class="results".
    */

    let html = $(`
        <textarea class="counter" value="0" disabled="true" />
        <button class="btn" id="incrementBtn">Increment</button>
        <button class="btn" id="addBtn">Add</button>
        <ul class="results"></ul>
    `);
    html.appendTo($(selector));

    $('#incrementBtn').on('click', increment);
    $('#addBtn').on('click', add);

    function increment() {
        $('.counter').val(+$('.counter').val() + 1);
    }

    function add() {
        let li = $(`
            <li>${$('.counter').val()}</li>
        `);
        li.appendTo($('.results'));
    }
}
